import { NextResponse } from "next/server";

import { createProjectRecord, getPublicProjects, isDatabaseConfigured } from "@/lib/project-service";
import { projectSchema } from "@/lib/validators";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  try {
    const projects = await getPublicProjects({
      category: searchParams.get("category") || undefined,
      featured: searchParams.get("featured") === "true",
    });

    return NextResponse.json({ projects });
  } catch (error) {
    console.error("Failed to list projects:", error);
    return NextResponse.json({ error: "Unable to load projects." }, { status: 500 });
  }
}

export async function POST(request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Configure MongoDB before creating projects." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const parsed = projectSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid project payload." }, { status: 400 });
    }

    const project = await createProjectRecord(parsed.data);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error) {
    console.error("Failed to create project:", error);
    return NextResponse.json({ error: "Unable to create project." }, { status: 500 });
  }
}
