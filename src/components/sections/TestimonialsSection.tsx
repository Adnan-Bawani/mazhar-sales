"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import Watermark from "@/components/ui/Watermark";

const testimonials = [
  {
    name: "Ahmed Shaikh",
    review: "Mazhar Bhai is very professional. Repaired my washing machine on the same day. Extremely fair pricing and excellent service.",
  },
  {
    name: "Imran Khan",
    review: "Had a gas stove issue that multiple mechanics couldn't fix. Decent Electricals fixed it in an hour. Highly recommended!",
  },
  {
    name: "Yusuf Memon",
    review: "Very trustworthy and fast repair service. My refrigerator was leaking, and they sorted it out quickly. Proper Mumbai style fast service.",
  },
  {
    name: "Amina Shaikh",
    review: "Polite staff and expert mechanics. Brought my microwave here and it's working like brand new. Mazhar Bhai's helpful nature stands out.",
  },
  {
    name: "Fatima Ansari",
    review: "I have been their customer for years. The repair quality is always top-notch and they never overcharge. Perfect for all family appliances.",
  },
  {
    name: "Mohammed Qureshi",
    review: "Outstanding service. The washing machine repair was done so smoothly, and they even explained what went wrong. Very professional.",
  },
  {
    name: "Rajesh Sharma",
    review: "Quick response and very transparent with their pricing. I was really impressed by how fast they diagnosed my oven's problem.",
  },
  {
    name: "Sunil Patil",
    review: "Mazhar Bhai is a gem. Friendly, knowledgeable, and gets the job done right the first time. The repair charges were very reasonable.",
  },
  {
    name: "Rohit Jadhav",
    review: "Excellent work! My gas stove is functioning perfectly now. Finding an honest repair shop is hard, but Decent Electricals is exactly that.",
  },
  {
    name: "Nilesh Pawar",
    review: "Superb repair quality. The team was prompt, identified the issue with my AC instantly, and fixed it efficiently.",
  },
  {
    name: "Sneha Deshmukh",
    review: "Very professional from start to finish. I completely trust them with my appliances. Fair pricing and exceptional service quality.",
  },
];

// Double the array for seamless infinite looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
      <Watermark position="right" />
      <div className="container mx-auto px-6 max-w-7xl mb-12 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-cabinet font-black text-primary dark:text-white mb-4 uppercase"
        >
          Customer <span className="text-secondary">Reviews</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
        >
          Trusted by Mumbai families since 1980. Here is what our community says about our repair quality and service.
        </motion.p>
      </div>

      <div 
        className="relative w-full flex overflow-x-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max px-4"
          animate={{ x: isHovered ? undefined : "-50%" }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="w-[320px] md:w-[400px] flex-shrink-0 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 premium-shadow dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-1 mb-4 text-[#FFB800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-6 italic">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center font-bold text-primary dark:text-white uppercase">
                  {testimonial.name.charAt(0)}
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white font-cabinet uppercase tracking-wide">
                  {testimonial.name}
                </h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
