import { tools } from "@/config/tools";
import * as LucideIcons from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Tool Directory</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Explore our collection of powerful and easy-to-use tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            // @ts-ignore - Dynamic icon component lookup
            const Icon = LucideIcons[tool.iconName] || LucideIcons.Tool;
            
            return (
              <Link
                key={tool.id}
                href={tool.href}
                className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400">
                  <Icon size={24} />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{tool.name}</h3>
                  <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    {tool.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {tool.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                  <span>Open Tool</span>
                  <LucideIcons.ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Stats or Footer Content */}
      <section className="rounded-2xl bg-blue-600 p-8 text-white">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">Need a specific tool?</h2>
            <p className="mt-1 text-blue-100">
              We're constantly adding new tools. Let us know what you'd like to see!
            </p>
          </div>
          <button className="rounded-full bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors">
            Request a Tool
          </button>
        </div>
      </section>
    </div>
  );
}
