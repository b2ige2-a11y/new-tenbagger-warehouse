import type { KpiItem } from "@/data/types";
import { formatDate } from "@/lib/utils";

type NormalizedKpi = Exclude<KpiItem, string> & { label: string; description: string; importance: "high" | "medium" | "low" };
function normalizeKpi(item: KpiItem): NormalizedKpi { return typeof item === "string" ? { label: item, description: "회사 흐름을 이해할 때 함께 보면 좋은 숫자입니다.", importance: "medium" } : { importance: "medium", ...item }; }
function displayDate(value?: string) { if (!value) return undefined; return /^\d{4}-\d{2}-\d{2}$/.test(value) ? formatDate(value) : value; }

export function KpiWatchlist({ items }: { items: KpiItem[] }) { return <div className="key-number-grid">{items.map((item) => { const kpi = normalizeKpi(item); const date = kpi.period ?? displayDate(kpi.asOf ?? kpi.lastChecked); const change = kpi.change ?? kpi.trend; return <article className={`key-number ${kpi.importance === "high" ? "key-number--high" : ""}`} key={kpi.label}>
  <div className="key-number__top"><p className="key-number__label">{kpi.label}</p>{date && <span className="key-number__period">{date}</span>}</div>
  {kpi.value ? <div className="key-number__figure"><strong>{kpi.value}</strong>{change && <span>{change}</span>}</div> : <p className="key-number__pending">공식 자료 기준으로 업데이트 예정</p>}
  <p className="key-number__note">{kpi.note ?? kpi.description}</p>
  {kpi.watchPoint && <p className="key-number__next"><b>다음에 볼 것</b>{kpi.watchPoint}</p>}
  {kpi.sourceLabel && <footer className="key-number__source">{kpi.sourceUrl ? <a href={kpi.sourceUrl} target="_blank" rel="noreferrer">{kpi.sourceLabel} ↗</a> : <span>{kpi.sourceLabel}</span>}</footer>}
  </article>; })}</div>; }
