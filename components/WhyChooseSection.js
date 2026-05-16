import { CheckCircle2 } from "lucide-react";

import EventMedia from "@/components/EventMedia";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { dummyEventMedia } from "@/lib/dummy-event-media";

const reasons = [
  "End-to-end coordination for decor, stage, sound, lighting, guest movement, and rituals.",
  "Function planning that keeps the experience smooth for hosts and comfortable for guests.",
  "Dedicated celebration galleries where each function gets its own photos and videos.",
  "Premium execution from the first planning call to the final album, reel, and event memory.",
];

export default function WhyChooseSection({ imageSrc = dummyEventMedia.receptionCouple }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <ScrollReveal direction="left" className="relative min-h-[520px] overflow-hidden rounded-lg border border-border">
        <EventMedia
          src={imageSrc}
          alt="RBK Events celebration organisation"
          sizes="(max-width: 1024px) 100vw, 44vw"
          className="absolute inset-0"
          mediaClassName="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
          <p className="max-w-sm text-sm uppercase tracking-[0.24em] text-primary">
            Decor planning. Guest flow. Gallery-ready memories.
          </p>
        </div>
      </ScrollReveal>

      <div className="space-y-7">
        <ScrollReveal direction="right" className="space-y-4">
          <Badge variant="outline">Why RBK Events</Badge>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            We organise functions so hosts can stay present.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            The company blends planning discipline, decor taste, vendor coordination, and media
            coverage into functions that feel beautiful in person and easy to revisit online.
          </p>
        </ScrollReveal>

        <div className="grid gap-3">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason} delay={index * 0.05} direction="right">
              <div className="surface-lift flex gap-3 rounded-lg border border-border bg-card p-4 text-sm leading-7 text-muted-foreground">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p>{reason}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
