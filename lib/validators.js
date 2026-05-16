import { z } from "zod";

import { eventCategoryValues } from "@/lib/event-categories";

const mediaSourceSchema = z.string().min(1).refine(
  (value) => value.startsWith("/") || /^https?:\/\//i.test(value),
  "Media must be a local path or a valid URL."
);

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const inquirySchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(12).max(2000),
});

export const projectSchema = z.object({
  title: z.string().min(3).max(160),
  description: z.string().min(20).max(5000),
  category: z.enum(["event", "celebrity", "wedding", "commercial"]),
  coverImage: z.string().url(),
  media: z.array(z.string().url()).default([]),
  clientName: z.string().min(2).max(120),
  featured: z.boolean().default(false),
});

export const eventSchema = z.object({
  title: z.string().min(3).max(160),
  description: z.string().min(20).max(5000),
  date: z.string().max(40).optional().nullable().default(""),
  category: z.enum(eventCategoryValues),
  coverMedia: mediaSourceSchema,
  media: z.array(mediaSourceSchema).default([]),
  featured: z.boolean().default(false),
  testimonials: z
    .array(
      z.object({
        name: z.string().min(2).max(120),
        quote: z.string().min(10).max(1000),
        role: z.string().max(120).optional().default(""),
      })
    )
    .default([]),
});

export const siteSettingsSchema = z.object({
  heroVideoUrl: mediaSourceSchema.optional().or(z.literal("")).default(""),
  heroPosterUrl: mediaSourceSchema.optional().or(z.literal("")).default(""),
  heroEyebrow: z.string().min(2).max(120).default("Celebration & Function Organisation"),
  heroTitle: z.string().min(4).max(180).default("Elegant celebrations, designed with care."),
  heroDescription: z.string().min(20).max(1200),
  media: z.record(z.string(), mediaSourceSchema.or(z.literal(""))).optional().default({}),
});
