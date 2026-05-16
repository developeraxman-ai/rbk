import { notFound } from "next/navigation";

import AdminEventForm from "@/components/AdminEventForm";
import DeleteEventButton from "@/components/DeleteEventButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEventById } from "@/lib/event-service";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const event = await getEventById(id);

  return {
    title: event ? `Edit ${event.title}` : "Edit Function",
  };
}

export default async function EditEventPage({ params }) {
  const { id } = await params;
  const event = await getEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-lg">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Edit</p>
            <CardTitle className="mt-2">{event.title}</CardTitle>
          </div>
          <DeleteEventButton eventId={event._id} />
        </CardHeader>
        <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
          Update function details, Cloudinary media, event type, date, home-page featured placement,
          and event testimonials.
        </CardContent>
      </Card>
      <AdminEventForm mode="edit" event={event} />
    </div>
  );
}
