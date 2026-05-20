"use client";

import React from "react";
import { motion } from "framer-motion";

interface ToolLayoutProps {
  title: string;
  description: string;
  input: React.ReactNode;
  output: React.ReactNode;
  actions?: React.ReactNode;
}

export function ToolLayout({ title, description, input, output, actions }: ToolLayoutProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="mx-auto max-w-full space-y-20 pb-32"
    >
      <header className="border-l-[24px] border-katana pl-12 py-8 bg-zinc-950">
        <h1 className="text-[10rem] font-aggressive uppercase italic leading-[0.8] tracking-tighter text-white">
          {title}
        </h1>
        <p className="mt-8 text-4xl font-aggressive uppercase italic text-zinc-600 max-w-4xl leading-tight tracking-tight">
          {description}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 border-[8px] border-white">
        <div className="flex flex-col border-r-[8px] border-white min-h-[600px]">
          <div className="flex items-center justify-between p-8 border-b-[8px] border-white bg-white text-black">
            <h2 className="text-4xl font-aggressive uppercase italic tracking-widest">Input_Stream</h2>
            {actions && <div className="flex gap-6">{actions}</div>}
          </div>
          <div className="flex-1 bg-black">
            {input}
          </div>
        </div>

        <div className="flex flex-col bg-black min-h-[600px]">
          <div className="flex items-center justify-between p-8 border-b-[8px] border-white bg-black">
            <h2 className="text-4xl font-aggressive uppercase italic tracking-widest text-white">System_Output</h2>
          </div>
          <div className="flex-1">
            {output}
          </div>
        </div>
      </div>

      {/* Warning Bar */}
      <div className="bg-katana py-4 overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="font-aggressive text-3xl uppercase italic text-black"
        >
          WARNING: SYSTEM UNDER HIGH LOAD // DATA STRIKE IN PROGRESS // NO RADIUS DETECTED // WARNING: SYSTEM UNDER HIGH LOAD // DATA STRIKE IN PROGRESS // NO RADIUS DETECTED // 
        </motion.div>
      </div>
    </motion.div>
  );
}
