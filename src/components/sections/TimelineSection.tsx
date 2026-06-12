"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MediaShowcase from "@/components/ui/MediaShowcase";
import Watermark from "@/components/ui/Watermark";

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative py-32 bg-transparent w-full overflow-hidden">
      <Watermark position="right" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-4">
                Our Legacy
              </h2>
              <h3 className="text-4xl md:text-6xl font-black font-cabinet text-primary dark:text-white leading-tight mb-6 uppercase">
                Family Owned <br/>
                <span className="text-accent">Since 1980</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over four decades, Decent Electricals has been the trusted name in household appliance repair. 
                Our commitment to premium service and expert technical knowledge has made us a cornerstone of the community.
              </p>
            </motion.div>

            {/* Counters */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-l-4 border-secondary pl-6"
              >
                <h4 className="text-4xl font-black font-cabinet text-primary dark:text-white mb-2">45+</h4>
                <p className="text-muted-foreground font-bold uppercase text-sm">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="border-l-4 border-accent pl-6"
              >
                <h4 className="text-4xl font-black font-cabinet text-primary dark:text-white mb-2">10k+</h4>
                <p className="text-muted-foreground font-bold uppercase text-sm">Appliances Repaired</p>
              </motion.div>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[600px] relative rounded-3xl overflow-hidden premium-shadow bg-background">
            <motion.div 
              style={{ y }} 
              className="absolute inset-[-10%] bg-[#E2E8F0] dark:bg-slate-800 flex items-center justify-center"
            >
              <MediaShowcase 
                src="/images/shop/shop-front.jpg" 
                alt="Decent Electricals Shop Front"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
