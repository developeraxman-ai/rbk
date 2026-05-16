import { dummyEventMedia } from "@/lib/dummy-event-media";
import { connectToDatabase } from "@/lib/db";
import { defaultSiteMedia, resolveSiteMediaMap, siteMediaFields } from "@/lib/site-media";
import SiteSettings from "@/models/SiteSettings";

const fallbackMedia = {
  ...defaultSiteMedia,
  homeHeroVideo: process.env.NEXT_PUBLIC_HERO_VIDEO_URL || defaultSiteMedia.homeHeroVideo,
};

const fallbackSettings = {
  key: "site",
  heroVideoUrl: fallbackMedia.homeHeroVideo,
  heroPosterUrl: fallbackMedia.homeHeroPoster,
  heroEyebrow: "Celebration & Function Organisation",
  heroTitle: "Elegant celebrations, designed with care.",
  heroDescription:
    "RBK Events plans ceremonies, receptions, engagements, haldi-mehendi functions, birthday parties, naming ceremonies, anniversaries, private celebrations, and corporate events with decor, coordination, and photo/video coverage.",
  media: fallbackMedia,
};

export function isSiteSettingsDatabaseConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

function serializeSettings(settings) {
  const mergedSettings = {
    ...fallbackSettings,
    ...settings,
  };
  const media = resolveSiteMediaMap(mergedSettings);

  return {
    ...mergedSettings,
    heroVideoUrl: mergedSettings.heroVideoUrl || media.homeHeroVideo || dummyEventMedia.heroVideo,
    heroPosterUrl: mergedSettings.heroPosterUrl || media.homeHeroPoster || dummyEventMedia.ceremonyStage,
    media,
    _id: settings?._id?.toString?.() || settings?._id,
    updatedAt: settings?.updatedAt ? new Date(settings.updatedAt).toISOString() : null,
    createdAt: settings?.createdAt ? new Date(settings.createdAt).toISOString() : null,
  };
}

function sanitizeMedia(media = {}) {
  return Object.fromEntries(
    siteMediaFields.map((field) => [field.key, media[field.key] || ""])
  );
}

export async function getSiteSettings() {
  if (!isSiteSettingsDatabaseConfigured()) {
    return serializeSettings(fallbackSettings);
  }

  try {
    await connectToDatabase();
    const settings = await SiteSettings.findOne({ key: "site" }).lean();
    return serializeSettings(settings || fallbackSettings);
  } catch (error) {
    console.error("Failed to load site settings:", error);
    return serializeSettings(fallbackSettings);
  }
}

export async function updateSiteSettings(payload) {
  await connectToDatabase();

  const media = sanitizeMedia(payload.media);
  const heroVideoUrl = payload.heroVideoUrl || media.homeHeroVideo || "";
  const heroPosterUrl = payload.heroPosterUrl || media.homeHeroPoster || "";

  const settings = await SiteSettings.findOneAndUpdate(
    { key: "site" },
    {
      $set: {
        key: "site",
        heroVideoUrl,
        heroPosterUrl,
        heroEyebrow: payload.heroEyebrow || fallbackSettings.heroEyebrow,
        heroTitle: payload.heroTitle || fallbackSettings.heroTitle,
        heroDescription: payload.heroDescription || fallbackSettings.heroDescription,
        media: {
          ...media,
          homeHeroVideo: heroVideoUrl,
          homeHeroPoster: heroPosterUrl,
        },
      },
    },
    { new: true, upsert: true, runValidators: true }
  ).lean();

  return serializeSettings(settings);
}
