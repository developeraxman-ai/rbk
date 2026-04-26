"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function ShowCarousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!items?.length) {
      return undefined;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [items]);

  if (!items?.length) {
    return null;
  }

  const activeItem = items[activeIndex];

  return (
    <div className="space-y-4 sm:space-y-5">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-black sm:aspect-[16/10]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.title}
            initial={{ opacity: 0.2, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.2, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={cn(
                activeItem.fit === "contain"
                  ? "object-contain p-4 sm:p-6"
                  : "object-cover object-center"
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-4 sm:p-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-primary/90 sm:text-xs sm:tracking-[0.3em]">{activeItem.subtitle}</p>
            <h3 className="mt-2 font-heading text-2xl leading-tight text-white sm:text-3xl">{activeItem.title}</h3>
          </div>
          <p className="hidden text-xs uppercase tracking-[0.3em] text-white/60 sm:block">
            Live Entertainment
          </p>
        </div>
      </div>

      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-3 sm:px-0 sm:pb-0">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "min-w-[178px] shrink-0 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-left sm:min-w-0 sm:px-4",
              activeIndex === index && "border-primary/40 bg-primary/10"
            )}
          >
            <p className="text-[10px] uppercase tracking-[0.16em] text-primary/80 sm:text-[11px] sm:tracking-[0.25em]">{item.subtitle}</p>
            <p className="mt-1 text-sm text-foreground sm:mt-2">{item.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
