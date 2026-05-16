import EventMedia from "@/components/EventMedia";
import EventsFilterGrid from "@/components/EventsFilterGrid";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Badge } from "@/components/ui/badge";
import { dummyEventMedia } from "@/lib/dummy-event-media";
import { getPublicEvents } from "@/lib/event-service";
import { getSeoImage } from "@/lib/seo";
import { resolveSiteMediaMap } from "@/lib/site-media";
import { getSiteSettings } from "@/lib/site-settings-service";

export const metadata = {
  title: "Events",
  description:
    "Explore RBK Events function galleries with ceremonies, receptions, engagements, haldi, mehendi, sangeet evenings, birthday parties, corporate events, photos, and videos.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events | RBK Events",
    description:
      "Dedicated galleries for RBK Events celebrations, birthday parties, corporate events, decor, photos, and videos.",
    url: "/events",
    siteName: "RBK Events",
    images: [{ url: getSeoImage(dummyEventMedia.receptionCouple), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | RBK Events",
    description: "Dedicated galleries for RBK Events celebrations, birthday parties, and corporate events.",
    images: [getSeoImage(dummyEventMedia.receptionCouple)],
  },
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const [events, siteSettings] = await Promise.all([getPublicEvents(), getSiteSettings()]);
  const siteMedia = resolveSiteMediaMap(siteSettings);
  const heroEvent = events[0];

  return (
    <div className="pb-4">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <EventMedia
            src={heroEvent?.coverMedia || siteMedia.eventsHeroFallback}
            alt={heroEvent?.title || "RBK Events"}
            autoPlay
            loop
            muted
            priority
            className="h-full w-full"
            mediaClassName="opacity-42"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,61,53,0.36)_0%,rgba(23,61,53,0.72)_48%,rgba(23,61,53,0.96)_100%)] sm:bg-[linear-gradient(90deg,rgba(23,61,53,0.92)_0%,rgba(23,61,53,0.76)_45%,rgba(23,61,53,0.46)_100%)]" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="relative mx-auto grid min-h-[68svh] max-w-7xl content-end gap-8 px-4 py-12 sm:min-h-[72vh] sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-5">
            <Badge>Events</Badge>
            <h1 className="text-balance font-heading text-5xl leading-[0.96] text-white sm:text-7xl">
              Celebrations organised by RBK Events.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
              Explore ceremonies, receptions, engagements, birthday functions, traditional
              celebrations, birthday parties, rituals, anniversaries, and corporate events. Click any event
              to open its dedicated gallery with the photos, videos, and memories from that moment.
            </p>
          </div>

          <div className="self-end rounded-lg border border-[#fffaf2]/16 bg-[#fffaf2]/12 p-5 text-[#fffaf2] backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f0c6a9]">Function Library</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-md border border-[#fffaf2]/14 bg-[#fffaf2]/10 p-4">
                <p className="font-heading text-4xl text-[#fffaf2]">{events.length}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#fffaf2]/65">Functions</p>
              </div>
              <div className="rounded-md border border-[#fffaf2]/14 bg-[#fffaf2]/10 p-4">
                <p className="font-heading text-4xl text-[#fffaf2]">
                  {events.filter((event) => event.featured).length}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#fffaf2]/65">Featured</p>
              </div>
              <div className="rounded-md border border-[#fffaf2]/14 bg-[#fffaf2]/10 p-4">
                <p className="font-heading text-4xl text-[#fffaf2]">
                  {new Set(events.map((event) => event.category)).size}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#fffaf2]/65">Types</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <EventsFilterGrid events={events} />
      </section>

      <WhatsAppCTA />
    </div>
  );
}
