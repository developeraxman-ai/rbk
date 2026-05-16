import { CalendarCheck, Images, MessageSquareText, Sparkles } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    title: "Discuss the Function",
    description: "We understand the date, city, guest count, rituals, decor mood, and family priorities.",
    icon: MessageSquareText,
  },
  {
    title: "Design the Experience",
    description: "Stage, decor, sound, lighting, entry moments, guest flow, and vendor needs are planned together.",
    icon: Sparkles,
  },
  {
    title: "Coordinate the Day",
    description: "The team keeps the function moving smoothly so hosts can stay present with guests.",
    icon: CalendarCheck,
  },
  {
    title: "Relive the Memories",
    description: "Each celebration gets its own gallery of photos and videos to revisit and share.",
    icon: Images,
  },
];

export default function PlanningFlowSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
      <ScrollReveal className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="space-y-4">
          <Badge variant="outline">How It Works</Badge>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            From first WhatsApp message to a beautifully organised celebration.
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8 lg:justify-self-end lg:text-right">
          We help shape the flow, decor, stage, guest experience, and memories of the function so
          the day feels graceful while it happens and meaningful when you look back.
        </p>
      </ScrollReveal>

      <div className="grid gap-4 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <ScrollReveal key={step.title} delay={index * 0.06} className="h-full">
              <div className="surface-lift h-full rounded-lg border border-border bg-card p-5 shadow-[0_18px_54px_rgba(45,35,25,0.08)]">
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-heading text-4xl leading-none text-primary/55">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-6 font-heading text-2xl leading-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
