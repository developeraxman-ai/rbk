import { ArrowUpRight } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const numbers = [
  {
    value: "08",
    label: "Core function formats",
    detail: "Ceremony, reception, engagement, haldi, mehendi, sangeet, birthday parties, corporate events.",
  },
  {
    value: "01",
    label: "Gallery per event",
    detail: "Every public event opens into its own photos and videos archive.",
  },
  {
    value: "24/7",
    label: "WhatsApp-first planning",
    detail: "Quick conversations for dates, decor, guest count, venue flow, and media needs.",
  },
  {
    value: "55+",
    label: "Visual titles background",
    detail: "A visual craft language shaped by film-publicity, stage, and production experience.",
  },
];

export default function EventNumbersSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[#173d35] text-[#fffaf2]">
      <div className="absolute inset-x-0 top-0 h-2 ceremonial-strip" aria-hidden="true" />
      <div className="absolute inset-0 jali-pattern opacity-70" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 sm:py-18 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <ScrollReveal direction="left" className="space-y-4">
          <Badge className="border-[#f0c6a9]/35 bg-[#f0c6a9]/10 text-[#f0c6a9]">
            Numbers
          </Badge>
          <h2 className="text-balance font-heading text-4xl leading-tight text-[#fffaf2] sm:text-6xl">
            Clear scale, careful planning, visible outcomes.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-[#fffaf2]/72 sm:text-base sm:leading-8">
            RBK Events is built around organised celebration formats, dedicated galleries, and
            responsive planning from the first conversation.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {numbers.map((item, index) => (
            <ScrollReveal key={item.label} delay={index * 0.08} direction={index % 2 ? "right" : "up"}>
              <div className="group relative min-h-[230px] overflow-hidden rounded-lg border border-[#fffaf2]/14 bg-[#fffaf2]/10 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-[#f0c6a9]/45 hover:bg-[#fffaf2]/14">
                <div className="absolute inset-x-0 top-0 h-1 ceremonial-strip opacity-90" />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-heading text-7xl leading-none text-[#f0c6a9] sm:text-8xl">
                    {item.value}
                  </p>
                  <ArrowUpRight className="mt-2 h-5 w-5 text-[#f0c6a9] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="mt-6 font-heading text-2xl leading-tight text-[#fffaf2]">
                  {item.label}
                </h3>
                <div className="motif-divider my-4 opacity-80" />
                <p className="text-sm leading-7 text-[#fffaf2]/72">{item.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
