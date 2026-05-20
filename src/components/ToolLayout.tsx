import React from "react";

interface ToolLayoutProps {
  title: string;
  description: string;
  input: React.ReactNode;
  output: React.ReactNode;
  actions?: React.ReactNode;
}

export function ToolLayout({ title, description, input, output, actions }: ToolLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>
      </header>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Input</h2>
            {actions && <div className="flex gap-2">{actions}</div>}
          </div>
          {input}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Output</h2>
          </div>
          {output}
        </div>
      </div>
    </div>
  );
}
