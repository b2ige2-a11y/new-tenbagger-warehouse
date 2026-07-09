# 텐배거 웨어하우스

미래 산업 기업을 쉽게 이해하기 위한 정적 투자 아카이브입니다. AI, 반도체, 우주, 전력 인프라 관련 기업의 사업모델, 성장 동력, 핵심 지표와 리스크를 연결해 정리합니다.

## 기술 스택

- Next.js 16 App Router / TypeScript
- Tailwind CSS
- TypeScript 기반 정적 콘텐츠 데이터
- Vercel 배포, Cloudflare DNS 연결 예정

## 로컬 실행

```bash
npm install
npm run dev
```

검증과 정적 빌드:

```bash
npm run lint
npm run build
```

`npm run build` 결과물은 `out/`에 생성됩니다.

## 환경변수

배포 환경에서는 아래 값을 설정합니다. 이 값은 canonical URL, Open Graph URL, `sitemap.xml`, `robots.txt`에 공통으로 사용됩니다.

```text
NEXT_PUBLIC_SITE_URL=https://실제도메인
```

환경변수가 없으면 개발용 기본값 `http://localhost:3000`을 사용합니다. 로컬 설정은 `.env.example`을 복사해 시작할 수 있습니다.

## 주요 폴더

```text
app/          페이지, metadata, sitemap, robots
components/   공통 UI와 출처 블록
data/         종목·테마·개념·브리프 정적 데이터
lib/          SEO URL 및 공통 유틸리티
```

## 콘텐츠 작성 원칙

- 기업의 사업 구조, 관찰 지표, 리스크를 쉽게 설명합니다.
- 원문 기사 전체 번역 대신 요약과 해설을 제공합니다.
- 구체적인 최신 수치·주가·실적은 검수된 공식 출처 없이는 추가하지 않습니다.
- 출처는 `label`, 선택적 `url`, 선택적 `type`으로 기록합니다. URL을 모르면 비워 둡니다.
- 매수·매도 권유, 수익 보장, 단정적 가격 전망을 작성하지 않습니다.

## 금융 콘텐츠 면책

본 사이트의 모든 콘텐츠는 투자 권유가 아닌 정보 정리 및 학습 목적입니다. 투자 판단과 책임은 투자자 본인에게 있습니다.

## 향후 계획

- 각 데이터 항목에 검수된 공식 IR·공시·보도자료 URL 보강
- 브리프 편집 및 출처 검수 절차 문서화
- Vercel 배포, Cloudflare DNS 연결, Search Console 등록
