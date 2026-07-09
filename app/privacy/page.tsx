import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("Privacy", "텐배거 웨어하우스 개인정보 처리 안내", "/privacy");
export default function PrivacyPage() { return <Container><PageIntro eyebrow="PRIVACY" title="개인정보 처리 안내" description="현재 MVP는 회원가입, 댓글, 개인화 기능을 제공하지 않는 정적 사이트입니다." /><div className="prose-copy mt-10 max-w-3xl text-sm"><p>서비스 운영 환경은 접속 로그와 같은 기술 정보를 제한적으로 처리할 수 있습니다. 이 사이트는 이용자의 개인정보를 판매하지 않으며, 별도 수집 기능이 도입될 경우 본 안내를 업데이트합니다.</p></div></Container>; }
