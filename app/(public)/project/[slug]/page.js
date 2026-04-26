import Image from "next/image";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { getOptimizedImageUrl, getOptimizedVideoUrl } from "@/lib/media";
import { getProjectBySlug } from "@/lib/project-service";
import { formatDate, isVideoUrl } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pb-14 sm:pb-20">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={getOptimizedImageUrl(project.coverImage)}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.74)_44%,rgba(0,0,0,0.94)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_42%,rgba(0,0,0,0.44)_75%,rgba(0,0,0,0.58)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/18" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100svh-105px)] max-w-7xl content-end gap-8 px-4 py-10 sm:min-h-[72vh] sm:gap-10 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 sm:space-y-6">
            <Badge>{project.category}</Badge>
            <div className="space-y-4">
              <h1 className="font-heading text-4xl leading-tight text-white sm:text-6xl">{project.title}</h1>
              <p className="max-w-2xl text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
                {project.description}
              </p>
            </div>
          </div>

          <div className="self-end rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md sm:p-6">
            <div className="grid gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span>Client</span>
                <span className="text-right text-foreground">{project.clientName}</span>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <span>Category</span>
                <span className="text-right text-foreground capitalize">{project.category}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span>Published</span>
                <span className="text-right text-foreground">{formatDate(project.createdAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-6">
          {(project.media?.length ? project.media : [project.coverImage]).map((item, index) => (
            <div key={`${project.slug}-${index}`} className="overflow-hidden rounded-xl border border-white/10">
              {isVideoUrl(item) ? (
                <video
                  src={getOptimizedVideoUrl(item)}
                  controls
                  playsInline
                  className="w-full bg-black"
                />
              ) : (
                <div className="relative min-h-[360px] sm:min-h-[420px]">
                  <Image
                    src={getOptimizedImageUrl(item)}
                    alt={`${project.title} media ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
