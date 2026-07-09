import type { KpiItem } from "@/data/types";
import { formatDate } from "@/lib/utils";

type NormalizedKpi = Exclude<KpiItem, string> & { label: string; description: string; status: string; watchPoint: string; importance: "high" | "medium" | "low" };

function normalizeKpi(item: KpiItem): NormalizedKpi { return typeof item === "string" ? { label: item, value: null, trend: null, status: "정기 점검 필요", description: "기업의 사업 흐름과 수요 변화를 함께 확인하는 관찰 지표입니다.", watchPoint: "다음 회사 공시와 실적 자료에서 변화 여부 확인", importance: "medium" } : { importance: "medium", status: "정기 점검 필요", watchPoint: "다음 공식 자료에서 변화 여부 확인", ...item }; }
function displayDate(value?: string) { if (!value) return "점검일 미입력"; return /^\d{4}-\d{2}-\d{2}$/.test(value) ? formatDate(value) : value; }

export function KpiWatchlist({ items }: { items: KpiItem[] }) { return <div className="grid gap-4 lg:grid-cols-2">{items.map((item) => { const kpi = normalizeKpi(item); const checked = kpi.asOf ?? kpi.lastChecked; const high = kpi.importance === "high"; return <article className={`kpi-card ${high ? "kpi-card--high" : ""}`} key={kpi.label}>
  <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="kpi-card__label">{kpi.label}</p><p className="kpi-card__value">{kpi.value || "공식 자료 확인 후 입력"}</p></div><span className="kpi-status">{kpi.status}</span></div>
  <div className="mt-3 flex items-center gap-2"><span className="kpi-trend">추세</span><span className="text-sm font-semibold">{kpi.trend || "추세 미입력"}</span></div>
  <p className="mt-4 text-sm leading-7 text-slate-400">{kpi.description}</p>
  <div className="kpi-watchpoint mt-4"><p className="text-xs font-semibold">다음 체크 포인트</p><p className="mt-1 text-sm leading-6">{kpi.watchPoint}</p></div>
  <footer className="kpi-card__footer"><span>기준일 · {displayDate(checked)}</span>{kpi.sourceLabel && (kpi.sourceUrl ? <a href={kpi.sourceUrl} target="_blank" rel="noreferrer">{kpi.sourceLabel} ↗</a> : <span>{kpi.sourceLabel}</span>)}</footer>
  </article>; })}</div>; }
