import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Search, LayoutGrid, Type, Code } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevToolsHub",
  description: "A collection of essential tools for developers and writers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex h-full bg-zinc-50 dark:bg-zinc-950">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex h-16 items-center px-6 border-b border-zinc-200 dark:border-zinc-800">
            <span className="text-xl font-bold text-blue-600">DevToolsHub</span>
          </div>
          <nav className="p-4 space-y-2">
            <div className="text-xs font-semibold uppercase text-zinc-500 px-2 py-2">Categories</div>
            <a href="/" className="flex items-center gap-3 px-3 py-2 text-zinc-700 hover:bg-zinc-100 rounded-lg dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors">
              <LayoutGrid size={18} />
              <span>All Tools</span>
            </a>
            <a href="/#text" className="flex items-center gap-3 px-3 py-2 text-zinc-700 hover:bg-zinc-100 rounded-lg dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors">
              <Type size={18} />
              <span>Text Tools</span>
            </a>
            <a href="/#developer" className="flex items-center gap-3 px-3 py-2 text-zinc-700 hover:bg-zinc-100 rounded-lg dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors">
              <Code size={18} />
              <span>Developer Tools</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 pl-64 flex flex-col min-h-screen">
          {/* Topbar */}
          <header className="sticky top-0 z-10 flex h-16 items-center border-b border-zinc-200 bg-white/80 backdrop-blur-md px-8 dark:border-zinc-800 dark:bg-zinc-900/80">
            <div className="flex-1 flex items-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input
                  type="text"
                  placeholder="Search tools..."
                  className="w-full rounded-full border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                Documentation
              </button>
            </div>
          </header>

          <main className="flex-1 p-8">
            {children}
          </main>

          <footer className="border-t border-zinc-200 p-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
            © 2026 DevToolsHub. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
