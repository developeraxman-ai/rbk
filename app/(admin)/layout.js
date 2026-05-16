import AdminShell from "@/components/AdminShell";
import { resolveSiteMediaMap } from "@/lib/site-media";
import { getSiteSettings } from "@/lib/site-settings-service";

export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }) {
  const siteSettings = await getSiteSettings();
  const siteMedia = resolveSiteMediaMap(siteSettings);

  return <AdminShell logoSrc={siteMedia.brandLogo}>{children}</AdminShell>;
}
