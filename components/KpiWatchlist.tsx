import type { KpiItem } from "@/data/types";

function normalizeKpi(item: KpiItem) { return typeof item === "string" ? { label: item, description: "기업의 사업 흐름과 수요 변화를 함께 확인하는 관찰 지표입니다.", importance: "medium" as const } : { importance: "medium" as const, ...item }; }

export function KpiWatchlist({ items }: { items: KpiItem[] }) { return <div className="grid gap-3">{items.map((item) => { const kpi = normalizeKpi(item); const tone = kpi.importance === "high" ? "border-cyan-300/35 bg-cyan-300/[.06]" : "border-[#29435e] bg-[#0b1a2b]/60"; return <article className={`rounded-lg border p-4 ${tone}`} key={kpi.label}><div className="flex items-start gap-3"><span className="mt-1.5 size-2 shrink-0 rounded-full bg-cyan-300" /><div><h3 className="text-sm font-semibold text-slate-100">{kpi.label}</h3><p className="mt-1.5 text-sm leading-6 text-slate-400">{kpi.description}</p></div></div></article>; })}</div>; }
