import type { Metadata } from "next";
import { RootLayoutShell } from "@/components/layout/root-layout-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hitpick | 글로벌 크리에이터 매칭 플랫폼",
    template: "%s | Hitpick",
  },
  description:
    "Hitpick은 글로벌 시장을 목표로 하는 브랜드와 콘텐츠 크리에이터를 연결하는 글로벌 크리에이터 매칭 플랫폼입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="ko">
      <body className="min-h-full bg-[var(--background)] text-[var(--text)] antialiased">
        <RootLayoutShell>{children}</RootLayoutShell>
      </body>
    </html>
  );
}
