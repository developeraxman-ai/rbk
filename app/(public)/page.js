import Image from "next/image";
import Link from "next/link";

import HeroSection from "@/components/HeroSection";
import ShowCarousel from "@/components/ShowCarousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  contactInfo,
  eventServiceLanes,
  homeHighlights,
  industryPresence,
  pdfGallery,
  profileIdentity,
  profileMilestones,
  profileNarrative,
  showcaseShows,
  stillPhotographyTitles,
} from "@/lib/profile-content";

export default function HomePage() {
  return (
    <div>
      <HeroSection
        heroVideoUrl={process.env.NEXT_PUBLIC_HERO_VIDEO_URL || ""}
        heroImageUrl={pdfGallery.people}
        heroMobileImageUrl={pdfGallery.onsetCamera}
        highlights={homeHighlights}
      />

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-22">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industryPresence.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-black/30 px-4 py-4 text-center text-[11px] uppercase leading-6 tracking-[0.12em] text-muted-foreground sm:px-5 sm:py-5 sm:text-xs sm:tracking-[0.28em]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <div className="space-y-6">
            <Badge variant="outline">Kannada Film Industry</Badge>
            <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-5xl">
              I have worked around Kannada cinema, celebrity publicity, and industry-facing visual campaigns.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              My work carries strong associations with Rocking Star Yash and other Kannada
              superstars through still photography, publicity material, industry collaborations, and
              on-ground visual presence.
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              That access shapes the way I frame celebrity energy, audience attention, star-led
              events, and public-facing moments.
            </p>
            <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/industry">Explore Industry Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-primary/30 sm:w-auto">
                <Link href="/contact">Book RBK Events</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <div className="relative aspect-[4/5] sm:aspect-[16/10]">
                  <Image
                    src={pdfGallery.people}
                    alt="Raghavendra B Kolar with Kannada film personalities"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <div className="relative aspect-[4/5] sm:aspect-[4/3]">
                  <Image
                    src={pdfGallery.postersA}
                    alt="Kannada film poster collage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 26vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <div className="relative aspect-[4/5] sm:aspect-[4/3]">
                  <Image
                    src={pdfGallery.postersB}
                    alt="Rocking Star Yash and Kannada film publicity collage"
                    fill
                    sizes="(max-width: 1024px) 100vw, 26vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="events-live" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline">Events & Live Properties</Badge>
                <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-5xl">
                  RBK Events is built for live entertainment, stage-led properties, and audience-facing experiences.
                </h2>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  From televised entertainment formats to public event energy, I work with the pace,
                  scale, timing, and crowd response that live properties demand.
                </p>
                <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                  The visual language here comes from popular Kannada entertainment properties,
                  celebrity-led appearances, and event environments where every frame has to hold
                  attention in real time.
                </p>
              </div>

              <div className="grid gap-4 text-sm leading-8 text-muted-foreground sm:grid-cols-2">
                {eventServiceLanes.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">Phone</p>
                  <p className="mt-2 text-sm text-foreground">{contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">Email</p>
                  <p className="mt-2 text-sm text-foreground">{contactInfo.email}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <ShowCarousel items={showcaseShows} />
              <div className="relative overflow-hidden rounded-xl border border-white/10">
                <div className="relative aspect-[4/5] sm:aspect-[16/10]">
                  <Image
                    src={pdfGallery.campaigns}
                    alt="RBK Events entertainment and promotional campaigns"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-5">
            <Badge variant="outline">Weddings & Celebrations</Badge>
            <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-5xl">
              I approach weddings and personal celebrations with intimacy, elegance, and atmosphere.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              I look for emotion, family energy, and visual richness while keeping the experience
              refined and cinematic.
            </p>
            <div className="grid gap-4 text-sm leading-8 text-muted-foreground sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                Intimate moments, rituals, and celebration-led storytelling.
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                Elevated framing for personal occasions that need beauty and presence.
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={pdfGallery.portraitSmile}
                alt={profileIdentity.name}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[3/4]">
              <Image
                src={pdfGallery.portraitGlasses}
                alt={profileIdentity.name}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="space-y-5">
            <Badge variant="outline">About {profileIdentity.brandName}</Badge>
            <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-5xl">
              I bring together event direction, image craft, and production experience.
            </h2>
            {profileNarrative.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <Badge variant="outline">Still Photography & Filmography</Badge>
            <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-5xl">
              I have worked on still photography and publicity across a wide range of Kannada film
              titles.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              My work across posters, publicity, promotional imagery, and on-ground stills spans
              more than 55 projects.
            </p>
            <div className="grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
              {stillPhotographyTitles.slice(0, 12).map((title) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <div className="relative aspect-[4/5] sm:aspect-[16/9]">
                <Image
                  src={pdfGallery.postersA}
                  alt="Kannada film industry poster collage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <div className="relative aspect-[4/5] sm:aspect-[16/9]">
                <Image
                  src={pdfGallery.postersC}
                  alt="Rocking Star Yash and Kannada cinema collage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
          <div className="grid gap-4 lg:grid-cols-4">
            {profileMilestones.map((milestone) => (
              <div
                key={`${milestone.year}-${milestone.title}`}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-primary">{milestone.year}</p>
                <h3 className="mt-4 font-heading text-3xl text-foreground">{milestone.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">
                  {milestone.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">{milestone.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
