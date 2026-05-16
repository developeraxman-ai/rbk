import { dummyEventMedia } from "@/lib/dummy-event-media";
import { contactInfo, profileIdentity } from "@/lib/profile-content";
import { isVideoUrl } from "@/lib/utils";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://rbk-events.vercel.app").replace(
  /\/$/,
  ""
);

export function absoluteUrl(path = "/") {
  if (!path) {
    return siteUrl;
  }

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(path, `${siteUrl}/`).toString();
}

export function getSeoImage(media) {
  if (!media || isVideoUrl(media)) {
    return absoluteUrl(dummyEventMedia.ceremonyStage);
  }

  return absoluteUrl(media);
}

export function getEventSeoImage(event) {
  const media = [event?.coverMedia, ...(event?.media || [])].find((item) => item && !isVideoUrl(item));
  return getSeoImage(media);
}

function compact(value) {
  if (Array.isArray(value)) {
    return value.map(compact).filter((item) => item !== undefined && item !== null);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .map(([key, item]) => [key, compact(item)])
        .filter(([, item]) => {
          if (item === undefined || item === null) {
            return false;
          }

          if (Array.isArray(item) && item.length === 0) {
            return false;
          }

          return !(typeof item === "object" && !Array.isArray(item) && Object.keys(item).length === 0);
        })
    );
  }

  return value;
}

export function buildOrganizationJsonLd({ logo = "/rbk/rbk-events-logo.svg", image = dummyEventMedia.ceremonyStage } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": absoluteUrl("/#organization"),
    name: profileIdentity.brandName,
    url: absoluteUrl("/"),
    logo: absoluteUrl(logo),
    image: getSeoImage(image),
    description:
      "Premium celebration and function organisation with decor, stage, guest flow, photo, and video coverage.",
    telephone: contactInfo.phone,
    email: contactInfo.email,
    areaServed: ["Bengaluru", "Karnataka", "India"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactInfo.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Kannada", "Hindi"],
    },
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: profileIdentity.brandName,
    url: absoluteUrl("/"),
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  };
}

export function buildServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl("/#celebration-service"),
    name: "Celebration and function organisation",
    serviceType: "Event planning, decor, stage, guest flow, photography, and video coverage",
    provider: {
      "@id": absoluteUrl("/#organization"),
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "RBK Events services",
      itemListElement: [
        "Ceremonies and rituals",
        "Receptions",
        "Engagements",
        "Haldi and mehendi functions",
        "Sangeet evenings",
        "Birthday parties",
        "Corporate events",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };
}

export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function buildGalleryJsonLd(event) {
  const images = [event.coverMedia, ...(event.media || [])]
    .filter((item) => item && !isVideoUrl(item))
    .map(getSeoImage);

  return compact({
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": absoluteUrl(`/events/${event.slug}#gallery`),
    name: `${event.title} Gallery`,
    url: absoluteUrl(`/events/${event.slug}`),
    image: images,
    datePublished: event.createdAt,
    dateModified: event.updatedAt,
    mainEntityOfPage: absoluteUrl(`/events/${event.slug}`),
    publisher: {
      "@id": absoluteUrl("/#organization"),
    },
  });
}
