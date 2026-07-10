export function CompanyMark({ ticker, name }: { ticker: string; name: string }) { return <div className="company-mark" aria-label={`${name} 티커`}><span>{ticker}</span></div>; }
