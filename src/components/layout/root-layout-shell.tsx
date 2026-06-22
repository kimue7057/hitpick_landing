"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { stripLocaleFromPathname } from "@/lib/locale";

const HOME_PATH = "/";
const LANDING_PREVIEW_PATH = "/landing-preview";

export function RootLayoutShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const normalizedPath = stripLocaleFromPathname(pathname);
  const isShelllessRoute =
    normalizedPath === HOME_PATH || normalizedPath === LANDING_PREVIEW_PATH;

  if (isShelllessRoute) {
    return <main>{children}</main>;
  }

  return (
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
  );
}
