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
const featuredProfiles: Partial<Record<string, Pick<Stock, "description" | "kpis" | "bullCase" | "bearCase" | "risks" | "catalysts" | "quickFacts" | "observationPoints" | "businessSegments" | "whyItMatters" | "supplyChain">>> = {
  nvidia: {
    description: "NVIDIA는 대규모 AI 연산에 쓰이는 GPU와 이를 연결하는 네트워킹, 개발자가 GPU를 활용하도록 돕는 CUDA 소프트웨어 생태계를 함께 제공하는 기업입니다. 한 제품의 성능뿐 아니라 칩·시스템·소프트웨어가 함께 작동하는 플랫폼을 이해하는 것이 핵심입니다.",
    quickFacts: [{ label: "무엇을 하나", value: "AI 연산용 GPU 플랫폼을 만듭니다" }, { label: "왜 중요한가", value: "GPU·네트워크·소프트웨어를 하나의 플랫폼으로 연결합니다" }, { label: "핵심 키워드", value: "GPU · CUDA · 네트워킹 · HBM" }, { label: "같이 볼 테마", value: "AI 인프라 · 반도체" }],
    businessSegments: [{ title: "AI 가속기", description: "데이터센터에서 AI 모델을 학습하고 실행하는 데 쓰이는 GPU와 관련 시스템입니다.", note: "수요의 중심" }, { title: "네트워킹", description: "여러 서버와 가속기가 데이터를 빠르게 주고받도록 돕는 연결 기술입니다.", note: "규모 확장의 연결고리" }, { title: "소프트웨어 생태계", description: "CUDA와 개발 도구는 GPU를 실제 업무와 연구에 쓰게 하는 소프트웨어 기반입니다.", note: "플랫폼의 사용 경험" }],
    whyItMatters: [{ title: "AI 연산의 중심", description: "대형 AI 모델에는 많은 병렬 연산이 필요하며, GPU는 그 연산을 수행하는 핵심 장치입니다." }, { title: "소프트웨어까지 연결", description: "CUDA 생태계는 하드웨어 성능 외에 개발자가 계속 사용할 이유를 만드는 요소입니다." }, { title: "인프라 투자와 연결", description: "클라우드·인터넷 기업의 데이터센터 투자 변화가 공급망 수요와 연결될 수 있습니다." }],
    observationPoints: [{ title: "AI 인프라 투자", status: "계속 확인", detail: "대형 클라우드 기업의 CAPEX 계획이 실제 시스템 수요와 어떻게 연결되는지 봅니다." }, { title: "HBM·패키징 공급망", status: "병목 점검", detail: "고성능 시스템 공급이 메모리와 첨단 패키징 역량의 영향을 받는지 확인합니다." }, { title: "고객 집중도", status: "리스크 점검", detail: "소수 대형 고객의 투자 계획 변화가 수요에 주는 영향을 함께 살펴봅니다." }, { title: "경쟁 구도", status: "변화 관찰", detail: "자체 AI 칩과 경쟁 가속기의 채택 변화가 중요한 변수입니다." }],
    kpis: [{ label: "데이터센터 매출", value: null, trend: null, status: "AI 수요를 확인하는 최우선 지표", description: "GPU와 네트워킹 수요가 실제 매출로 이어지는지 보여 줍니다.", watchPoint: "다음 공식 실적에서 성장 흐름과 고객 수요 지속 여부를 확인", asOf: "공식 자료 확인 후 업데이트", sourceLabel: "Company Earnings Materials", importance: "high" }, { label: "매출총이익률", value: null, trend: null, status: "제품 구성 변화 점검", description: "제품 구성과 가격 결정력, 비용 구조가 어떻게 바뀌는지 보여 줍니다.", watchPoint: "신제품 전환과 공급 확대가 수익성에 주는 영향 확인", asOf: "공식 자료 확인 후 업데이트", sourceLabel: "Company Earnings Materials", importance: "high" }, { label: "네트워킹 매출", value: null, trend: null, status: "시스템 수요 동행 여부", description: "GPU 외 연결 장비 수요가 함께 커지는지 확인하는 단서입니다.", watchPoint: "AI 시스템 확장 시 네트워킹 수요도 함께 증가하는지 확인", asOf: "공식 자료 확인 후 업데이트", sourceLabel: "Company Earnings Materials" }, { label: "재고", value: null, trend: null, status: "수요·공급 균형 점검", description: "공급과 실제 고객 수요 사이에 과도한 간극이 없는지 점검합니다.", watchPoint: "재고와 공급 가능 물량이 고객 수요 설명과 일치하는지 확인", asOf: "공식 자료 확인 후 업데이트", sourceLabel: "SEC Filings" }, { label: "하이퍼스케일러 CAPEX", value: null, trend: null, status: "외부 수요 신호", description: "대형 클라우드 기업의 설비투자 계획은 인프라 수요의 외부 관찰 포인트입니다.", watchPoint: "주요 고객의 투자 목적과 집행 속도 변화 확인", asOf: "공식 자료 확인 후 업데이트", sourceLabel: "Official Company Disclosures" }],
    bullCase: ["AI 연산 수요가 넓은 산업으로 확산될 가능성", "CUDA와 개발 생태계가 플랫폼 사용성을 뒷받침할 가능성", "GPU·네트워킹·소프트웨어의 결합이 이어질 가능성"],
    bearCase: ["대형 고객의 자체 AI 칩 확대와 경쟁 구도 변화", "고객의 데이터센터 투자 속도 조정", "높은 기대가 실제 수요보다 앞서갈 가능성"], risks: ["소수 대형 고객에 대한 수요 집중", "수출 규제와 지정학적 변수", "경쟁 가속기와 자체 칩의 성능·비용 개선", "공급망과 패키징 제약"], catalysts: ["분기 가이던스와 데이터센터 수요 설명", "신제품 전환과 공급 가능 물량", "주요 클라우드 기업의 CAPEX 계획"],
    supplyChain: [{ label: "클라우드·AI 기업", description: "AI 서비스를 운영하기 위해 연산 인프라를 구축합니다." }, { label: "NVIDIA 플랫폼", description: "GPU, 네트워킹, CUDA 소프트웨어가 결합됩니다." }, { label: "제조·메모리 파트너", description: "TSMC의 생산과 HBM 공급망이 고성능 시스템을 뒷받침합니다." }]
  },
  amd: {
    description: "AMD는 서버와 PC에 쓰이는 CPU, 그래픽과 AI 연산에 쓰이는 GPU를 함께 설계하는 반도체 기업입니다. AI 가속기만이 아니라 데이터센터 CPU, PC와 콘솔 수요가 사업 구조에 함께 영향을 준다는 점을 살펴볼 필요가 있습니다.",
    quickFacts: [{ label: "무엇을 하나", value: "CPU와 GPU를 설계하는 반도체 기업" }, { label: "왜 중요한가", value: "범용 연산과 AI 가속기 양쪽에 제품을 보유합니다" }, { label: "핵심 키워드", value: "서버 CPU · AI GPU · PC · 콘솔" }, { label: "같이 볼 테마", value: "AI 인프라 · 반도체" }],
    businessSegments: [{ title: "데이터센터 CPU", description: "서버의 범용 연산을 담당하는 CPU입니다. 클라우드와 기업용 서버 수요를 함께 봅니다.", note: "서버 시장 관찰" }, { title: "AI 가속기", description: "AI 학습·추론에 쓰이는 GPU와 관련 플랫폼입니다.", note: "경쟁 구도 관찰" }, { title: "PC·게임 반도체", description: "개인용 PC와 콘솔 수요는 다른 주기로 움직일 수 있는 사업 축입니다.", note: "수요 분산" }],
    whyItMatters: [{ title: "CPU와 GPU를 함께 보유", description: "데이터센터의 범용 연산과 AI 연산 양쪽에 제품을 갖추고 있습니다." }, { title: "서버 경쟁 구도", description: "서버 CPU 채택 변화는 데이터센터 사업의 흐름을 읽는 단서가 됩니다." }, { title: "AI 가속기 선택지", description: "고객이 AI 시스템을 구성할 때 비교하는 가속기 중 하나로 살펴볼 수 있습니다." }],
    observationPoints: [{ title: "서버 CPU 채택", status: "점유율 변화 확인", detail: "클라우드·기업 고객에서의 플랫폼 전환이 이어지는지 살펴봅니다." }, { title: "AI 가속기 채택", status: "경쟁력 점검", detail: "고객 시스템에서 AI GPU가 실제로 적용되는지 확인합니다." }, { title: "PC 수요", status: "사이클 점검", detail: "PC 교체 수요와 채널 재고가 클라이언트 사업에 미치는 영향을 봅니다." }],
    kpis: [{ label: "데이터센터 부문 흐름", status: "CPU·AI 수요 동시 점검", description: "서버 CPU와 AI 가속기 관련 수요가 실제 사업에 미치는 영향을 점검합니다.", watchPoint: "다음 가이던스에서 데이터센터 제품별 설명 확인", lastChecked: "2026-07-10", importance: "high" }, { label: "서버 CPU 채택", status: "플랫폼 전환 관찰", description: "클라우드·기업 고객에서의 플랫폼 채택 변화가 중요한 관찰 포인트입니다.", watchPoint: "주요 고객의 서버 플랫폼 도입 사례 확인", lastChecked: "2026-07-10", importance: "high" }, { label: "AI GPU 채택", status: "경쟁 구도 관찰", description: "AI 가속기 제품이 고객 시스템에 얼마나 적용되는지 확인합니다.", watchPoint: "신규 고객과 시스템 파트너의 채택 흐름 확인", lastChecked: "2026-07-10" }, { label: "PC 수요", status: "회복 여부 점검", description: "PC 교체 주기와 채널 재고는 클라이언트 사업에 영향을 줄 수 있습니다.", watchPoint: "채널 재고와 최종 수요 설명의 변화 확인", lastChecked: "2026-07-10" }, { label: "매출총이익률", status: "제품 믹스 확인", description: "제품 구성과 데이터센터 비중 변화가 수익성에 주는 영향을 봅니다.", watchPoint: "데이터센터와 클라이언트 비중 변화 확인", lastChecked: "2026-07-10" }],
    bullCase: ["서버 CPU에서의 채택이 이어질 가능성", "AI 가속기가 고객의 선택지를 넓힐 가능성", "여러 사업 축이 수요 변동을 분산할 가능성"], bearCase: ["AI 가속기 경쟁이 예상보다 오래 지속될 가능성", "PC·게임 수요의 회복 지연", "제품 전환 과정에서의 실행 리스크"], risks: ["대형 경쟁사와의 제품·생태계 경쟁", "파운드리 및 첨단 패키징 공급 제약", "데이터센터와 PC 수요의 동시 둔화", "고객 플랫폼 전환 속도"], catalysts: ["서버 CPU와 AI 가속기 가이던스", "주요 고객의 제품 채택 발표", "PC 채널 재고와 수요 변화"],
    supplyChain: [{ label: "클라우드·기업 고객", description: "서버와 AI 인프라 구축 수요를 만듭니다." }, { label: "AMD CPU·GPU", description: "범용 연산과 AI 가속기 역할을 각각 담당합니다." }, { label: "파운드리·패키징", description: "첨단 공정과 패키징은 제품 공급의 중요한 기반입니다." }]
  },
  tsmc: {
    description: "TSMC는 팹리스 기업이 설계한 반도체를 실제 칩으로 생산하는 글로벌 파운드리입니다. 선단 공정뿐 아니라 AI 칩과 메모리를 연결하는 첨단 패키징 능력이 AI 반도체 공급망에서 중요한 역할을 합니다.",
    quickFacts: [{ label: "무엇을 하나", value: "고객이 설계한 반도체를 위탁 생산합니다" }, { label: "왜 중요한가", value: "선단 공정과 첨단 패키징으로 AI 칩 공급망을 뒷받침합니다" }, { label: "핵심 키워드", value: "파운드리 · 선단 공정 · CoWoS · 가동률" }, { label: "같이 볼 테마", value: "반도체 · HBM/메모리" }],
    businessSegments: [{ title: "선단 공정 생산", description: "고성능·저전력 칩을 제조하기 위한 미세 공정입니다.", note: "고객 설계의 제조 기반" }, { title: "첨단 패키징", description: "AI 가속기와 HBM 등 여러 칩을 가깝게 연결해 시스템 성능을 높이는 공정입니다.", note: "AI 공급망의 병목 가능성" }, { title: "고객 생산 서비스", description: "팹리스 고객의 설계가 안정적으로 양산되도록 생산·수율·일정을 관리합니다.", note: "신뢰와 실행력" }],
    whyItMatters: [{ title: "AI 칩의 제조 기반", description: "NVIDIA, AMD 등 팹리스 기업의 고성능 칩 생산은 파운드리 역량과 연결됩니다." }, { title: "패키징의 중요성", description: "AI 시스템은 칩만으로 완성되지 않으며, HBM과의 연결을 위한 첨단 패키징도 필요합니다." }, { title: "산업의 공통 관찰점", description: "선단 공정 수요와 가동률은 여러 반도체 기업의 공급 흐름을 읽는 단서가 됩니다." }],
    observationPoints: [{ title: "선단 공정 수요", status: "고성능 칩 수요 점검", detail: "AI·스마트폰·고성능 컴퓨팅 고객의 주문 흐름을 함께 봅니다." }, { title: "첨단 패키징", status: "공급 병목 확인", detail: "AI 칩과 HBM을 연결하는 패키징 역량이 공급 일정을 좌우하는지 살펴봅니다." }, { title: "지정학", status: "장기 리스크 점검", detail: "생산 거점과 공급망에 영향을 줄 수 있는 변수를 지속적으로 확인합니다." }],
    kpis: [{ label: "선단 공정 수요", status: "고성능 수요 연결성", description: "고성능 칩 고객이 최신 공정을 얼마나 필요로 하는지 확인합니다.", watchPoint: "주요 고객 제품 전환과 선단 공정 수요 설명 확인", lastChecked: "2026-07-10", importance: "high" }, { label: "첨단 패키징 공급 능력", status: "공급 병목 점검", description: "AI 칩과 HBM을 연결하는 패키징이 공급 병목이 되는지 살펴봅니다.", watchPoint: "증설 일정과 고객 수요의 균형 확인", lastChecked: "2026-07-10", importance: "high" }, { label: "가동률", status: "주문 흐름 확인", description: "공장 설비가 실제 주문에 따라 어느 정도 활용되는지 보여 주는 지표입니다.", watchPoint: "가동률 변화와 산업 수요 설명을 함께 확인", lastChecked: "2026-07-10" }, { label: "CAPEX", status: "장기 투자 방향", description: "공정과 생산능력 확대를 위한 장기 투자 방향을 확인합니다.", watchPoint: "증설 속도와 수요 가정의 일치 여부 확인", lastChecked: "2026-07-10" }, { label: "고객 구성", status: "수요 분산 점검", description: "특정 고객·최종 시장에 대한 의존도와 수요 분산을 점검합니다.", watchPoint: "최종 시장별 수요 변화와 고객 집중도 확인", lastChecked: "2026-07-10" }],
    bullCase: ["AI와 고성능 컴퓨팅 수요가 선단 공정으로 이어질 가능성", "첨단 패키징의 전략적 중요성이 커질 가능성", "다양한 팹리스 고객 기반이 수요를 뒷받침할 가능성"], bearCase: ["반도체 산업 전반의 수요 조정", "고객의 주문 조정과 가동률 하락", "생산 확대 속도와 수요의 불일치"], risks: ["지정학적 불확실성", "대규모 CAPEX 집행에 따른 사이클 리스크", "고객 집중과 최종 시장 수요 변동", "생산 수율과 증설 실행"], catalysts: ["선단 공정과 첨단 패키징 수요 설명", "CAPEX·증설 계획 업데이트", "주요 고객 제품 출시와 생산 전환"],
    supplyChain: [{ label: "팹리스 고객", description: "NVIDIA, AMD, Apple 등은 칩을 설계하고 생산을 위탁합니다." }, { label: "TSMC", description: "선단 공정과 첨단 패키징으로 설계를 실제 칩과 시스템으로 만듭니다." }, { label: "장비·메모리 생태계", description: "노광 장비와 HBM 공급망이 고성능 반도체 생산을 함께 뒷받침합니다." }]
  }
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
  thesisLogs: [{ date: "2026-06-30", items: ["초기 아카이브 항목을 작성했습니다.", "회사 공시와 공식 자료를 중심으로 후속 점검이 필요합니다."] }], sources: standardSources, lastUpdated: "2026-06-30", ...featuredProfiles[slug]
}));
export const getStock = (slug: string) => stocks.find((item) => item.slug === slug);
