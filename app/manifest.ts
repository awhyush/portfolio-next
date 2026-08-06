import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";
import { siteName } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: profile.name,
    description: profile.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#ef233c",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
