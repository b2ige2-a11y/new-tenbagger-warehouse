import Link from "next/link";
import { Container } from "./Container";
import { navItems } from "@/lib/routes";
import { ThemeToggle } from "./ThemeToggle";
export function SiteHeader() { return <header className="site-header"><Container className="flex min-h-16 items-center justify-between gap-4"><Link href="/" className="brand-mark leading-none"><span className="block text-sm font-bold tracking-tight">TENBAGGER</span><span className="brand-mark__sub">WAREHOUSE</span></Link><nav className="hidden items-center gap-5 text-sm lg:flex">{navItems.map((item) => <Link className="site-nav-link" href={item.href} key={item.href}>{item.label}</Link>)}</nav><div className="flex items-center gap-2"><ThemeToggle /><Link href="/disclaimer" className="disclaimer-link">정보·학습</Link></div></Container></header>; }
