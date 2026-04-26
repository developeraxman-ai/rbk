import { z } from "zod";

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
