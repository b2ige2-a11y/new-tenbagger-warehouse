import { notFound } from "next/navigation";
import { BusinessModelCards } from "@/components/BusinessModelCards";
import { CompanyComparison } from "@/components/CompanyComparison";
import { CompanyMark } from "@/components/CompanyMark";
import { CompanyNetwork } from "@/components/CompanyNetwork";
import { Container } from "@/components/Container";
import { BulletList, InfoSection } from "@/components/ContentBlocks";
import { KpiWatchlist } from "@/components/KpiWatchlist";
import { NextEventList } from "@/components/NextEventList";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SourceBlock } from "@/components/SourceBlock";
import { SupplyChainDiagram } from "@/components/SupplyChainDiagram";
import { TagBadge } from "@/components/TagBadge";
import { ThesisPanel } from "@/components/ThesisPanel";
import { WhyItMattersGrid } from "@/components/WhyItMattersGrid";
import { briefs } from "@/data/briefs";
import { learnItems } from "@/data/learn";
import { getStock, stocks } from "@/data/stocks";
import { themes } from "@/data/themes";
import type { CompanyNetwork as CompanyNetworkData, NextEvent, StockThesis } from "@/data/types";
import { metadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return stocks.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stock = getStock(slug);
  return stock
    ? metadata(
        `${stock.name} 기업 설명서`,
        `${stock.name}의 핵심 thesis, 사업 구조, 핵심 숫자, 공급망과 리스크를 정리한 투자 아카이브입니다.`,
        `/stocks/${stock.slug}`,
      )
    : {};
}

