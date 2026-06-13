"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const APPLIANCES = [
  { src: "/images/appliances/gas-stove.jpg", alt: "Gas Stove" },
  { src: "/images/appliances/mixer-grinder.jpg", alt: "Mixer Grinder" },
  { src: "/images/appliances/pressure-cooker.jpg", alt: "Pressure Cooker" },
  { src: "/images/appliances/blender.jpg", alt: "Blender" },
  { src: "/images/appliances/ceiling-fan.jpg", alt: "Ceiling Fan" },
  { src: "/images/appliances/oven.jpg", alt: "Oven" },
  { src: "/images/appliances/microwave.jpg", alt: "Microwave" },
  { src: "/images/appliances/electric-iron.jpg", alt: "Electric Iron" },
  { src: "/images/appliances/toaster.jpg", alt: "Toaster" },
  { src: "/images/appliances/washing-machine.jpg", alt: "Washing Machine" },
  { src: "/images/appliances/refrigerator.jpg", alt: "Refrigerator" },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Preload images
    APPLIANCES.forEach((appliance) => {
      const img = new window.Image();
      img.src = appliance.src;
    });

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % APPLIANCES.length);
    }, 3000); // Auto-switch every 3 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center pt-20">
      
      {/* Background Slideshow with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={APPLIANCES[currentIndex].src}
              alt={APPLIANCES[currentIndex].alt}
              fill
              priority={currentIndex === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 z-10 bg-[rgba(0,0,0,0.45)]" />
      </motion.div>

      {/* Content Overlay */}
      <div className="container relative z-20 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
        
        {/* Left Column: Text */}
        <div className="flex flex-col gap-6 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 shadow-sm w-fit"
          >
            <span className="text-sm font-bold tracking-widest text-primary dark:text-white uppercase">Since 1980</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-white uppercase drop-shadow-sm"
          >
            DECENT <br/>
            <span className="text-secondary">ELECTRICALS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="text-xl md:text-2xl font-bold tracking-wide text-slate-200 max-w-lg uppercase drop-shadow-sm"
          >
            Gas Repairing Sales & Services
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
            className="flex flex-wrap gap-4 mt-6 font-satoshi"
          >
            <a 
              href="https://wa.me/919323703305" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#25D366] text-white font-bold text-base md:text-lg hover:bg-[#20b858] transition-all shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle size={24} />
              WhatsApp Mazhar
            </a>
            <a 
              href="https://wa.me/917498098840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-primary dark:text-white border-2 border-primary/50 dark:border-white/50 font-bold text-base md:text-lg hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary hover:border-transparent transition-all shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle size={24} />
              WhatsApp Shop
            </a>
          </motion.div>
        </div>

        {/* Right Column: Empty for background emphasis */}
        <div className="hidden lg:block"></div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-auto cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2 drop-shadow-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
      
    </section>
  );
}
