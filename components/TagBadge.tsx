import Link from "next/link";
export function TagBadge({ label, href }: { label: string; href?: string }) { const inner = <span className="soft-tag">{label}</span>; return href ? <Link href={href}>{inner}</Link> : inner; }
