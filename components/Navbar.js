import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { profileIdentity } from "@/lib/profile-content";

const links = [
  { href: "/", label: "Home" },
  { href: "/industry", label: "Celebrity" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-primary/20 bg-black/40 sm:h-12 sm:w-12">
            <Image
              src="/rbk/rbk-events-logo.svg"
              alt={profileIdentity.brandName}
              fill
              sizes="(max-width: 640px) 40px, 48px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-heading text-lg font-semibold uppercase tracking-[0.1em] text-primary sm:text-xl sm:tracking-[0.18em]">
              {profileIdentity.brandName}
            </p>
            <p className="hidden text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
              {profileIdentity.name}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild variant="outline" size="sm" className="hidden border-primary/30 sm:inline-flex">
          <Link href="/portfolio">View Work</Link>
        </Button>
      </div>

      <nav className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-4 pb-3 text-[12px] uppercase tracking-[0.14em] text-muted-foreground md:hidden">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 hover:text-foreground">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
