# 배포 전 체크리스트

## 품질 검증

- [ ] `npm run lint` 성공
- [ ] `npm run build` 성공
- [ ] 주요 라우트 200 확인
- [ ] 존재하지 않는 slug 404 확인
- [ ] `sitemap.xml` 확인
- [ ] `robots.txt` 확인
- [ ] canonical URL 확인
- [ ] footer 면책 문구 확인
- [ ] 모바일 375px 확인

## Vercel 및 도메인

- [ ] Vercel 프로젝트 생성
- [ ] GitHub repository 연결
- [ ] `NEXT_PUBLIC_SITE_URL=https://실제도메인` 환경변수 설정
- [ ] 프로덕션 빌드 후 sitemap·robots의 도메인 확인
- [ ] Cloudflare DNS 연결

## 검색 노출

- [ ] Google Search Console 등록 및 sitemap 제출
- [ ] Bing Webmaster Tools 등록 및 sitemap 제출

## 콘텐츠 공개 전

- [ ] 각 상세 페이지의 공식 출처와 업데이트 날짜 확인
- [ ] URL 없는 출처에 가짜 링크가 없는지 확인
- [ ] 브리프가 실시간 뉴스나 투자 권유로 오해되지 않는지 확인
