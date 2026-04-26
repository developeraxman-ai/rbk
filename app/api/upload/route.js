import { NextResponse } from "next/server";

import { uploadBufferToCloudinary } from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files");

    if (!files.length) {
      return NextResponse.json({ error: "No files provided." }, { status: 400 });
    }

    const uploads = await Promise.all(
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const result = await uploadBufferToCloudinary(buffer, {
          public_id: `${Date.now()}-${file.name.replace(/\.[^/.]+$/, "")}`,
        });

        return {
          url: result.secure_url,
          resourceType: result.resource_type,
          publicId: result.public_id,
        };
      })
    );

    return NextResponse.json({
      files: uploads,
      file: uploads[0],
    });
  } catch (error) {
    console.error("Cloudinary upload failed:", error);
    return NextResponse.json(
      { error: "Unable to upload media. Check Cloudinary configuration." },
      { status: 500 }
    );
  }
}
