import Link from "next/link";
export function TagBadge({ label, href }: { label: string; href?: string }) { const inner = <span className="rounded border border-sky-400/20 bg-sky-400/10 px-2 py-1 text-xs text-sky-200">{label}</span>; return href ? <Link href={href}>{inner}</Link> : inner; }
