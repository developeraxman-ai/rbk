import { Quote, Star } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

export default function EventTestimonials({ testimonials = [] }) {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="border-y border-border bg-[#fffaf2]/72 event-paper">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20">
        <ScrollReveal className="mb-9 max-w-3xl space-y-4">
          <Badge variant="outline">Event Testimonials</Badge>
          <h2 className="font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            Words from this event.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Feedback given by the client based on the event.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={`${testimonial.name}-${index}`} delay={index * 0.07} className="h-full">
              <figure className="surface-lift relative flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-[0_22px_70px_rgba(45,35,25,0.1)]">
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
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  {testimonial.role ? (
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {testimonial.role}
                    </p>
                  ) : null}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
