import { demoProjects } from "@/lib/demo-content";
import { connectToDatabase } from "@/lib/db";
import { slugify } from "@/lib/utils";
import Project from "@/models/Project";

export function isDatabaseConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

function serializeProject(project) {
  return {
    ...project,
    _id: project._id?.toString?.() || project._id,
    createdAt: project.createdAt ? new Date(project.createdAt).toISOString() : null,
    updatedAt: project.updatedAt ? new Date(project.updatedAt).toISOString() : null,
  };
}

export async function getPublicProjects({ category, featured } = {}) {
  if (!isDatabaseConfigured()) {
    return demoProjects.filter((project) => {
      const matchesCategory = category ? project.category === category : true;
      const matchesFeatured = featured ? project.featured : true;
      return matchesCategory && matchesFeatured;
    });
  }

  try {
    await connectToDatabase();

    const filters = {};

    if (category) {
      filters.category = category;
    }

    if (featured) {
      filters.featured = true;
    }

    const projects = await Project.find(filters).sort({ createdAt: -1 }).lean();
    return projects.map(serializeProject);
  } catch (error) {
    console.error("Failed to load public projects:", error);
    return demoProjects;
  }
}

export async function getProjectBySlug(slug) {
  if (!isDatabaseConfigured()) {
    return demoProjects.find((project) => project.slug === slug) || null;
  }

  try {
    await connectToDatabase();
    const project = await Project.findOne({ slug }).lean();
    return project ? serializeProject(project) : null;
  } catch (error) {
    console.error("Failed to load project by slug:", error);
    return demoProjects.find((project) => project.slug === slug) || null;
  }
}

export async function getProjectById(id) {
  if (!isDatabaseConfigured()) {
    return demoProjects.find((project) => project._id === id) || null;
  }

  try {
    await connectToDatabase();
    const project = await Project.findById(id).lean();
    return project ? serializeProject(project) : null;
  } catch (error) {
    console.error("Failed to load project by id:", error);
    return demoProjects.find((project) => project._id === id) || null;
  }
}

export async function getAdminProjects() {
  return getPublicProjects();
}

export async function getDashboardSummary() {
  const projects = await getAdminProjects();
  const featuredProjects = projects.filter((project) => project.featured);
  const categories = ["event", "celebrity", "wedding", "commercial"].map((category) => ({
    category,
    count: projects.filter((project) => project.category === category).length,
  }));

  return {
    projectCount: projects.length,
    featuredCount: featuredProjects.length,
    latestProjects: projects.slice(0, 4),
    categories,
    usingDemoContent: !isDatabaseConfigured(),
  };
}

export async function createProjectRecord(payload) {
  await connectToDatabase();

  const slug = slugify(payload.title);
  const project = await Project.create({
    ...payload,
    slug,
    media: Array.from(new Set(payload.media || [])),
  });

  return serializeProject(project.toObject());
}

export async function updateProjectRecord(id, payload) {
  await connectToDatabase();

  const slug = slugify(payload.title);
  const project = await Project.findByIdAndUpdate(
    id,
    {
      ...payload,
      slug,
      media: Array.from(new Set(payload.media || [])),
    },
    { new: true, runValidators: true }
  ).lean();

  return project ? serializeProject(project) : null;
}

export async function deleteProjectRecord(id) {
  await connectToDatabase();
  return Project.findByIdAndDelete(id).lean();
}
