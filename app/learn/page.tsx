import Link from "next/link";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { learnItems } from "@/data/learn";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("투자 개념 설명", "HBM, GPU, AI ASIC, CUDA 등 미래 산업을 이해하는 핵심 개념을 쉽게 설명합니다.", "/learn");
export default function LearnPage() { return <Container><PageIntro eyebrow="LEARNING LIBRARY" title="알아두면 좋은 핵심 개념" description="산업과 기업 설명서를 읽기 위한 기본 언어를 쉬운 톤으로 정리했습니다." /><div className="grid gap-4 py-10 md:grid-cols-2">{learnItems.map((item) => <Link className="panel rounded-xl p-5 hover:border-cyan-300/50" href={`/learn/${item.slug}`} key={item.slug}><h2 className="text-lg font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{item.shortDefinition}</p></Link>)}</div></Container>; }
