import Link from "next/link";

import { contactInfo, profileIdentity } from "@/lib/profile-content";

export default function WhatsappFloat() {
  const message = encodeURIComponent(
    `Hi ${profileIdentity.brandName}, I would like to discuss an event.`
  );
  const href = `https://wa.me/${contactInfo.whatsapp}?text=${message}`;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Message RBK Events on WhatsApp"
      className="fixed bottom-5 right-4 z-50 grid h-[52px] w-[52px] place-items-center rounded-full border border-white/15 bg-[#25D366] text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-7 sm:right-7 sm:h-14 sm:w-14"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="currentColor"
      >
        <path d="M16.04 3.2C9.12 3.2 3.5 8.82 3.5 15.74c0 2.2.58 4.36 1.68 6.26L3.4 28.8l6.96-1.78a12.46 12.46 0 0 0 5.68 1.38c6.92 0 12.54-5.62 12.54-12.54S22.96 3.2 16.04 3.2Zm0 22.96c-1.78 0-3.52-.48-5.04-1.38l-.36-.22-4.14 1.06 1.1-4.02-.24-.38a10.25 10.25 0 0 1-1.62-5.48c0-5.68 4.62-10.3 10.3-10.3s10.3 4.62 10.3 10.3-4.62 10.42-10.3 10.42Zm5.64-7.7c-.3-.16-1.82-.9-2.1-1-.28-.1-.48-.16-.68.16-.2.3-.78 1-.96 1.2-.18.2-.36.22-.66.08-.3-.16-1.28-.48-2.44-1.52-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.14-.62.14-.14.3-.36.46-.54.16-.18.2-.3.3-.5.1-.2.06-.38-.02-.54-.08-.16-.68-1.64-.94-2.24-.24-.58-.5-.5-.68-.52h-.58c-.2 0-.54.08-.82.38-.28.3-1.08 1.06-1.08 2.58s1.1 2.98 1.26 3.18c.16.2 2.16 3.3 5.24 4.62.74.32 1.3.5 1.74.64.74.24 1.42.2 1.96.12.6-.1 1.82-.74 2.08-1.46.26-.72.26-1.34.18-1.46-.08-.14-.28-.22-.58-.38Z" />
      </svg>
    </Link>
  );
}
