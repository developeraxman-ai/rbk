import CeremonialCraftSection from "@/components/CeremonialCraftSection";
import EventHighlights from "@/components/EventHighlights";
import FeaturedEvents from "@/components/FeaturedEvents";
import EventNumbersSection from "@/components/EventNumbersSection";
import HeroVideoSection from "@/components/HeroVideoSection";
import PlanningFlowSection from "@/components/PlanningFlowSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustSection from "@/components/TrustSection";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import WhyChooseSection from "@/components/WhyChooseSection";
import { dummyEventMedia } from "@/lib/dummy-event-media";
import { getPublicEvents } from "@/lib/event-service";
import { getSeoImage } from "@/lib/seo";
import { resolveSiteMediaMap } from "@/lib/site-media";
import { getSiteSettings } from "@/lib/site-settings-service";

export const metadata = {
  title: "RBK Events | Celebration & Function Organisation",
  description:
    "RBK Events creates elegant Indian celebrations, birthday parties, corporate events, decor, stage, guest flow, photo, video, and end-to-end function coordination.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RBK Events | Celebration & Function Organisation",
    description:
      "Elegant Indian celebration planning for functions, birthday parties, corporate events, decor, stage, guest flow, photo, video, and polished coordination.",
    url: "/",
    siteName: "RBK Events",
    images: [{ url: getSeoImage(dummyEventMedia.ceremonyStage), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RBK Events",
    description: "Elegant Indian celebration, birthday party, and corporate event organisation.",
    images: [getSeoImage(dummyEventMedia.ceremonyStage)],
  },
};

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [featuredEvents, siteSettings] = await Promise.all([
    getPublicEvents({ featured: true }),
    getSiteSettings(),
  ]);
  const siteMedia = resolveSiteMediaMap(siteSettings);

  return (
    <div>
      <HeroVideoSection
        heroVideoSrc={siteMedia.homeHeroVideo || dummyEventMedia.heroVideo}
        fallbackImage={siteMedia.homeHeroPoster || dummyEventMedia.ceremonyStage}
        eyebrow={siteSettings.heroEyebrow}
        title={siteSettings.heroTitle}
        description={siteSettings.heroDescription}
        featuredEvents={featuredEvents}
      />
      <EventNumbersSection />
      <FeaturedEvents events={featuredEvents} />
      <ServicesSection />
      <CeremonialCraftSection imageSrc={siteMedia.homeCraftImage} />
      <PlanningFlowSection />
      <WhyChooseSection imageSrc={siteMedia.homeWhyChooseImage} />
      <EventHighlights
        items={[
          { src: siteMedia.homeHighlightVideo, alt: "RBK Events ceremony video highlight" },
          { src: siteMedia.homeHighlightStage, alt: "RBK Events ceremony decor highlight" },
          { src: siteMedia.homeHighlightReception, alt: "RBK Events reception highlight" },
          { src: siteMedia.homeHighlightEngagement, alt: "RBK Events engagement highlight" },
          { src: siteMedia.homeHighlightGuests, alt: "RBK Events guest gathering highlight" },
        ]}
      />
      <TrustSection />
      <TestimonialsSection />
      <WhatsAppCTA />
    </div>
  );
}
