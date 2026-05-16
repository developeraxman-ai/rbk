import { Flame, Music2, Sparkles, UsersRound } from "lucide-react";

import EventMedia from "@/components/EventMedia";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { dummyEventMedia } from "@/lib/dummy-event-media";

const craftNotes = [
  {
    title: "Mandap & Floral Language",
    description:
      "Layered florals, drape, brass accents, and stage sightlines shaped around the main ritual space.",
    icon: Sparkles,
  },
  {
    title: "Haldi & Mehendi Mood",
    description:
      "Colour, comfort, playful corners, music flow, and photo-ready details for intimate day functions.",
    icon: Flame,
  },
  {
    title: "Sangeet & Entries",
    description:
      "Performance timing, artist coordination, lighting cues, and entrances that feel graceful on camera.",
    icon: Music2,
  },
  {
    title: "Guest Hospitality",
    description:
      "Welcome flow, seating, food coordination, and calm on-ground handling from arrival to farewell.",
    icon: UsersRound,
  },
];

export default function CeremonialCraftSection({ imageSrc = dummyEventMedia.haldiDetails }) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[#f1e5d5] event-paper">
      <div className="absolute inset-x-0 top-0 h-2 ceremonial-strip" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <ScrollReveal direction="left" className="relative min-h-[620px] overflow-hidden rounded-lg border border-border bg-card shadow-[0_26px_80px_rgba(45,35,25,0.12)] rangoli-frame">
          <EventMedia
            src={imageSrc}
            alt="RBK Events haldi and mehendi celebration detail"
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="absolute inset-0"
            mediaClassName="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,61,53,0.05)_0%,rgba(23,61,53,0.18)_42%,rgba(23,61,53,0.72)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-[#fffaf2] sm:p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-[#f0c6a9]">Indian Celebration Craft</p>
            <p className="mt-3 max-w-sm font-heading text-4xl leading-tight">
              Warm rituals, graceful hosting, camera-ready detail.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          <ScrollReveal className="space-y-4">
            <Badge variant="outline">Craft</Badge>
            <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
              Ritual flow, hospitality, and stagecraft in one language.
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              The visual direction leans into Indian celebrations with floral layers, mandap
              geometry, music-led entries, warm lamp light, and considered guest movement.
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {craftNotes.map((item, index) => {
              const Icon = item.icon;

              return (
                <ScrollReveal key={item.title} delay={index * 0.06} className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-lg border border-border bg-card p-5 shadow-[0_18px_54px_rgba(45,35,25,0.08)] transition duration-300 hover:-translate-y-1 hover:border-primary/35">
                    <div className="absolute inset-x-0 top-0 h-1 ceremonial-strip opacity-80" />
                    <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-heading text-2xl leading-tight text-foreground">
                      {item.title}
                    </h3>
                    <div className="motif-divider my-4" />
                    <p className="text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
