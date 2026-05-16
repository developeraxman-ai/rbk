import { NextResponse } from "next/server";

import {
  deleteEventRecord,
  getEventById,
  isEventDatabaseConfigured,
  updateEventRecord,
} from "@/lib/event-service";
import { eventSchema } from "@/lib/validators";

export async function GET(_, { params }) {
  const { id } = await params;

  try {
    const event = await getEventById(id);

    if (!event) {
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }

    return NextResponse.json({ event });
  } catch (error) {
    console.error("Failed to load event:", error);
    return NextResponse.json({ error: "Unable to load event." }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = await params;

  if (!isEventDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Configure MongoDB before updating events." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const parsed = eventSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid event payload." }, { status: 400 });
    }

    const event = await updateEventRecord(id, parsed.data);

    if (!event) {
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }

    return NextResponse.json({ event });
  } catch (error) {
    console.error("Failed to update event:", error);
    return NextResponse.json({ error: "Unable to update event." }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  const { id } = await params;

  if (!isEventDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Configure MongoDB before deleting events." },
      { status: 500 }
    );
  }

  try {
    const event = await deleteEventRecord(id);

    if (!event) {
      return NextResponse.json({ error: "Event not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to delete event:", error);
    return NextResponse.json({ error: "Unable to delete event." }, { status: 500 });
  }
}
