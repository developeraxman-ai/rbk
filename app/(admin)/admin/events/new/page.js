import AdminEventForm from "@/components/AdminEventForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "New Function",
};

export default function NewEventPage() {
  return (
    <div className="space-y-6">
      <Card className="rounded-lg">
        <CardHeader>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Create</p>
          <CardTitle className="mt-2">New Function</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
          Add a function with photos, videos, event type, date, category, cover media, home-page
          featured status, and event testimonials. The public events page reads from this library
          automatically.
        </CardContent>
      </Card>
      <AdminEventForm />
    </div>
  );
}
