import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { profileIdentity } from "@/lib/profile-content";
import { getWhatsappHref } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#fffaf2]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-8 sm:py-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary sm:tracking-[0.35em]">{profileIdentity.brandName}</p>
          <h2 className="font-heading text-2xl leading-tight text-foreground sm:text-3xl">
            Premium celebration organisation with elegant decor, smooth coordination, and lasting imagery.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            {profileIdentity.brandName} organises ceremonies, receptions, engagements, birthdays,
            rituals, anniversaries, and private celebrations. Corporate functions are handled too,
            with the same measured attention to atmosphere and guest flow.
          </p>
        </div>

        <div className="grid gap-3 text-sm text-muted-foreground sm:justify-self-end">
          <Link href="/events" className="hover:text-foreground">
            Events
          </Link>
          <Link href="/about" className="hover:text-foreground">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
          <Link href={getWhatsappHref()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Link>
          <Link href="/login" className="hover:text-foreground">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}
