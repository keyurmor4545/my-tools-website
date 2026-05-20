"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/ui/TextArea";
import { PrimaryButton, SecondaryButton, CopyButton } from "@/components/ui/Buttons";
import { AlertCircle } from "lucide-react";

export default function BinaryToText() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleConvert = () => {
    setError(null);
    try {
      const cleanInput = input.trim().replace(/\s/g, "");
      
      if (!/^[01]+$/.test(cleanInput)) {
        throw new Error("Input must contain only 0s and 1s.");
      }

      if (cleanInput.length % 8 !== 0) {
        throw new Error("Binary string length must be a multiple of 8.");
      }

      let text = "";
      for (let i = 0; i < cleanInput.length; i += 8) {
        const byte = cleanInput.substring(i, i + 8);
        text += String.fromCharCode(parseInt(byte, 2));
      }
      setOutput(text);
    } catch (err: any) {
      setError(err.message);
      setOutput("");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <ToolLayout
      title="Binary to Text Converter"
      description="Convert binary code (0s and 1s) into readable plain text."
      actions={<SecondaryButton onClick={handleClear}>Clear</SecondaryButton>}
      input={
        <div className="space-y-4">
          <TextArea
            placeholder="Enter binary code (e.g., 01001000 01100101 01101100 01101100 01101111)..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <PrimaryButton onClick={handleConvert} className="w-full">
            Convert to Text
          </PrimaryButton>
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
            placeholder="Readable text will appear here..."
            value={output}
            className={error ? "border-red-200" : ""}
          />
          <div className="flex justify-end">
            <CopyButton text={output} />
          </div>
        </div>
      }
    />
  );
}
