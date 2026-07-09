import Link from "next/link";
import { Container } from "@/components/Container";
import { ReadingGuideStepper } from "@/components/ReadingGuideStepper";
import { SectionHeader } from "@/components/SectionHeader";
import { StockCard } from "@/components/StockCard";
import { briefs } from "@/data/briefs";
import { learnItems } from "@/data/learn";
import { stocks } from "@/data/stocks";
import { themes } from "@/data/themes";
import { metadata } from "@/lib/seo";

export const generateMetadata = () => metadata("쉽게 읽는 기업 아카이브", "AI, 반도체, 우주 기업이 무슨 일을 하는지 처음 보는 사람도 이해할 수 있게 정리합니다.", "/");

export default function Home() { return <>
  <section className="home-hero"><Container className="py-20 sm:py-28"><div className="max-w-2xl"><p className="eyebrow">쉽게 읽는 기업 아카이브</p><h1>어려운 기업 이야기를<br className="hidden sm:block" /> 쉽게 정리합니다.</h1><p className="home-hero__description">뉴스를 보기 전에, AI·반도체·우주 기업이 무슨 일을 하는지부터 가볍게 알아보세요.</p><div className="mt-9 flex flex-wrap gap-3"><Link className="primary-cta" href="/stocks">기업 둘러보기</Link><Link className="secondary-cta" href="/learn">처음 읽는 개념 보기</Link></div></div></Container></section>

  <Container className="space-y-20 py-14 sm:space-y-24 sm:py-20">
    <section><SectionHeader eyebrow="처음 오셨나요?" title="이렇게 읽어보세요" description="모든 내용을 한 번에 이해할 필요는 없습니다. 궁금한 회사에서 시작해 천천히 넓혀가면 됩니다." /><ReadingGuideStepper /></section>

    <section><SectionHeader eyebrow="오늘 가볍게 읽기" title="먼저 둘러보기 좋은 기업" description="이 회사가 무엇을 만들고 왜 자주 언급되는지 짧게 정리했습니다." href="/stocks" /><div className="grid gap-5 md:grid-cols-3">{stocks.filter((stock) => ["nvidia", "amd", "tsmc"].includes(stock.slug)).map((stock) => <StockCard key={stock.slug} stock={stock} />)}</div></section>

    <section className="home-list-section"><SectionHeader eyebrow="산업별로 보기" title="관심 있는 분야에서 시작하세요" description="기업 이름이 낯설다면 산업부터 살펴보는 것도 좋은 방법입니다." href="/themes" /><div className="industry-list">{themes.map((theme) => <Link href={`/themes/${theme.slug}`} className="industry-list__item" key={theme.slug}><div><h3>{theme.name}</h3><p>{theme.summary}</p></div><span aria-hidden="true">→</span></Link>)}</div></section>

    <section><SectionHeader eyebrow="어려운 용어를 짧게" title="처음 읽으면 좋은 개념" description="GPU, HBM, 파운드리처럼 자주 나오지만 헷갈리는 말을 쉽게 풀었습니다." href="/learn" /><div className="concept-list">{learnItems.slice(0, 5).map((item, index) => <Link href={`/learn/${item.slug}`} className="concept-list__item" key={item.slug}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.shortDefinition}</p></div></Link>)}</div></section>

    <section className="brief-preview"><div><p className="eyebrow">브리프 형식 예시</p><h2>기업 이야기를 짧게 정리하면</h2><p>아직 실시간 뉴스 서비스가 아닙니다. 어떤 식으로 요약하고 연결할지 보여주는 아카이브 예시입니다.</p></div><div className="brief-preview__links">{briefs.slice(0, 2).map((brief) => <Link href={`/briefs/${brief.slug}`} key={brief.slug}><span>아카이브 예시</span>{brief.title}</Link>)}</div></section>

    <section className="home-note"><p className="eyebrow">이 사이트의 기준</p><h2>정답을 말하기보다, 회사를 이해할 단서를 남깁니다.</h2><p>공식 자료를 우선 확인하고, 기업이 하는 일과 관련된 산업·개념을 함께 연결합니다. 모든 콘텐츠는 정보 정리와 학습 목적입니다.</p><Link href="/methodology">정리 방법 더 보기 →</Link></section>
  </Container>
</>; }
