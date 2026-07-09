import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("About", "텐배거 웨어하우스 소개", "/about");
export default function AboutPage() { return <Container><PageIntro eyebrow="ABOUT" title="뉴스가 쌓이는 기업 백과사전" description="텐배거 웨어하우스는 미래 산업을 둘러싼 정보 조각을 기업, 테마, 핵심 개념으로 연결하는 정적 아카이브입니다." /><div className="prose-copy mt-10 max-w-3xl text-sm"><p>AI, 반도체, 우주, 전력 인프라는 빠르게 변하고 서로 얽혀 있습니다. 이 사이트는 헤드라인을 반복하는 대신, 한국 투자자가 기업의 역할과 관찰 지표를 이해하는 데 필요한 맥락을 축적하려 합니다.</p></div></Container>; }
