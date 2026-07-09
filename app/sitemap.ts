import type { MetadataRoute } from "next";
import { stocks } from "@/data/stocks";
import { themes } from "@/data/themes";
import { learnItems } from "@/data/learn";
import { briefs } from "@/data/briefs";
import { siteUrl } from "@/lib/seo";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { const staticPaths = ["", "/stocks", "/themes", "/learn", "/briefs", "/rankings", "/methodology", "/sources", "/disclaimer", "/privacy", "/about", "/contact"]; const dynamic = [...stocks.map((x) => `/stocks/${x.slug}`), ...themes.map((x) => `/themes/${x.slug}`), ...learnItems.map((x) => `/learn/${x.slug}`), ...briefs.map((x) => `/briefs/${x.slug}`)]; return [...staticPaths, ...dynamic].map((path) => ({ url: `${siteUrl}${path}`, lastModified: "2026-06-30", changeFrequency: "monthly", priority: path === "" ? 1 : 0.7 })); }
