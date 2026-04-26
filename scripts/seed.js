import process from "node:process";

import bcrypt from "bcryptjs";
import { connectToDatabase } from "../lib/db.js";
import { demoProjects } from "../lib/demo-content.js";
import Project from "../models/Project.js";
import User from "../models/User.js";

process.loadEnvFile?.(".env.local");
process.loadEnvFile?.(".env");

async function seed() {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD before running the seed script.");
  }

  await connectToDatabase();

  const existingUser = await User.findOne({ email: adminEmail.toLowerCase() });

  if (!existingUser) {
    await User.create({
      email: adminEmail.toLowerCase(),
      password: await bcrypt.hash(adminPassword, 10),
    });
  }

  await Promise.all(
    demoProjects.map(async (project) => {
      await Project.updateOne(
        { slug: project.slug },
        {
          $set: {
            title: project.title,
            slug: project.slug,
            description: project.description,
            category: project.category,
            coverImage: project.coverImage,
            media: project.media,
            clientName: project.clientName,
            featured: project.featured,
          },
        },
        { upsert: true }
      );
    })
  );

  console.log("Seed completed.");
  process.exit(0);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
