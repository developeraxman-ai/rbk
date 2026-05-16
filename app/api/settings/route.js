import { NextResponse } from "next/server";

import {
  getSiteSettings,
  isSiteSettingsDatabaseConfigured,
  updateSiteSettings,
} from "@/lib/site-settings-service";
import { siteSettingsSchema } from "@/lib/validators";

export async function GET() {
  try {
    const settings = await getSiteSettings();
    return NextResponse.json({ settings });
  } catch (error) {
    console.error("Failed to load settings:", error);
    return NextResponse.json({ error: "Unable to load settings." }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!isSiteSettingsDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Configure MongoDB before updating site settings." },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const parsed = siteSettingsSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid settings payload." }, { status: 400 });
    }

    const settings = await updateSiteSettings(parsed.data);
    return NextResponse.json({ settings });
  } catch (error) {
    console.error("Failed to update settings:", error);
    return NextResponse.json({ error: "Unable to update settings." }, { status: 500 });
  }
}
