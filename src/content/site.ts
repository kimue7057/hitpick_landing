import { type Locale } from "@/lib/locale";

const siteContent = {
  en: {
    brand: {
      name: "Hitpick",
      tagline: "Creator x Brand",
    },
    footer: {
      audienceLinks: [
        { href: "/creators", label: "Creator recruitment page" },
        { href: "/advertisers", label: "Advertiser campaign page" },
        { href: "/campaigns", label: "Campaign board preview" },
      ],
      description:
        "An early landing structure designed to connect creator recruitment and advertiser inquiries in one flow, with the speed of a content platform and a card-based browsing experience.",
      quickRoutesTitle: "Quick Routes",
      title: "The starting point where creators and brands meet on the same campaign board",
      useCasesTitle: "Use Cases",
    },
    header: {
      closeMenuLabel: "Close",
      languageLabel: "Language",
      menuAriaLabel: "Open mobile menu",
      menuLabel: "Menu",
      primaryCta: "Partner with Hitpick",
    },
    meta: {
      footerCaption: "Initial landing page scaffold for Hitpick, 2026.",
      footerTech:
        "App Router + TypeScript + Tailwind CSS + GitHub Pages ready.",
    },
    navigation: [
      { href: "/", label: "Home" },
      { href: "/creators", label: "Creators" },
      { href: "/advertisers", label: "Advertisers" },
      { href: "/campaigns", label: "Campaigns" },
      { href: "/contact", label: "Contact" },
    ],
  },
  ko: {
    brand: {
      name: "Hitpick",
      tagline: "Creator x Brand",
    },
    footer: {
      audienceLinks: [
        { href: "/creators", label: "크리에이터 모집 페이지" },
        { href: "/advertisers", label: "광고주 모집 페이지" },
        { href: "/campaigns", label: "캠페인 보드 미리보기" },
      ],
      description:
        "콘텐츠 플랫폼의 속도감과 카드형 탐색 경험을 살려, 모집과 문의 흐름을 한 번에 설계한 초기 랜딩 구조입니다.",
      quickRoutesTitle: "Quick Routes",
      title: "크리에이터와 광고주가 같은 보드 위에서 만나는 캠페인 시작점",
      useCasesTitle: "Use Cases",
    },
    header: {
      closeMenuLabel: "닫기",
      languageLabel: "언어",
      menuAriaLabel: "모바일 메뉴 열기",
      menuLabel: "메뉴",
      primaryCta: "파트너 문의",
    },
    meta: {
      footerCaption: "Initial landing page scaffold for Hitpick, 2026.",
      footerTech:
        "App Router + TypeScript + Tailwind CSS + GitHub Pages ready.",
    },
    navigation: [
      { href: "/", label: "홈" },
      { href: "/creators", label: "크리에이터" },
      { href: "/advertisers", label: "광고주" },
      { href: "/campaigns", label: "캠페인" },
      { href: "/contact", label: "문의" },
    ],
  },
} satisfies Record<Locale, unknown>;

export function getSiteContent(locale: Locale) {
  return siteContent[locale];
}

export function getNavigation(locale: Locale) {
  return siteContent[locale].navigation;
}
