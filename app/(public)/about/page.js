import Link from "next/link";
import { ArrowRight, Award, Camera, Clapperboard, Film, Sparkles, Users2 } from "lucide-react";

import EventMedia from "@/components/EventMedia";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dummyEventMedia } from "@/lib/dummy-event-media";
import { getSeoImage } from "@/lib/seo";
import { resolveSiteMediaMap } from "@/lib/site-media";
import { getSiteSettings } from "@/lib/site-settings-service";
import {
  cinematographyProjects,
  commercialClients,
  documentaryProjects,
  industryPresence,
  profileFocus,
  profileIdentity,
  profileMilestones,
  profileNarrative,
  showPhotography,
  stillPhotographyTitles,
} from "@/lib/profile-content";

export const metadata = {
  title: "About Us",
  description:
    "Learn about RBK Events and founder Raghavendra B Kolar, whose film, television, cinematography, still photography, decor, and event media background shapes every celebration.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About RBK Events",
    description:
      "The RBK Events story, Raghavendra B Kolar's visual background, planning philosophy, and premium function approach.",
    url: "/about",
    siteName: "RBK Events",
    images: [{ url: getSeoImage(dummyEventMedia.ceremonyStage), width: 1200, height: 630 }],
  },
};

const philosophy = [
  {
    title: "Atmosphere First",
    description:
      "Every function is shaped around guest comfort, rituals, decor, light, sound, and the emotional rhythm of the day.",
    icon: Sparkles,
  },
  {
    title: "Production Discipline",
    description:
      "Planning, timing, media coverage, guest flow, stage moments, and vendor coordination are handled with care.",
    icon: Clapperboard,
  },
  {
    title: "People-Led Memories",
    description:
      "The company designs around guests, hosts, rituals, and the memories they gather to create.",
    icon: Users2,
  },
];

const founderSignals = [
  {
    value: "55+",
    label: "film publicity and still-photo titles across Kannada cinema",
  },
  {
    value: "2009",
    label: "formal cinematography training shaping the visual discipline",
  },
  {
    value: "2022-2025",
    label: "recent camera work across short films, features, and Telugu cinema",
  },
];

const founderFocusIcons = [Camera, Film, Clapperboard, Sparkles];
const milestoneIcons = [Clapperboard, Camera, Film, Award];

