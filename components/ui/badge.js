import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em]",
  {
    variants: {
      variant: {
        default: "border-primary/30 bg-primary/10 text-primary",
        muted: "border-border bg-muted text-muted-foreground",
        outline: "border-border bg-card/70 text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
