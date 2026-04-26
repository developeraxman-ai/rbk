import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">Frame Not Found</p>
        <h1 className="font-heading text-5xl text-foreground">The page you&apos;re looking for is off the reel.</h1>
        <p className="text-base leading-8 text-muted-foreground">
          Head back to the selected work and continue through the story.
        </p>
        <Button asChild size="lg">
          <Link href="/portfolio">Back to Work</Link>
        </Button>
      </div>
    </div>
  );
}
