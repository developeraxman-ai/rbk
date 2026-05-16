"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { profileIdentity } from "@/lib/profile-content";
import { getWhatsappHref } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar({ logoSrc = "/rbk/rbk-events-logo.svg" }) {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappHref = getWhatsappHref();

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <header className="ceremonial-edge sticky top-0 z-40 border-b border-border bg-[#fffaf2]/88 shadow-[0_10px_36px_rgba(45,35,25,0.08)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-8 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeSidebar}>
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-border bg-card sm:h-12 sm:w-12">
            <img
              src={logoSrc}
              alt={profileIdentity.brandName}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate font-heading text-lg font-semibold uppercase tracking-[0.1em] text-primary sm:text-xl sm:tracking-[0.18em]">
              {profileIdentity.brandName}
            </p>
            <p className="hidden text-[11px] uppercase tracking-[0.3em] text-muted-foreground sm:block">
              Celebrations & Functions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="hidden sm:inline-flex">
          <Link href={whatsappHref} target="_blank" rel="noreferrer">
            Book Function
          </Link>
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
          className={`absolute inset-0 bg-[#171712]/45 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSidebar}
        />

        <aside
          className={`absolute left-0 top-0 flex h-dvh w-[82vw] max-w-[340px] flex-col border-r border-border bg-[#fffaf2] px-5 py-5 shadow-[0_24px_80px_rgba(45,35,25,0.18)] transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex min-w-0 items-center gap-3" onClick={closeSidebar}>
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-border bg-card">
                <img
                  src={logoSrc}
                  alt={profileIdentity.brandName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate font-heading text-lg font-semibold uppercase tracking-[0.1em] text-primary">
                  {profileIdentity.brandName}
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Celebrations & Functions
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
                className="rounded-lg border border-border bg-card px-4 py-4 text-sm uppercase tracking-[0.16em] text-muted-foreground hover:border-primary/30 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-3 border-t border-border pt-5">
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
