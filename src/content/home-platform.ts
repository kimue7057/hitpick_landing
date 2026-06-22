import { type Locale } from "@/lib/locale";

export type NavigationItem = {
  ariaLabel: string;
  href: string;
  kind: "anchor" | "route";
  label: string;
};

export type StatItem = {
  label: string;
  value: string;
};

export type CampaignItem = {
  category: string;
  creatorsNeeded: number;
  match: number;
  status: string;
  statusTone: "amber" | "blue" | "lime";
  target: string;
  title: string;
};

export type CreatorItem = {
  category: string;
  fit: number;
  gradient: string;
  initials: string;
  languages: string[];
  market: string;
  name: string;
  summary: string;
};

export type HeroCreatorItem = {
  fit: number;
  gradient: string;
  initials: string;
  marketRoute: string;
  name: string;
  role: string;
};

export type MatchingScoreItem = {
  label: string;
  value: number;
};

export type SplitCtaItem = {
  audience: string;
  buttonLabel: string;
  description: string;
  href: string;
  variant: "brand" | "creator";
  title: string;
};

export type FooterLinkGroup = {
  links: Array<{
    href: string;
    label: string;
  }>;
  title: string;
};

export type HomePlatformContent = {
  brand: {
    name: string;
    tagline: string;
  };
  campaignBoard: {
    description: string;
    eyebrow: string;
    title: string;
  };
  campaigns: CampaignItem[];
  creatorNetwork: {
    description: string;
    eyebrow: string;
    title: string;
  };
  creators: CreatorItem[];
  finalCta: {
    description: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref: string;
    secondaryLabel: string;
    title: string;
  };
  footer: {
    description: string;
    linkGroups: FooterLinkGroup[];
    note: string;
  };
  header: {
    menuAriaLabel: string;
    primaryCtaHref: string;
    primaryCtaLabel: string;
    primaryCtaSrLabel: string;
  };
  hero: {
    dashboard: {
      campaignLabel: string;
      campaignMatchLabel: string;
      campaignStatus: string;
      campaignTags: string[];
      campaignTitle: string;
      creatorCardsLabel: string;
      liveBadge: string;
      marketLabel: string;
      matchingScoreLabel: string;
      networkLabel: string;
      panelEyebrow: string;
      panelTitle: string;
    };
    description: string;
    eyebrow: string;
    primaryCtaHref: string;
    primaryCtaLabel: string;
    secondaryCtaHref: string;
    secondaryCtaLabel: string;
    supportingTags: string[];
    titleLines: string[];
  };
  heroCreators: HeroCreatorItem[];
  marketTags: string[];
  matchingEngine: {
    description: string;
    eyebrow: string;
    helper: string;
    panelLabel: string;
    title: string;
  };
  matchingScores: MatchingScoreItem[];
  navigationItems: NavigationItem[];
  splitCtas: SplitCtaItem[];
  stats: StatItem[];
};

const sharedHeroCreators: HeroCreatorItem[] = [
  {
    fit: 92,
    gradient: "linear-gradient(135deg,#ff6b9d 0%,#c44dff 100%)",
    initials: "BC",
    marketRoute: "KR -> JP",
    name: "Beauty Creator",
    role: "Skincare reels",
  },
  {
    fit: 89,
    gradient: "linear-gradient(135deg,#ff8c42 0%,#ffd166 100%)",
    initials: "FC",
    marketRoute: "KR -> SEA",
    name: "Food Creator",
    role: "Taste challenge",
  },
  {
    fit: 91,
    gradient: "linear-gradient(135deg,#1f4fff 0%,#00d4ff 100%)",
    initials: "LC",
    marketRoute: "KR -> US",
    name: "Lifestyle",
    role: "Short-form ads",
  },
  {
    fit: 87,
    gradient: "linear-gradient(135deg,#9eff14 0%,#2bd4a3 100%)",
    initials: "UGC",
    marketRoute: "KR -> SG",
    name: "UGC Editor",
    role: "Launch cutdowns",
  },
];

