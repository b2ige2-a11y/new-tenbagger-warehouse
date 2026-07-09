import { formatDate } from "@/lib/utils";
import { BulletList } from "./ContentBlocks";
export function ThesisLog({ logs }: { logs: { date: string; items: string[] }[] }) { return <div className="space-y-4">{logs.map((log) => <div key={log.date}><p className="text-xs text-slate-500">{formatDate(log.date)}</p><BulletList items={log.items} /></div>)}</div>; }
