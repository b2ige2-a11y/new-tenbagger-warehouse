import { Container } from "@/components/Container";
import { PageIntro } from "@/components/ContentBlocks";
import { ThemeCard } from "@/components/ThemeCard";
import { themes } from "@/data/themes";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => metadata("테마 지도", "AI 인프라, 반도체, HBM, 우주, 전력 인프라의 가치사슬을 정리합니다.", "/themes");
export default function ThemesPage() { return <Container><PageIntro eyebrow="THEME MAP" title="미래 산업 테마 지도" description="기업 하나만으로는 보기 어려운 가치사슬과 산업의 연결고리를 살펴봅니다." /><div className="grid gap-4 py-10 md:grid-cols-2 xl:grid-cols-3">{themes.map((theme) => <ThemeCard key={theme.slug} theme={theme} />)}</div></Container>; }
