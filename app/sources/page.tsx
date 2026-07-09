import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("출처 안내", "텐배거 웨어하우스의 자료 확인 원칙과 출처 표기 방식을 안내합니다.", "/sources");
export default function SourcesPage() { return <Container><PageIntro eyebrow="SOURCES" title="출처와 자료 확인" description="아카이브는 가능한 한 회사의 공식 공시, 실적 자료, 투자자 관계(IR) 페이지, 기술 문서를 우선 참고합니다." /><div className="prose-copy mt-10 max-w-3xl space-y-5 text-sm"><p>각 기업·브리프 페이지 하단에는 해당 항목과 연결된 출처 링크를 표기합니다. 링크는 추가 검증을 위한 출발점이며, 내용의 완전성이나 최신성을 보장하지 않습니다.</p><p>현재 MVP의 브리프는 정보 구조를 보여 주기 위한 샘플입니다. 실제 게시 전에는 원문 확인, 날짜 검증, 균형 검토를 거쳐야 합니다.</p></div></Container>; }
