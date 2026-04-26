import Image from "next/image";
import Link from "next/link";

import { getOptimizedImageUrl } from "@/lib/media";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/project/${project.slug}`}
      className="group relative mb-5 block overflow-hidden rounded-xl border border-white/10 bg-card sm:mb-6"
    >
      <div className="relative min-h-[360px] overflow-hidden sm:min-h-[320px]">
        <Image
          src={getOptimizedImageUrl(project.coverImage)}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-90" />
      </div>
      <div className="absolute inset-x-0 bottom-0 space-y-2 p-4 sm:p-5">
        <p className="text-[11px] uppercase tracking-[0.18em] text-primary/90 sm:text-xs sm:tracking-[0.32em]">{project.category}</p>
        <h3 className="font-heading text-2xl leading-tight text-white sm:text-3xl">{project.title}</h3>
        <p className="text-sm text-white/65">{project.clientName}</p>
      </div>
    </Link>
  );
}
