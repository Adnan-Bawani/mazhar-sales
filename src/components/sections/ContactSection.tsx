"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Clock, Phone } from "lucide-react";
import Watermark from "@/components/ui/Watermark";

export default function ContactSection() {
  return (
    <footer className="py-24 bg-transparent relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      <Watermark position="right" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-cabinet font-black text-primary dark:text-white mb-4 uppercase"
          >
            Visit Our <span className="text-secondary">Shop</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
          >
            Serving Mumbai since 1980. Drop by our workshop or reach out instantly via WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Address */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-border dark:border-slate-800 premium-shadow dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <MapPin size={28} />
            </div>
            <h4 className="font-black text-primary dark:text-white text-2xl mb-4 font-cabinet uppercase">Our Workshop</h4>
            <p className="text-muted-foreground font-medium leading-relaxed">
              Shop No. 1/A, 89/91, Pandorwala Tower, <br/>
              Zakaria Masjid Street (Chawal Galli), <br/>
              Mumbai - 400009, Maharashtra, India
            </p>
          </motion.div>

          {/* Contact Numbers */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-border dark:border-slate-800 premium-shadow dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
              <Phone size={28} />
            </div>
            <h4 className="font-black text-primary dark:text-white text-2xl mb-4 font-cabinet uppercase">Direct Contact</h4>
            <div className="flex flex-col gap-4 w-full">
              <a href="https://wa.me/919323703305" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20b858] transition-colors font-satoshi text-lg shadow-md">
                <MessageCircle size={20} /> WhatsApp Mazhar
              </a>
              <a href="https://wa.me/917498098840" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white dark:bg-slate-800 text-primary dark:text-white border-2 border-border dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-satoshi text-lg">
                <MessageCircle size={20} /> WhatsApp Shop
              </a>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-950 border border-border dark:border-slate-800 premium-shadow dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
              <Clock size={28} />
            </div>
            <h4 className="font-black text-primary dark:text-white text-2xl mb-4 font-cabinet uppercase">Working Hours</h4>
            <div className="flex flex-col gap-2 font-medium">
              <p className="text-primary dark:text-white font-bold text-lg">Open Daily</p>
              <p className="text-muted-foreground text-lg">10:00 AM – 8:00 PM</p>
            </div>
          </motion.div>

        </div>
        
        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-muted-foreground font-medium text-sm">
            © {new Date().getFullYear()} Decent Electricals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
