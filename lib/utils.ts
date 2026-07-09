export const formatDate = (date: string) => new Intl.DateTimeFormat("ko-KR", { dateStyle: "long" }).format(new Date(date));
export const disclaimer = "본 사이트의 모든 콘텐츠는 투자 권유가 아닌 정보 정리 및 학습 목적입니다. 투자 판단과 책임은 투자자 본인에게 있습니다.";
