import Link from "next/link";
import { MessageCircle } from "lucide-react";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { contactInfo, profileIdentity } from "@/lib/profile-content";
import { getEventWhatsappHref, getWhatsappHref } from "@/lib/whatsapp";

export default function WhatsAppCTA({
  title = "Let the next function feel effortless and beautiful.",
  description = "Share the function type, date, city, guest count, decor mood, and media needs. RBK Events will help organise the experience from planning to gallery.",
  eventTitle,
}) {
  const href = eventTitle ? getEventWhatsappHref(eventTitle) : getWhatsappHref();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 sm:py-24">
      <ScrollReveal>
      <div className="relative overflow-hidden rounded-lg border border-border bg-[#173d35] p-6 text-[#fffaf2] shadow-[var(--shadow-glow)] sm:p-10 jali-pattern">
        <div className="absolute inset-x-0 top-0 h-2 ceremonial-strip" aria-hidden="true" />
        <div className="absolute inset-0 grain-overlay opacity-50" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              {profileIdentity.brandName}
            </p>
            <h2 className="max-w-3xl text-balance font-heading text-4xl leading-tight text-[#fffaf2] sm:text-6xl">
              {title}
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-[#fffaf2]/72 sm:text-base sm:leading-8">
              {description}
            </p>
            <p className="text-sm text-[#fffaf2]/72">{contactInfo.phone}</p>
          </div>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={href} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              Book Function on WhatsApp
            </Link>
          </Button>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
