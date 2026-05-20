"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/ui/TextArea";
import { PrimaryButton, SecondaryButton, CopyButton } from "@/components/ui/Buttons";

export default function TextCaseConverter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleUpper = () => setOutput(input.toUpperCase());
  const handleLower = () => setOutput(input.toLowerCase());
  const handleTitle = () => {
    const titleCased = input
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setOutput(titleCased);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <ToolLayout
      title="Text Case Converter"
      description="Easily convert your text between different cases: UPPERCASE, lowercase, and Title Case."
      actions={
        <SecondaryButton onClick={handleClear}>Clear</SecondaryButton>
      }
      input={
        <div className="space-y-4">
          <TextArea
            placeholder="Paste your text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <PrimaryButton onClick={handleUpper}>UPPERCASE</PrimaryButton>
            <PrimaryButton onClick={handleLower}>lowercase</PrimaryButton>
            <PrimaryButton onClick={handleTitle}>Title Case</PrimaryButton>
          </div>
        </div>
      }
      output={
        <div className="space-y-4">
          <TextArea
            readOnly
            placeholder="Result will appear here..."
            value={output}
          />
          <div className="flex justify-end">
            <CopyButton text={output} />
          </div>
        </div>
      }
    />
  );
}
