export function HomeHeroVisual() {
  return (
    <div className="home-hero-visual" aria-label="기업 thesis, 핵심 숫자와 공급망을 연결한 아카이브 예시">
      <svg className="home-hero-visual__canvas" viewBox="0 0 440 360" aria-hidden="true">
        <defs>
          <pattern id="archive-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="0.7" />
          </pattern>
          <linearGradient id="archive-line" x1="0" x2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.12" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="0.75" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <rect width="440" height="360" rx="28" fill="url(#archive-grid)" opacity="0.28" />
        <path d="M78 229 C132 190 164 188 212 202 S302 224 358 171" fill="none" stroke="url(#archive-line)" strokeWidth="2" />
        <circle cx="78" cy="229" r="4" fill="currentColor" />
        <circle cx="212" cy="202" r="4" fill="currentColor" />
        <circle cx="358" cy="171" r="4" fill="currentColor" />
      </svg>

      <div className="home-hero-visual__label">
        <span>ARCHIVE NOTE</span>
        <b>NVDA</b>
      </div>

      <div className="home-hero-visual__thesis">
        <span>THESIS · 유지</span>
        <strong>AI CAPEX가 매출과<br />마진으로 이어지는가?</strong>
        <p>공식 자료 기준 · 수동 업데이트</p>
      </div>

      <div className="home-hero-visual__metric home-hero-visual__metric--revenue">
        <span>핵심 숫자</span>
        <b>Data Center</b>
        <small>수요 전환 확인</small>
      </div>

      <div className="home-hero-visual__metric home-hero-visual__metric--margin">
        <span>수익성</span>
        <b>Gross Margin</b>
        <small>제품 믹스 확인</small>
      </div>

      <div className="home-hero-visual__chain" aria-hidden="true">
        <span>CAPEX</span><i>→</i><span>GPU</span><i>→</i><span>HBM</span><i>→</i><span>POWER</span>
      </div>
    </div>
  );
}
