import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { BriefCard } from "@/components/BriefCard";
import { briefs } from "@/data/briefs";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("브리프 아카이브", "산업 변화와 기업의 연결고리를 요약과 해설 중심으로 정리한 정보성 아카이브입니다.", "/briefs");
export default function BriefsPage() { return <Container><PageIntro eyebrow="브리프 형식 예시" title="브리프 아카이브" description="원문을 옮기는 뉴스 번역이 아니라, 핵심 맥락과 다음 관찰 지표를 남기는 요약·해설 형식입니다. 현재 항목은 콘텐츠 형식을 보여 주는 아카이브 노트입니다." /><div className="grid gap-4 py-10 md:grid-cols-2 xl:grid-cols-3">{briefs.map((brief) => <BriefCard key={brief.slug} brief={brief} />)}</div></Container>; }
