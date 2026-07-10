import Link from "next/link";
import type { CompanyComparison as ComparisonData } from "@/data/types";

export function CompanyComparison({ companyName, comparison }: { companyName: string; comparison: ComparisonData }) { return <div className="comparison"><div className="comparison__intro"><p>{comparison.intro}</p>{comparison.peerSlug && <Link href={`/stocks/${comparison.peerSlug}`}>{comparison.peerName} 설명서 보기 →</Link>}</div><div className="comparison__table"><div className="comparison__head"><span>비교 항목</span><b>{companyName}</b><b>{comparison.peerName}</b></div>{comparison.rows.map((row) => <div className="comparison__row" key={row.label}><span>{row.label}</span><p>{row.company}</p><p>{row.peer}</p></div>)}</div></div>; }
