import Link from "next/link";
import type { Stock } from "@/data/types";

const themeNames: Record<string, string> = { "ai-infrastructure": "AI 인프라", semiconductor: "반도체", "hbm-memory": "HBM", space: "우주", "power-grid": "전력" };

export function StockCard({ stock }: { stock: Stock }) {
  const keywordFact = stock.quickFacts?.find((fact) => fact.label.includes("키워드"));
  const keywords = keywordFact ? keywordFact.value.split(" · ").slice(0, 3) : stock.themes.map((theme) => themeNames[theme] ?? theme);
  const thesis = stock.thesis?.statement ?? stock.summary;
  const keyNumber = stock.kpis.find((item) => typeof item !== "string" && item.value);

  return <Link href={`/stocks/${stock.slug}`} className="friendly-stock-card">
    <div className="friendly-stock-card__top">
      <span className="friendly-stock-card__monogram" aria-hidden="true">{stock.ticker}</span>
      <div><p className="friendly-stock-card__name">{stock.name}</p><p className="friendly-stock-card__meta">{stock.exchange} · {stock.sector}</p></div>
      {stock.thesis && <span className="friendly-stock-card__status">Thesis {stock.thesis.status}</span>}
    </div>
    <p className="friendly-stock-card__summary">{thesis}</p>
    {keyNumber && typeof keyNumber !== "string" && keyNumber.value && <div className="friendly-stock-card__number"><span>{keyNumber.label}</span><b>{keyNumber.value}</b>{keyNumber.period && <small>{keyNumber.period}</small>}</div>}
    <div className="friendly-stock-card__footer"><div className="friendly-stock-card__keywords">{keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}</div><p className="friendly-stock-card__link">핵심 관점 보기 <i aria-hidden="true">→</i></p></div>
  </Link>;
}