export default async function StockDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stock = getStock(slug);
  if (!stock) notFound();

  const findTheme = (itemSlug: string) => themes.find((item) => item.slug === itemSlug);
  const findStock = (itemSlug: string) => stocks.find((item) => item.slug === itemSlug);
  const findLearn = (itemSlug: string) => learnItems.find((item) => item.slug === itemSlug);
  const findBrief = (itemSlug: string) => briefs.find((item) => item.slug === itemSlug);

  const businessSegments = stock.businessSegments ?? [
    { title: "핵심 제품과 서비스", description: "기업이 어떤 제품과 서비스로 고객의 지출을 가져오는지 확인합니다." },
    { title: "고객과 최종 수요", description: "매출을 만드는 고객군과 수요처가 어디인지 살펴봅니다." },
    { title: "공급과 실행", description: "생산·조달·출시 과정이 성장 속도와 수익성에 주는 영향을 점검합니다." },
  ];
  const whyItMatters = stock.whyItMatters ?? [
    { title: "산업 내 역할", description: "이 기업이 가치사슬에서 맡는 역할과 대체 가능성을 봅니다." },
    { title: "경쟁 우위", description: "기술, 고객 관계, 규모와 실행력이 어떤 차이를 만드는지 확인합니다." },
    { title: "숫자로 확인", description: "성장 스토리가 매출·마진·수요 지표로 이어지는지 계속 점검합니다." },
  ];
  const supplyChain = stock.supplyChain ?? [
    { label: "최종 수요", description: "고객의 투자와 교체 수요가 사업의 출발점입니다." },
    { label: stock.name, description: "제품과 서비스가 공급망 안에서 맡는 역할을 확인합니다." },
    { label: "공급·유통 생태계", description: "생산, 부품과 유통 파트너가 실행 속도에 영향을 줍니다." },
  ];
  const thesis: StockThesis = stock.thesis ?? {
    statement: `${stock.summary}의 수요와 수익성이 실제 숫자로 이어지는지 확인하는 기업`,
    status: "확인 필요",
    question: "핵심 제품 수요가 매출 성장과 수익성 개선으로 이어지고 있는가?",
    updatedAt: stock.lastUpdated,
  };
  const thesisBreaks = stock.thesisBreaks ?? stock.bearCase.slice(0, 3);
  const companyNetwork: CompanyNetworkData = stock.companyNetwork ?? {
    customers: ["주요 고객과 최종 수요처 — 공식 자료에서 확인"],
    suppliers: ["생산·부품·유통 파트너 — 공식 자료에서 확인"],
    competitors: stock.relatedStocks.map((itemSlug) => findStock(itemSlug)?.name ?? itemSlug),
    beneficiaries: stock.relatedStocks.map((itemSlug) => ({
      name: findStock(itemSlug)?.name ?? itemSlug,
      slug: itemSlug,
      reason: "같은 산업과 공급망에서 함께 확인할 기업",
    })),
  };
  const nextEvents: NextEvent[] = stock.nextEvents ?? stock.catalysts.map((title) => ({
    category: "확인",
    title,
    description: "다음 공식 발표와 회사 자료에서 방향이 달라지는지 확인합니다.",
  }));

  return (
    <Container className="py-10 sm:py-14">
      <header className="company-header company-header--research">
        <CompanyMark ticker={stock.ticker} name={stock.name} />
        <div className="company-header__body">
          <p className="eyebrow">기업 설명서 · {stock.ticker}</p>
          <h1>{stock.name}</h1>
          <p className="company-header__summary">{stock.summary}</p>
          <p className="company-header__meta">
            {stock.exchange} · {stock.sector} · 마지막 업데이트 {formatDate(stock.lastUpdated)}
          </p>
          <div className="company-header__tags">
            {stock.themes.map((itemSlug) => {
              const theme = findTheme(itemSlug);
              return theme && <TagBadge key={itemSlug} label={theme.name} href={`/themes/${itemSlug}`} />;
            })}
          </div>
        </div>
      </header>

      <div className="company-archive">
        <ThesisPanel thesis={thesis} />

        <section className="research-section" id="key-numbers">
          <div className="section-heading">
            <p className="eyebrow">02 · 핵심 숫자</p>
            <h2>Thesis를 숫자로 점검합니다</h2>
            <p>숫자 자체보다 왜 중요한지, 어느 방향이 좋아지거나 나빠지는 신호인지 함께 봅니다.</p>
          </div>
          <KpiWatchlist items={stock.kpis} />
        </section>

        <section className="research-section" id="business-model">
          <div className="section-heading">
            <p className="eyebrow">03 · 사업 구조</p>
            <h2>돈은 어디서 버나?</h2>
            <p>{stock.description}</p>
          </div>
          <BusinessModelCards items={businessSegments} />
          <div className="business-position">
            <h3>산업에서 중요한 이유</h3>
            <WhyItMattersGrid items={whyItMatters} />
          </div>
        </section>

        <section className="research-section research-section--tint" id="drivers-risks">
          <div className="section-heading">
            <p className="eyebrow">04 · 성장 동력과 리스크</p>
            <h2>좋아질 조건과 thesis가 깨질 조건</h2>
            <p>긍정적인 이야기만 모으지 않고, 반대 시나리오와 판단을 바꿔야 할 조건을 같이 적습니다.</p>
          </div>
          <div className="scenario-grid">
            <InfoSection title="상승 동력"><BulletList items={stock.bullCase} /></InfoSection>
            <InfoSection title="주요 리스크"><BulletList items={stock.risks} /></InfoSection>
            <InfoSection title="Thesis가 깨지는 조건"><BulletList items={thesisBreaks} /></InfoSection>
          </div>
        </section>

        <section className="research-section" id="supply-chain">
          <div className="section-heading">
            <p className="eyebrow">05 · 공급망과 2차 수혜주</p>
            <h2>누가 사고, 누가 공급하며, 누구와 경쟁하나?</h2>
            <p>한 기업의 실적만 보지 않고 고객 CAPEX, 생산 병목과 경쟁사의 움직임을 연결해 봅니다.</p>
          </div>
          <SupplyChainDiagram items={supplyChain} />
          <div className="mt-6"><CompanyNetwork companyName={stock.name} network={companyNetwork} /></div>
          <div className="related-research-links">
            <RelatedLinks title="함께 봐야 할 기업" kind="stocks" items={stock.relatedStocks.map((itemSlug) => ({ slug: itemSlug, label: findStock(itemSlug)?.name ?? itemSlug }))} />
            <RelatedLinks title="관련 테마" kind="themes" items={stock.themes.map((itemSlug) => ({ slug: itemSlug, label: findTheme(itemSlug)?.name ?? itemSlug }))} />
            <RelatedLinks title="관련 개념" kind="learn" items={stock.relatedLearn.map((itemSlug) => ({ slug: itemSlug, label: findLearn(itemSlug)?.title ?? itemSlug }))} />
          </div>
        </section>

        <section className="research-section" id="comparison">
          <div className="section-heading">
            <p className="eyebrow">06 · 비교해서 보기</p>
            <h2>비슷한 기업과 무엇이 다른가?</h2>
            <p>제품 이름보다 사업 범위, 생태계와 확인해야 할 숫자의 차이를 비교합니다.</p>
          </div>
          {stock.comparison ? (
            <CompanyComparison companyName={stock.name} comparison={stock.comparison} />
          ) : (
            <div className="comparison-placeholder">
              <p>정량 비교는 공식 자료 기준을 맞춘 뒤 추가합니다. 현재는 같은 산업의 기업 설명서를 연결합니다.</p>
              <RelatedLinks title="비교할 기업" kind="stocks" items={stock.relatedStocks.map((itemSlug) => ({ slug: itemSlug, label: findStock(itemSlug)?.name ?? itemSlug }))} />
            </div>
          )}
        </section>

        <section className="research-section" id="next-events">
          <div className="section-heading">
            <p className="eyebrow">07 · 다음 확인 이벤트</p>
            <h2>다음에 무엇을 확인할까?</h2>
            <p>실적 발표만이 아니라 고객사 투자, 신제품, 규제와 공급망 기업의 설명을 함께 봅니다.</p>
          </div>
          <NextEventList items={nextEvents} />
        </section>

        <section className="research-section reference-section" id="sources">
          <div>
            <p className="eyebrow">08 · 출처</p>
            <h2>출처 및 확인 자료</h2>
            <p>구체적 숫자는 회사의 공식 자료를 우선하며, 링크가 없는 항목은 확인할 자료의 종류만 표시합니다.</p>
            <div className="mt-4"><SourceBlock sources={stock.sources} /></div>
          </div>
          <div>
            <p className="eyebrow">업데이트 기록</p>
            {stock.thesisLogs.map((log) => (
              <div className="update-log" key={log.date}>
                <p>{formatDate(log.date)}</p>
                <BulletList items={log.items} />
              </div>
            ))}
            {stock.relatedBriefs.length > 0 && (
              <div className="reference-briefs">
                <p>관련 브리프 아카이브</p>
                {stock.relatedBriefs.map((itemSlug) => {
                  const brief = findBrief(itemSlug);
                  return brief && <TagBadge key={itemSlug} label={`예시 · ${brief.title}`} href={`/briefs/${itemSlug}`} />;
                })}
              </div>
            )}
          </div>
        </section>

        <section className="financial-note">
          <p>정보·학습 목적 안내</p>
          <span>본 페이지는 투자 권유가 아닌 정보 정리 및 학습 목적의 기업 설명서입니다. 투자 판단과 책임은 투자자 본인에게 있습니다.</span>
        </section>
      </div>
    </Container>
  );
}
