import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: `${siteName} | 성장주 아카이브`, template: `%s | ${siteName}` }, description: "미래 산업 기업의 사업모델, 성장 동력, 핵심 지표, 리스크를 정리한 성장주 아카이브", openGraph: { siteName, locale: "ko_KR", type: "website" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body><SiteHeader /><main>{children}</main><SiteFooter /></body></html>; }
