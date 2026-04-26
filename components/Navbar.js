"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { contactInfo, profileIdentity } from "@/lib/profile-content";

const links = [
  { href: "/", label: "Home" },
  { href: "/industry", label: "Celebrity" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappMessage = encodeURIComponent("Hi RBK Events, I would like to discuss an event.");
  const whatsappHref = `https://wa.me/${contactInfo.whatsapp}?text=${whatsappMessage}`;

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeSidebar}>
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

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="border-primary/30 md:hidden"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>

      <div
        className={`fixed inset-0 z-50 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close navigation overlay"
          className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSidebar}
        />

        <aside
          className={`absolute left-0 top-0 flex h-dvh w-[82vw] max-w-[340px] flex-col border-r border-white/10 bg-black px-5 py-5 shadow-[0_24px_80px_rgba(0,0,0,0.65)] transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeSidebar}>
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-primary/20 bg-black/40">
                <Image
                  src="/rbk/rbk-events-logo.svg"
                  alt={profileIdentity.brandName}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate font-heading text-lg font-semibold uppercase tracking-[0.1em] text-primary">
                  {profileIdentity.brandName}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {profileIdentity.name}
                </p>
              </div>
            </Link>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Close navigation"
              onClick={closeSidebar}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>

          <nav className="mt-10 grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeSidebar}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-4 text-sm uppercase tracking-[0.16em] text-muted-foreground hover:border-primary/30 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-3 border-t border-white/10 pt-5">
            <Button asChild className="w-full" size="lg">
              <Link href="/contact" onClick={closeSidebar}>
                Book RBK Events
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full border-primary/30" size="lg">
              <Link href={whatsappHref} target="_blank" rel="noreferrer" onClick={closeSidebar}>
                WhatsApp
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
}
