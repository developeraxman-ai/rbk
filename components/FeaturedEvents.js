import Link from "next/link";
import { ArrowRight } from "lucide-react";

import EventCard from "@/components/EventCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FeaturedEvents({ events }) {
  const visibleEvents = events.slice(0, 6);

  return (
    <section id="featured-events" className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
      <ScrollReveal className="mb-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
        <div className="space-y-4">
          <Badge variant="outline">Featured Functions</Badge>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            Recent celebrations, organised with detail.
          </h2>
        </div>
        <div className="space-y-5 lg:justify-self-end lg:text-right">
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Every featured function opens into its own gallery, with the moments, details, and
            atmosphere of that celebration presented together.
          </p>
          <Button asChild variant="outline" className="border-primary/30">
            <Link href="/events">
              Explore Functions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ScrollReveal>

      {visibleEvents.length ? (
        <div className="columns-1 gap-6 lg:columns-3">
          {visibleEvents.map((event, index) => (
            <ScrollReveal key={event._id} delay={index * 0.08} className="break-inside-avoid">
              <EventCard event={event} featured={index === 0} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-border bg-card px-5 py-12 text-center text-sm text-muted-foreground">
          Featured functions will appear here soon.
        </div>
      )}
    </section>
  );
}
