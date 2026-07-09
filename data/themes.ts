import type { Source, Theme } from "./types";

const themeRecords: [string, string, string, string[]][] = [
  ["ai-infrastructure", "AI 인프라", "AI 모델을 학습·추론하기 위한 반도체, 네트워크, 전력, 데이터센터의 연결망", ["nvidia", "amd", "broadcom", "micron", "palantir"]],
  ["semiconductor", "반도체", "설계부터 장비·생산까지 이어지는 디지털 산업의 기반 공급망", ["nvidia", "tsmc", "asml", "amd", "samsung-electronics"]],
  ["hbm-memory", "HBM / 메모리", "AI 가속기의 데이터 처리 병목을 줄이는 고대역폭 메모리 생태계", ["sk-hynix", "micron", "samsung-electronics", "nvidia", "tsmc"]],
  ["space", "우주", "발사체와 위성 시스템을 통해 확장되는 우주 인프라 생태계", ["rocket-lab"]],
  ["power-grid", "전력 인프라", "데이터센터와 산업 전력 수요를 받치는 발전·송전·저장 인프라", ["nvidia", "broadcom", "tsmc"]],
];
const aiChain = [{ layer: "AI 모델", companies: ["OpenAI", "Anthropic", "Google", "Meta"] }, { layer: "클라우드", companies: ["Microsoft", "Amazon", "Google", "Oracle"] }, { layer: "GPU / 가속기", companies: ["NVIDIA", "AMD", "Broadcom"] }, { layer: "HBM", companies: ["SK hynix", "Micron", "Samsung Electronics"] }, { layer: "파운드리", companies: ["TSMC", "Samsung Foundry"] }, { layer: "반도체 장비", companies: ["ASML", "Applied Materials", "Lam Research"] }, { layer: "네트워크", companies: ["Broadcom", "Arista Networks"] }, { layer: "전력", companies: ["GE Vernova", "Constellation Energy"] }];
const themeSources: Source[] = [{ label: "Company Investor Relations", type: "ir" }, { label: "Official Press Releases", type: "press" }, { label: "Earnings Materials", type: "earnings" }];
const themeConnections: Record<string, { learn: string[]; briefs: string[] }> = {
  "ai-infrastructure": { learn: ["gpu", "ai-asic", "cuda", "capex"], briefs: ["nvidia-blackwell-demand", "hyperscaler-capex"] },
  semiconductor: { learn: ["foundry", "euv", "gpu", "hbm"], briefs: ["tsmc-cowos-capacity", "nvidia-blackwell-demand"] },
  "hbm-memory": { learn: ["hbm", "gpu", "foundry"], briefs: ["hbm-supply-chain", "tsmc-cowos-capacity"] },
  space: { learn: ["capex"], briefs: ["space-launch-cadence"] },
  "power-grid": { learn: ["capex", "gpu"], briefs: ["hyperscaler-capex"] },
};
export const themes: Theme[] = themeRecords.map(([slug, name, summary, relatedStocks]) => ({ slug, name, summary, description: `${name} 테마는 여러 기업과 기술이 맞물려 변화하는 산업 지형입니다. 개별 가격 전망보다 가치사슬과 관찰 지표를 이해하는 데 초점을 둡니다.`, whyItMatters: ["장기 산업 변화가 여러 공급망에 동시에 영향을 줍니다.", "수요와 공급의 병목을 찾아볼 수 있습니다.", "기업별 역할을 비교하는 출발점이 됩니다."], valueChain: aiChain, relatedStocks, relatedLearn: themeConnections[slug].learn, relatedBriefs: themeConnections[slug].briefs, kpis: ["산업 CAPEX", "가동률", "수주와 리드타임", "재고 수준"], risks: ["투자 사이클 변동", "공급 과잉", "규제와 지정학"], sources: themeSources, lastUpdated: "2026-06-30" }));
export const getTheme = (slug: string) => themes.find((item) => item.slug === slug);
