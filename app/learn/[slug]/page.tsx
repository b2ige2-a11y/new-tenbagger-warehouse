import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { BulletList, InfoSection } from "@/components/ContentBlocks";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceBlock } from "@/components/SourceBlock";
import { getLearn, learnItems } from "@/data/learn";
import { stocks } from "@/data/stocks";
import { themes } from "@/data/themes";
import { briefs } from "@/data/briefs";
import { metadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
export function generateStaticParams() { return learnItems.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = getLearn(slug); return item ? metadata(`${item.title} 투자자가 알아야 할 핵심 개념`, `${item.shortDefinition}을 쉽게 설명하고 관련 기업과 테마를 정리합니다.`, `/learn/${item.slug}`) : {}; }
export default async function LearnDetail({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = getLearn(slug); if (!item) notFound(); const map = (source: { slug: string; name?: string; title?: string }[], values: string[]) => values.map((slug) => { const v = source.find((x) => x.slug === slug); return { slug, label: v?.name ?? v?.title ?? slug }; }); return <Container className="py-12"><div className="border-b border-[#20344c] pb-9"><p className="eyebrow">CONCEPT GUIDE</p><h1 className="mt-3 text-4xl font-semibold">{item.title}</h1><p className="mt-5 max-w-3xl text-lg text-cyan-100">{item.shortDefinition}</p></div><div className="mt-8 grid gap-5 lg:grid-cols-2"><InfoSection title="쉽게 풀어쓴 설명"><p>{item.explanation}</p></InfoSection><InfoSection title="왜 중요한가"><BulletList items={item.whyItMatters} /></InfoSection><RelatedLinks title="관련 기업" kind="stocks" items={map(stocks, item.relatedStocks)} /><RelatedLinks title="관련 테마" kind="themes" items={map(themes, item.relatedThemes)} /><RelatedLinks title="관련 브리프" kind="briefs" items={map(briefs, item.relatedBriefs)} /><RelatedLinks title="더 알아볼 개념" kind="learn" items={map(learnItems, item.nextConcepts)} /></div><section className="mt-5 panel rounded-xl p-5"><p className="eyebrow">SOURCES</p><h2 className="mt-2 font-semibold">출처 및 확인 자료</h2><div className="mt-3"><SourceBlock sources={item.sources} /></div></section><p className="mt-6 text-sm text-slate-500">마지막 업데이트: {formatDate(item.lastUpdated)} · 출처는 공식 기술 문서와 기업 공시를 우선 확인하세요.</p></Container>; }
