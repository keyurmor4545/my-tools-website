import { MetadataRoute } from "next";
import { tools } from "@/config/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-domain.com"; // Replace with your actual Vercel domain

  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...toolUrls,
  ];
}
