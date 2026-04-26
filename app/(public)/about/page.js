import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import {
  cinematographyProjects,
  commercialClients,
  pdfGallery,
  profileIdentity,
  profileMilestones,
  profileNarrative,
  showPhotography,
} from "@/lib/profile-content";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-5 lg:pr-6">
          <Badge variant="outline">About</Badge>
          <h1 className="font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            I work across cinematography, film publicity, television promotions, and documentary storytelling.
          </h1>
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[4/5] sm:aspect-[4/3]">
              <Image
                src={pdfGallery.onsetCamera}
                alt={`${profileIdentity.name} on set`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[58%_18%]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:space-y-6 sm:text-base sm:leading-8">
          {profileNarrative.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="my-10 h-px cinematic-divider sm:my-14" />

      <div className="grid gap-6 md:grid-cols-3">
        {profileMilestones.map((item) => (
          <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-muted-foreground sm:p-6 sm:leading-8">
            <p className="text-xs uppercase tracking-[0.22em] text-primary sm:tracking-[0.32em]">{item.year}</p>
            <p className="mt-3 font-heading text-2xl leading-tight text-foreground sm:text-3xl">{item.title}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:tracking-[0.22em]">{item.role}</p>
            <p className="mt-4">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[4/5] sm:aspect-[16/9]">
              <Image
                src={pdfGallery.people}
                alt="Collaboration gallery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        <div className="rounded-xl border border-primary/20 bg-primary/8 p-5 sm:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-primary sm:tracking-[0.35em]">Selected Practice</p>
          <div className="mt-6 grid gap-6 text-sm leading-7 text-muted-foreground sm:leading-8">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-foreground sm:tracking-[0.25em]">Cinematography</p>
              {cinematographyProjects.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <div>
              <p className="mb-2 text-xs uppercase tracking-[0.16em] text-foreground sm:tracking-[0.25em]">Shows & Brands</p>
              <p>{showPhotography.slice(0, 8).join(", ")}</p>
              <p>{commercialClients.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
