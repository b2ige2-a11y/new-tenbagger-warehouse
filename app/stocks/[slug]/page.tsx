import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { BulletList, InfoSection } from "@/components/ContentBlocks";
import { BeginnerGuideBox } from "@/components/BeginnerGuideBox";
import { BusinessModelCards } from "@/components/BusinessModelCards";
import { HeroIllustration } from "@/components/HeroIllustration";
import { KpiWatchlist } from "@/components/KpiWatchlist";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceBlock } from "@/components/SourceBlock";
import { SummaryPanel } from "@/components/SummaryPanel";
import { SupplyChainDiagram } from "@/components/SupplyChainDiagram";
import { TagBadge } from "@/components/TagBadge";
import { WhyItMattersGrid } from "@/components/WhyItMattersGrid";
import { getStock, stocks } from "@/data/stocks";
import { briefs } from "@/data/briefs";
import { themes } from "@/data/themes";
import { learnItems } from "@/data/learn";
import { metadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() { return stocks.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const stock = getStock(slug); return stock ? metadata(`${stock.name} 기업 설명서`, `${stock.name}의 사업모델, 성장 동력, 핵심 KPI, 리스크를 한국 투자자 관점에서 정리한 정보성 아카이브입니다.`, `/stocks/${stock.slug}`) : {}; }

export default async function StockDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stock = getStock(slug);
  if (!stock) notFound();
  const findTheme = (itemSlug: string) => themes.find((item) => item.slug === itemSlug);
  const findStock = (itemSlug: string) => stocks.find((item) => item.slug === itemSlug);
  const findLearn = (itemSlug: string) => learnItems.find((item) => item.slug === itemSlug);
  const findBrief = (itemSlug: string) => briefs.find((item) => item.slug === itemSlug);
  const themeNames = stock.themes.map((itemSlug) => findTheme(itemSlug)?.name ?? itemSlug).join(" · ");
  const quickFacts = stock.quickFacts ?? [{ label: "이 회사는 무엇을 하나", value: stock.summary }, { label: "어떤 키워드로 보나", value: stock.kpis.slice(0, 2).map((item) => typeof item === "string" ? item : item.label).join(" · ") }, { label: "관련 테마", value: themeNames }];
  const businessSegments = stock.businessSegments ?? [{ title: "핵심 제품과 서비스", description: "이 기업의 제품과 서비스가 어떤 고객의 문제를 해결하는지 회사 자료를 통해 확인합니다." }, { title: "고객과 최종 시장", description: "수요가 어느 산업과 고객군에서 발생하는지 살펴봅니다." }, { title: "공급과 실행", description: "생산·조달·출시 과정이 사업 흐름에 주는 영향을 점검합니다." }];
  const whyItMatters = stock.whyItMatters ?? [{ title: "산업 속 역할", description: "미래 산업 공급망에서 이 기업이 맡는 역할을 중심으로 이해합니다." }, { title: "경쟁력", description: "기술, 고객 관계, 실행력이 어떤 차이를 만드는지 확인합니다." }, { title: "관찰 포인트", description: "성장 이야기보다 실제 수요와 수익성의 변화를 계속 점검합니다." }];
  const supplyChain = stock.supplyChain ?? [{ label: "수요 기업", description: "고객과 최종 시장의 투자·교체 수요를 확인합니다." }, { label: stock.name, description: "제품과 서비스가 공급망 안에서 맡는 역할을 봅니다." }, { label: "협력 생태계", description: "생산, 부품, 유통 파트너의 영향을 함께 살펴봅니다." }];
  const learnLinks = stock.relatedLearn.map((itemSlug) => ({ href: `/learn/${itemSlug}`, label: findLearn(itemSlug)?.title ?? itemSlug }));

  return <Container className="py-10 sm:py-14">
    <header className="border-b border-[#20344c] pb-9">
      <p className="eyebrow">기업 설명서</p>
      <div className="mt-3 flex flex-wrap items-center gap-3"><h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{stock.name}</h1><span className="rounded-md bg-cyan-300/10 px-2.5 py-1 font-mono text-sm font-bold text-cyan-100">{stock.ticker}</span></div>
      <p className="mt-3 text-sm text-slate-400">{stock.exchange} · {stock.sector} · 업데이트 {formatDate(stock.lastUpdated)}</p>
      <div className="mt-5 flex flex-wrap gap-2">{stock.themes.map((itemSlug) => { const theme = findTheme(itemSlug); return theme && <TagBadge key={itemSlug} label={theme.name} href={`/themes/${itemSlug}`} />; })}</div>
    </header>

    <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
      <div className="space-y-6"><SummaryPanel facts={quickFacts} /><BeginnerGuideBox links={learnLinks} /></div>
      <HeroIllustration ticker={stock.ticker} name={stock.name} />
    </div>

    <div className="mt-12 space-y-10">
      <section className="max-w-4xl"><p className="eyebrow">한마디로 이해하기</p><h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{stock.summary}</h2><p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">{stock.description}</p></section>
      <InfoSection title="돈은 어디서 버나?"><p className="mb-5 max-w-3xl text-slate-400">사업을 이해할 때는 제품 이름보다 고객이 무엇을 위해 비용을 지불하는지부터 보는 편이 좋습니다.</p><BusinessModelCards items={businessSegments} /></InfoSection>
      <InfoSection title="왜 중요한가?"><WhyItMattersGrid items={whyItMatters} /></InfoSection>
      <section className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]"><InfoSection title="투자자가 봐야 할 핵심 지표"><p className="mb-5 text-slate-400">숫자 하나로 결론을 내리기보다, 각 지표가 수요·수익성·공급 중 무엇을 말해 주는지 함께 확인합니다.</p><KpiWatchlist items={stock.kpis} /></InfoSection><InfoSection title="관찰 이벤트"><p className="mb-4 text-slate-400">아래 이벤트는 매수·매도 신호가 아니라, 사업 가설을 다시 점검하는 시점입니다.</p><BulletList items={stock.catalysts} /></InfoSection></section>
      <section className="grid gap-5 lg:grid-cols-2"><InfoSection title="긍정 시나리오"><BulletList items={stock.bullCase} /></InfoSection><InfoSection title="부정 시나리오"><BulletList items={stock.bearCase} /></InfoSection></section>
      <InfoSection title="주요 리스크"><BulletList items={stock.risks} /></InfoSection>
      <InfoSection title="관련 기업과 공급망"><p className="mb-5 text-slate-400">한 회사만 떼어 보기보다 수요 기업, 제조·공급 파트너, 경쟁 기업을 함께 보면 산업의 연결이 더 잘 보입니다.</p><SupplyChainDiagram items={supplyChain} /></InfoSection>
      <section className="grid gap-5 lg:grid-cols-3"><RelatedLinks title="같이 보면 좋은 기업" kind="stocks" items={stock.relatedStocks.map((itemSlug) => ({ slug: itemSlug, label: findStock(itemSlug)?.name ?? itemSlug }))} /><RelatedLinks title="관련 개념" kind="learn" items={stock.relatedLearn.map((itemSlug) => ({ slug: itemSlug, label: findLearn(itemSlug)?.title ?? itemSlug }))} /><RelatedLinks title="관련 브리프" kind="briefs" items={stock.relatedBriefs.map((itemSlug) => ({ slug: itemSlug, label: findBrief(itemSlug)?.title ?? itemSlug }))} /></section>
      <section className="grid gap-5 lg:grid-cols-2"><InfoSection title="업데이트 기록">{stock.thesisLogs.map((log) => <div className="mb-4" key={log.date}><p className="text-xs font-semibold text-cyan-200">{formatDate(log.date)}</p><div className="mt-2"><BulletList items={log.items} /></div></div>)}</InfoSection><section className="rounded-xl border border-amber-300/20 bg-amber-300/5 p-5 sm:p-7"><p className="eyebrow text-amber-200">정보·학습 목적 안내</p><p className="mt-3 text-sm leading-7 text-amber-100">본 페이지는 투자 권유가 아닌 정보 정리 및 학습 목적의 기업 설명서입니다. 투자 판단과 책임은 투자자 본인에게 있습니다.</p></section></section>
      <section className="panel rounded-xl p-5 sm:p-7"><p className="eyebrow">출처</p><h2 className="mt-2 text-xl font-semibold">출처 및 확인 자료</h2><p className="mt-2 text-sm leading-6 text-slate-400">최신 내용과 구체적 수치는 아래의 공식 자료를 우선 확인하세요.</p><div className="mt-4"><SourceBlock sources={stock.sources} /></div></section>
    </div>
  </Container>;
}
