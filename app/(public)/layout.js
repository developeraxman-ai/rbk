import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsappFloat from "@/components/WhatsappFloat";
import { buildOrganizationJsonLd, buildServiceJsonLd, buildWebsiteJsonLd } from "@/lib/seo";
import { resolveSiteMediaMap } from "@/lib/site-media";
import { getSiteSettings } from "@/lib/site-settings-service";

export const dynamic = "force-dynamic";

export default async function PublicLayout({ children }) {
  const siteSettings = await getSiteSettings();
  const siteMedia = resolveSiteMediaMap(siteSettings);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <JsonLd
        data={[
          buildOrganizationJsonLd({
            logo: siteMedia.brandLogo,
            image: siteMedia.siteSeoImage,
          }),
          buildWebsiteJsonLd(),
          buildServiceJsonLd(),
        ]}
      />
      <ScrollProgress />
      <Navbar logoSrc={siteMedia.brandLogo} />
      <main>{children}</main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
