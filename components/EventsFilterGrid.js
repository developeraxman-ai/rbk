"use client";

import { useMemo, useState } from "react";

import EventCard from "@/components/EventCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { eventCategories } from "@/lib/event-categories";

export default function EventsFilterGrid({ events }) {
  const availableCategories = useMemo(() => {
    const values = new Set(events.map((event) => event.category));
    return eventCategories.filter((category) => values.has(category.value));
  }, [events]);

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredEvents = useMemo(() => {
    if (activeFilter === "all") {
      return events;
    }

    return events.filter((event) => event.category === activeFilter);
  }, [activeFilter, events]);

  if (!events.length) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card px-5 py-12 text-center">
        <p className="font-heading text-3xl text-foreground">Functions are being curated.</p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
          RBK Events will publish ceremonies, receptions, engagements, birthday functions, and
          private celebrations here as new galleries are prepared.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {availableCategories.length > 1 ? (
        <ScrollReveal className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            size="sm"
            className={activeFilter === "all" ? "shrink-0" : "shrink-0 border-border bg-card"}
            onClick={() => setActiveFilter("all")}
          >
            All Functions
          </Button>
          {availableCategories.map((category) => (
            <Button
              key={category.value}
              variant={activeFilter === category.value ? "default" : "outline"}
              size="sm"
              className={
                activeFilter === category.value
                  ? "shrink-0"
                  : "shrink-0 border-border bg-card"
              }
              onClick={() => setActiveFilter(category.value)}
            >
              {category.label}
            </Button>
          ))}
        </ScrollReveal>
      ) : null}

      {filteredEvents.length ? (
        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {filteredEvents.map((event, index) => (
            <ScrollReveal key={event._id} delay={(index % 6) * 0.04} className="break-inside-avoid">
              <EventCard event={event} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-card px-5 py-10 text-center text-sm text-muted-foreground">
          No functions match this category yet.
        </div>
      )}
    </div>
  );
}
