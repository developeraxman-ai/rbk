import Link from "next/link";
import Image from "next/image";

import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo, pdfGallery, profileIdentity } from "@/lib/profile-content";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || contactInfo.whatsapp;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-primary sm:tracking-[0.35em]">Let&apos;s Build It</p>
          <h1 className="font-heading text-4xl leading-tight text-foreground sm:text-6xl">Contact</h1>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            Share the story, date, city, and mood of the project. Whether this is a wedding, live
            event, celebrity appearance, or launch film, the goal is always the same: make it feel
            unforgettable.
          </p>

          <div className="grid gap-4 text-sm text-muted-foreground">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Phone</p>
              <p className="mt-2 text-foreground">{contactInfo.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Email</p>
              <p className="mt-2 text-foreground">{contactInfo.email}</p>
            </div>
          </div>

          <Button asChild variant="outline" size="lg" className="w-full border-primary/30 sm:w-auto">
            <Link
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </Link>
          </Button>

          <div className="relative overflow-hidden rounded-xl border border-white/10">
            <div className="relative aspect-[4/5] sm:aspect-[5/4]">
              <Image
                src={pdfGallery.portraitGlasses}
                alt={`${profileIdentity.name} portrait`}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
