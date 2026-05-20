"use client";

import { tools } from "@/config/tools";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 100, 
    scale: 1.1,
    skewY: 5 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    skewY: 0,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 20,
      mass: 0.8
    } 
  },
};

const slashVariants = {
  initial: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
  hover: { 
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    transition: { duration: 0.2, ease: "circOut" }
  }
};

const glitchVariants = {
  hover: {
    x: [0, -5, 5, -2, 2, 0],
    transition: { duration: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* Aggressive Hero */}
      <section className="border-b-[16px] border-white pb-16">
        <motion.h1 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="text-[15rem] font-aggressive uppercase italic leading-[0.75] tracking-[ -0.05em] text-white"
        >
          STRIKE<br />
          <span className="text-katana">HARD</span>
        </motion.h1>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <p className="text-4xl font-aggressive uppercase italic leading-none text-zinc-500">
            RADICAL UTILITIES FOR THE MODERN RONIN. EXECUTING PROTOCOLS WITH ZERO COMPROMISE.
          </p>
          <div className="flex justify-end gap-4 font-aggressive text-4xl italic">
            <span className="text-katana underline">V.01</span>
            <span className="text-white">//</span>
            <span className="text-white">SHARP_EDGES_ONLY</span>
          </div>
        </div>
      </section>

      {/* Slam-Reveal Grid */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-0 border border-white md:grid-cols-2 lg:grid-cols-3"
      >
        {tools.map((tool) => {
          // @ts-ignore
          const Icon = LucideIcons[tool.iconName] || LucideIcons.Tool;
          
          return (
            <motion.div
              key={tool.id}
              variants={cardVariants}
              className="group relative border border-white bg-black overflow-hidden"
            >
              <Link href={tool.href} className="block p-12 h-full relative z-10">
                {/* Glitch Container */}
                <motion.div variants={glitchVariants} whileHover="hover">
                  <div className="mb-12 flex items-center justify-between">
                    <Icon size={64} className="text-white group-hover:text-black transition-colors duration-200" />
                    <span className="font-aggressive text-2xl uppercase italic tracking-[0.2em] text-katana group-hover:text-black transition-colors duration-200">
                      {tool.category}
                    </span>
                  </div>
                  
                  <h3 className="mb-6 text-7xl font-aggressive uppercase italic leading-none tracking-tighter text-white group-hover:text-black transition-colors duration-200">
                    {tool.name}
                  </h3>
                  
                  <p className="mb-16 text-2xl font-bold uppercase tracking-tight text-zinc-500 group-hover:text-black/70 transition-colors duration-200">
                    {tool.description}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-6 border-t-4 border-white pt-8 group-hover:border-black transition-colors duration-200">
                    <span className="font-aggressive text-4xl uppercase italic tracking-tighter text-white group-hover:text-black">
                      EXECUTE
                    </span>
                    <LucideIcons.Zap size={32} className="text-katana group-hover:text-black animate-pulse" />
                  </div>
                </motion.div>
              </Link>

              {/* Slash Reveal Overlay */}
              <motion.div 
                variants={slashVariants}
                initial="initial"
                whileHover="hover"
                className="absolute inset-0 bg-katana -z-0 pointer-events-none"
              />
            </motion.div>
          );
        })}
      </motion.section>

      {/* Aggressive Footer Banner */}
      <section className="bg-white p-20 text-black border-x-[20px] border-katana">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <h2 className="text-9xl font-aggressive uppercase italic leading-none tracking-tighter">
            JOIN THE<br />COUNCIL
          </h2>
          <div className="space-y-8 max-w-xl">
            <p className="text-3xl font-bold uppercase italic tracking-tight">
              WE ARE BUILDING THE ULTIMATE ARSENAL. SUBMIT YOUR TOOL REQUESTS TO THE FRONT LINES.
            </p>
            <button className="w-full bg-black text-white py-8 font-aggressive text-5xl uppercase italic hover:bg-katana transition-all">
              INITIALIZE_COMMS
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
