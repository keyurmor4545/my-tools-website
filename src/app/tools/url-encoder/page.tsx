"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/ui/TextArea";
import { PrimaryButton, SecondaryButton, CopyButton } from "@/components/ui/Buttons";
import { AlertCircle } from "lucide-react";

export default function UrlEncoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleEncode = () => {
    setError(null);
    try {
      setOutput(encodeURIComponent(input));
    } catch (err) {
      setError("Failed to encode URL.");
    }
  };

  const handleDecode = () => {
    setError(null);
    try {
      setOutput(decodeURIComponent(input));
    } catch (err) {
      setError("Failed to decode URL. Ensure it is a valid encoded string.");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <ToolLayout
      title="URL Encoder / Decoder"
      description="Safely encode and decode URLs for web use."
      actions={<SecondaryButton onClick={handleClear}>Clear</SecondaryButton>}
      input={
        <div className="space-y-4">
          <TextArea
            placeholder="Enter URL or text..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex gap-2">
            <PrimaryButton onClick={handleEncode} className="flex-1">
              Encode URL
            </PrimaryButton>
            <PrimaryButton onClick={handleDecode} className="flex-1">
              Decode URL
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
            placeholder="Result will appear here..."
            value={output}
            className={error ? "border-red-200 dark:border-red-900/50" : ""}
          />
          <div className="flex justify-end">
            <CopyButton text={output} />
          </div>
        </div>
      }
    />
  );
}
