import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, MessageCircle } from "lucide-react";

import EventGallery from "@/components/EventGallery";
import EventMedia from "@/components/EventMedia";
import EventTestimonials from "@/components/EventTestimonials";
import JsonLd from "@/components/JsonLd";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getEventCategoryLabel } from "@/lib/event-categories";
import { getEventBySlug } from "@/lib/event-service";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildGalleryJsonLd,
  getEventSeoImage,
} from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { getEventWhatsappHref } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} Gallery`,
    description: event.description,
    alternates: {
      canonical: `/events/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} Gallery | RBK Events`,
      description: event.description,
      url: absoluteUrl(`/events/${event.slug}`),
      siteName: "RBK Events",
      images: [{ url: getEventSeoImage(event), width: 1200, height: 630, alt: event.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} Gallery | RBK Events`,
      description: event.description,
      images: [getEventSeoImage(event)],
    },
  };
}

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const jsonLd = [
    buildGalleryJsonLd(event),
    buildBreadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Events", href: "/events" },
      { name: event.title, href: `/events/${event.slug}` },
    ]),
  ];

  return (
    <article className="pb-4">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <EventMedia
            src={event.coverMedia}
            alt={event.title}
            autoPlay
            loop
            muted
            priority
            className="h-full w-full"
            mediaClassName="opacity-46"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,61,53,0.36)_0%,rgba(23,61,53,0.74)_48%,rgba(23,61,53,0.96)_100%)] sm:bg-[linear-gradient(90deg,rgba(23,61,53,0.92)_0%,rgba(23,61,53,0.78)_46%,rgba(23,61,53,0.5)_100%)]" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-88px)] max-w-7xl content-end gap-9 px-4 py-12 sm:min-h-[78vh] sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <Button asChild variant="ghost" className="px-0 text-white/72 hover:bg-transparent hover:text-white">
              <Link href="/events">
                <ArrowLeft className="h-4 w-4" />
                All Functions
              </Link>
            </Button>
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge>{getEventCategoryLabel(event.category)}</Badge>
                {event.featured ? <Badge variant="outline">Featured</Badge> : null}
              </div>
              <h1 className="text-balance font-heading text-5xl leading-[0.96] text-white sm:text-7xl">
                {event.title}
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
                {event.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href={getEventWhatsappHref(event.title)} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Book Similar Function
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#fffaf2]/24 bg-[#fffaf2]/10 text-[#fffaf2]">
                <Link href="/contact">Contact RBK Events</Link>
              </Button>
            </div>
          </div>

          <div className="self-end rounded-lg border border-[#fffaf2]/16 bg-[#fffaf2]/12 p-5 backdrop-blur-md">
            <div className="grid gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between gap-4 border-b border-[#fffaf2]/14 pb-4">
                <span className="text-[#fffaf2]/68">Function Type</span>
                <span className="text-right text-[#fffaf2]">{getEventCategoryLabel(event.category)}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-[#fffaf2]/14 pb-4">
                <span className="text-[#fffaf2]/68">Function Date</span>
                <span className="flex items-center gap-2 text-right text-[#fffaf2]">
                  <CalendarDays className="h-4 w-4 text-[#f0c6a9]" />
                  {event.date ? formatDate(event.date) : "Available on request"}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#fffaf2]/68">Gallery</span>
                <span className="text-right text-[#fffaf2]">
                  {(event.media?.length || 1).toString().padStart(2, "0")} photos/videos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <ScrollReveal className="mb-9 max-w-3xl space-y-4">
          <Badge variant="outline">Gallery</Badge>
          <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            Photos and videos from this function.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            A dedicated gallery for the decor, rituals, family moments, and celebration details
            from this function.
          </p>
        </ScrollReveal>
        <EventGallery event={event} />
      </section>

      <EventTestimonials testimonials={event.testimonials} />

      <WhatsAppCTA eventTitle={event.title} />
    </article>
  );
}
