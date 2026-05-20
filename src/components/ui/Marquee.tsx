"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  reverse?: boolean;
}

export function Marquee({ text, reverse = false }: MarqueeProps) {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white bg-black py-2">
      <motion.div
        animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {[...Array(20)].map((_, i) => (
          <span key={i} className="mx-4 font-aggressive text-2xl uppercase tracking-tighter text-white">
            {text} <span className="text-katana">///</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
