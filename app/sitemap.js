import { getPublicEvents } from "@/lib/event-service";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const events = await getPublicEvents();
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/events", priority: 0.95, changeFrequency: "weekly" },
    { path: "/about", priority: 0.72, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.78, changeFrequency: "monthly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...events.map((event) => ({
      url: absoluteUrl(`/events/${event.slug}`),
      lastModified: event.updatedAt ? new Date(event.updatedAt) : now,
      changeFrequency: "monthly",
      priority: event.featured ? 0.86 : 0.74,
    })),
  ];
}
