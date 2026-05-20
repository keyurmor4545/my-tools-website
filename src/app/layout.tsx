import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";
import { Marquee } from "@/components/ui/Marquee";
import { Search, LayoutGrid, Type, Code, Palette } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CYBERHUB /// DEV TOOLS",
  description: "AGGRESSIVE DEVELOPMENT UTILITIES.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${anton.variable} h-full`}>
      <body className="flex h-full bg-black text-white antialiased font-sans">
        {/* Sidebar */}
        <aside className="fixed inset-y-0 left-0 w-64 border-r border-white bg-black z-50">
          <div className="flex h-20 items-center px-8 border-b border-white">
            <span className="text-4xl font-aggressive tracking-tighter text-katana leading-none">
              CYBERHUB
            </span>
          </div>
          <nav className="p-0">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 p-6 border-b border-white">
              Sectors
            </div>
            <a href="/" className="flex items-center gap-3 p-6 border-b border-white hover:bg-katana hover:text-black transition-all group font-aggressive text-xl uppercase italic">
              <LayoutGrid size={20} />
              <span>All Systems</span>
            </a>
            <a href="/#text" className="flex items-center gap-3 p-6 border-b border-white hover:bg-katana hover:text-black transition-all group font-aggressive text-xl uppercase italic">
              <Type size={20} />
              <span>Text Processing</span>
            </a>
            <a href="/#developer" className="flex items-center gap-3 p-6 border-b border-white hover:bg-katana hover:text-black transition-all group font-aggressive text-xl uppercase italic">
              <Code size={20} />
              <span>Dev Ops</span>
            </a>
            <a href="/#color" className="flex items-center gap-3 p-6 border-b border-white hover:bg-katana hover:text-black transition-all group font-aggressive text-xl uppercase italic">
              <Palette size={20} />
              <span>Visual Array</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 pl-64 flex flex-col min-h-screen">
          <Marquee text="SYSTEMS ONLINE // CYBERHUB // AGGRESSIVE UTILITIES" />
          
          {/* Topbar */}
          <header className="flex h-20 items-center border-b border-white bg-black px-12">
            <div className="flex-1 flex items-center">
              <div className="relative w-full max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white" size={18} />
                <input
                  type="text"
                  placeholder="SCAN SYSTEMS..."
                  className="w-full border border-white bg-black py-3 pl-12 pr-6 text-sm text-white placeholder-zinc-600 focus:outline-none focus:bg-white focus:text-black transition-all font-aggressive uppercase italic tracking-wider"
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="h-4 w-4 bg-katana animate-pulse"></div>
              <span className="font-aggressive text-xl italic uppercase tracking-tighter">Status: Active</span>
            </div>
          </header>

          <main className="flex-1 px-12 py-12 overflow-y-auto">
            {children}
          </main>

          <Marquee text="STAND BY // SYSTEM READY // CORE STACK 0.1.0" reverse />
          <footer className="border-t border-white p-10 text-center font-aggressive text-lg uppercase tracking-widest">
            DevToolsHub /// No Mercy /// 2026
          </footer>
        </div>
      </body>
    </html>
  );
}
