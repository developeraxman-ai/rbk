import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  industryPresence,
  pdfGallery,
  profileIdentity,
  stillPhotographyTitles,
} from "@/lib/profile-content";

export const metadata = {
  title: "Celebrity & Cinema",
};

export default function IndustryPage() {
  return (
    <section className="pb-14 sm:pb-20">
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={pdfGallery.postersB}
            alt="Kannada film industry collage"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_top] opacity-35 sm:object-top"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.7)_42%,rgba(0,0,0,0.94)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.76)_42%,rgba(0,0,0,0.44)_75%,rgba(0,0,0,0.58)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/72 to-black/28" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100svh-105px)] max-w-7xl content-end gap-8 px-4 py-10 sm:min-h-[70vh] sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5 sm:space-y-6">
            <Badge>Kannada Film Industry</Badge>
            <div className="space-y-4">
              <h1 className="font-heading text-4xl leading-tight text-white sm:text-6xl">
                Industry-facing visuals shaped around stars, sets, publicity, and audience attention.
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-white/80 sm:text-lg sm:leading-8">
                I have worked around Rocking Star Yash and other Kannada superstars through still
                photography, publicity work, promotional campaigns, and on-ground industry
                collaborations.
              </p>
            </div>
          </div>

          <div className="self-end rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md sm:p-6">
            <div className="grid gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span>Brand</span>
                <span className="text-right text-foreground">{profileIdentity.brandName}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span>Founder</span>
                <span className="text-right text-foreground">{profileIdentity.name}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Focus</span>
                <span className="text-right text-foreground">Celebrity, film publicity, live presence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <Badge variant="outline">Presence</Badge>
            <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-5xl">
              Publicity experience and industry access that translates naturally into celebrity and film-facing work.
            </h2>
            <div className="grid gap-3 text-sm leading-7 text-muted-foreground sm:gap-4 sm:leading-8">
              {industryPresence.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[4/5] sm:aspect-[16/10]">
              <Image
                src={pdfGallery.people}
                alt="Raghavendra B Kolar with Kannada film personalities"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <div className="relative aspect-[4/5] sm:aspect-[16/10]">
                <Image
                  src={pdfGallery.postersA}
                  alt="Film poster and publicity collage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <div className="relative aspect-[4/5] sm:aspect-[16/10]">
                <Image
                  src={pdfGallery.postersC}
                  alt="Rocking Star Yash and Kannada cinema poster collage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-5">
            <Badge variant="outline">Filmography</Badge>
            <h2 className="font-heading text-3xl leading-tight text-foreground sm:text-5xl">
              Still photography and campaign work across a broad run of Kannada titles.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              The body of work spans major star-led titles, promotional campaigns, and image-making
              built for audiences that immediately recognize screen presence.
            </p>
            <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/contact">Book RBK Events</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full border-primary/30 sm:w-auto">
                <Link href="/portfolio">View Selected Work</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 text-sm leading-7 text-muted-foreground sm:grid-cols-2">
            {stillPhotographyTitles.slice(0, 18).map((title) => (
              <div
                key={title}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
