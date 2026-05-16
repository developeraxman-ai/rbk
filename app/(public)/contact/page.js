import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import EventMedia from "@/components/EventMedia";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dummyEventMedia } from "@/lib/dummy-event-media";
import { contactInfo, profileIdentity } from "@/lib/profile-content";
import { getSeoImage } from "@/lib/seo";
import { resolveSiteMediaMap } from "@/lib/site-media";
import { getSiteSettings } from "@/lib/site-settings-service";
import { getWhatsappHref } from "@/lib/whatsapp";

export const metadata = {
  title: "Contact",
  description: "Contact RBK Events for ceremonies, receptions, engagements, birthday functions, private celebrations, select corporate functions, decor, and event media.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact RBK Events",
    description:
      "Share your date, city, guest count, decor mood, and media needs with RBK Events.",
    url: "/contact",
    siteName: "RBK Events",
    images: [{ url: getSeoImage(dummyEventMedia.ceremonyStage), width: 1200, height: 630 }],
  },
};

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();
  const siteMedia = resolveSiteMediaMap(siteSettings);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-7">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">Contact</p>
            <h1 className="text-balance font-heading text-5xl leading-[0.96] text-foreground sm:text-7xl">
              Plan your celebration with RBK Events.
            </h1>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Share the function type, date, city, guest count, decor mood, and media needs. RBK
              Events will respond with a clear path for ceremonies, receptions, engagements,
              birthdays, traditional functions, and select corporate gatherings.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <Mail className="h-4 w-4 text-primary" />
              <span className="break-all text-foreground">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-foreground">Bengaluru and function destinations on request</span>
            </div>
          </div>

          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href={getWhatsappHref()} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              Message on WhatsApp
            </Link>
          </Button>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-border">
            <EventMedia
              src={siteMedia.contactFeatureImage}
              alt={`${profileIdentity.brandName} event and campaign visuals`}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="absolute inset-0"
              mediaClassName="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        </div>

        <Card className="self-start rounded-lg">
          <CardContent className="p-5 sm:p-7">
            <div className="mb-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-primary">Function Inquiry</p>
              <h2 className="font-heading text-3xl leading-tight text-foreground">
                Tell us what needs to be organised.
              </h2>
            </div>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
