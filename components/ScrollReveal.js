"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  distance = 26,
  direction = "up",
}) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: -distance, y: 10 }
      : direction === "right"
        ? { x: distance, y: 10 }
        : { x: 0, y: distance };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offset, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.68, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
