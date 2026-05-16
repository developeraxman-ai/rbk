"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[70] h-[5px] w-full origin-left bg-[linear-gradient(90deg,#b76535,#d9a25d,#173d35)]"
      style={{ scaleX }}
    />
  );
}
