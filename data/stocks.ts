import type { Source, Stock } from "./types";

const standardSources: Source[] = [{ label: "Company Investor Relations", type: "ir" }, { label: "SEC Filings", type: "sec" }, { label: "Earnings Materials", type: "earnings" }];
const records: [string, string, string, string, string, string[]][] = [
  ["nvidia", "NVIDIA", "NVDA", "NASDAQ", "AI 인프라 시대의 핵심 GPU 플랫폼 기업", ["ai-infrastructure", "semiconductor"]],
  ["amd", "AMD", "AMD", "NASDAQ", "고성능 컴퓨팅과 AI 가속기를 확장하는 반도체 설계 기업", ["ai-infrastructure", "semiconductor"]],
  ["broadcom", "Broadcom", "AVGO", "NASDAQ", "맞춤형 AI 칩과 네트워크를 연결하는 반도체·소프트웨어 기업", ["ai-infrastructure", "semiconductor"]],
  ["tsmc", "TSMC", "TSM", "NYSE", "첨단 반도체 생산을 담당하는 글로벌 파운드리", ["semiconductor", "hbm-memory"]],
  ["asml", "ASML", "ASML", "NASDAQ", "최첨단 노광 장비를 공급하는 반도체 장비 기업", ["semiconductor"]],
  ["micron", "Micron", "MU", "NASDAQ", "데이터센터용 메모리와 HBM을 만드는 메모리 기업", ["hbm-memory", "ai-infrastructure"]],
  ["sk-hynix", "SK hynix", "000660", "KRX", "AI 메모리 수요에 대응하는 HBM 중심 메모리 기업", ["hbm-memory", "semiconductor"]],
  ["samsung-electronics", "Samsung Electronics", "005930", "KRX", "메모리·파운드리·디바이스를 아우르는 종합 전자 기업", ["hbm-memory", "semiconductor"]],
  ["palantir", "Palantir", "PLTR", "NASDAQ", "데이터 운영과 AI 소프트웨어 플랫폼을 제공하는 기업", ["ai-infrastructure"]],
  ["rocket-lab", "Rocket Lab", "RKLB", "NASDAQ", "발사 서비스와 우주 시스템을 구축하는 우주 인프라 기업", ["space"]],
];
const stockConcepts: Record<string, string[]> = {
  nvidia: ["gpu", "cuda", "hbm", "ai-asic"], amd: ["gpu", "ai-asic", "hbm"], broadcom: ["ai-asic", "gpu", "capex"],
  tsmc: ["foundry", "euv", "hbm"], asml: ["euv", "foundry"], micron: ["hbm", "gross-margin"],
  "sk-hynix": ["hbm", "gpu"], "samsung-electronics": ["hbm", "foundry", "euv"], palantir: ["ai-asic", "capex", "psr"], "rocket-lab": ["capex", "psr"],
};

export const stocks: Stock[] = records.map(([slug, name, ticker, exchange, summary, themes], index) => ({
  slug, name, ticker, exchange, sector: themes.includes("space") ? "우주·방산" : themes.includes("ai-infrastructure") ? "기술·반도체" : "반도체", summary,
  description: `${name}은(는) 미래 산업 공급망에서 자신의 기술과 실행력을 바탕으로 역할을 수행하는 기업입니다. 이 페이지는 사업 구조와 관찰 지표를 학습 목적으로 정리한 아카이브입니다.`, themes,
  kpis: ["매출 성장률", "매출총이익률", "핵심 제품 수요", "고객 CAPEX", "재고 및 공급 능력"],
  bullCase: ["구조적 수요 확대가 이어질 가능성", "기술과 생태계의 진입 장벽", "고부가 제품 비중 개선 가능성"],
  bearCase: ["고객 투자 속도 둔화 가능성", "경쟁과 가격 압력", "기대치가 높은 구간의 변동성"],
  risks: ["수요 전망 변화", "지정학 및 규제", "공급망·실행 리스크", "밸류에이션 부담"],
  catalysts: ["분기 실적과 가이던스", "신제품·생산능력 업데이트", "주요 고객의 투자 계획"],
  relatedStocks: records.filter((_, i) => i !== index).slice(0, 3).map(([s]) => s), relatedLearn: stockConcepts[slug], relatedBriefs: themes.includes("space") ? ["space-launch-cadence"] : themes.includes("hbm-memory") ? ["hbm-supply-chain", "tsmc-cowos-capacity"] : ["nvidia-blackwell-demand", "hyperscaler-capex"],
  thesisLogs: [{ date: "2026-06-30", items: ["초기 아카이브 항목을 작성했습니다.", "회사 공시와 공식 자료를 중심으로 후속 점검이 필요합니다."] }], sources: standardSources, lastUpdated: "2026-06-30"
}));
export const getStock = (slug: string) => stocks.find((item) => item.slug === slug);
