import { Metadata } from "next";
import { tools } from "@/config/tools";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.id === slug);

  if (!tool) {
    return {
      title: "Tool Not Found",
    };
  }

  return {
    title: `${tool.name} | DevToolsHub`,
    description: tool.description,
    openGraph: {
      title: tool.name,
      description: tool.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.name,
      description: tool.description,
    },
  };
}

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