const celebrityMoments = [
  {
    title: "Film Industry Moments",
    description: "Photographs with Kannada cinema personalities, actors, directors, and crews.",
    mediaKey: "aboutCelebrityCollage",
    className: "sm:col-span-2 lg:col-span-3",
    imageClassName: "object-contain p-2",
  },
  {
    title: "Broadcast & Show Campaigns",
    description: "Entertainment-program visuals, promotional frames, and celebrity-led show work.",
    mediaKey: "aboutShowCampaigns",
    className: "lg:col-span-2",
    imageClassName: "object-contain p-2",
  },
  {
    title: "Film Publicity",
    description: "Poster, still-photo, and campaign associations across major Kannada titles.",
    mediaKey: "aboutFilmPublicity",
    className: "lg:col-span-1",
    imageClassName: "object-contain p-2",
  },
];

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const siteSettings = await getSiteSettings();
  const siteMedia = resolveSiteMediaMap(siteSettings);

  return (
    <div className="pb-4">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <EventMedia
            src={siteMedia.aboutHeroBackground}
            alt={`${profileIdentity.brandName} production approach`}
            priority
            sizes="100vw"
            className="h-full w-full"
            mediaClassName="object-cover object-[58%_18%] opacity-42"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,61,53,0.38)_0%,rgba(23,61,53,0.74)_48%,rgba(23,61,53,0.96)_100%)] sm:bg-[linear-gradient(90deg,rgba(23,61,53,0.92)_0%,rgba(23,61,53,0.76)_48%,rgba(23,61,53,0.52)_100%)]" />
          <div className="absolute inset-0 grain-overlay" />
        </div>

        <div className="relative mx-auto grid min-h-[68svh] max-w-7xl content-end gap-8 px-4 py-12 sm:min-h-[72vh] sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-5">
            <Badge>About Us</Badge>
            <h1 className="text-balance font-heading text-5xl leading-[0.96] text-white sm:text-7xl">
              RBK Events is shaped by Raghavendra B Kolar.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
              A film and television visual background sits behind every celebration we plan:
              ceremonies, receptions, engagements, birthday functions, private gatherings, decor,
              and event memories designed with timing, atmosphere, and care.
            </p>
          </div>

          <div className="self-end rounded-lg border border-[#fffaf2]/16 bg-[#fffaf2]/12 p-5 text-[#fffaf2] backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f0c6a9]">Founder Focus</p>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-[#fffaf2]/72">
              <p>
                Raghavendra B Kolar brings together production planning, cinematography, still
                photography, show campaigns, and event documentation.
              </p>
              <p>
                That experience gives RBK Events a practical eye for guest movement, stage moments,
                vendor timing, decor detail, and photos or videos that hold the feeling of the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.84fr_1.16fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-[0.82fr_1fr] lg:grid-cols-1">
            <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/15 bg-black sm:min-h-[540px] lg:min-h-[580px]">
              <EventMedia
                src={siteMedia.aboutFounderPortrait}
                alt={profileIdentity.name}
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="absolute inset-0"
                mediaClassName="object-cover object-[52%_24%] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs uppercase tracking-[0.26em] text-primary">Founder</p>
                <p className="mt-2 font-heading text-3xl leading-none text-white">
                  {profileIdentity.name}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-none">
              <div className="relative min-h-[220px] overflow-hidden rounded-lg border border-white/15 bg-black">
                <EventMedia
                  src={siteMedia.aboutOnsetCamera}
                  alt={`${profileIdentity.name} on a camera setup`}
                  sizes="(max-width: 1024px) 100vw, 19vw"
                  className="absolute inset-0"
                  mediaClassName="object-cover object-center grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
              </div>

              <div className="rounded-lg border border-white/15 bg-white/[0.05] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-primary">Working Range</p>
                <p className="mt-4 text-sm leading-7 text-white/72">
                  Film publicity, broadcast show photography, commercials, documentary shoots,
                  cinematography, and event storytelling.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <div className="space-y-4">
              <Badge className="border-primary/40 bg-primary/15 text-[#fffaf2]">
                {profileIdentity.founderTitle}
              </Badge>
              <h2 className="text-balance font-heading text-4xl leading-tight text-white sm:text-6xl">
                Meet the visual mind behind RBK Events.
              </h2>
              <div className="grid gap-4 text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                {profileNarrative.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p>
                  Raghavendra&apos;s work gives the company its calm production style: listen to the
                  host, understand the occasion, set the room beautifully, keep the flow smooth, and
                  preserve the memories with a cinematic eye.
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {founderSignals.map((item) => (
                <div
                  key={item.value}
                  className="rounded-lg border border-white/15 bg-white/[0.05] p-4"
                >
                  <p className="font-heading text-4xl leading-none text-primary">{item.value}</p>
                  <p className="mt-3 text-xs leading-6 text-white/68">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {profileFocus.map((item, index) => {
                const Icon = founderFocusIcons[index] || Sparkles;

                return (
                  <div key={item} className="rounded-lg border border-white/15 bg-white/[0.04] p-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="mt-3 text-sm leading-7 text-white/72">{item}</p>
                  </div>
                );
              })}
            </div>

            <Button asChild size="lg" className="bg-[#fffaf2] text-secondary hover:bg-[#f0c6a9]">
              <Link href="/contact">
                Plan With RBK
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[#fffaf2]/64 event-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div className="space-y-4">
              <Badge variant="outline">Celebrity & Industry Moments</Badge>
              <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
                RBK&apos;s event sense comes from years around stars, sets, and live audiences.
              </h2>
            </div>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              These portfolio moments show Raghavendra B Kolar&apos;s access across Kannada cinema,
              broadcast properties, promotional campaigns, and celebrity-led occasions.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {celebrityMoments.map((item) => (
              <div
                key={item.title}
                className={`${item.className} overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_54px_rgba(45,35,25,0.08)]`}
              >
                <div className="relative min-h-[280px] bg-black sm:min-h-[420px]">
                  <EventMedia
                    src={siteMedia[item.mediaKey]}
                    alt={`${profileIdentity.name} ${item.title.toLowerCase()}`}
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="absolute inset-0"
                    mediaClassName={item.imageClassName}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industryPresence.map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card/80 p-4">
                <p className="text-sm leading-7 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="space-y-5">
          <Badge variant="outline">Our Story</Badge>
          <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
            From screen sets to celebration rooms.
          </h2>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            RBK Events grew from Raghavendra B Kolar&apos;s years of work across still photography,
            event visuals, documentary shoots, and cinematography. That background gives the
            company a sharp understanding of timing, atmosphere, meaningful moments, and visual
            memory.
          </p>
          <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Today, the company channels that experience into ceremonies, receptions, engagements,
            birthday functions, private celebrations, and select corporate gatherings that need
            polish, coordination, and emotional weight.
          </p>
          <Button asChild size="lg">
            <Link href="/events">
              Explore Functions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border sm:col-span-2">
            <EventMedia
              src={siteMedia.aboutStoryMain}
              alt="RBK Events industry and event experience"
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="absolute inset-0"
              mediaClassName="object-cover object-center"
            />
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-border">
            <EventMedia
              src={siteMedia.aboutStoryEngagement}
              alt="RBK Events campaign visuals"
              sizes="(max-width: 640px) 100vw, 26vw"
              className="absolute inset-0"
              mediaClassName="object-cover object-center"
            />
          </div>
          <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-border">
            <EventMedia
              src={siteMedia.aboutStoryHaldi}
              alt="RBK Events cinematic visual background"
              sizes="(max-width: 640px) 100vw, 26vw"
              className="absolute inset-0"
              mediaClassName="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-8 sm:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-4">
            <Badge variant="outline">Raghavendra&apos;s Journey</Badge>
            <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
              A career built across television, cinema, campaigns, and live moments.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              The same discipline that helps a camera crew catch the right moment now helps RBK
              Events shape function flow, stage presence, decor detail, and guest experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {profileMilestones.map((item, index) => {
              const Icon = milestoneIcons[index] || Camera;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="rounded-lg border border-border bg-card p-5 shadow-[0_18px_54px_rgba(45,35,25,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-primary">
                        {item.year}
                      </p>
                      <h3 className="mt-2 font-heading text-2xl leading-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#fffaf2]/64 event-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
          <div className="mb-10 max-w-3xl space-y-4">
            <Badge variant="outline">Event Philosophy</Badge>
            <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
              We do not simply cover functions. We organise how they feel.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {philosophy.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-lg border border-border bg-card p-6 shadow-[0_18px_54px_rgba(45,35,25,0.08)]">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/25 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-3xl leading-tight text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            <Badge variant="outline">Experience</Badge>
            <h2 className="text-balance font-heading text-4xl leading-tight text-foreground sm:text-6xl">
              A practical background behind the event company.
            </h2>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Raghavendra B Kolar&apos;s work spans entertainment programs, film publicity,
              commercial clients, documentaries, and cinematography projects, giving RBK Events a
              grounded production voice.
            </p>
          </div>
          <div className="grid gap-4 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary">Visual Background</p>
              <p>{showPhotography.slice(0, 8).join(", ")}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary">Film Publicity</p>
              <p>{stillPhotographyTitles.slice(0, 12).join(", ")}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary">Brands</p>
              <p>{commercialClients.join(", ")}</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-primary">Documentary & Camera</p>
              <p>{[...documentaryProjects.slice(0, 3), ...cinematographyProjects.slice(0, 2)].join(", ")}</p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppCTA />
    </div>
  );
}
