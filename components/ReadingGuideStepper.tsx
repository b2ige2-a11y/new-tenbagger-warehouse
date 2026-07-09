const steps = [
  { number: "01", title: "기업 이해", description: "무엇을 파는 회사인지 먼저 봅니다.", icon: <path d="M5 19V8l7-4 7 4v11M9 19v-5h6v5M8 9h.01M12 9h.01M16 9h.01" /> },
  { number: "02", title: "산업 연결", description: "어떤 공급망과 테마에 연결되는지 봅니다.", icon: <path d="M6 7h4v4H6V7Zm8 0h4v4h-4V7ZM6 15h4v4H6v-4Zm8 0h4v4h-4v-4Zm-4-6h4m-6 2v4m8-4v4m-6 2h4" /> },
  { number: "03", title: "지표 점검", description: "매출, 마진, 수요, 리스크를 추적합니다.", icon: <path d="M5 18V9m5 9V5m5 13v-6m4 6H3" /> },
];

export function ReadingGuideStepper() { return <div className="reading-guide" aria-label="3단계 읽기 가이드">{steps.map((step, index) => <div className="reading-guide__step" key={step.number}><div className="reading-guide__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{step.icon}</svg></div><div><p className="reading-guide__number">{step.number}</p><h2 className="reading-guide__title">{step.title}</h2><p className="reading-guide__description">{step.description}</p></div>{index < steps.length - 1 && <span className="reading-guide__connector" aria-hidden="true" />}</div>)}</div>; }
