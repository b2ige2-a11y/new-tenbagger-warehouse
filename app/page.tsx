import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { StockCard } from "@/components/StockCard";
import { learnItems } from "@/data/learn";
import { stocks } from "@/data/stocks";
import { themes } from "@/data/themes";
import { metadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export const generateMetadata = () => metadata(
  "성장주 Thesis와 핵심 숫자 아카이브",
  "미국 성장주와 미래 산업 기업을 사업 구조, 핵심 숫자, thesis 변화와 공급망 중심으로 정리합니다.",
  "/",
);

const featuredSlugs = ["nvidia", "tsmc", "amd", "asml", "micron"];
const conceptSlugs = ["hbm", "cuda", "foundry", "capex"];
const metricGuides = [
  { label: "데이터센터 매출", value: "AI CAPEX가 실제 매출로 전환되는 속도", href: "/stocks/nvidia" },
  { label: "HBM", value: "가속기 공급량과 시스템 성능을 좌우하는 메모리 병목", href: "/learn/hbm" },
  { label: "CAPEX", value: "클라우드·파운드리 고객이 설비투자를 이어가는지 확인", href: "/learn/capex" },
  { label: "매출총이익률", value: "제품 믹스와 가격 결정력이 수익성으로 남는지 확인", href: "/learn/gross-margin" },
  { label: "재고", value: "공급 준비가 실제 출하로 이어지는지, 수요보다 앞서 쌓이는지 점검", href: "/stocks/nvidia#key-numbers" },
];
const supplyChain = [
  { label: "클라우드 CAPEX", href: "/learn/capex", note: "수요" },
  { label: "NVIDIA GPU", href: "/stocks/nvidia", note: "가속기" },
  { label: "TSMC CoWoS", href: "/stocks/tsmc", note: "생산·패키징" },
  { label: "SK hynix HBM", href: "/stocks/sk-hynix", note: "메모리" },
  { label: "전력 인프라", href: "/themes/power-grid", note: "운영 기반" },
];

export default function Home() {
  const featuredStocks = featuredSlugs.map((slug) => stocks.find((stock) => stock.slug === slug)).filter((stock) => stock !== undefined);
  const concepts = conceptSlugs.map((slug) => learnItems.find((item) => item.slug === slug)).filter((item) => item !== undefined);
  const thesisUpdates = featuredStocks.filter((stock) => stock.thesis).slice(0, 3);

  return <>
    <section className="home-hero">
      <Container className="py-20 sm:py-28">
        <div className="home-hero__content">
          <p className="eyebrow">GROWTH COMPANY ARCHIVE</p>
          <h1>성장주를 thesis와<br className="hidden sm:block" /> 핵심 숫자로 정리합니다.</h1>
          <p className="home-hero__description">미국 성장주와 미래 산업 기업을 사업 구조, 핵심 숫자, thesis 변화와 공급망 중심으로 빠르게 점검하는 투자 아카이브입니다.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link className="primary-cta" href="/stocks">기업 아카이브 보기</Link>
            <Link className="secondary-cta" href="/themes">테마 지도 보기</Link>
          </div>
        </div>
        <div className="home-hero__note" aria-label="아카이브 구성">
          <span>WHAT WE TRACK</span>
          <strong>Thesis</strong>
          <strong>Key numbers</strong>
          <strong>Supply chain</strong>
          <p>공식 자료를 기준으로 수동 업데이트합니다.</p>
        </div>
      </Container>
    </section>

    <Container className="space-y-20 py-14 sm:space-y-24 sm:py-20">
      <section>
        <SectionHeader eyebrow="지금 볼만한 기업" title="Thesis로 보는 성장주" description="한 줄 관점과 핵심 키워드를 먼저 보고, 상세 페이지에서 숫자와 공급망을 이어서 확인합니다." href="/stocks" />
        <div className="home-company-grid">{featuredStocks.map((stock) => <StockCard key={stock.slug} stock={stock} />)}</div>
      </section>

      <section className="metric-guide">
        <SectionHeader eyebrow="핵심 숫자로 보는 기업" title="숫자가 말해 주는 사업의 방향" description="모든 숫자를 모으기보다 thesis를 확인하는 데 중요한 지표와 의미를 연결합니다." />
        <div className="metric-guide__list">{metricGuides.map((metric, index) => <Link href={metric.href} key={metric.label}><span>0{index + 1}</span><b>{metric.label}</b><p>{metric.value}</p><i aria-hidden="true">→</i></Link>)}</div>
      </section>

      <section>
        <SectionHeader eyebrow="테마별 기업 지도" title="산업 흐름에서 기업을 찾습니다" description="AI 인프라부터 메모리·전력까지, 수요와 공급이 연결되는 방향으로 기업을 묶었습니다." href="/themes" />
        <div className="theme-map">{themes.map((theme) => <Link href={`/themes/${theme.slug}`} key={theme.slug}><span>{String(theme.relatedStocks.length).padStart(2, "0")} COMPANIES</span><h3>{theme.name}</h3><p>{theme.summary}</p><b>테마 보기 →</b></Link>)}</div>
      </section>

      <section className="home-supply-section">
        <SectionHeader eyebrow="같이 보면 좋은 공급망" title="AI CAPEX가 퍼지는 경로" description="한 기업의 성장을 볼 때 수요처, 제조 병목, 메모리와 전력 인프라를 같은 흐름에서 확인합니다." />
        <div className="home-supply-chain">{supplyChain.map((item, index) => <div className="home-supply-chain__step" key={item.label}><Link href={item.href}><span>{item.note}</span><b>{item.label}</b></Link>{index < supplyChain.length - 1 && <i aria-hidden="true"><span className="sm:hidden">↓</span><span className="hidden sm:inline">→</span></i>}</div>)}</div>
      </section>

      <section className="thesis-updates">
        <SectionHeader eyebrow="최근 thesis 변화 기록" title="수동 업데이트 로그" description="실시간 뉴스 피드가 아니라, 공식 자료를 확인한 뒤 관점의 상태와 점검일을 남깁니다." />
        <div className="thesis-updates__list">{thesisUpdates.map((stock) => stock.thesis && <Link href={`/stocks/${stock.slug}`} key={stock.slug}><span className="thesis-updates__ticker">{stock.ticker}</span><div><p>{stock.name}</p><strong>{stock.thesis.statement}</strong></div><span className="thesis-updates__status">{stock.thesis.status}</span><time>{formatDate(stock.thesis.updatedAt)}</time></Link>)}</div>
      </section>

      <section>
        <SectionHeader eyebrow="처음 보는 개념" title="기업 설명서에 자주 나오는 용어" description="HBM, CUDA, 파운드리와 CAPEX처럼 thesis를 읽는 데 필요한 개념만 짧게 연결합니다." href="/learn" />
        <div className="concept-list">{concepts.map((item, index) => <Link href={`/learn/${item.slug}`} className="concept-list__item" key={item.slug}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.shortDefinition}</p></div></Link>)}</div>
      </section>

      <section className="home-note">
        <p className="eyebrow">아카이브 원칙</p>
        <h2>숫자는 공식 자료로, 관점은 바뀐 이유까지 기록합니다.</h2>
        <p>확인되지 않은 수치와 가격 전망은 싣지 않습니다. 본 사이트의 모든 콘텐츠는 투자 권유가 아닌 정보 정리 및 학습 목적이며, 투자 판단과 책임은 투자자 본인에게 있습니다.</p>
        <Link href="/methodology">정리 방법 보기 →</Link>
      </section>
    </Container>
  </>;
}
