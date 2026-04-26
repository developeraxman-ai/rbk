import { NextResponse } from "next/server";

import { connectToDatabase } from "@/lib/db";
import { inquirySchema } from "@/lib/validators";
import Inquiry from "@/models/Inquiry";

export async function POST(request) {
  try {
    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Please complete all fields correctly." }, { status: 400 });
    }

    await connectToDatabase();

    await Inquiry.create({
      ...parsed.data,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to store inquiry:", error);
    return NextResponse.json(
      {
        error:
          error.message === "MONGODB_URI is not defined."
            ? "Configure MongoDB before storing inquiries."
            : "Unable to send message right now.",
      },
      { status: 500 }
    );
  }
}
