import { Quote, Star } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote:
      "RBK Events made the whole function feel calm and beautifully timed. The decor, stage, guest flow, and gallery were handled with real care.",
    name: "Reception Host",
    event: "Evening Reception",
  },
  {
    quote:
      "The birthday party looked elegant without feeling overdone. Every small detail, from cake moments to entertainment flow, was easy for guests to enjoy.",
    name: "Birthday Party Host",
    event: "Milestone Celebration",
  },
  {
    quote:
      "Our corporate event had a polished stage, smooth coordination, and clean documentation. The team understood timing and presentation very well.",
    name: "Corporate Event Lead",
    event: "Company Celebration",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[#fffaf2]/72 event-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <ScrollReveal className="mb-10 grid gap-5 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="space-y-4">
            <Badge variant="outline">Testimonials</Badge>
            <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
              Hosts remember the ease as much as the beauty.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:justify-self-end lg:text-right">
            The best functions feel composed from the inside: clear planning, graceful execution,
            and a gallery that keeps the atmosphere alive after the day is over.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.08} className="h-full">
              <figure className="surface-lift relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card p-6 shadow-[0_22px_70px_rgba(45,35,25,0.1)]">
                <div className="absolute inset-x-0 top-0 h-1 ceremonial-strip" aria-hidden="true" />
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                    <Quote className="h-5 w-5" />
                  </div>
                  <div className="flex gap-1 text-primary" aria-label="Five star testimonial">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-7 grow font-heading text-2xl leading-snug text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {item.event}
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
