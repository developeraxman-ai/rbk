import Link from "next/link";

import { profileIdentity } from "@/lib/profile-content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-8 sm:py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary sm:tracking-[0.35em]">{profileIdentity.brandName}</p>
          <h2 className="font-heading text-2xl leading-tight text-foreground sm:text-3xl">
            Cinematic event experiences built with atmosphere, timing, and unforgettable imagery.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            Led by {profileIdentity.name}, {profileIdentity.brandName} creates live-event visuals
            with a film-first eye and a strong sense of presence.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-muted-foreground sm:justify-self-end">
          <Link href="/industry" className="hover:text-foreground">
            Celebrity
          </Link>
          <Link href="/portfolio" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link href="/login" className="hover:text-foreground">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
