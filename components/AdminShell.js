"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Film, LayoutDashboard, PlusCircle, SquareStack } from "lucide-react";

import LogoutButton from "@/components/LogoutButton";
import { profileIdentity } from "@/lib/profile-content";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: SquareStack },
  { href: "/projects/new", label: "New Project", icon: PlusCircle },
];

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  if (isLogin) {
    return children;
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto grid min-h-screen max-w-[1600px] lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-white/10 bg-black/70 px-6 py-8 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-primary/20 bg-black/40">
              <Image
                src="/rbk/rbk-events-logo.svg"
                alt={profileIdentity.brandName}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-heading text-2xl text-foreground">{profileIdentity.brandName}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Admin</p>
            </div>
          </div>

          <nav className="mt-12 grid gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm text-muted-foreground hover:bg-white/[0.04] hover:text-foreground",
                    active && "bg-white/[0.06] text-foreground"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-12 rounded-xl border border-primary/20 bg-primary/8 p-5">
            <p className="text-xs uppercase tracking-[0.32em] text-primary">Studio Note</p>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Use Cloudinary for uploads and MongoDB Atlas for publishing live work.
            </p>
          </div>
        </aside>

        <div className="flex min-h-screen flex-col">
          <header className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Control Room</p>
              <h1 className="font-heading text-3xl text-foreground">Publishing Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                View Site
              </Link>
              <LogoutButton />
            </div>
          </header>
          <main className="flex-1 px-5 py-8 sm:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
