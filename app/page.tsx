import Link from "next/link";
import { Container } from "@/components/Container";
import { BriefCard } from "@/components/BriefCard";
import { InfoFeatureGrid } from "@/components/InfoFeatureGrid";
import { SectionHeader } from "@/components/SectionHeader";
import { StockCard } from "@/components/StockCard";
import { ThemeCard } from "@/components/ThemeCard";
import { briefs } from "@/data/briefs";
import { learnItems } from "@/data/learn";
import { stocks } from "@/data/stocks";
import { themes } from "@/data/themes";
import { metadata } from "@/lib/seo";

const icon = (path: string) => <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d={path} strokeLinecap="round" strokeLinejoin="round" /></svg>;
const features = [
  { title: "기업 설명서", description: "회사가 무엇을 하고, 무엇을 확인해야 하는지 한 페이지에 정리합니다.", icon: icon("M5 4.5h10.5A2.5 2.5 0 0 1 18 7v12H7A2 2 0 0 1 5 17V4.5Zm3 4h7m-7 4h7m-7 4h4"), accent: "bg-cyan-300/10 text-cyan-200" },
  { title: "산업 테마 지도", description: "AI와 반도체처럼 얽힌 산업을 가치사슬 순서로 연결합니다.", icon: icon("M4 6h5v5H4V6Zm11 0h5v5h-5V6ZM9 8.5h6m-3 0v7m-8 2h5v-5H4v5Zm11 0h5v-5h-5v5Zm-6-2h6"), accent: "bg-indigo-300/10 text-indigo-200" },
  { title: "핵심 개념 정리", description: "GPU, HBM, 파운드리처럼 낯선 용어부터 쉽게 풀어 설명합니다.", icon: icon("M12 4a8 8 0 1 0 8 8c0-2-1-3.5-2.5-5M12 4v8l4 2m-4 6v-2"), accent: "bg-sky-300/10 text-sky-200" },
  { title: "브리프 형식 예시", description: "원문 번역 대신 어떤 관찰 포인트를 남기는지 보여 주는 예시입니다.", icon: icon("M6 4h12v16H6V4Zm3 4h6M9 12h6M9 16h3"), accent: "bg-amber-300/10 text-amber-200" },
];
export const generateMetadata = () => metadata("성장주 아카이브", "AI, 반도체, 우주, 전력 인프라 등 미래 산업 기업을 쉽게 이해하는 성장주 아카이브", "/");

