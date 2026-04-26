import PortfolioGrid from "@/components/PortfolioGrid";
import { Badge } from "@/components/ui/badge";
import { getPublicProjects } from "@/lib/project-service";

export const metadata = {
  title: "Selected Work",
};

export default async function PortfolioPage() {
  const projects = await getPublicProjects();

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-18">
      <div className="max-w-3xl space-y-5">
        <Badge variant="outline">Selected Work</Badge>
        <h1 className="font-heading text-4xl leading-tight text-foreground sm:text-6xl">Selected Work</h1>
        <p className="text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
          A curated edit of events, celebrity-facing work, wedding storytelling, and branded image-making framed with a cinematic eye.
        </p>
      </div>

      <div className="my-8 h-px cinematic-divider sm:my-12" />

      <PortfolioGrid projects={projects} />
    </section>
  );
}
