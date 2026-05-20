"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { TextArea } from "@/components/ui/TextArea";
import { SecondaryButton } from "@/components/ui/Buttons";

export default function WordCounter() {
  const [input, setInput] = useState("");

  const wordCount = input.trim() === "" ? 0 : input.trim().split(/\s+/).length;
  const charCountWithSpaces = input.length;
  const charCountWithoutSpaces = input.replace(/\s/g, "").length;
  const lineCount = input === "" ? 0 : input.split("\n").length;

  const handleClear = () => setInput("");

  return (
    <ToolLayout
      title="Word Counter"
      description="Real-time statistics for your text, including word, character, and line counts."
      actions={
        <SecondaryButton onClick={handleClear}>Clear</SecondaryButton>
      }
      input={
        <TextArea
          placeholder="Start typing or paste text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      }
      output={
        <div className="grid grid-cols-2 gap-4">
          <StatCard label="Words" value={wordCount} />
          <StatCard label="Characters" value={charCountWithSpaces} />
          <StatCard label="Chars (no spaces)" value={charCountWithoutSpaces} />
          <StatCard label="Lines" value={lineCount} />
        </div>
      }
    />
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
      <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-100">{value}</p>
    </div>
  );
}
