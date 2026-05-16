import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-5">
      <div className="max-w-xl space-y-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">Page Not Found</p>
        <h1 className="font-heading text-5xl text-foreground">This event moment is not on the schedule.</h1>
        <p className="text-base leading-8 text-muted-foreground">
          Head back to the event library and continue through RBK Events.
        </p>
        <Button asChild size="lg">
          <Link href="/events">Back to Events</Link>
        </Button>
      </div>
    </div>
  );
}
