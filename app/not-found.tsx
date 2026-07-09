import Link from "next/link";
import { Container } from "@/components/Container";
export default function NotFound() { return <Container className="py-32 text-center"><p className="eyebrow">404</p><h1 className="mt-3 text-3xl font-semibold">찾을 수 없는 아카이브 항목입니다.</h1><p className="mt-4 text-slate-400">주소를 확인하거나 기업·테마 목록에서 다시 찾아보세요.</p><Link className="mt-7 inline-block text-cyan-300" href="/">홈으로 돌아가기 →</Link></Container>; }
