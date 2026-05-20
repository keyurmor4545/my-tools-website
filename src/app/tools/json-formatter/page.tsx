"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/ui/TextArea";
import { PrimaryButton, SecondaryButton, CopyButton } from "@/components/ui/Buttons";
import { AlertCircle } from "lucide-react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleFormat = () => {
    setError(null);
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err: any) {
      setError(`Invalid JSON: ${err.message}`);
    }
  };

  const handleMinify = () => {
    setError(null);
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
    } catch (err: any) {
      setError(`Invalid JSON: ${err.message}`);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <ToolLayout
      title="JSON Formatter & Validator"
      description="Prettify, minify, and validate your JSON data for better readability."
      actions={<SecondaryButton onClick={handleClear}>Clear</SecondaryButton>}
      input={
        <div className="space-y-4">
          <TextArea
            placeholder="Paste raw JSON here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-2">
            <PrimaryButton onClick={handleFormat} className="flex-1">
              Format JSON
            </PrimaryButton>
            <PrimaryButton onClick={handleMinify} className="flex-1">
              Minify JSON
            </PrimaryButton>
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
            placeholder="Formatted JSON will appear here..."
            value={output}
            className={`font-mono ${error ? "border-red-200 dark:border-red-900/50" : ""}`}
          />
          <div className="flex justify-end">
            <CopyButton text={output} />
          </div>
        </div>
      }
    />
  );
}
