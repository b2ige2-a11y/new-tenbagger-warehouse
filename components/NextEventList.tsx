import type { NextEvent } from "@/data/types";

export function NextEventList({ items }: { items: NextEvent[] }) { return <div className="next-events">{items.map((item) => <article key={`${item.category}-${item.title}`}><span>{item.category}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div>; }
