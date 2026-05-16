import { NextResponse } from "next/server";

import {
  createEventRecord,
  getPublicEvents,
  isEventDatabaseConfigured,
} from "@/lib/event-service";
import { eventSchema } from "@/lib/validators";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  try {
    const events = await getPublicEvents({
      category: searchParams.get("category") || undefined,
      featured: searchParams.get("featured") === "true",
    });

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Failed to list events:", error);
    return NextResponse.json({ error: "Unable to load events." }, { status: 500 });
  }
}

export async function POST(request) {
  if (!isEventDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Configure MongoDB before creating events." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const parsed = eventSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid event payload." }, { status: 400 });
    }

    const event = await createEventRecord(parsed.data);
    return NextResponse.json({ event }, { status: 201 });
  } catch (error) {
    console.error("Failed to create event:", error);
    return NextResponse.json({ error: "Unable to create event." }, { status: 500 });
  }
}
