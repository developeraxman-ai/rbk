import { BriefcaseBusiness, Camera, Clapperboard, Crown, Gem, Sparkles } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Ceremonies & Rituals",
    description: "Day-of coordination, mandap planning, rituals, guest flow, and premium hosting.",
    icon: Sparkles,
  },
  {
    title: "Reception Planning",
    description: "Stage design, couple entry, lighting, music, guest seating, and evening hospitality.",
    icon: Crown,
  },
  {
    title: "Engagements & Pre-Events",
    description: "Ring ceremonies, haldi, mehendi, sangeet-style functions, decor corners, and artist flow.",
    icon: Gem,
  },
  {
    title: "Birthday Parties",
    description: "Theme decor, cake moments, kids' zones, entertainment, return-gift flow, and party galleries.",
    icon: Camera,
  },
  {
    title: "Stage, Decor & Production",
    description: "Sound, lights, stage, floral styling, vendor coordination, and end-to-end execution.",
    icon: Clapperboard,
  },
  {
    title: "Corporate Events",
    description: "Company celebrations, annual days, launches, team gatherings, stage flow, and formal hosting.",
    icon: BriefcaseBusiness,
  },
];

export default function ServicesSection() {
  return (
    <section className="border-y border-border bg-[#fffaf2]/64 event-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <ScrollReveal className="mb-10 max-w-3xl space-y-4">
          <Badge variant="outline">Services</Badge>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            Everything a celebration needs, organised under one roof.
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            RBK Events brings together planning, decor, stage, sound, lighting, guest experience,
            vendor coordination, and event media so important functions feel composed and cared for.
            Birthday parties and corporate events are handled with the same planning discipline.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.title} delay={index * 0.05} className="h-full">
                <div className="surface-lift h-full rounded-lg border border-border bg-card p-5 shadow-[0_20px_60px_rgba(45,35,25,0.08)]">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl leading-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
