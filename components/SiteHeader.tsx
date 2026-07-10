import Link from "next/link";
import { Container } from "./Container";
import { navItems } from "@/lib/routes";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return <header className="site-header">
    <Container className="site-header__inner">
      <Link href="/" className="brand-mark" aria-label="텐배거 Warehouse 홈">
        <span className="brand-mark__symbol" aria-hidden="true">T</span>
        <span className="brand-mark__copy"><b>텐배거</b><small>Warehouse</small></span>
      </Link>
      <nav className="site-nav" aria-label="주요 메뉴">{navItems.map((item) => <Link className="site-nav-link" href={item.href} key={item.href}>{item.label}</Link>)}</nav>
      <div className="site-header__actions"><ThemeToggle /><Link href="/disclaimer" className="disclaimer-link">정보·학습</Link></div>
    </Container>
  </header>;
}
