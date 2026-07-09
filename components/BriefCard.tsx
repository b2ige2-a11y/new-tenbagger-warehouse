import Link from "next/link";
import type { Brief } from "@/data/types";
import { formatDate } from "@/lib/utils";
export function BriefCard({ brief }: { brief: Brief }) { return <Link href={`/briefs/${brief.slug}`} className="panel block rounded-xl p-5 transition hover:border-cyan-300/50"><div className="flex justify-between gap-3 text-xs"><span className="text-amber-200">ARCHIVE NOTE</span><span className="text-slate-500">{formatDate(brief.date)}</span></div><h3 className="mt-3 text-base font-semibold leading-6">{brief.title}</h3><p className="mt-3 text-sm leading-5 text-slate-400">{brief.summary[0]}</p></Link>; }
