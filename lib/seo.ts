import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const siteName = "텐배거 웨어하우스";
export function metadata(title: string, description: string, path = "/"): Metadata {
  const url = `${siteUrl}${path}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, siteName, locale: "ko_KR", type: "website" } };
}
