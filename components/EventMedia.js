/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

import { getOptimizedImageUrl, getOptimizedVideoUrl } from "@/lib/media";
import { cn, isVideoUrl } from "@/lib/utils";

function canUseNextImage(src = "") {
  return src.startsWith("/") || src.includes("res.cloudinary.com");
}

export default function EventMedia({
  src,
  alt,
  className,
  mediaClassName,
  imageClassName,
  videoClassName,
  sizes = "100vw",
  priority = false,
  autoPlay = false,
  controls = false,
  loop = false,
  muted = true,
}) {
  if (!src) {
    return (
      <div
        className={cn(
          "relative grid min-h-48 place-items-center overflow-hidden bg-white/[0.04] text-sm text-muted-foreground",
          className
        )}
      >
        Media pending
      </div>
    );
  }

  const baseMediaClassName = cn("h-full w-full object-cover", mediaClassName);

  return (
    <div className={cn("relative overflow-hidden bg-black", className)}>
      {isVideoUrl(src) ? (
        <video
          src={getOptimizedVideoUrl(src)}
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
          muted={muted}
          playsInline
          className={cn(baseMediaClassName, videoClassName)}
        />
      ) : canUseNextImage(src) ? (
        <Image
          src={getOptimizedImageUrl(src)}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn(baseMediaClassName, imageClassName)}
        />
      ) : (
        <img
          src={getOptimizedImageUrl(src)}
          alt={alt}
          className={cn(baseMediaClassName, imageClassName)}
        />
      )}
    </div>
  );
}
