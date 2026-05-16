import { dummyEventMedia } from "@/lib/dummy-event-media";
import { pdfGallery } from "@/lib/profile-content";

export const siteMediaFields = [
  {
    key: "brandLogo",
    label: "Brand Logo",
    group: "Global",
    type: "image",
    defaultSrc: "/rbk/rbk-events-logo.svg",
    description: "Used in the public navbar and admin sidebar.",
  },
  {
    key: "siteSeoImage",
    label: "Default Social Share Image",
    group: "Global",
    type: "image",
    defaultSrc: dummyEventMedia.ceremonyStage,
    description: "Fallback image for previews and structured data.",
  },
  {
    key: "homeHeroVideo",
    label: "Home Hero Video",
    group: "Home",
    type: "video",
    defaultSrc: dummyEventMedia.heroVideo,
    legacyField: "heroVideoUrl",
    description: "Main video on the home page first screen.",
  },
  {
    key: "homeHeroPoster",
    label: "Home Hero Poster",
    group: "Home",
    type: "image",
    defaultSrc: dummyEventMedia.ceremonyStage,
    legacyField: "heroPosterUrl",
    description: "Fallback image while the home hero video loads.",
  },
  {
    key: "homeCraftImage",
    label: "Craft Section Photo",
    group: "Home",
    type: "image",
    defaultSrc: dummyEventMedia.haldiDetails,
    description: "Large photo in the celebration craft section.",
  },
  {
    key: "homeWhyChooseImage",
    label: "Why Choose Photo",
    group: "Home",
    type: "image",
    defaultSrc: dummyEventMedia.receptionCouple,
    description: "Large photo beside the why-choose copy.",
  },
  {
    key: "homeHighlightVideo",
    label: "Highlights Main Video",
    group: "Home",
    type: "video",
    defaultSrc: dummyEventMedia.heroVideo,
    description: "Large media tile in the highlights grid.",
  },
  {
    key: "homeHighlightStage",
    label: "Highlights Stage Photo",
    group: "Home",
    type: "image",
    defaultSrc: dummyEventMedia.ceremonyStage,
    description: "Stage/decor tile in the highlights grid.",
  },
  {
    key: "homeHighlightReception",
    label: "Highlights Reception Photo",
    group: "Home",
    type: "image",
    defaultSrc: dummyEventMedia.receptionCouple,
    description: "Reception tile in the highlights grid.",
  },
  {
    key: "homeHighlightEngagement",
    label: "Highlights Engagement Photo",
    group: "Home",
    type: "image",
    defaultSrc: dummyEventMedia.engagementPortrait,
    description: "Engagement tile in the highlights grid.",
  },
  {
    key: "homeHighlightGuests",
    label: "Highlights Guests Photo",
    group: "Home",
    type: "image",
    defaultSrc: dummyEventMedia.celebrationGuests,
    description: "Guest-gathering tile in the highlights grid.",
  },
  {
    key: "aboutHeroBackground",
    label: "About Hero Background",
    group: "About",
    type: "image",
    defaultSrc: dummyEventMedia.ceremonyStage,
    description: "Background image at the top of the About page.",
  },
  {
    key: "aboutFounderPortrait",
    label: "Founder Portrait",
    group: "About",
    type: "image",
    defaultSrc: pdfGallery.portraitSmile,
    description: "Large Raghavendra B Kolar portrait.",
  },
  {
    key: "aboutOnsetCamera",
    label: "Founder Camera Photo",
    group: "About",
    type: "image",
    defaultSrc: pdfGallery.onsetCamera,
    description: "Founder/on-set camera image in the About page.",
  },
  {
    key: "aboutCelebrityCollage",
    label: "Celebrity Collage",
    group: "About",
    type: "image",
    defaultSrc: pdfGallery.people,
    description: "Photo collage with cinema personalities and industry moments.",
  },
  {
    key: "aboutShowCampaigns",
    label: "Show Campaign Collage",
    group: "About",
    type: "image",
    defaultSrc: pdfGallery.campaigns,
    description: "Broadcast and show campaign visual on the About page.",
  },
  {
    key: "aboutFilmPublicity",
    label: "Film Publicity Collage",
    group: "About",
    type: "image",
    defaultSrc: pdfGallery.postersA,
    description: "Film publicity and poster visual on the About page.",
  },
  {
    key: "aboutStoryMain",
    label: "About Story Main Photo",
    group: "About",
    type: "image",
    defaultSrc: dummyEventMedia.receptionCouple,
    description: "Large story image in the About page.",
  },
  {
    key: "aboutStoryEngagement",
    label: "About Story Engagement Photo",
    group: "About",
    type: "image",
    defaultSrc: dummyEventMedia.engagementPortrait,
    description: "Small story image in the About page.",
  },
  {
    key: "aboutStoryHaldi",
    label: "About Story Haldi Photo",
    group: "About",
    type: "image",
    defaultSrc: dummyEventMedia.haldiDetails,
    description: "Small story image in the About page.",
  },
  {
    key: "eventsHeroFallback",
    label: "Events Hero Fallback",
    group: "Events",
    type: "image",
    defaultSrc: dummyEventMedia.receptionCouple,
    description: "Used on the Events page if no event cover is available.",
  },
  {
    key: "contactFeatureImage",
    label: "Contact Page Photo",
    group: "Contact",
    type: "image",
    defaultSrc: dummyEventMedia.ceremonyStage,
    description: "Large image beside the contact details.",
  },
];

export const defaultSiteMedia = Object.fromEntries(
  siteMediaFields.map((field) => [field.key, field.defaultSrc])
);

export const siteMediaGroups = siteMediaFields.reduce((groups, field) => {
  const current = groups[field.group] || [];
  return {
    ...groups,
    [field.group]: [...current, field],
  };
}, {});

function toPlainMedia(media) {
  if (!media) {
    return {};
  }

  if (media instanceof Map) {
    return Object.fromEntries(media);
  }

  if (typeof media.toObject === "function") {
    return media.toObject();
  }

  return media;
}

export function resolveSiteMediaMap(settings = {}) {
  const savedMedia = toPlainMedia(settings.media);

  return Object.fromEntries(
    siteMediaFields.map((field) => {
      const legacyValue = field.legacyField ? settings[field.legacyField] : "";
      return [field.key, savedMedia?.[field.key] || legacyValue || field.defaultSrc];
    })
  );
}

export function resolveSiteMedia(settings, key) {
  const media = resolveSiteMediaMap(settings);
  return media[key] || defaultSiteMedia[key] || "";
}
