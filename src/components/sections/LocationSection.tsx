"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import Watermark from "@/components/ui/Watermark";

export default function LocationSection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      <Watermark position="left" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cabinet font-black text-primary dark:text-white mb-4 uppercase"
          >
            Find Our <span className="text-secondary">Workshop</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
          >
            Conveniently located in the heart of Mumbai. Visit us for immediate diagnostic services and fast repairs.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          
          {/* Location Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 premium-shadow dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div>
              <div className="w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-white flex items-center justify-center mb-8">
                <MapPin size={32} />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white font-cabinet uppercase mb-6">
                Shop Address
              </h3>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                  <MapPin className="mt-1 flex-shrink-0 text-secondary" size={20} />
                  <p className="font-medium leading-relaxed">
                    Shop No. 1/A, 89/91, <br/>
                    Pandorwala Tower, <br/>
                    Zakaria Masjid Street (Chawal Galli), <br/>
                    Mumbai - 400009, <br/>
                    Maharashtra, India
                  </p>
                </li>
                <li className="flex items-start gap-4 text-slate-700 dark:text-slate-300">
                  <Clock className="mt-1 flex-shrink-0 text-accent" size={20} />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">Working Hours</p>
                    <p className="font-medium">10:00 A.M. TO 8:00 P.M.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Pandorwala+Tower,+Zakaria+Masjid+Street,+Mumbai"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all font-satoshi text-lg shadow-lg hover:-translate-y-1"
              >
                <Navigation size={20} /> Get Directions
              </a>
            </div>
          </motion.div>

          {/* Google Maps Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 h-[400px] md:h-auto min-h-[400px] rounded-3xl overflow-hidden premium-shadow dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] bg-slate-200 dark:bg-slate-800 relative group"
          >
            <div className="absolute inset-0 z-10 pointer-events-none border border-slate-200 dark:border-slate-800 rounded-3xl" />
            <iframe
              title="Decent Electricals Location Map"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Pandorwala%20Tower,%20Zakaria%20Masjid%20Street,%20Mumbai&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] group-hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
