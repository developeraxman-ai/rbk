import Link from "next/link";

import EventMedia from "@/components/EventMedia";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getEventCategoryLabel } from "@/lib/event-categories";
import { getAdminEvents } from "@/lib/event-service";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Functions Admin",
};

export const dynamic = "force-dynamic";

export default async function AdminEventsPage() {
  const events = await getAdminEvents();

  return (
    <Card className="rounded-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Function Library</p>
          <CardTitle className="mt-2">Manage Functions</CardTitle>
        </div>
        <Button asChild>
          <Link href="/admin/events/new">Create Function</Link>
        </Button>
      </CardHeader>
      <CardContent className="pt-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Cover</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Testimonials</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event._id}>
                <TableCell>
                  <EventMedia
                    src={event.coverMedia}
                    alt={event.title}
                    className="h-14 w-20 rounded-md border border-border"
                  />
                </TableCell>
                <TableCell className="font-medium text-foreground">{event.title}</TableCell>
                <TableCell>{getEventCategoryLabel(event.category)}</TableCell>
                <TableCell>{event.date ? formatDate(event.date) : "On request"}</TableCell>
                <TableCell>{event.featured ? "Yes" : "No"}</TableCell>
                <TableCell>{event.testimonials?.length || 0}</TableCell>
                <TableCell className="text-right">
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/admin/events/${event._id}`}>Edit</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {!events.length ? (
          <p className="rounded-lg border border-dashed border-border px-4 py-8 text-sm text-muted-foreground">
            No functions yet. Create the first function to publish it on the public events page.
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
}
