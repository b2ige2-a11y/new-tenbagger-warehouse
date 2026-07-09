import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("Contact", "텐배거 웨어하우스 문의", "/contact");
export default function ContactPage() { return <Container><PageIntro eyebrow="CONTACT" title="문의" description="자료 오류, 링크 수정, 콘텐츠 관련 의견은 아래 채널로 보내주세요." /><div className="panel mt-10 max-w-xl rounded-xl p-6"><p className="text-sm text-slate-400">일반 문의</p><a className="mt-2 block text-lg text-cyan-300 hover:underline" href="mailto:hello@tenbaggerwarehouse.com">hello@tenbaggerwarehouse.com</a><p className="mt-5 text-sm leading-6 text-slate-500">투자 자문이나 개별 종목 추천 문의에는 답변하지 않습니다.</p></div></Container>; }
