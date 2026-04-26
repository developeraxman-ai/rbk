"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getOptimizedVideoUrl } from "@/lib/media";
import { profileIdentity } from "@/lib/profile-content";

export default function HeroSection({ heroVideoUrl, heroImageUrl, heroMobileImageUrl, highlights }) {
  return (
    <section className="relative flex min-h-[calc(100svh-105px)] items-end overflow-hidden sm:min-h-[calc(100vh-72px)]">
      {heroVideoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={getOptimizedVideoUrl(heroVideoUrl)}
        />
      ) : (
        <>
          <Image
            src={heroMobileImageUrl || heroImageUrl}
            alt={profileIdentity.brandName}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_14%] sm:hidden"
          />
          <Image
            src={heroImageUrl}
            alt={profileIdentity.brandName}
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-top sm:block"
          />
        </>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.5)_34%,rgba(0,0,0,0.9)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.78)_36%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/28 sm:via-black/25 sm:to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,179,106,0.16),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-10 pt-20 sm:px-8 sm:pb-14 sm:pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:pb-18">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 sm:space-y-7"
        >
          <Badge>{profileIdentity.brandName}</Badge>
          <div className="space-y-4">
            <p className="text-[11px] uppercase leading-6 tracking-[0.1em] text-primary/90 sm:text-xs sm:tracking-[0.38em]">
              Celebrity / Events / Weddings / Live
            </p>
            <p className="text-xs uppercase tracking-[0.1em] text-white/62 sm:text-sm sm:tracking-[0.28em]">
              Led by {profileIdentity.name}
            </p>
            <h1 className="text-balance max-w-4xl break-words font-heading text-[2.55rem] leading-[1.02] text-white sm:text-6xl sm:leading-[0.96] lg:text-7xl">
              Events and stars, framed with a cinematic eye.
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-white/80 sm:text-lg sm:leading-8">
              Through RBK Events, I shape celebrity appearances, stage properties, weddings, and
              audience-facing experiences with the discipline of cinema and the energy of live
              moments.
            </p>
          </div>
          <div className="grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
            <Button asChild size="lg" className="h-auto w-full whitespace-normal py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap">
              <Link href="/portfolio">View Selected Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-auto w-full whitespace-normal border-white/20 bg-black/20 py-3 text-center leading-tight sm:w-auto sm:whitespace-nowrap">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </div>
          <div className="hidden gap-4 border-t border-white/10 pt-6 sm:grid sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-primary/80">Primary USP</p>
              <p className="mt-2 text-sm text-white/75">Events & live experiences</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-primary/80">Broadcast</p>
              <p className="mt-2 text-sm text-white/75">Entertainment shows & promotions</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-primary/80">Film Work</p>
              <p className="mt-2 text-sm text-white/75">Features, shorts, publicity</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="hidden rounded-xl border border-white/10 bg-black/35 p-6 shadow-[var(--shadow-glow)] backdrop-blur-md sm:block"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-primary/90">Core Verticals</p>
          <div className="mt-6 grid gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-heading text-2xl text-foreground">{item.title}</p>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {item.meta}
                  </p>
                </div>
                <Link
                  href={item.href}
                  className="text-sm text-primary hover:text-primary/80"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
