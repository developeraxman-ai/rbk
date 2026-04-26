import { NextResponse } from "next/server";

import {
  deleteProjectRecord,
  getProjectById,
  isDatabaseConfigured,
  updateProjectRecord,
} from "@/lib/project-service";
import { projectSchema } from "@/lib/validators";

export async function GET(_, { params }) {
  try {
    const project = await getProjectById(params.id);

    if (!project) {
      return NextResponse.json({ error: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Failed to load project:", error);
    return NextResponse.json({ error: "Unable to load project." }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Configure MongoDB before updating projects." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const parsed = projectSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid project payload." }, { status: 400 });
    }

    const project = await updateProjectRecord(params.id, parsed.data);

    if (!project) {
      return NextResponse.json({ error: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({ project });
  } catch (error) {
    console.error("Failed to update project:", error);
    return NextResponse.json({ error: "Unable to update project." }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Configure MongoDB before deleting projects." },
      { status: 500 }
    );
  }

  try {
    const project = await deleteProjectRecord(params.id);

    if (!project) {
      return NextResponse.json({ error: "Project not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete project:", error);
    return NextResponse.json({ error: "Unable to delete project." }, { status: 500 });
  }
}
