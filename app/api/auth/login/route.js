import { NextResponse } from "next/server";

import { comparePassword, createJwtToken, hashPassword, setAuthCookie } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { loginSchema } from "@/lib/validators";
import User from "@/models/User";

async function ensureBootstrapAdmin(email, password) {
  const usersCount = await User.countDocuments();
  const seedEmail = process.env.ADMIN_EMAIL;
  const seedPassword = process.env.ADMIN_PASSWORD;

  if (usersCount > 0 || !seedEmail || !seedPassword) {
    return;
  }

  if (email !== seedEmail || password !== seedPassword) {
    return;
  }

  await User.create({
    email: seedEmail.toLowerCase(),
    password: await hashPassword(seedPassword),
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 400 });
    }

    await connectToDatabase();
    await ensureBootstrapAdmin(parsed.data.email.toLowerCase(), parsed.data.password);

    const user = await User.findOne({ email: parsed.data.email.toLowerCase() });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const isValid = await comparePassword(parsed.data.password, user.password);

    if (!isValid) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const token = createJwtToken({
      email: user.email,
      id: user._id.toString(),
      role: "admin",
    });

    await setAuthCookie(token);

    return NextResponse.json({
      success: true,
      user: {
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login failed:", error);
    return NextResponse.json(
      {
        error:
          error.message === "MONGODB_URI is not defined."
            ? "Configure MongoDB before signing in."
            : "Unable to sign in right now.",
      },
      { status: 500 }
    );
  }
}
