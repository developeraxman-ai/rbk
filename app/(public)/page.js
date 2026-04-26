import Image from "next/image";
import Link from "next/link";

import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
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
            {industryPresence.map((item, index) => (
              <ScrollReveal key={item} delay={index * 0.07} direction={index % 2 ? "right" : "left"}>
                <div className="break-words rounded-lg border border-white/10 bg-black/30 px-4 py-4 text-left text-xs leading-6 tracking-[0.02em] text-muted-foreground sm:px-5 sm:py-5 sm:text-center sm:text-xs sm:uppercase sm:tracking-[0.28em]">
                  {item}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <ScrollReveal className="space-y-6" direction="left">
            <Badge variant="outline">Kannada Film Industry</Badge>
            <h2 className="text-balance break-words font-heading text-[2rem] leading-[1.08] text-foreground sm:text-5xl sm:leading-tight">
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
              <Button asChild size="lg" className="h-auto w-full whitespace-normal py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap">
                <Link href="/industry">Explore Industry Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-auto w-full whitespace-normal border-primary/30 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap">
                <Link href="/contact">Book RBK Events</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]" direction="right" delay={0.08}>
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
          </ScrollReveal>
        </div>
      </section>

      <section id="events-live" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <ScrollReveal className="space-y-8" direction="left">
              <div className="space-y-4">
                <Badge variant="outline">Events & Live Properties</Badge>
                <h2 className="text-balance break-words font-heading text-[2rem] leading-[1.08] text-foreground sm:text-5xl sm:leading-tight">
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
                {eventServiceLanes.map((item, index) => (
                  <ScrollReveal key={item} delay={index * 0.06} direction={index % 2 ? "right" : "left"}>
                    <div className="break-words rounded-xl border border-white/10 bg-white/[0.03] p-4 leading-7 sm:p-5 sm:leading-8">
                      {item}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-primary sm:tracking-[0.3em]">Phone</p>
                  <p className="mt-2 text-sm text-foreground">{contactInfo.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-primary sm:tracking-[0.3em]">Email</p>
                  <p className="mt-2 break-all text-sm text-foreground sm:break-normal">{contactInfo.email}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="space-y-6" direction="right" delay={0.08}>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {showcaseShows.map((show, index) => (
                  <ScrollReveal
                    key={show.title}
                    delay={index * 0.04}
                    direction={index % 2 ? "right" : "left"}
                  >
                    <div className="group overflow-hidden rounded-lg border border-white/10 bg-black">
                      <div className="relative aspect-[4/3] bg-white/[0.03]">
                        <Image
                          src={show.image}
                          alt={show.title}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 14vw"
                          className="object-contain p-2 transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="border-t border-white/10 px-3 py-3">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-primary/80">
                          {show.subtitle}
                        </p>
                        <p className="mt-1 text-sm leading-tight text-foreground">{show.title}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <ScrollReveal className="space-y-5" direction="left">
            <Badge variant="outline">Weddings & Celebrations</Badge>
            <h2 className="text-balance break-words font-heading text-[2rem] leading-[1.08] text-foreground sm:text-5xl sm:leading-tight">
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
          </ScrollReveal>

          <ScrollReveal className="relative overflow-hidden rounded-xl border border-white/10" direction="right" delay={0.08}>
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5]">
              <Image
                src={pdfGallery.portraitSmile}
                alt={profileIdentity.name}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-top"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <ScrollReveal className="relative overflow-hidden rounded-xl border border-white/10" direction="left">
            <div className="relative aspect-[3/4]">
              <Image
                src={pdfGallery.portraitGlasses}
                alt={profileIdentity.name}
                fill
                sizes="(max-width: 1024px) 100vw, 34vw"
                className="object-cover object-top"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal className="space-y-5" direction="right" delay={0.08}>
            <Badge variant="outline">About {profileIdentity.brandName}</Badge>
            <h2 className="text-balance break-words font-heading text-[2rem] leading-[1.08] text-foreground sm:text-5xl sm:leading-tight">
              I bring together event direction, image craft, and production experience.
            </h2>
            {profileNarrative.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <ScrollReveal className="space-y-5" direction="left">
            <Badge variant="outline">Still Photography & Filmography</Badge>
            <h2 className="text-balance break-words font-heading text-[2rem] leading-[1.08] text-foreground sm:text-5xl sm:leading-tight">
              I have worked on still photography and publicity across a wide range of Kannada film
              titles.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              My work across posters, publicity, promotional imagery, and on-ground stills spans
              more than 55 projects.
            </p>
            <div className="grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
              {stillPhotographyTitles.slice(0, 12).map((title, index) => (
                <ScrollReveal key={title} delay={index * 0.035} direction={index % 2 ? "right" : "left"}>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                    {title}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid gap-6" direction="right" delay={0.08}>
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
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-24">
          <div className="grid gap-4 lg:grid-cols-4">
            {profileMilestones.map((milestone, index) => (
              <ScrollReveal
                key={`${milestone.year}-${milestone.title}`}
                delay={index * 0.07}
                direction={index % 2 ? "right" : "left"}
              >
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.16em] text-primary sm:tracking-[0.32em]">{milestone.year}</p>
                  <h3 className="mt-4 break-words font-heading text-2xl leading-tight text-foreground sm:text-3xl">{milestone.title}</h3>
                  <p className="mt-2 break-words text-xs uppercase tracking-[0.08em] text-muted-foreground sm:text-sm sm:tracking-[0.22em]">
                    {milestone.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{milestone.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
