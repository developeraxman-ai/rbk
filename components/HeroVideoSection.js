"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { dummyEventMedia } from "@/lib/dummy-event-media";
import { profileIdentity } from "@/lib/profile-content";
import { getWhatsappHref } from "@/lib/whatsapp";

export default function HeroVideoSection({
  heroVideoSrc,
  fallbackImage,
  eyebrow,
  title,
  description,
  featuredEvents = [],
}) {
  const videoSrc = heroVideoSrc || dummyEventMedia.heroVideo;
  const poster = fallbackImage || dummyEventMedia.ceremonyStage;

  return (
    <section className="relative flex min-h-[calc(100svh-88px)] items-end overflow-hidden border-b border-border sm:min-h-[calc(100vh-81px)]">
      <Image
        src={poster}
        alt={`${profileIdentity.brandName} cinematic event background`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <video
        key={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
        src={videoSrc}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-86"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,61,53,0.16)_0%,rgba(23,61,53,0.5)_42%,rgba(23,61,53,0.94)_100%)] sm:bg-[linear-gradient(90deg,rgba(23,61,53,0.92)_0%,rgba(23,61,53,0.78)_42%,rgba(23,61,53,0.34)_78%,rgba(23,61,53,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(23,61,53,0.62))]" />
      <div className="absolute inset-0 grain-overlay" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 pb-10 pt-24 sm:px-8 sm:pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 26, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#fffaf2]/24 bg-[#fffaf2]/12 px-3 py-2 text-xs uppercase tracking-[0.2em] text-[#fffaf2]/86 backdrop-blur-md sm:tracking-[0.32em]">
            <Sparkles className="h-3.5 w-3.5 text-[#f0c6a9]" />
            {eyebrow || "Celebration & Function Organisation"}
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-[#f0c6a9]">
              {profileIdentity.brandName}
            </p>
            <h1 className="text-balance font-heading text-[3.35rem] leading-[0.92] text-white sm:text-7xl lg:text-8xl">
              {title || "Elegant celebrations, designed with care."}
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
              {description ||
                "RBK Events plans ceremonies, receptions, engagements, haldi-mehendi functions, birthday parties, naming ceremonies, anniversaries, private celebrations, and corporate events with decor, coordination, and photo/video coverage."}
            </p>
          </div>

          <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="h-auto w-full py-3 sm:w-auto">
              <Link href="/events">
                Explore Functions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-auto w-full border-[#fffaf2]/30 bg-[#fffaf2]/10 py-3 text-[#fffaf2] sm:w-auto"
            >
              <Link href={getWhatsappHref()} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                Book Function
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 border-t border-[#fffaf2]/18 pt-5 text-sm text-[#fffaf2]/76 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#f0c6a9]">Signature Events</p>
              <p className="mt-2">Ceremonies, receptions, engagements</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#f0c6a9]">Milestones</p>
              <p className="mt-2">Birthday parties, rituals, anniversaries</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#f0c6a9]">Corporate</p>
              <p className="mt-2">Annual days, launches, team events</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="hidden self-end rounded-lg border border-[#fffaf2]/16 bg-[#fffaf2]/12 p-5 shadow-[var(--shadow-glow)] backdrop-blur-md lg:block"
        >
          <p className="text-xs uppercase tracking-[0.34em] text-[#f0c6a9]">Featured Functions</p>
          <div className="mt-5 grid gap-4">
            {featuredEvents.slice(0, 3).map((event) => (
              <Link
                key={event._id}
                href={`/events/${event.slug}`}
                className="group flex items-center justify-between gap-4 border-b border-[#fffaf2]/14 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-heading text-2xl leading-tight text-white">{event.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/52">
                    Function Gallery
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-[#f0c6a9] transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <div className="mt-5 rounded-md border border-[#f0c6a9]/25 bg-[#fffaf2]/10 p-4 text-sm leading-7 text-[#fffaf2]/76">
            Click any function to open its dedicated gallery of photos, videos, decor moments, and
            memories.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
