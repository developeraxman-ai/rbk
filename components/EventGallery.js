import EventMedia from "@/components/EventMedia";
import ScrollReveal from "@/components/ScrollReveal";

export default function EventGallery({ event }) {
  const media = event.media?.length ? event.media : [event.coverMedia];

  return (
    <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
      {media.map((item, index) => (
        <ScrollReveal
          key={`${event.slug}-${item}-${index}`}
          delay={(index % 6) * 0.04}
          className="mb-5 break-inside-avoid"
        >
          <EventMedia
            src={item}
            alt={`${event.title} highlight ${index + 1}`}
            controls
            className={
              index % 3 === 0
                ? "aspect-[4/5] rounded-lg border border-border shadow-[0_18px_54px_rgba(45,35,25,0.1)]"
                : "aspect-[16/11] rounded-lg border border-border shadow-[0_18px_54px_rgba(45,35,25,0.1)]"
            }
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </ScrollReveal>
      ))}
    </div>
  );
}
