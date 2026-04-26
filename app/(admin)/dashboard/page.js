import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDashboardSummary } from "@/lib/project-service";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const summary = await getDashboardSummary();

  return (
    <div className="space-y-8">
      {summary.usingDemoContent ? (
        <div className="rounded-xl border border-primary/20 bg-primary/8 p-5 text-sm text-muted-foreground">
          MongoDB is not configured yet, so the dashboard is previewing demo content. Connect Atlas
          and sign in with your seeded admin credentials to publish live data.
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Projects</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-4xl font-semibold text-foreground">
            {summary.projectCount}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Featured</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 text-4xl font-semibold text-foreground">
            {summary.featuredCount}
          </CardContent>
        </Card>
        {summary.categories.slice(0, 2).map((item) => (
          <Card key={item.category}>
            <CardHeader>
              <CardTitle className="text-lg capitalize">{item.category}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-4xl font-semibold text-foreground">
              {item.count}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Recent Work</p>
            <CardTitle className="mt-2">Latest Projects</CardTitle>
          </div>
          <Button asChild>
            <Link href="/projects/new">Add Project</Link>
          </Button>
        </CardHeader>
        <CardContent className="grid gap-4 pt-0">
          {summary.latestProjects.map((project) => (
            <div
              key={project._id}
              className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-4"
            >
              <div>
                <p className="font-heading text-2xl text-foreground">{project.title}</p>
                <p className="text-sm text-muted-foreground">{project.clientName}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={project.featured ? "default" : "muted"}>{project.category}</Badge>
                <Button asChild variant="ghost" size="sm">
                  <Link href={`/projects/${project._id}`}>Edit</Link>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
