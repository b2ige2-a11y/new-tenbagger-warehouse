import Link from "next/link";

export function SectionHeader({ eyebrow, title, description, href }: { eyebrow: string; title: string; description?: string; href?: string }) {
  return <div className="section-header">
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-header__description">{description}</p>}
    </div>
    {href && <Link className="section-header__link" href={href}>전체 보기 <span aria-hidden="true">→</span></Link>}
  </div>;
}
