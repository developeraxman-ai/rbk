import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getEventCategoryLabel } from "@/lib/event-categories";
import { getEventDashboardSummary } from "@/lib/event-service";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const summary = await getEventDashboardSummary();

  return (
    <div className="space-y-8">
      {summary.usingDemoContent ? (
        <div className="rounded-lg border border-primary/20 bg-primary/8 p-5 text-sm leading-7 text-muted-foreground">
          MongoDB is not configured yet, so the public site and dashboard are previewing demo
          functions. Connect MongoDB Atlas and Cloudinary to publish real admin-created functions.
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card className="rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg">Functions</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-4xl font-semibold text-foreground">
            {summary.eventCount}
          </CardContent>
        </Card>
        <Card className="rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg">Featured</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-4xl font-semibold text-foreground">
            {summary.featuredCount}
          </CardContent>
        </Card>
        {summary.categories.slice(0, 2).map((item) => (
          <Card key={item.category} className="rounded-lg">
            <CardHeader>
              <CardTitle className="text-lg">{getEventCategoryLabel(item.category)}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-4xl font-semibold text-foreground">
              {item.count}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-lg">
        <CardHeader className="flex flex-row flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Recent Functions</p>
            <CardTitle className="mt-2">Latest Published Functions</CardTitle>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <Link href="/admin/events/new">Add Function</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/admin/settings">Hero Settings</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          {summary.latestEvents.length ? (
            summary.latestEvents.map((event) => (
              <div
                key={event._id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-card px-4 py-4"
              >
                <div>
                  <p className="font-heading text-2xl text-foreground">{event.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {event.date ? formatDate(event.date) : "Date on request"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={event.featured ? "default" : "muted"}>
                    {getEventCategoryLabel(event.category)}
                  </Badge>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/admin/events/${event._id}`}>Edit</Link>
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="rounded-lg border border-dashed border-border px-4 py-8 text-sm text-muted-foreground">
              No functions have been created yet.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
