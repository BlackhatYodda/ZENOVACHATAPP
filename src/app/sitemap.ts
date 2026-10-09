import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/download", "/support", "/privacy", "/terms", "/child-safety", "/delete-account"].map(
    (path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.6,
    }),
  );
}
