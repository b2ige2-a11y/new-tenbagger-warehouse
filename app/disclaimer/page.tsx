import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { disclaimer } from "@/lib/utils";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("면책조항", "텐배거 웨어하우스의 정보·학습 목적 및 면책조항을 안내합니다.", "/disclaimer");
export default function DisclaimerPage() { return <Container><PageIntro eyebrow="DISCLAIMER" title="면책조항" description={disclaimer} /><div className="prose-copy mt-10 max-w-3xl text-sm"><p>본 사이트의 콘텐츠는 일반적인 정보 정리와 학습 목적으로 제공됩니다. 특정 금융상품의 매수·매도, 가격 전망 또는 투자 자문에 해당하지 않습니다.</p><p>투자에는 원금 손실을 포함한 위험이 있으며, 모든 판단과 그 결과에 대한 책임은 이용자 본인에게 있습니다. 필요한 경우 적격한 전문가와 상담하세요.</p></div></Container>; }
