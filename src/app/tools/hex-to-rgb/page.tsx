"use client";

import { useState, useEffect } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/ui/TextArea";
import { SecondaryButton, CopyButton } from "@/components/ui/Buttons";
import { AlertCircle } from "lucide-react";

export default function HexToRgb() {
  const [input, setInput] = useState("#3b82f6");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleConvert();
  }, [input]);

  const handleConvert = () => {
    setError(null);
    let hex = input.trim().replace("#", "");

    if (hex.length === 3) {
      hex = hex.split("").map(s => s + s).join("");
    }

    if (hex.length !== 6) {
      if (input.length > 0) setError("Invalid Hex code length.");
      setOutput("");
      return;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      setError("Invalid Hex characters.");
      setOutput("");
    } else {
      setOutput(`rgb(${r}, ${g}, ${b})`);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <ToolLayout
      title="Hex to RGB Converter"
      description="Convert hex color codes to RGB values with a live preview."
      actions={<SecondaryButton onClick={handleClear}>Clear</SecondaryButton>}
      input={
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Hex Color Code
            </label>
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="#000000"
                className="flex-1 rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
              />
              <div 
                className="h-[54px] w-[54px] rounded-xl border border-zinc-200 shadow-inner dark:border-zinc-800"
                style={{ backgroundColor: error ? "transparent" : (input.startsWith("#") ? input : `#${input}`) }}
              />
            </div>
          </div>
        </div>
      }
      output={
        <div className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              <AlertCircle size={18} />
              <span>{error}</span>
            </div>
          )}
          <TextArea
            readOnly
            placeholder="rgb(0, 0, 0)"
            value={output}
            className={`min-h-[100px] text-center text-xl font-bold ${error ? "border-red-200" : ""}`}
          />
          <div className="flex justify-end">
            <CopyButton text={output} />
          </div>
        </div>
      }
    />
  );
}
