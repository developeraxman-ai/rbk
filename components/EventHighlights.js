import EventMedia from "@/components/EventMedia";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { dummyEventMedia } from "@/lib/dummy-event-media";

const defaultHighlights = [
  { src: dummyEventMedia.heroVideo, alt: "RBK Events ceremony video highlight" },
  { src: dummyEventMedia.ceremonyStage, alt: "RBK Events ceremony decor highlight" },
  { src: dummyEventMedia.receptionCouple, alt: "RBK Events reception highlight" },
  { src: dummyEventMedia.engagementPortrait, alt: "RBK Events engagement highlight" },
  { src: dummyEventMedia.celebrationGuests, alt: "RBK Events guest gathering highlight" },
];

export default function EventHighlights({ items = defaultHighlights }) {
  return (
    <section className="border-y border-border bg-[#173d35] text-[#fffaf2]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <ScrollReveal className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <Badge className="border-[#f0c6a9]/35 bg-[#f0c6a9]/10 text-[#f0c6a9]">Highlights</Badge>
            <h2 className="text-balance font-heading text-4xl leading-tight text-[#fffaf2] sm:text-6xl">
              Layouts for decor, stage moments, guest energy, and memories.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#fffaf2]/72 sm:text-base sm:leading-8 lg:justify-self-end lg:text-right">
            Every celebration deserves a gallery that keeps its details, faces, movement, and
            atmosphere together.
          </p>
        </ScrollReveal>

        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[260px]">
          {items.map((item, index) => (
            <ScrollReveal
              key={`${item.src}-${index}`}
              delay={(index % 5) * 0.05}
              className={`relative overflow-hidden rounded-lg border border-[#fffaf2]/12 bg-black ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              } ${index === 3 ? "md:col-span-2" : ""}`}
            >
              <EventMedia
                src={item.src}
                alt={item.alt}
                autoPlay
                loop
                muted
                sizes="(max-width: 768px) 100vw, 33vw"
                className="h-full w-full"
                mediaClassName="object-cover object-center transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
