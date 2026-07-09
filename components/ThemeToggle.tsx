"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() { const { resolvedTheme, setTheme } = useTheme(); const dark = resolvedTheme === "dark"; return <button type="button" aria-label={dark ? "라이트 모드로 전환" : "다크 모드로 전환"} className="theme-toggle" onClick={() => setTheme(dark ? "light" : "dark")}><span className="theme-toggle__icon" aria-hidden="true">{dark ? "☀" : "☾"}</span><span className="hidden sm:inline">{dark ? "라이트" : "다크"}</span></button>; }
