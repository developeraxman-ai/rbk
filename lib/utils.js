import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function slugify(value = "") {
  return value
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isVideoUrl(url = "") {
  return /\/video\/upload\//.test(url) || /\.(mp4|mov|webm|m4v)$/i.test(url);
}

export function formatDate(date) {
  const input = date ? new Date(date) : new Date();

  return input.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function clampText(value = "", limit = 180) {
  if (value.length <= limit) {
    return value;
  }

  return `${value.slice(0, limit).trim()}...`;
}

export function getCloudinaryPublicUrl(url = "", transformation = "f_auto,q_auto") {
  if (!url || !url.includes("/upload/")) {
    return url;
  }

  return url.replace("/upload/", `/upload/${transformation}/`);
}
