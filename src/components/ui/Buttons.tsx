"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const tapEffect = {
  scale: 0.9,
  skewX: "-5deg",
  transition: { duration: 0.05 }
};

export function PrimaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ backgroundColor: "#FFFFFF", color: "#000000", scale: 1.02 }}
      whileTap={tapEffect}
      className={`border-4 border-katana bg-katana px-10 py-5 font-aggressive text-4xl uppercase italic tracking-tighter text-black transition-all disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function SecondaryButton({ children, className = "", ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ backgroundColor: "#FFFFFF", color: "#000000", scale: 1.02 }}
      whileTap={tapEffect}
      className={`border-4 border-white bg-black px-10 py-5 font-aggressive text-3xl uppercase italic tracking-tighter text-white transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ backgroundColor: "#D30000", borderColor: "#D30000", color: "#000000" }}
      whileTap={tapEffect}
      className={`flex items-center gap-3 border-2 border-white bg-black px-6 py-3 font-aggressive text-2xl uppercase italic text-white transition-all ${className}`}
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div key="check" className="flex items-center gap-2">
            <Check size={24} />
            <span>Copied!</span>
          </motion.div>
        ) : (
          <motion.div key="copy" className="flex items-center gap-2">
            <Copy size={24} />
            <span>Copy Output</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
