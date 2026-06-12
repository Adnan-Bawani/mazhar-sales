"use client";

import { motion } from "framer-motion";
import MediaShowcase from "@/components/ui/MediaShowcase";
import Watermark from "@/components/ui/Watermark";

const APPLIANCES = [
  {
    id: "pressure-cooker",
    name: "Pressure Cooker",
    desc: "Valve replacement, gasket fitting, and handle repairs to ensure complete kitchen safety.",
    image: "/images/appliances/pressure-cooker.jpg",
  },
  {
    id: "ceiling-fan",
    name: "Ceiling Fan Servicing",
    desc: "Winding repairs, capacitor changes, and bearing greasing for silent, high-speed performance.",
    image: "/images/appliances/ceiling-fan.jpg",
  },
  {
    id: "geyser",
    name: "Geyser & Water Heater",
    desc: "Element replacement, thermostat checks, and tank leakage sealing for safe, continuous hot water.",
    image: "/images/appliances/geyser.jpg",
  },
  {
    id: "gas-stove",
    name: "Gas Stove Repair",
    desc: "Complete servicing, flame adjustment, and pipe leakage detection for all leading kitchen stove brands.",
    image: "/images/appliances/gas-stove.jpg",
  },
  {
    id: "washing-machine",
    name: "Washing Machine",
    desc: "Expert motherboard repair, drum balancing, and motor replacement for front-load and top-load units.",
    image: "/images/appliances/washing-machine.jpg",
  },
  {
    id: "refrigerator",
    name: "Refrigerator & Cooling",
    desc: "Advanced cooling diagnostics, gas refilling, and compressor replacement to keep your food fresh.",
    image: "/images/appliances/refrigerator.jpg",
  },
  {
    id: "microwave",
    name: "Microwave Repair",
    desc: "Magnetron replacement, panel fixes, and heating element repairs for premium standalone ovens.",
    image: "/images/appliances/microwave.jpg",
  },
  {
    id: "oven",
    name: "Oven Repair",
    desc: "Thermostat calibration, door seal replacement, and heating element fixes for built-in and electric ovens.",
    image: "/images/appliances/oven.jpg",
  },
  {
    id: "mixer-grinder",
    name: "Mixer & Grinder",
    desc: "Motor rewinding, blade sharpening, and switch repairs for your essential heavy-duty grinders.",
    image: "/images/appliances/mixer-grinder.jpg",
  },
  {
    id: "blender",
    name: "Blender Repair",
    desc: "Coupler replacement, jar leakage fixes, and motor servicing for smooth, daily blending.",
    image: "/images/appliances/blender.jpg",
  },
  {
    id: "electric-iron",
    name: "Electric Iron",
    desc: "Thermostat fixes, wire changes, and steam plate cleaning to ensure your clothes always look sharp.",
    image: "/images/appliances/electric-iron.jpg",
  },
  {
    id: "toaster",
    name: "Toaster Repair",
    desc: "Heating coil replacement and pop-up mechanism servicing for perfectly toasted mornings.",
    image: "/images/appliances/toaster.jpg",
  },
];

export default function ApplianceShowcase() {
  return (
    <section className="relative w-full bg-transparent py-32 font-sans overflow-hidden">
      <Watermark position="left" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black font-cabinet text-primary dark:text-white mb-6 uppercase"
          >
            Premium Repair <span className="text-secondary">Categories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            We specialize in diagnosing and fixing a wide range of household appliances with genuine parts and unmatched expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {APPLIANCES.map((app, index) => (
            <motion.div 
              key={app.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 mb-6 premium-shadow relative border border-slate-200/60 dark:border-slate-700/60">
                <MediaShowcase 
                  src={app.image} 
                  alt={app.name} 
                  className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="px-2">
                <h3 className="text-2xl font-black font-cabinet text-primary dark:text-white mb-2 uppercase group-hover:text-secondary dark:group-hover:text-secondary transition-colors duration-300">
                  {app.name}
                </h3>
                <p className="text-base text-muted-foreground font-medium leading-relaxed">
                  {app.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
