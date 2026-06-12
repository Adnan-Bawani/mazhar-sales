"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface MediaShowcaseProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MediaShowcase({ src, alt, className = "" }: MediaShowcaseProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  // Fallback to a high-quality placeholder if local media fails to load or isn't uploaded yet
  if (isError) {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-slate-100 ${className}`}>
        <Image
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop"
          alt="Fallback Appliance Image"
          fill
          className="object-cover opacity-80"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-slate-900/10 flex flex-col items-center justify-center">
          <span className="bg-black/50 text-white font-bold uppercase tracking-widest text-xs text-center px-4 py-2 rounded-full backdrop-blur-sm">
            Awaiting Upload: {src.split('/').pop()}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full overflow-hidden bg-slate-100 ${className}`}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-slate-200 animate-pulse"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-full"
      >
        {isVideo ? (
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsError(true)}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </motion.div>
    </div>
  );
}
