import AdminSettingsForm from "@/components/AdminSettingsForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSiteSettings } from "@/lib/site-settings-service";

export const metadata = {
  title: "Site Settings",
};

export const dynamic = "force-dynamic";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();

  return (
    <div className="space-y-6">
      <Card className="rounded-lg">
        <CardHeader>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Site Media</p>
          <CardTitle className="mt-2">Text, Hero, and Photo Settings</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
          Control the public home hero, fallback poster, logo, About photos, Contact photo, Events
          fallback image, and fixed home-page visuals from one admin panel. Uploads use the
          existing Cloudinary media endpoint.
        </CardContent>
      </Card>
      <AdminSettingsForm settings={settings} />
    </div>
  );
}
