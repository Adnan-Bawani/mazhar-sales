"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white dark:bg-slate-900 flex items-center pt-20">
      
      {/* Background Looping Video with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <video
          src="/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light overlay for readability over any video frame */}
        <div className="absolute inset-0 z-10 bg-white/35 dark:bg-black/60" />
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
            className="text-5xl md:text-7xl font-black leading-tight text-slate-900 dark:text-white uppercase drop-shadow-sm"
          >
            DECENT <br/>
            <span className="text-secondary">ELECTRICALS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="text-xl md:text-2xl font-bold tracking-wide text-slate-800 dark:text-slate-200 max-w-lg uppercase drop-shadow-sm"
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
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#20b858] transition-all shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              WhatsApp Mazhar
            </a>
            <a 
              href="https://wa.me/917498098840" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md text-primary dark:text-white border-2 border-primary/50 dark:border-white/50 font-bold text-lg hover:bg-primary dark:hover:bg-white hover:text-white dark:hover:text-primary hover:border-transparent transition-all shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              WhatsApp Shop
            </a>
          </motion.div>
        </div>

        {/* Right Column: Empty for background emphasis */}
        <div className="hidden lg:block"></div>
      </div>
      
    </section>
  );
}
