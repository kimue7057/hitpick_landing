import { type Locale } from "@/lib/locale";

const homePageContent = {
  en: {
    advertiserSection: {
      cta: "Ask about advertiser campaigns",
      description:
        "We start by clarifying whether your brand needs awareness, reviews, visits, or recurring exposure, then connect that goal to a campaign structure and recruitment flow that fit.",
      eyebrow: "Advertiser Recruitment",
      goalChips: [
        "Awareness growth",
        "Review volume",
        "Visit intent",
        "Long-term partnership",
      ],
      highlightEyebrow: "Brand-side flow",
      highlightTitle: "Start with a campaign structure aligned with your brand goal",
      title: "A campaign launch structure for brands that need content",
    },
    audienceCards: [
      {
        bullets: [
          "Find campaigns that match your channel quickly.",
          "Open participation opportunities across reviews, short-form, and on-site experiences.",
          "Browse briefs and workflows in a card-based format that is easy to enter.",
        ],
        cta: "Join as a creator",
        description:
          "A recruitment flow where creators can spot brand collaborations that fit their content style, schedule, and deliverables at a glance.",
        eyebrow: "Creator Recruitment",
        heroTitle: "Join as a creator",
        href: "/contact",
        title: "A participation path for creators looking for the right opportunity",
      },
      {
        bullets: [
          "Design flexible collaboration formats around your brand goal.",
          "Organize recruitment and content operations on one card-based board.",
          "Start with a structure built for follow-up reports and repeat execution.",
        ],
        cta: "Ask about advertiser campaigns",
        description:
          "An inquiry flow for brands that want to shape review, short-form, visit-based, or IP-driven campaigns and start creator recruitment.",
        eyebrow: "Advertiser Recruitment",
        heroTitle: "Launch an advertiser campaign",
        href: "/contact",
        title: "A campaign path for brands that need content",
      },
    ],
    audienceSection: {
      description:
        "We separate the entry point clearly so creators and advertisers can each recognize the path that fits them and move without friction.",
      eyebrow: "Pick Your Path",
      title: "Two cards that let creators and advertisers choose instantly",
    },
    campaignCategorySection: {
      description:
        "Hitpick connects multiple content formats inside one campaign hub. These eight categories are the first view into how campaigns can be structured.",
      eyebrow: "Campaign Categories",
      title: "Campaign categories you can operate through Hitpick",
    },
    campaignCategories: [
      {
        description:
          "Connect offline experiences and in-person reactions naturally back into content.",
        label: "Experience",
        title: "Visit Experience Crew",
      },
      {
        description:
          "A reliable base format for explaining product context and benefits with clarity.",
        label: "Review",
        title: "Product Review",
      },
      {
        description:
          "Great for short, bold content built for fast reach and cultural momentum.",
        label: "Reach",
        title: "Short-form Content",
      },
      {
        description:
          "A natural format for visual storytelling and everyday product placement.",
        label: "Social",
        title: "Instagram Review",
      },
      {
        description:
          "A strong option when search visibility and detailed information matter.",
        label: "Search",
        title: "Blog Review",
      },
      {
        description:
          "A richer collaboration format for brands that need story depth and trust.",
        label: "Video",
        title: "YouTube Collaboration",
      },
      {
        description:
          "A series-based campaign for expanding a brand story and content world over time.",
        label: "Branding",
        title: "Content IP Campaign",
      },
      {
        description:
          "An ongoing partnership format designed for repeated exposure and fan communication.",
        label: "Relationship",
        title: "Brand Ambassador",
      },
    ],
    advertiserRecruitingPoints: [
      {
        description:
          "We can shape the campaign differently depending on whether the goal is awareness, reviews, visits, or repeated exposure.",
        title: "Campaign design aligned with the brand goal",
      },
      {
        description:
          "Recruitment status and content progress can be organized card by card, making it easier to share inside the team.",
        title: "A card board that makes operations visible",
      },
      {
        description:
          "We begin with reporting in mind so the campaign can continue naturally into the next execution cycle.",
        title: "A starting structure that leads into follow-up operations",
      },
    ],
    creatorSection: {
      chips: ["Reviews", "Short-form", "Visit experiences", "Long-term projects"],
      cta: "Join as a creator",
      description:
        "Rather than simply collecting applications, Hitpick shows what kinds of opportunities exist, how they move, and what information creators can review before they decide to join.",
      eyebrow: "Creator Recruitment",
      highlightDescription:
        "We split the options by format so creators can review the brief, schedule, and tone first, then decide where they fit.",
      highlightEyebrow: "Creator-side flow",
      highlightTitle: "A structure where creators can spot the right fit before joining",
      title: "A recruitment structure for creators who need the next opportunity",
    },
    creatorRecruitingPoints: [
      {
        description:
          "We look beyond follower counts and consider content tone, posting rhythm, and audience response.",
        title: "A structure built to find the right-fit opportunity",
      },
      {
        description:
          "Schedules, deliverables, and tone can be reviewed before applying, reducing confusion later.",
        title: "Key details visible before applying",
      },
      {
        description:
          "Visit campaigns, reviews, short-form work, and long-term collaborations each open different paths.",
        title: "Choices divided by content format",
      },
    ],
    exampleCampaignSection: {
      description:
        "To make the platform feel tangible, the landing page surfaces sample campaign cards that reflect realistic operating patterns and deliverables.",
      eyebrow: "Sample Campaigns",
      title: "Six campaign cards to preview the operating style",
    },
    faqSection: {
      description:
        "We organized the questions users are most likely to ask when they first arrive on the landing page.",
      eyebrow: "Frequently Asked Questions",
      items: [
        {
          answer:
            "Yes. Participation can vary by content format, including reviews, short-form videos, on-site experiences, Instagram reviews, and YouTube collaborations.",
          question: "How can creators participate?",
        },
        {
          answer:
            "An initial inquiry can begin as long as you have a campaign goal, a preferred timeline, an approximate budget, and a rough content direction.",
          question: "How prepared should an advertiser be before reaching out?",
        },
        {
          answer:
            "The structure can expand into visit experiences, product reviews, short-form videos, blog reviews, YouTube collaborations, content IP campaigns, and brand ambassador programs.",
          question: "What campaign categories can you operate?",
        },
        {
          answer:
            "The current landing page shows the initial recruitment structure. Once operations begin, scheduling and execution are finalized through a separate coordination step.",
          question: "Is a campaign confirmed immediately after applying?",
        },
        {
          answer:
            "All current buttons lead to `/contact`. Later, that can expand into a real intake flow through form integrations or operating channels.",
          question: "Where do inquiries and participation begin?",
        },
      ],
      title: "Frequently asked questions",
    },
    finalCta: {
      description:
        "We shaped the landing flow so brands can start campaign planning and creators can step into the next opportunity without friction.",
      eyebrow: "Final Prompt",
      primaryCta: "Join as a creator",
      secondaryCta: "Ask about advertiser campaigns",
      title:
        "Start the first conversation that connects brands and creators through Hitpick",
    },
    hero: {
      ctaPrimary: "Join as a creator",
      ctaSecondary: "Ask about advertiser campaigns",
      description:
        "Hitpick connects brands that need content with creators who need opportunities through review, short-form, and visit-based campaign structures.",
      eyebrow: "Hitpick Overview",
      selectionCard: {
        description:
          "Brands can move straight into campaign inquiry, while creators can move straight into participation. We placed two clear entry cards at the top so the right action is visible immediately.",
        eyebrow: "Choose instantly",
        title: "A top-of-page structure built to help each visitor choose their path right away",
      },
      signals: [
        "Brand recruitment",
        "Creator recruitment",
        "Review campaigns",
        "Short-form content",
      ],
      stats: [
        {
          label: "Participation paths visible at a glance",
          value: "2 recruitment tracks",
        },
        {
          label: "Campaign types organized on the main page",
          value: "8 categories",
        },
        {
          label: "Sample cards that show operational feel",
          value: "6 mock campaigns",
        },
      ],
      title:
        "We connect brands that need content with creators who need opportunities",
    },
    metadata: {
      description:
        "Hitpick is a landing page that connects creator recruitment and advertiser inquiries through review, short-form, and visit-based campaign structures.",
      title:
        "Connecting brands that need content with creators who need opportunities",
    },
    partnershipBadges: [
      "Beauty",
      "Food",
      "Lifestyle",
      "Local Stores",
      "Tech",
      "Education",
      "Commerce",
      "Community",
    ],
    processSection: {
      description:
        "Showing the basic rhythm after participation or inquiry makes the experience feel more trustworthy. Hitpick presents that workflow in a clear four-step structure.",
      eyebrow: "Participation and Operations Flow",
      stepLabel: "Step",
      title: "The basic process from intake to execution",
    },
    processSteps: [
      {
        description:
          "Creators and advertisers each leave the core information they need, and Hitpick shapes the initial direction.",
        step: "1",
        title: "Participation or inquiry intake",
      },
      {
        description:
          "We define the right category and collaboration format based on brand goals and content style.",
        step: "2",
        title: "Campaign direction setup",
      },
      {
        description:
          "Briefs, schedules, and deliverable conditions are organized into a card-based flow to align the actual operating rhythm.",
        step: "3",
        title: "Matching and content execution",
      },
      {
        description:
          "After publishing, response points and outcomes are summarized to naturally lead into the next collaboration.",
        step: "4",
        title: "Performance review and follow-up",
      },
    ],
    sampleCampaigns: [
      {
        badge: "Open",
        category: "Visit Experience Crew",
        description:
          "A campaign where creators visit a newly opened dessert brand store, then create photos, a short review, and short-form content.",
        summary: "Store visit + feed review + short video",
        title: "Seongsu dessert store visit experience crew",
      },
      {
        badge: "Open",
        category: "Product Review",
        description:
          "A campaign centered on credible skincare reviews that explain usage feel and before-and-after context.",
        summary: "Usage review + conversion-focused storytelling",
        title: "Daily skincare product review campaign",
      },
      {
        badge: "Preparing",
        category: "Short-form Content",
        description:
          "A short-form series campaign that translates the brand message into crisp 15-second storytelling.",
        summary: "15-second video + Reels/Shorts expansion",
        title: "New product launch short-form challenge",
      },
      {
        badge: "Open",
        category: "Instagram Review",
        description:
          "A feed-and-story centered campaign that places the product naturally inside a lifestyle context.",
        summary: "Feed post + story placement",
        title: "Home living brand Instagram review",
      },
      {
        badge: "Live Example",
        category: "YouTube Collaboration",
        description:
          "A vlog or comparison-style collaboration built to leave long-form brand usage scenes on YouTube.",
        summary: "Vlog-style content + stronger explanation",
        title: "Kitchen appliance YouTube collaboration project",
      },
      {
        badge: "Long-term",
        category: "Brand Ambassador",
        description:
          "An ambassador-style partnership that plans recurring content and fan communication beyond a one-off placement.",
        summary: "Monthly operation + repeated exposure structure",
        title: "Lifestyle brand ambassador program",
      },
    ],
    trustSection: {
      description:
        "Hitpick is designed to make both brands and creators feel oriented from the start, by showing partnership structure and workflow clearly.",
      eyebrow: "Partnership and Flow",
      title: "A basic framework built around partnership and clarity",
    },
    trustCards: [
      {
        description:
          "Briefs and operating details are organized in card format so brands and creators can understand the same flow.",
        title: "Clear operating structure",
      },
      {
        description:
          "We assume campaigns can continue into reviews, repeat visits, and ongoing execution rather than ending at a single exposure.",
        title: "A sustainable campaign mindset",
      },
      {
        description:
          "We approach this as finding the right format and operating model together, not just closing one inquiry.",
        title: "Partnership-first operations",
      },
    ],
  },
  ko: {
    advertiserSection: {
      cta: "광고주 캠페인 문의하기",
      description:
        "히트픽의 광고주 모집은 모집, 진행, 후속 집행까지 감각 있게 이어지는 기본 프레임을 빠르게 보여 주는 데 목적이 있습니다.",
      eyebrow: "광고주 모집",
      goalChips: ["인지 확산", "리뷰 축적", "방문 유도", "장기 파트너십"],
      highlightEyebrow: "브랜드 전달 동선",
      highlightTitle: "브랜드 목표에 맞는 방향부터 먼저 설계하는 구조",
      title: "콘텐츠가 필요한 브랜드를 위한 캠페인 시작 구조",
    },
    audienceCards: [
      {
        bullets: [
          "내 채널과 맞는 캠페인을 빠르게 찾을 수 있습니다.",
          "리뷰, 숏폼, 방문 체험단 등 포맷별 참여 기회가 열려 있습니다.",
          "브리프와 진행 방식이 카드형으로 정리되어 진입이 쉽습니다.",
        ],
        cta: "크리에이터로 참여하기",
        description:
          "콘텐츠 장르와 채널 톤에 맞는 브랜드 협업을 찾고, 일정과 산출물 정보를 한눈에 확인할 수 있는 모집 흐름입니다.",
        eyebrow: "크리에이터 모집",
        heroTitle: "크리에이터로 참여하기",
        href: "/contact",
        title: "기회가 필요한 크리에이터를 위한 참여 동선",
      },
      {
        bullets: [
          "브랜드 목표에 맞는 협업 포맷을 유연하게 설계할 수 있습니다.",
          "모집부터 콘텐츠 진행까지 카드형 보드로 정리할 수 있습니다.",
          "후속 리포트와 재집행까지 염두에 둔 구조를 시작점으로 잡습니다.",
        ],
        cta: "광고주 캠페인 문의하기",
        description:
          "리뷰, 숏폼, 방문 체험단, 콘텐츠 IP 협업까지 목적에 맞는 캠페인을 설계하고 크리에이터 모집을 시작하는 문의 흐름입니다.",
        eyebrow: "광고주 모집",
        heroTitle: "광고주 캠페인 문의하기",
        href: "/contact",
        title: "콘텐츠가 필요한 브랜드를 위한 캠페인 동선",
      },
    ],
    audienceSection: {
      description:
        "홈에서는 두 집단이 스스로 맞는 진입점을 고를 수 있도록 참여 목적을 선명하게 나눈 카드 구조를 먼저 배치했습니다.",
      eyebrow: "타깃 선택",
      title: "크리에이터와 광고주가 바로 선택할 수 있는 두 개의 카드",
    },
    campaignCategorySection: {
      description:
        "히트픽은 다양한 콘텐츠 유형을 하나의 캠페인 허브에서 연결합니다. 메인에서는 대표 카테고리를 먼저 선명하게 보여 줍니다.",
      eyebrow: "캠페인 카테고리",
      title: "운영 가능한 캠페인 카테고리",
    },
    campaignCategories: [
      {
        description: "오프라인 체험과 현장 반응을 자연스럽게 콘텐츠로 연결합니다.",
        label: "체험형",
        title: "방문 체험단",
      },
      {
        description:
          "제품 사용 맥락과 장점을 설득력 있게 전달하는 기본 포맷입니다.",
        label: "리뷰형",
        title: "제품 리뷰",
      },
      {
        description:
          "빠른 도달과 화제성을 노리는 짧고 선명한 콘텐츠에 적합합니다.",
        label: "확산형",
        title: "숏폼 콘텐츠",
      },
      {
        description:
          "비주얼 중심 후기와 일상형 노출을 자연스럽게 쌓아갈 수 있습니다.",
        label: "소셜형",
        title: "인스타그램 리뷰",
      },
      {
        description:
          "검색성과 상세 정보 전달이 필요한 브랜드에 잘 맞는 운영 구조입니다.",
        label: "검색형",
        title: "블로그 리뷰",
      },
      {
        description:
          "스토리텔링과 신뢰도가 필요한 브랜드 협업에 적합한 포맷입니다.",
        label: "영상형",
        title: "유튜브 협업",
      },
      {
        description:
          "브랜드 메시지와 세계관을 길게 확장하는 시리즈형 캠페인에 적합합니다.",
        label: "브랜딩형",
        title: "콘텐츠 IP 캠페인",
      },
      {
        description:
          "지속적인 노출과 팬 커뮤니케이션을 함께 설계하는 장기 협업형입니다.",
        label: "관계형",
        title: "브랜드 앰배서더",
      },
    ],
    advertiserRecruitingPoints: [
      {
        description:
          "인지, 후기, 체험, 반복 노출 중 무엇이 필요한지에 따라 캠페인 구조를 다르게 제안할 수 있습니다.",
        title: "브랜드 목표에 맞춘 캠페인 설계",
      },
      {
        description:
          "모집 상태와 제작 진행률을 카드 단위로 정리해 팀 안에서 공유하기 쉬운 구조를 만듭니다.",
        title: "운영 흐름이 보이는 카드형 보드",
      },
      {
        description:
          "리포트 포인트를 염두에 두고 시작해, 다음 집행으로 이어질 수 있는 기본 프레임을 만듭니다.",
        title: "후속 운영까지 이어지는 시작 구조",
      },
    ],
    creatorSection: {
      chips: ["리뷰", "숏폼", "방문 체험단", "장기 협업"],
      cta: "크리에이터로 참여하기",
      description:
        "히트픽의 크리에이터 모집은 단순 지원보다, 어떤 기회를 어떤 방식으로 만날 수 있는지 먼저 보여 주는 데 초점을 둡니다.",
      eyebrow: "크리에이터 모집",
      highlightDescription:
        "채널 규모보다 콘텐츠 결, 업로드 방식, 팔로워 반응까지 함께 고려한 모집 흐름을 지향합니다.",
      highlightEyebrow: "크리에이터 전달 동선",
      highlightTitle: "내 채널과 맞는 작업을 쉽게 고를 수 있도록",
      title: "기회가 필요한 크리에이터를 위한 모집 구조",
    },
    creatorRecruitingPoints: [
      {
        description:
          "채널 규모보다 콘텐츠 결, 업로드 방식, 팔로워 반응까지 함께 고려한 모집 흐름을 지향합니다.",
        title: "채널에 맞는 기회를 찾는 구조",
      },
      {
        description:
          "참여 전에 일정, 산출물, 톤앤매너를 확인할 수 있어 지원 이후의 혼선을 줄입니다.",
        title: "지원 전에 핵심 정보가 보이는 구조",
      },
      {
        description:
          "방문 체험단, 리뷰, 숏폼, 장기 협업까지 활동 스타일에 따라 선택지를 넓혀 둡니다.",
        title: "포맷별로 선택지가 나뉘는 구조",
      },
    ],
    exampleCampaignSection: {
      description:
        "콘텐츠 플랫폼 감각을 살리기 위해 실제 운영 전에 참고할 수 있는 더미 캠페인 카드를 메인에 배치했습니다.",
      eyebrow: "샘플 캠페인",
      title: "예시로 보는 캠페인 카드 6개",
    },
    faqSection: {
      description:
        "처음 랜딩을 접하는 사용자들이 가장 궁금해할 질문부터 먼저 정리했습니다.",
      eyebrow: "자주 묻는 질문",
      items: [
        {
          answer:
            "가능합니다. 리뷰, 숏폼, 방문 체험단, 인스타그램 리뷰, 유튜브 협업 등 콘텐츠 포맷에 따라 참여 가능성이 달라집니다.",
          question: "크리에이터는 어떤 형태로 참여할 수 있나요?",
        },
        {
          answer:
            "캠페인 목적, 희망 일정, 예산 범위, 원하는 콘텐츠 포맷 정도만 정리되어 있어도 초기 문의를 시작할 수 있습니다.",
          question: "광고주는 어느 정도 준비가 되어 있어야 문의할 수 있나요?",
        },
        {
          answer:
            "방문 체험단, 제품 리뷰, 숏폼 콘텐츠, 블로그 리뷰, 유튜브 협업, 콘텐츠 IP 캠페인, 브랜드 앰배서더 등 다양한 포맷으로 확장 가능합니다.",
          question: "어떤 캠페인 카테고리를 운영할 수 있나요?",
        },
        {
          answer:
            "현재 메인 랜딩은 초기 모집 구조를 보여 주는 단계이며, 실제 운영 단계에서는 별도 협의를 통해 일정과 진행 방식이 정리됩니다.",
          question: "신청 후 바로 캠페인이 확정되나요?",
        },
        {
          answer:
            "현재 홈의 버튼은 모두 `/contact`로 연결되며, 이후에는 폼 연동이나 운영 채널 연결을 통해 실제 접수 흐름으로 확장할 수 있습니다.",
          question: "문의와 참여는 어디서 시작하나요?",
        },
      ],
      title: "자주 묻는 질문",
    },
    finalCta: {
      description:
        "크리에이터는 참여 기회를, 브랜드는 캠페인 시작점을 만들 수 있도록 메인 랜딩의 도달 동선을 한 화면에 정리했습니다.",
      eyebrow: "마지막 안내",
      primaryCta: "크리에이터로 참여하기",
      secondaryCta: "광고주 캠페인 문의하기",
      title:
        "지금 히트픽에서 브랜드와 크리에이터를 연결하는 첫 문의를 시작해 보세요",
    },
    hero: {
      ctaPrimary: "크리에이터로 참여하기",
      ctaSecondary: "광고주 캠페인 문의하기",
      description:
        "히트픽은 리뷰, 숏폼, 방문 체험형 콘텐츠 캠페인을 통해 브랜드와 크리에이터가 함께 성장하는 캠페인 플랫폼입니다.",
      eyebrow: "히트픽 소개",
      selectionCard: {
        description:
          "브랜드는 캠페인 문의로, 크리에이터는 참여 문의로 바로 이동할 수 있도록 두 개의 진입 카드를 상단에 배치했습니다.",
        eyebrow: "바로 선택하기",
        title: "들어오자마자 각자 맞는 참여 목적을 고를 수 있도록 구성했습니다.",
      },
      signals: ["브랜드 모집", "크리에이터 모집", "리뷰 캠페인", "숏폼 콘텐츠"],
      stats: [
        {
          label: "바로 선택 가능한 참여 동선",
          value: "2개 모집 트랙",
        },
        {
          label: "메인에 정리한 캠페인 유형",
          value: "8개 카테고리",
        },
        {
          label: "운영 감각을 보여 주는 예시 카드",
          value: "6개 더미 캠페인",
        },
      ],
      title:
        "콘텐츠가 필요한 브랜드와 기회가 필요한 크리에이터를 연결합니다",
    },
    metadata: {
      description:
        "히트픽은 리뷰, 숏폼, 방문 체험형 콘텐츠 캠페인을 통해 브랜드와 크리에이터를 연결하는 랜딩페이지입니다.",
      title:
        "콘텐츠가 필요한 브랜드와 기회가 필요한 크리에이터를 연결합니다",
    },
    partnershipBadges: [
      "뷰티",
      "푸드",
      "라이프스타일",
      "로컬 매장",
      "테크",
      "교육",
      "커머스",
      "커뮤니티",
    ],
    processSection: {
      description:
        "참여와 문의 이후 어떤 단계가 이어지는지 미리 보여 주면 경험이 훨씬 선명해집니다. 히트픽은 이 기본 리듬을 선명하게 보여 주는 방향으로 출발합니다.",
      eyebrow: "참여 및 진행 프로세스",
      stepLabel: "단계",
      title: "참여부터 진행까지의 기본 프로세스",
    },
    processSteps: [
      {
        description:
          "크리에이터와 광고주가 각자 필요한 정보를 남기고, 히트픽이 기본 방향을 정리합니다.",
        step: "1",
        title: "참여 또는 문의 접수",
      },
      {
        description:
          "브랜드 목표와 콘텐츠 성격을 바탕으로 적합한 카테고리와 협업 포맷을 잡습니다.",
        step: "2",
        title: "캠페인 방향 설정",
      },
      {
        description:
          "브리프, 일정, 산출물 조건을 카드형 흐름으로 정리해 실제 진행 리듬을 맞춥니다.",
        step: "3",
        title: "매칭 및 콘텐츠 진행",
      },
      {
        description:
          "콘텐츠 발행 후 반응과 결과 포인트를 정리해 다음 협업으로 자연스럽게 이어갑니다.",
        step: "4",
        title: "성과 확인 및 후속 연결",
      },
    ],
    sampleCampaigns: [
      {
        badge: "모집 중",
        category: "방문 체험단",
        description:
          "신규 디저트 브랜드 매장을 방문해 체험 후 사진, 짧은 후기, 숏폼 콘텐츠를 제작하는 캠페인",
        summary: "현장 방문 + 피드 후기 + 짧은 영상",
        title: "성수 신상 디저트 스토어 방문 체험단",
      },
      {
        badge: "모집 중",
        category: "제품 리뷰",
        description:
          "스킨케어 제품의 사용감과 전후 맥락을 중심으로 신뢰감 있는 리뷰를 제작하는 캠페인",
        summary: "제품 사용 후기 + 전환형 리뷰",
        title: "데일리 스킨케어 제품 리뷰 캠페인",
      },
      {
        badge: "준비 중",
        category: "숏폼 콘텐츠",
        description:
          "브랜드 메시지를 짧고 선명하게 풀어내는 15초 내외 숏폼 시리즈 캠페인",
        summary: "15초 숏폼 + 릴스/쇼츠 확산",
        title: "신제품 런칭 숏폼 챌린지",
      },
      {
        badge: "모집 중",
        category: "인스타그램 리뷰",
        description:
          "라이프스타일 맥락 속에서 제품을 자연스럽게 노출하는 피드와 스토리 중심 캠페인",
        summary: "피드 게시물 + 스토리 노출",
        title: "홈리빙 브랜드 인스타그램 리뷰",
      },
      {
        badge: "진행 예시",
        category: "유튜브 협업",
        description:
          "브랜드 사용 장면을 장기적으로 남길 수 있는 브이로그형 또는 비교형 영상 협업 캠페인",
        summary: "브이로그형 콘텐츠 + 설명력 강화",
        title: "주방가전 유튜브 협업 프로젝트",
      },
      {
        badge: "장기 협업",
        category: "브랜드 앰배서더",
        description:
          "단발성 노출이 아닌 정기 콘텐츠와 팬 커뮤니케이션을 함께 설계하는 앰배서더형 협업",
        summary: "월간 운영 + 반복 노출 구조",
        title: "라이프스타일 브랜드 앰배서더 프로그램",
      },
    ],
    trustSection: {
      description:
        "브랜드와 크리에이터가 모두 이해하고 시작할 수 있도록 히트픽은 파트너십 구조와 운영 흐름을 선명하게 보여 주는 방향을 지향합니다.",
      eyebrow: "파트너십 및 흐름",
      title: "파트너십과 흐름을 만드는 기본 구조",
    },
    trustCards: [
      {
        description:
          "브랜드와 크리에이터가 같은 흐름을 이해할 수 있도록 브리프와 진행 정보를 카드형으로 정리합니다.",
        title: "명확한 진행 구조",
      },
      {
        description:
          "단발 노출만이 아니라 후기, 재방문, 반복 집행으로 이어질 수 있는 구조를 기본 전제로 둡니다.",
        title: "지속 가능한 캠페인 관점",
      },
      {
        description:
          "한 번의 문의로 끝나는 것이 아니라, 맞는 포맷과 운영 방식을 찾는 파트너십 관점으로 접근합니다.",
        title: "파트너십 중심 운영",
      },
    ],
  },
} satisfies Record<Locale, unknown>;

export function getHomePageContent(locale: Locale) {
  return homePageContent[locale];
}