export default function Home() { return <>
  <section className="gridline relative overflow-hidden border-b border-[#20344c]"><Container className="relative py-20 sm:py-24 lg:py-28"><div className="max-w-4xl"><p className="eyebrow">미래 산업 기업 아카이브</p><h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-6xl">뉴스보다 먼저, <span className="text-cyan-300">기업이 하는 일</span>을 이해하세요.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">텐배거 웨어하우스는 AI, 반도체, 우주, 전력 인프라 기업을 사업 구조·핵심 지표·리스크 중심으로 읽기 쉽게 정리한 학습용 아카이브입니다.</p><div className="mt-8 flex flex-wrap gap-3"><Link className="rounded-md bg-cyan-300 px-4 py-3 text-sm font-bold text-[#06101d] transition hover:bg-cyan-200" href="/stocks">기업 설명서 보기</Link><Link className="rounded-md border border-[#36516c] px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/50" href="/methodology">아카이브 방법론 보기</Link></div></div><div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3"><p className="rounded-lg border border-[#29435e] bg-[#07111f]/60 p-4 text-sm leading-6 text-slate-300"><span className="block text-xs font-bold text-cyan-200">01. 기업</span><span className="mt-1 block">무엇을 팔고 누구에게 파는지</span></p><p className="rounded-lg border border-[#29435e] bg-[#07111f]/60 p-4 text-sm leading-6 text-slate-300"><span className="block text-xs font-bold text-cyan-200">02. 산업</span><span className="mt-1 block">어떤 공급망과 수요에 연결되는지</span></p><p className="rounded-lg border border-[#29435e] bg-[#07111f]/60 p-4 text-sm leading-6 text-slate-300"><span className="block text-xs font-bold text-cyan-200">03. 관찰</span><span className="mt-1 block">다음에 어떤 지표를 볼 것인지</span></p></div></Container></section>
  <Container className="space-y-20 py-16 sm:space-y-24 sm:py-24">
    <section><SectionHeader eyebrow="처음 오셨다면" title="이 사이트에서 볼 수 있는 것" description="처음부터 모든 뉴스를 따라갈 필요는 없습니다. 기업, 산업, 개념을 연결해 읽는 순서부터 안내합니다." /><InfoFeatureGrid items={features} /></section>
    <section className="rounded-2xl border border-[#29435e] bg-[#0a1b2d] p-6 sm:p-8"><div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">이런 분께 유용합니다</p><h2 className="mt-3 text-2xl font-semibold leading-tight">종목 이름보다 사업의 맥락을 먼저 보고 싶은 분</h2></div><ul className="grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-3"><li className="border-l border-cyan-300/50 pl-3">미국 성장주를 처음 공부하는 사람</li><li className="border-l border-cyan-300/50 pl-3">기업보다 산업 흐름을 먼저 이해하고 싶은 사람</li><li className="border-l border-cyan-300/50 pl-3">헤드라인보다 사업 구조를 알고 싶은 사람</li></ul></div></section>
    <section><SectionHeader eyebrow="기업부터 읽기" title="주요 기업 설명서" description="회사마다 사업 구조, 관찰 지표, 긍정·부정 시나리오를 같은 순서로 정리했습니다." href="/stocks" /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{stocks.slice(0, 6).map((stock) => <StockCard key={stock.slug} stock={stock} />)}</div></section>
    <section><SectionHeader eyebrow="산업의 연결" title="산업 테마 지도" description="기술 하나가 어떤 기업과 공급망을 거쳐 실제 제품과 서비스로 이어지는지 살펴봅니다." href="/themes" /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{themes.map((theme) => <ThemeCard key={theme.slug} theme={theme} />)}</div></section>
    <section><SectionHeader eyebrow="용어부터 쉽게" title="처음 읽으면 좋은 개념" description="기업 설명서를 보기 전에 알고 있으면 좋은 핵심 용어입니다." href="/learn" /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{learnItems.slice(0, 5).map((item, index) => <Link className="rounded-xl border border-[#29435e] bg-[#0b1a2b]/60 p-5 transition hover:border-cyan-300/50" href={`/learn/${item.slug}`} key={item.slug}><span className="font-mono text-xs text-cyan-300">0{index + 1}</span><h3 className="mt-3 font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{item.shortDefinition}</p></Link>)}</div></section>
    <section className="rounded-2xl border border-amber-300/20 bg-amber-300/[.04] p-6 sm:p-8"><SectionHeader eyebrow="브리프 형식 예시" title="실제 속보가 아닌, 읽는 법을 보여 주는 아카이브 예시" description="현재 브리프는 뉴스 서비스가 아닙니다. 기업 이해를 위해 어떤 정보와 관찰 포인트를 남기는지 보여 주는 형식 예시입니다." href="/briefs" /><div className="grid gap-4 md:grid-cols-3">{briefs.slice(0, 3).map((brief) => <BriefCard key={brief.slug} brief={brief} />)}</div></section>
    <section className="grid gap-5 lg:grid-cols-[1.15fr_.85fr]"><div className="panel rounded-2xl p-7 sm:p-10"><p className="eyebrow">아카이브 방법론</p><h2 className="mt-3 text-2xl font-semibold">좋은 헤드라인보다, 반복해 확인할 수 있는 구조를 남깁니다.</h2><p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">기업의 역할, 성장 동력, 리스크, 그리고 다음에 확인할 지표를 한곳에 연결합니다. 정답을 제시하기보다 스스로 판단할 수 있는 정보 구조를 만드는 것이 목표입니다.</p><Link className="mt-6 inline-block text-sm font-semibold text-cyan-300 hover:text-cyan-100" href="/methodology">방법론 읽기 →</Link></div><aside className="rounded-2xl border border-[#29435e] bg-[#091827] p-7"><p className="eyebrow">신뢰 원칙</p><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300"><li>공식 자료와 출처를 우선 표시합니다.</li><li>매수·매도 권유와 수익 보장을 제공하지 않습니다.</li><li>투자 판단과 책임은 투자자 본인에게 있습니다.</li></ul></aside></section>
  </Container>
</>; }
