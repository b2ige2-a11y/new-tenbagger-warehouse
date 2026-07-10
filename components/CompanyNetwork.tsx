import Link from "next/link";
import type { CompanyNetwork as CompanyNetworkData } from "@/data/types";

function NameList({ title, items }: { title: string; items: string[] }) { return <div className="network-group"><p>{title}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>; }
export function CompanyNetwork({ companyName, network }: { companyName: string; network: CompanyNetworkData }) { return <div><div className="company-network"><NameList title="주요 고객" items={network.customers} /><NameList title="공급망" items={network.suppliers} /><NameList title="경쟁 구도" items={network.competitors} /></div><div className="beneficiary-list"><p className="beneficiary-list__title">{companyName} 흐름과 함께 봐야 할 기업</p><div>{network.beneficiaries.map((item) => item.slug ? <Link href={`/stocks/${item.slug}`} key={item.name}><b>{item.name}</b><span>{item.reason}</span></Link> : <div key={item.name}><b>{item.name}</b><span>{item.reason}</span></div>)}</div></div></div>; }
