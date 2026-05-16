"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div key={pathname}>{children}</div>;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[80] h-[5px] w-full origin-left bg-[linear-gradient(90deg,#b76535,#d9a25d,#173d35)]"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: [0, 1, 1], opacity: [0, 1, 0] }}
        transition={{ duration: 1.25, times: [0, 0.72, 1], ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 44, scale: 0.985, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.82, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
