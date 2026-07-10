"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => undefined;

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={mounted ? (dark ? "라이트 모드로 전환" : "다크 모드로 전환") : "테마 전환"}
      className="theme-toggle"
      onClick={() => setTheme(dark ? "light" : "dark")}
    >
      <span className="theme-toggle__icon" aria-hidden="true">{mounted ? (dark ? "☀" : "☾") : "◐"}</span>
      <span className="hidden sm:inline">{mounted ? (dark ? "라이트" : "다크") : "테마"}</span>
    </button>
  );
}
