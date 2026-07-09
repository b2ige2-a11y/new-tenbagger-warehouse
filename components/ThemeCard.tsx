import Link from "next/link";
import type { Theme } from "@/data/types";
export function ThemeCard({ theme }: { theme: Theme }) { return <Link href={`/themes/${theme.slug}`} className="panel rounded-xl p-5 transition hover:border-cyan-300/50"><p className="eyebrow">THEME MAP</p><h3 className="mt-3 text-xl font-semibold">{theme.name}</h3><p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">{theme.summary}</p><p className="mt-5 text-xs text-cyan-300">연결 기업 {theme.relatedStocks.length}개 →</p></Link>; }
