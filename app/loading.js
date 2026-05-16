export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-primary/75">
        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        Loading Events
      </div>
    </div>
  );
}
