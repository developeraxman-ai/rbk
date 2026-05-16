import { contactInfo, profileIdentity } from "@/lib/profile-content";

export const defaultWhatsappMessage = `Hi ${profileIdentity.brandName}, I would like to discuss a function event.`;

export function getWhatsappHref(message = defaultWhatsappMessage) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || contactInfo.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getEventWhatsappHref(eventTitle) {
  const eventReference = eventTitle ? `${eventTitle} or a similar function` : "a function";
  return getWhatsappHref(
    `Hi ${profileIdentity.brandName}, I would like to discuss ${eventReference}.`
  );
}