const sharedMatchingScores: MatchingScoreItem[] = [
  { label: "Market Fit", value: 94 },
  { label: "Audience Fit", value: 88 },
  { label: "Content Fit", value: 91 },
  { label: "Campaign Fit", value: 93 },
];

const sharedMarketTags = [
  "Japan",
  "SEA",
  "United States",
  "Beauty",
  "Food",
  "Lifestyle",
];

export const homePlatformContent: Record<Locale, HomePlatformContent> = {
  en: {
    brand: {
      name: "Hitpick",
      tagline: "Global Creator Matching Platform",
    },
    campaignBoard: {
      description:
        "Launch-ready campaigns are organized by target market, creator category, and live match quality so brands can move quickly.",
      eyebrow: "Live Campaigns",
      title: "Open global campaigns",
    },
    campaigns: [
      {
        category: "Beauty creators",
        creatorsNeeded: 30,
        match: 94,
        status: "Recruiting",
        statusTone: "blue",
        target: "Japan",
        title: "K-Beauty launch in Japan",
      },
      {
        category: "Food & lifestyle",
        creatorsNeeded: 50,
        match: 91,
        status: "Open",
        statusTone: "lime",
        target: "Vietnam / Thailand / Singapore",
        title: "K-Food challenge in SEA",
      },
      {
        category: "Culture-first UGC",
        creatorsNeeded: 20,
        match: 88,
        status: "Matching",
        statusTone: "amber",
        target: "United States",
        title: "Lifestyle brand US entry",
      },
    ],
    creatorNetwork: {
      description:
        "Each creator card combines category fit, market direction, and working language so the page feels like a real matching platform, not a brochure.",
      eyebrow: "Creator Network",
      title: "Creators ready for global markets",
    },
    creators: [
      {
        category: "Beauty",
        fit: 94,
        gradient: "linear-gradient(135deg,#ff6b9d 0%,#c44dff 100%)",
        initials: "AY",
        languages: ["KR", "JP"],
        market: "Japan",
        name: "@aya.beauty",
        summary:
          "Skincare review reels optimized for launches, trials, and conversion-led hooks.",
      },
      {
        category: "Food",
        fit: 89,
        gradient: "linear-gradient(135deg,#ff8c42 0%,#ffd166 100%)",
        initials: "LN",
        languages: ["KR", "EN"],
        market: "SEA",
        name: "@linh.tastes",
        summary:
          "Food challenge and restaurant visit content that adapts well across Southeast Asian audiences.",
      },
      {
        category: "Fashion",
        fit: 91,
        gradient: "linear-gradient(135deg,#1f4fff 0%,#00d4ff 100%)",
        initials: "MI",
        languages: ["KR", "EN"],
        market: "United States",
        name: "@mina.style",
        summary:
          "Editorial short-form with premium visual tone for cross-border brand launches.",
      },
      {
        category: "Lifestyle",
        fit: 87,
        gradient: "linear-gradient(135deg,#9eff14 0%,#2bd4a3 100%)",
        initials: "SO",
        languages: ["KR", "EN", "JP"],
        market: "Global",
        name: "@sora.daily",
        summary:
          "Flexible UGC and day-in-the-life formats for product seeding and retention campaigns.",
      },
    ],
    finalCta: {
      description:
        "Hitpick helps brands reach global audiences and helps creators meet campaigns beyond their local market.",
      primaryHref: "/contact",
      primaryLabel: "Start a campaign",
      secondaryHref: "/creators",
      secondaryLabel: "Join as creator",
      title: "Ready to hit the global market?",
    },
    footer: {
      description:
        "A premium creator matching platform for brands that want market-ready campaigns and creators looking for global brand opportunities.",
      linkGroups: [
        {
          links: [
            { href: "/campaigns", label: "Campaigns" },
            { href: "/creators", label: "Creators" },
            { href: "/advertisers", label: "Brands" },
            { href: "/contact", label: "Contact" },
          ],
          title: "Platform",
        },
        {
          links: [
            { href: "/campaigns", label: "Open opportunities" },
            { href: "/advertisers", label: "For brands" },
            { href: "/creators", label: "For creators" },
          ],
          title: "Pathways",
        },
      ],
      note: "Pick creators. Hit global.",
    },
    header: {
      menuAriaLabel: "Toggle navigation menu",
      primaryCtaHref: "/contact",
      primaryCtaLabel: "Start a campaign",
      primaryCtaSrLabel: "Start a brand campaign with Hitpick",
    },
    hero: {
      dashboard: {
        campaignLabel: "Campaign Card",
        campaignMatchLabel: "94% Match",
        campaignStatus: "Recruiting",
        campaignTags: ["Japan / SEA / US", "128 creators matched"],
        campaignTitle: "K-Beauty Global Launch",
        creatorCardsLabel: "Creator Cards",
        liveBadge: "LIVE MATCHING",
        marketLabel: "Global Market Tags",
        matchingScoreLabel: "Matching Score",
        networkLabel: "Network Pulse",
        panelEyebrow: "Platform Dashboard",
        panelTitle: "AI Creator Fit Snapshot",
      },
      description:
        "Hitpick connects globally ambitious brands with creators who fit the market, audience, and content style required for international campaigns.",
      eyebrow: "Global Creator Matching Platform",
      primaryCtaHref: "/contact",
      primaryCtaLabel: "Start a campaign",
      secondaryCtaHref: "/creators",
      secondaryCtaLabel: "Join as creator",
      supportingTags: ["Global Campaigns", "Creator Matching", "Brand Growth"],
      titleLines: ["Pick creators.", "Hit global."],
    },
    heroCreators: sharedHeroCreators,
    marketTags: sharedMarketTags,
    matchingEngine: {
      description:
        "Campaign goals, market direction, language, and content style are translated into visible scoring blocks so the product feels operational from the first screen.",
      eyebrow: "Matching Engine",
      helper:
        "The overall score combines market, audience, and content compatibility signals for a campaign-first recommendation view.",
      panelLabel: "Campaign Analysis",
      title: "Match by market, audience, and content fit.",
    },
    matchingScores: sharedMatchingScores,
    navigationItems: [
      {
        ariaLabel: "Jump to campaign board",
        href: "#campaign-board",
        kind: "anchor",
        label: "Campaigns",
      },
      {
        ariaLabel: "Jump to creator network",
        href: "#creator-network",
        kind: "anchor",
        label: "Creators",
      },
      {
        ariaLabel: "Jump to matching engine",
        href: "#matching-engine",
        kind: "anchor",
        label: "Matching Engine",
      },
      {
        ariaLabel: "Jump to join section",
        href: "#split-cta",
        kind: "anchor",
        label: "Join",
      },
    ],
    splitCtas: [
      {
        audience: "For Brands",
        buttonLabel: "Explore brand flow",
        description:
          "Plan global creator campaigns with market-ready matching data and a curated creator network.",
        href: "/advertisers",
        title: "Launch your global creator campaign.",
        variant: "brand",
      },
      {
        audience: "For Creators",
        buttonLabel: "View creator opportunities",
        description:
          "Join campaigns beyond your local market and work with global brands looking for content-native partners.",
        href: "/creators",
        title: "Join campaigns beyond your local market.",
        variant: "creator",
      },
    ],
    stats: [
      { label: "Global creators", value: "128+" },
      { label: "Target markets", value: "12" },
      { label: "Campaign categories", value: "30+" },
      { label: "Matching fit", value: "94%" },
    ],
  },
  ko: {
    brand: {
      name: "Hitpick",
      tagline: "글로벌 크리에이터 매칭 플랫폼",
    },
    campaignBoard: {
      description:
        "타겟 시장, 크리에이터 카테고리, 매칭 점수를 기준으로 글로벌 캠페인을 한눈에 파악할 수 있도록 구성했습니다.",
      eyebrow: "Live Campaigns",
      title: "지금 열려 있는 글로벌 캠페인",
    },
    campaigns: [
      {
        category: "뷰티 크리에이터",
        creatorsNeeded: 30,
        match: 94,
        status: "모집 중",
        statusTone: "blue",
        target: "일본",
        title: "일본 타겟 K-뷰티 런칭 캠페인",
      },
      {
        category: "푸드 & 라이프스타일",
        creatorsNeeded: 50,
        match: 91,
        status: "오픈",
        statusTone: "lime",
        target: "베트남 / 태국 / 싱가포르",
        title: "동남아 K-푸드 챌린지 캠페인",
      },
      {
        category: "컬처 중심 UGC",
        creatorsNeeded: 20,
        match: 88,
        status: "매칭 중",
        statusTone: "amber",
        target: "미국",
        title: "라이프스타일 브랜드 미국 진출 캠페인",
      },
    ],
    creatorNetwork: {
      description:
        "카테고리, 진출 시장, 사용 언어, 매칭 적합도를 카드 단위로 보여줘 실제 크리에이터 추천 플랫폼처럼 보이도록 정리했습니다.",
      eyebrow: "Creator Network",
      title: "글로벌 시장에 바로 연결되는 크리에이터",
    },
    creators: [
      {
        category: "뷰티",
        fit: 94,
        gradient: "linear-gradient(135deg,#ff6b9d 0%,#c44dff 100%)",
        initials: "AY",
        languages: ["KR", "JP"],
        market: "일본",
        name: "@aya.beauty",
        summary:
          "스킨케어 리뷰와 런칭형 숏폼에 강한 크리에이터로, 체험 전환형 훅 구성이 좋습니다.",
      },
      {
        category: "푸드",
        fit: 89,
        gradient: "linear-gradient(135deg,#ff8c42 0%,#ffd166 100%)",
        initials: "LN",
        languages: ["KR", "EN"],
        market: "동남아",
        name: "@linh.tastes",
        summary:
          "푸드 챌린지와 방문형 콘텐츠에 강해 동남아 시장 타겟 캠페인에 적합합니다.",
      },
      {
        category: "패션",
        fit: 91,
        gradient: "linear-gradient(135deg,#1f4fff 0%,#00d4ff 100%)",
        initials: "MI",
        languages: ["KR", "EN"],
        market: "미국",
        name: "@mina.style",
        summary:
          "프리미엄 톤의 패션 숏폼과 에디토리얼 컷다운에 강한 크리에이터입니다.",
      },
      {
        category: "라이프스타일",
        fit: 87,
        gradient: "linear-gradient(135deg,#9eff14 0%,#2bd4a3 100%)",
        initials: "SO",
        languages: ["KR", "EN", "JP"],
        market: "글로벌",
        name: "@sora.daily",
        summary:
          "데일리 UGC와 제품 시딩형 콘텐츠에 유연하게 대응할 수 있는 크리에이터입니다.",
      },
    ],
    finalCta: {
      description:
        "Hitpick은 브랜드에게는 글로벌 고객 접점을, 크리에이터에게는 더 넓은 브랜드 캠페인 기회를 제공합니다.",
      primaryHref: "/contact",
      primaryLabel: "캠페인 시작하기",
      secondaryHref: "/creators",
      secondaryLabel: "크리에이터로 참여하기",
      title: "글로벌 시장으로 확장할 준비가 되었나요?",
    },
    footer: {
      description:
        "글로벌 타겟 캠페인을 원하는 브랜드와 해외 브랜드 협업 기회를 찾는 크리에이터를 연결하는 프리미엄 매칭 플랫폼입니다.",
      linkGroups: [
        {
          links: [
            { href: "/campaigns", label: "캠페인" },
            { href: "/creators", label: "크리에이터" },
            { href: "/advertisers", label: "브랜드" },
            { href: "/contact", label: "문의" },
          ],
          title: "Platform",
        },
        {
          links: [
            { href: "/campaigns", label: "오픈 캠페인" },
            { href: "/advertisers", label: "브랜드용" },
            { href: "/creators", label: "크리에이터용" },
          ],
          title: "Pathways",
        },
      ],
      note: "Pick creators. Hit global.",
    },
    header: {
      menuAriaLabel: "탐색 메뉴 열기",
      primaryCtaHref: "/contact",
      primaryCtaLabel: "캠페인 시작하기",
      primaryCtaSrLabel: "Hitpick에서 브랜드 캠페인 시작하기",
    },
    hero: {
      dashboard: {
        campaignLabel: "Campaign Card",
        campaignMatchLabel: "94% Match",
        campaignStatus: "Recruiting",
        campaignTags: ["Japan / SEA / US", "128 creators matched"],
        campaignTitle: "K-Beauty Global Launch",
        creatorCardsLabel: "Creator Cards",
        liveBadge: "LIVE MATCHING",
        marketLabel: "Global Market Tags",
        matchingScoreLabel: "Matching Score",
        networkLabel: "Network Pulse",
        panelEyebrow: "Platform Dashboard",
        panelTitle: "AI Creator Fit Snapshot",
      },
      description:
        "Hitpick은 글로벌 진출을 목표로 하는 브랜드와, 시장·오디언스·콘텐츠 핏이 맞는 크리에이터를 연결하는 매칭 플랫폼입니다.",
      eyebrow: "Global Creator Matching Platform",
      primaryCtaHref: "/contact",
      primaryCtaLabel: "캠페인 시작하기",
      secondaryCtaHref: "/creators",
      secondaryCtaLabel: "크리에이터로 참여하기",
      supportingTags: ["Global Campaigns", "Creator Matching", "Brand Growth"],
      titleLines: ["Pick creators.", "Hit global."],
    },
    heroCreators: sharedHeroCreators,
    marketTags: sharedMarketTags,
    matchingEngine: {
      description:
        "캠페인 목표, 진출 시장, 사용 언어, 콘텐츠 스타일을 점수 기반으로 시각화해 첫 화면부터 실제 플랫폼처럼 느껴지도록 설계했습니다.",
      eyebrow: "Matching Engine",
      helper:
        "전체 점수는 시장 적합도, 오디언스 일치도, 콘텐츠 궁합을 종합한 추천 지표입니다.",
      panelLabel: "Campaign Analysis",
      title: "시장, 오디언스, 콘텐츠 핏으로 매칭합니다.",
    },
    matchingScores: sharedMatchingScores,
    navigationItems: [
      {
        ariaLabel: "캠페인 섹션으로 이동",
        href: "#campaign-board",
        kind: "anchor",
        label: "캠페인",
      },
      {
        ariaLabel: "크리에이터 네트워크 섹션으로 이동",
        href: "#creator-network",
        kind: "anchor",
        label: "크리에이터",
      },
      {
        ariaLabel: "매칭 엔진 섹션으로 이동",
        href: "#matching-engine",
        kind: "anchor",
        label: "매칭 엔진",
      },
      {
        ariaLabel: "참여 안내 섹션으로 이동",
        href: "#split-cta",
        kind: "anchor",
        label: "참여하기",
      },
    ],
    splitCtas: [
      {
        audience: "For Brands",
        buttonLabel: "브랜드 플로우 보기",
        description:
          "시장 데이터와 크리에이터 매칭 흐름을 기반으로 글로벌 캠페인을 빠르게 시작할 수 있습니다.",
        href: "/advertisers",
        title: "글로벌 크리에이터 캠페인을 시작하세요.",
        variant: "brand",
      },
      {
        audience: "For Creators",
        buttonLabel: "크리에이터 기회 보기",
        description:
          "로컬 시장을 넘어 글로벌 브랜드 캠페인에 참여하고 더 넓은 협업 기회를 만드세요.",
        href: "/creators",
        title: "더 넓은 시장의 캠페인에 참여하세요.",
        variant: "creator",
      },
    ],
    stats: [
      { label: "글로벌 크리에이터", value: "128+" },
      { label: "타겟 시장", value: "12" },
      { label: "캠페인 카테고리", value: "30+" },
      { label: "매칭 적합도", value: "94%" },
    ],
  },
};
