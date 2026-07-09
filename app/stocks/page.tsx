import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { StockCard } from "@/components/StockCard";
import { stocks } from "@/data/stocks";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("종목 기업 설명서", "미래 산업 주요 기업의 사업모델, 핵심 지표, 성장 동력과 리스크를 정리합니다.", "/stocks");
export default function StocksPage() { return <Container><PageIntro eyebrow="COMPANY ARCHIVE" title="종목 기업 설명서" description="기업이 무엇을 하는지, 어떤 지표와 리스크를 점검할지 정리한 정적 아카이브입니다." /><div className="grid gap-4 py-10 md:grid-cols-2 xl:grid-cols-3">{stocks.map((stock) => <StockCard key={stock.slug} stock={stock} />)}</div></Container>; }
