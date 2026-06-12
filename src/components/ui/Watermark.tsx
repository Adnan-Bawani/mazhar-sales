"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface WatermarkProps {
  position?: "left" | "right" | "center";
  className?: string;
}

export default function Watermark({ position = "right", className = "" }: WatermarkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  
  // Subtle parallax effect (5px max as requested)
  const y = useTransform(scrollYProgress, [0, 1], [5, -5]);

  // Positioning classes - extending partially outside viewport edges
  let posClass = "";
  if (position === "right") posClass = "-right-[300px] md:-right-[400px]";
  if (position === "left") posClass = "-left-[300px] md:-left-[400px]";
  if (position === "center") posClass = "left-1/2 -translate-x-1/2";

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] opacity-[0.04] dark:opacity-[0.04] dark:invert pointer-events-none select-none z-0 ${posClass} ${className}`}
    >
      <Image
        src="/images/watermark-logo.png"
        alt=""
        fill
        className="object-contain"
        sizes="(max-width: 768px) 600px, 1200px"
        priority={false}
      />
    </motion.div>
  );
}
