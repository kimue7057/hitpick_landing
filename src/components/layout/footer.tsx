import Link from "next/link";
import { navigation } from "@/content/site";

const audienceLinks = [
  { href: "/creators", label: "크리에이터 모집 페이지" },
  { href: "/advertisers", label: "광고주 모집 페이지" },
  { href: "/campaigns", label: "캠페인 보드 미리보기" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <p className="text-xs font-semibold tracking-[0.28em] text-[var(--accent-secondary)] uppercase">
              Hitpick Landing
            </p>
            <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-white">
              크리에이터와 광고주가 같은 보드 위에서 만나는 캠페인 시작점
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              콘텐츠 플랫폼의 속도감과 카드형 탐색 경험을 살려, 모집과 문의
              흐름을 한 번에 설계한 초기 랜딩 구조입니다.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Quick Routes</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="transition hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Use Cases</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              {audienceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="transition hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            App Router + TypeScript + Tailwind CSS + Vercel deployment ready.
          </p>
          <p>Initial landing page scaffold for Hitpick, 2026.</p>
        </div>
      </div>
    </footer>
  );
}
