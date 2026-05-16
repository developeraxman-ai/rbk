"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 54,
  direction = "up",
}) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: -distance, y: 18 }
      : direction === "right"
        ? { x: distance, y: 18 }
        : { x: 0, y: distance };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, ...offset, filter: "blur(14px)" }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -18% 0px" }}
      transition={{ duration: 0.92, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
