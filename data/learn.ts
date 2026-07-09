import type { LearnItem, Source } from "./types";
const concepts: [string, string, string, string][] = [
  ["hbm", "HBM이란?", "AI 가속기 가까이에 쌓아 대역폭을 높인 고성능 메모리", "HBM(고대역폭 메모리)은 여러 메모리 칩을 수직으로 연결해 데이터가 오가는 길을 넓힌 기술입니다. 대규모 AI 연산은 GPU만큼이나 빠른 메모리 접근이 중요하기 때문에 HBM 공급 능력과 세대 전환이 자주 관찰 대상이 됩니다."],
  ["gpu", "GPU란?", "많은 연산을 동시에 처리하도록 설계된 병렬 연산 장치", "GPU는 원래 그래픽 처리를 위해 발전했지만, 대량의 행렬 연산을 병렬로 처리하는 장점 때문에 AI 학습과 추론의 핵심 연산 장치로 활용됩니다."],
  ["ai-asic", "AI ASIC이란?", "특정 AI 작업에 맞춰 설계한 전용 반도체", "AI ASIC은 범용 가속기와 달리 목표한 작업을 효율적으로 처리하도록 설계됩니다. 비용, 전력 효율, 소프트웨어 생태계 사이의 균형이 핵심입니다."],
  ["cuda", "CUDA란?", "NVIDIA GPU에서 병렬 연산을 실행하도록 돕는 소프트웨어 플랫폼", "CUDA는 개발자가 GPU 연산을 활용할 수 있게 하는 도구와 생태계입니다. 하드웨어 성능 외에 개발 경험과 축적된 코드도 플랫폼 경쟁력에 영향을 줍니다."],
  ["foundry", "파운드리란?", "다른 회사가 설계한 칩을 위탁 생산하는 사업", "파운드리는 고객의 설계를 실제 칩으로 만드는 제조 전문 사업입니다. 공정 기술, 수율, 고객 신뢰가 경쟁의 중심입니다."],
  ["euv", "EUV란?", "아주 짧은 파장의 빛으로 미세 회로를 그리는 노광 기술", "EUV는 더 작은 회로를 구현하는 데 활용되는 첨단 노광 기술입니다. 장비의 복잡성과 공급망은 반도체 산업의 진입 장벽과 연결됩니다."],
  ["capex", "데이터센터 CAPEX란?", "데이터센터 구축에 투입하는 장기 설비투자", "CAPEX는 서버, 네트워크, 전력과 건물 같은 장기 자산에 쓰는 지출입니다. 대형 클라우드 기업의 CAPEX 계획은 인프라 공급망 수요를 파악하는 한 단서가 됩니다."],
  ["gross-margin", "매출총이익률이란?", "매출에서 제품·서비스 제공의 직접 비용을 뺀 비율", "매출총이익률은 제품 믹스와 가격 결정력, 비용 구조를 읽는 기초 지표입니다. 업종별 구조가 다르므로 절대 수치만으로 비교하기보다 변화의 원인을 살펴봐야 합니다."],
  ["psr", "PSR이란?", "기업가치를 매출과 비교해 보는 참고 지표", "PSR(주가매출비율)은 수익성이 아직 낮거나 변동이 큰 기업을 매출 기준으로 비교할 때 쓰입니다. 성장률과 마진 가능성을 함께 봐야 합니다."],
  ["peg-ratio", "PEG Ratio란?", "PER을 이익 성장률과 함께 보는 보조 지표", "PEG는 이익 대비 가격 수준을 성장률과 연결해 보려는 지표입니다. 성장률 추정치의 불확실성과 업종 차이를 감안해 참고용으로 활용해야 합니다."],
];
const learnSources: Source[] = [{ label: "Official Technical Documentation", type: "official" }, { label: "Company Investor Relations", type: "ir" }, { label: "SEC Filings", type: "sec" }];
const connections: Record<string, { stocks: string[]; themes: string[]; briefs: string[] }> = {
  hbm: { stocks: ["sk-hynix", "micron", "samsung-electronics", "nvidia"], themes: ["hbm-memory", "ai-infrastructure"], briefs: ["hbm-supply-chain", "tsmc-cowos-capacity"] },
  gpu: { stocks: ["nvidia", "amd", "broadcom"], themes: ["ai-infrastructure", "semiconductor"], briefs: ["nvidia-blackwell-demand"] },
  "ai-asic": { stocks: ["broadcom", "nvidia", "amd"], themes: ["ai-infrastructure", "semiconductor"], briefs: ["nvidia-blackwell-demand"] },
  cuda: { stocks: ["nvidia"], themes: ["ai-infrastructure"], briefs: ["nvidia-blackwell-demand"] },
  foundry: { stocks: ["tsmc", "samsung-electronics", "asml"], themes: ["semiconductor", "hbm-memory"], briefs: ["tsmc-cowos-capacity"] },
  euv: { stocks: ["asml", "tsmc", "samsung-electronics"], themes: ["semiconductor"], briefs: ["tsmc-cowos-capacity"] },
  capex: { stocks: ["nvidia", "broadcom", "palantir", "rocket-lab"], themes: ["ai-infrastructure", "power-grid", "space"], briefs: ["hyperscaler-capex"] },
  "gross-margin": { stocks: ["nvidia", "broadcom", "micron"], themes: ["ai-infrastructure", "semiconductor"], briefs: ["nvidia-blackwell-demand"] },
  psr: { stocks: ["palantir", "rocket-lab"], themes: ["ai-infrastructure", "space"], briefs: ["space-launch-cadence"] },
  "peg-ratio": { stocks: ["nvidia", "amd", "palantir"], themes: ["ai-infrastructure", "semiconductor"], briefs: ["nvidia-blackwell-demand"] },
};
export const learnItems: LearnItem[] = concepts.map(([slug, title, shortDefinition, explanation]) => ({ slug, title, shortDefinition, explanation, whyItMatters: ["산업 뉴스와 기업 설명서를 이해하는 기본 언어가 됩니다.", "한 가지 수치보다 구조와 연결고리를 보는 데 도움이 됩니다."], relatedStocks: connections[slug].stocks, relatedThemes: connections[slug].themes, relatedBriefs: connections[slug].briefs, nextConcepts: concepts.filter(([s]) => s !== slug).slice(0, 3).map(([s]) => s), sources: learnSources, lastUpdated: "2026-06-30" }));
export const getLearn = (slug: string) => learnItems.find((item) => item.slug === slug);
