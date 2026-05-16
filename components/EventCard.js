import Link from "next/link";
import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";

import EventMedia from "@/components/EventMedia";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getEventCategoryLabel } from "@/lib/event-categories";
import { formatDate } from "@/lib/utils";
import { getEventWhatsappHref } from "@/lib/whatsapp";

export default function EventCard({ event, featured = false }) {
  const href = `/events/${event.slug}`;

  return (
    <article className="surface-lift group relative mb-5 break-inside-avoid overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_70px_rgba(45,35,25,0.12)] transition hover:border-primary/35 sm:mb-6">
      <Link href={href} aria-label={`Open ${event.title} gallery`} className="absolute inset-0 z-10" />

      <EventMedia
        src={event.coverMedia}
        alt={event.title}
        autoPlay
        loop
        muted
        sizes={featured ? "(max-width: 1024px) 100vw, 42vw" : "(max-width: 768px) 100vw, 33vw"}
        className={featured ? "aspect-[4/5] sm:aspect-[16/12]" : "aspect-[4/5]"}
        mediaClassName="transition duration-700 group-hover:scale-105"
      />

      <div className="relative space-y-4 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="muted" className="tracking-[0.18em]">
            {getEventCategoryLabel(event.category)}
          </Badge>
          {event.featured ? <Badge className="tracking-[0.18em]">Featured</Badge> : null}
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-2xl leading-tight text-foreground sm:text-3xl">
            {event.title}
          </h3>
          <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
            {event.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <CalendarDays className="h-4 w-4 text-primary" />
            {event.date ? formatDate(event.date) : "Date on request"}
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-primary">
            View Gallery
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </div>

        <div className="relative z-20">
          <Button asChild size="sm" variant="outline" className="w-full border-primary/30">
            <Link href={getEventWhatsappHref(event.title)} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Book Similar Function
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
