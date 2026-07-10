import type { StockThesis } from "@/data/types";
import { formatDate } from "@/lib/utils";

export function ThesisPanel({ thesis }: { thesis: StockThesis }) { const tone = thesis.status === "강화" ? "is-strong" : thesis.status === "약화" ? "is-weak" : thesis.status === "확인 필요" ? "is-watch" : "is-steady"; return <section className="thesis-panel"><div className="thesis-panel__top"><p className="eyebrow">핵심 관점</p><span className={`thesis-status ${tone}`}>Thesis {thesis.status}</span></div><h2>{thesis.statement}</h2><div className="thesis-question"><span>가장 중요한 질문</span><p>{thesis.question}</p></div><p className="thesis-panel__date">마지막 점검 · {formatDate(thesis.updatedAt)}</p></section>; }
