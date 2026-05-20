import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function TextArea({ label, className = "", ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-0 h-full">
      {label && (
        <label className="bg-white text-black px-6 py-2 text-xl font-aggressive uppercase italic border-b-4 border-white tracking-widest">
          {label}
        </label>
      )}
      <textarea
        className={`min-h-[500px] w-full rounded-none border-4 border-white bg-black p-10 text-2xl text-white placeholder-zinc-800 focus:outline-none focus:bg-zinc-950 focus:border-katana transition-all font-mono caret-katana ${className}`}
        style={{ caretColor: "#D30000" }}
        {...props}
      />
    </div>
  );
}
