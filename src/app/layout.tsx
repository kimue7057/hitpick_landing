import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hitpick | 크리에이터와 브랜드를 연결하는 캠페인 플랫폼",
    template: "%s | Hitpick",
  },
  description:
    "Hitpick은 크리에이터 모집과 광고주 모집을 하나의 콘텐츠 중심 플랫폼으로 연결하는 히트픽 랜딩페이지입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--text)] antialiased">
        <div className="relative isolate flex min-h-screen flex-col overflow-x-clip">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(255,122,89,0.2),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-40 right-[-10rem] -z-10 h-80 w-80 rounded-full bg-[rgba(72,211,196,0.12)] blur-3xl"
          />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
