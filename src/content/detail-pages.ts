import { type Locale } from "@/lib/locale";

const detailPageContent = {
  en: {
    advertisersPage: {
      campaignTypes: [
        {
          description:
            "Amplify store visits, on-site experiences, and offline reactions back into content.",
          title: "Visit experience-led operations",
        },
        {
          description:
            "Accumulate review assets while explaining product use context and strengths with clarity.",
          title: "Product review-led operations",
        },
        {
          description:
            "A short-form operating model for fast reach and buzz through short video formats.",
          title: "Short-form content-led operations",
        },
        {
          description:
            "A relationship-driven operating model for brands that need cumulative messaging and repeat exposure.",
          title: "Ambassador and series-led operations",
        },
      ],
      finalCta: {
        description:
          "Share your goal, timeline, and preferred content direction, and use that as the starting point for a structured advertiser conversation.",
        eyebrow: "Final Prompt",
        label: "Request advertiser consultation",
        title:
          "Start a structured brand campaign with Hitpick and shape the right operating model",
      },
      hero: {
        description:
          "Hitpick is designed so brands that need content can quickly define the right campaign structure and begin creator recruitment and operations in one flow.",
        eyebrow: "Advertiser Recruitment",
        highlight: {
          description:
            "For advertisers, operating structure matters more than raw creator count. This page is built around that expectation.",
          items: [
            "Translate brand problems into an initial campaign structure",
            "Organize recruitment and execution through a card-based flow",
            "Start with a frame that accounts for reports and repeat runs",
          ],
          label: "Advertiser Snapshot",
          title: "Start a campaign structure built around brand goals",
        },
        primaryAction: "Request advertiser consultation",
        secondaryAction: "View campaign types",
        stats: [
          { label: "Core operating models", value: "4 campaign directions" },
          { label: "Base operating rhythm", value: "4-step process" },
          { label: "Report example", value: "Performance mockup" },
        ],
        title: "Launch your brand campaign in a more structured way with Hitpick",
      },
      metadata: {
        description:
          "A detailed advertiser page covering campaign problems, structure, execution flow, and reporting direction.",
        title: "Advertiser Recruitment",
      },
      pains: [
        {
          description:
            "Many brands get stuck on how to recruit creators and what criteria they should use to evaluate them.",
          title: "It is hard to find the right creators",
        },
        {
          description:
            "It takes real effort to explain format, schedule, and deliverables to internal teams and external partners at the same time.",
          title: "Campaign structure takes too long to organize",
        },
        {
          description:
            "The right approach shifts depending on whether the goal is review accumulation, awareness, or visit intent.",
          title: "It is difficult to choose the right format for the goal",
        },
      ],
      process: [
        {
          description:
            "We start by organizing basics such as brand goals, timeline, business type, and budget range.",
          step: "1",
          title: "Inquiry and goal framing",
        },
        {
          description:
            "We define the right campaign type, recruitment direction, and creator criteria for that goal.",
          step: "2",
          title: "Campaign structure design",
        },
        {
          description:
            "Candidate suggestions, briefs, and scheduling are connected as one visual operating flow.",
          step: "3",
          title: "Recruitment and content execution",
        },
        {
          description:
            "Once content is published, response points and outcomes are summarized and connected to the next run.",
          step: "4",
          title: "Results review and follow-up operations",
        },
      ],
      reportBars: [
        {
          label: "Review content response",
          value: "82%",
          width: "w-[82%]",
        },
        {
          label: "Visit-intent campaign clicks",
          value: "64%",
          width: "w-[64%]",
        },
        {
          label: "Short-form delivery rate",
          value: "91%",
          width: "w-[91%]",
        },
      ],
      reportMetrics: [
        { label: "Published content", value: "18" },
        { label: "Total reach", value: "124K" },
        { label: "Save/share reactions", value: "2.8K" },
        { label: "Visit-intent clicks", value: "1.2K" },
      ],
      reportSection: {
        cardEyebrow: "Report mockup",
        description:
          "Actual service metrics will eventually become more detailed, but the landing page already shows how outcome reporting can be framed and organized.",
        eyebrow: "Reporting direction",
        summary:
          "The figures below are mock data, but they show the kind of signals a brand can review before deciding the next action.",
        title: "An example of the report direction brands can expect",
      },
      sections: {
        campaignTypes: {
          description:
            "The campaign type you choose should shift with your brand goal. Hitpick begins with these representative operating directions.",
          eyebrow: "Campaign Types",
          title: "Operating directions advertisers can choose from",
        },
        pains: {
          description:
            "Before looking for more creators, advertisers usually need clarity on what problem they are solving and how the campaign should be shaped.",
          eyebrow: "Advertiser Pain Points",
          title: "The core issues advertisers face before a campaign starts",
        },
        process: {
          description:
            "The next step after inquiry needs to feel concrete. A clear operating rhythm helps advertisers trust what happens next.",
          eyebrow: "Operating Process",
          stepLabel: "Step",
          title: "How an advertiser campaign moves forward",
        },
        solutions: {
          description:
            "Hitpick focuses not on a simple introduction, but on turning those brand-side questions into a workable campaign structure.",
          eyebrow: "How Hitpick Solves It",
          title: "How Hitpick turns the problem into a campaign structure",
        },
      },
      solutions: [
        {
          description:
            "We organize the brand objective first, then design the recruitment model and creator direction that fit it.",
          title: "Translate the problem into a campaign structure",
        },
        {
          description:
            "Schedules, deliverables, and messaging are organized into a card-based board to simplify internal and external communication.",
          title: "Visualize the operating flow",
        },
        {
          description:
            "We divide the core formats so advertisers can choose quickly among review-led, short-form, visit-led, and long-term models.",
          title: "Choose by goal, not guesswork",
        },
      ],
    },
    campaignTypeDetails: [
      {
        deliverables: ["Visit review", "On-site photos", "Short-form clip"],
        description:
          "Turn an offline visit into content naturally, so both the experience and the on-site reaction become visible together.",
        label: "Experience",
        title: "Visit Experience Crew",
        useCases: ["New store opening", "Pop-up operation", "Local awareness"],
      },
      {
        deliverables: ["Detailed usage review", "Comparison points", "Purchase-driving review"],
        description:
          "A foundational format that explains product benefits and context in detail to improve both trust and conversion potential.",
        label: "Review",
        title: "Product Review",
        useCases: ["New product launch", "Feature explanation", "Review accumulation"],
      },
      {
        deliverables: ["Reels/Shorts", "15-second clips", "Fast-reach content"],
        description:
          "An expansion-focused format for brands that want short, crisp content capable of fast buzz and reach.",
        label: "Reach",
        title: "Short-form Content",
        useCases: ["Launch buzz", "Trend response", "Fast reach"],
      },
      {
        deliverables: ["Feed post", "Story placement", "Visual review"],
        description:
          "A social format that places the product naturally inside everyday content and builds impression through visual reviews.",
        label: "Social",
        title: "Instagram Review",
        useCases: ["Visual emphasis", "Lifestyle placement", "Social branding"],
      },
      {
        deliverables: ["Search-led post", "Detailed review", "Comparison roundup"],
        description:
          "A strong format for brands that depend on search traffic and information depth while building long-term review assets.",
        label: "Search",
        title: "Blog Review",
        useCases: ["Search exposure", "Information depth", "Long-term archive"],
      },
      {
        deliverables: ["Vlog", "Review video", "Scene-based collaboration"],
        description:
          "A video-led collaboration format suited to moments when product context and trust need deeper explanation.",
        label: "Video",
        title: "YouTube Collaboration",
        useCases: ["Stronger explanation", "Rich content", "Trust building"],
      },
      {
        deliverables: ["Series content", "Brand narrative", "Repeat exposure structure"],
        description:
          "A series-driven branding campaign for brands that want to accumulate a message and world over time.",
        label: "Branding",
        title: "Content IP Campaign",
        useCases: ["Expand brand world", "Series operation", "Content asset building"],
      },
      {
        deliverables: ["Recurring content", "Community touchpoints", "Repeat collaboration structure"],
        description:
          "A relationship-based campaign suited to brands that want ongoing exposure and fan communication beyond a one-off collaboration.",
        label: "Relationship",
        title: "Brand Ambassador",
        useCases: ["Long-term partnership", "Repeated exposure", "Brand loyalty"],
      },
    ],
    campaignsPage: {
      decisionGuides: [
        {
          description:
            "If search visibility and trust matter most, information-dense formats such as product reviews or blog reviews are a strong fit.",
          title: "When you want to build review assets",
        },
        {
          description:
            "If you need buzz and reach quickly, short-form content and Instagram reviews usually work best.",
          title: "When fast spread matters",
        },
        {
          description:
            "If the goal is to deliver the brand experience itself, visit crews, YouTube collaborations, and ambassador models are more suitable.",
          title: "When you want to build experience and relationship",
        },
      ],
      finalCta: {
        description:
          "Share your goal, budget, and preferred content style, and we can begin shaping which campaign type fits best.",
        eyebrow: "Final Prompt",
        label: "Ask about campaigns",
        title:
          "Organize the right Hitpick campaign type for your brand starting now",
      },
      hero: {
        description:
          "Hitpick divides campaign formats around different brand goals and creator styles, then explains what each format is meant to do and what it typically delivers.",
        eyebrow: "Campaign Types",
        highlight: {
          description:
            "Rather than forcing one format, we split the baseline categories clearly so brands can choose what fits their goal.",
          items: [
            "Eight categories from visit experiences to ambassador programs",
            "Clear use cases and deliverable directions for each category",
            "Card-based explanations that are easy for both brands and creators to understand",
          ],
          label: "Category Snapshot",
          title: "Representative campaign categories that Hitpick can operate",
        },
        primaryAction: "Ask about campaigns",
        secondaryAction: "Open contact page",
        stats: [
          { label: "Core categories", value: "8 types" },
          { label: "Selection guides", value: "3 decision frames" },
          { label: "Deliverable direction", value: "Explained by card" },
        ],
        title: "Choose the right Hitpick campaign type based on brand goals",
      },
      metadata: {
        description:
          "A campaign category overview page covering eight representative formats from visit experiences to ambassador programs.",
        title: "Campaign Types",
      },
      sections: {
        categories: {
          deliverablesLabel: "Typical deliverables",
          description:
            "Brand goals and creator styles change the right format. Hitpick introduces eight representative campaign types as a starting point.",
          eyebrow: "Campaign Categories",
          title: "Eight representative campaign formats at Hitpick",
          useCasesLabel: "Recommended situations",
        },
        decisionGuides: {
          description:
            "Different brand situations call for different campaign structures. Use this guide to see which format tends to fit which goal.",
          eyebrow: "Selection Guide",
          title: "Which campaign works best for which situation?",
        },
      },
    },
    creatorsPage: {
      benefits: [
        {
          description:
            "Receive brand collaboration opportunities that match your channel tone and field, prioritizing fit over forced matching.",
          title: "Collaboration opportunities that fit your channel",
        },
        {
          description:
            "Participation formats stay open across reviews, short-form, visit experiences, and long-term collaborations.",
          title: "Participation paths opened by format",
        },
        {
          description:
            "You can review the brief, timing, and deliverable direction before joining, which makes the decision easier.",
          title: "A flow that shows the brief first",
        },
        {
          description:
            "We keep long-term relationships in mind, not only one-off campaigns, so repeat participation can grow naturally.",
          title: "Potential for sustainable collaboration",
        },
      ],
    finalCta: {
      description:
        "Leave the basics about your activity and interest area, and use that as the starting point for the next collaboration opportunity.",
      eyebrow: "Final Prompt",
      label: "Register as a creator",
      title:
        "Register with Hitpick and start finding collaboration opportunities that fit your channel",
    },
    faqs: [
      {
        answer:
          "Creators across reviews, short-form, visit experiences, Instagram reviews, and YouTube collaborations can all fit, depending on the campaign.",
        question: "What kinds of creators can participate?",
      },
      {
        answer:
          "You can start with only the basics such as your channel, focus area, and the kinds of campaigns you are interested in. Details can be coordinated later.",
        question: "Do I need every detail ready before registering?",
      },
      {
        answer:
          "We look at both the brand goal and the tone of your channel when suggesting a campaign direction, rather than matching by one metric alone.",
        question: "How are campaigns matched to creators?",
      },
      {
        answer:
          "All current CTAs lead to the contact page, and the intake is designed so the real operating flow can continue from there.",
        question: "Where do I register as a creator?",
      },
    ],
    hero: {
        description:
          "Hitpick offers a recruitment page designed so creators looking for opportunities can more easily discover brand collaborations that fit their channel style and working rhythm.",
        eyebrow: "Creator Recruitment",
        highlight: {
          description:
            "This is not just an application form. It is structured so creators can first understand how each collaboration moves before deciding to join.",
          items: [
            "A participation structure that considers brand fit and channel tone together",
            "Card-based information that surfaces the brief and deliverable direction first",
            "Formats that can extend from one-off reviews to long-term partnerships",
          ],
          label: "Creator Snapshot",
          title: "A structure where campaign feel becomes visible before you join",
        },
        primaryAction: "Register as a creator",
        secondaryAction: "View available campaign types",
        stats: [
          { label: "Base participation types", value: "8 campaign categories" },
          { label: "Participation range", value: "From reviews to ambassadors" },
          { label: "Operating rhythm", value: "4-step process" },
        ],
        title: "We are recruiting creators who want to grow with Hitpick",
      },
      metadata: {
        description:
          "A detailed creator page covering campaign formats, participation benefits, flow, and FAQs.",
        title: "Creator Recruitment",
      },
      process: [
        {
          description:
            "Once you share your basic profile, channel, and campaign interests, Hitpick clarifies the areas where you can participate.",
          step: "1",
          title: "Creator registration",
        },
        {
          description:
            "Campaign direction is matched by looking at both the brand goal and your channel fit.",
          step: "2",
          title: "Campaign matching",
        },
        {
          description:
            "The brief, schedule, and deliverable conditions are reviewed together before execution begins.",
          step: "3",
          title: "Brief review and execution",
        },
        {
          description:
            "After publishing, results and follow-up opportunities are organized with long-term collaboration in mind.",
          step: "4",
          title: "Performance review and follow-up",
        },
      ],
      sections: {
        benefits: {
          description:
            "Rather than simply collecting sign-ups, the page is designed to explain what creators get, how participation works, and why a given campaign might fit.",
          eyebrow: "Why Creators Join",
          title: "What creators can fundamentally expect from Hitpick",
        },
        campaignTypes: {
          description:
            "Hitpick can open different opportunities depending on channel character and campaign purpose. These are the main campaign types creators can join.",
          eyebrow: "Available Campaign Types",
          title: "The main campaign formats creators can participate in",
        },
        faqs: {
          description:
            "We gathered the questions creators are most likely to ask before signing up.",
          eyebrow: "Frequently Asked Questions",
          title: "Creator recruitment FAQ",
        },
        process: {
          description:
            "When creators understand what happens after registration, participation feels far less ambiguous. Hitpick uses a simple structure to show that path clearly.",
          eyebrow: "Participation Process",
          stepLabel: "Step",
          title: "Creator participation process",
        },
      },
    },
  },
  ko: {
    advertisersPage: {
      campaignTypes: [
        {
          description:
            "매장 방문, 현장 체험, 오프라인 반응을 콘텐츠로 다시 증폭시키는 방식입니다.",
          title: "방문 체험단 중심 운영",
        },
        {
          description:
            "제품 사용 맥락과 장점을 설득력 있게 전달하며 후기 자산을 축적하는 구조입니다.",
          title: "제품 리뷰 중심 운영",
        },
        {
          description:
            "짧은 영상 포맷으로 빠른 확산과 화제성을 만드는 숏폼형 운영입니다.",
          title: "숏폼 콘텐츠 중심 운영",
        },
        {
          description:
            "장기적인 메시지 누적과 반복 노출이 필요한 브랜드에 맞는 관계형 운영입니다.",
          title: "앰배서더 및 시리즈형 운영",
        },
      ],
      finalCta: {
        description:
          "목표와 일정, 원하는 콘텐츠 방향만 있어도 광고주 상담 흐름을 시작할 수 있습니다.",
        eyebrow: "마지막 안내",
        label: "광고주 상담 요청하기",
        title:
          "지금 히트픽에 상담을 남기고 브랜드에 맞는 캠페인 구조를 함께 설계해 보세요",
      },
      hero: {
        description:
          "히트픽은 콘텐츠가 필요한 브랜드가 목적에 맞는 캠페인 구조를 빠르게 세우고, 크리에이터 모집과 운영 흐름까지 한 번에 시작할 수 있도록 설계된 플랫폼입니다.",
        eyebrow: "광고주 모집",
        highlight: {
          description:
            "광고주 입장에서는 크리에이터 수보다 운영 감각과 구조가 더 중요합니다. 이 페이지는 그 기대에 맞춰 설계되었습니다.",
          items: [
            "브랜드 문제를 캠페인 구조로 번역하는 초기 설계",
            "모집부터 진행까지 카드형으로 정리되는 운영 흐름",
            "후속 리포트와 반복 집행까지 염두에 둔 프레임",
          ],
          label: "광고주용 한눈 요약",
          title: "브랜드 목표에 맞는 캠페인 구조를 빠르게 시작",
        },
        primaryAction: "광고주 상담 요청하기",
        secondaryAction: "캠페인 유형 보기",
        stats: [
          { label: "대표 운영 유형", value: "4개 핵심 캠페인 방향" },
          { label: "기본 운영 리듬", value: "4단계 프로세스" },
          { label: "리포트 예시", value: "성과 포인트 목업" },
        ],
        title: "히트픽으로 브랜드 캠페인을 체계적으로 시작하세요",
      },
      metadata: {
        description:
          "히트픽 광고주 모집 상세 페이지입니다. 광고주 문제, 해결 방식, 캠페인 유형, 운영 프로세스, 결과 리포트 방향을 확인할 수 있습니다.",
        title: "광고주 모집 상세",
      },
      pains: [
        {
          description:
            "크리에이터를 어떻게 모아야 할지, 어떤 기준으로 선별해야 할지부터 막히는 경우가 많습니다.",
          title: "적합한 크리에이터를 찾기 어렵다",
        },
        {
          description:
            "콘텐츠 포맷과 일정, 산출물을 내부 팀과 외부 파트너에게 동시에 설명하는 데 비용이 큽니다.",
          title: "캠페인 구조를 정리하는 데 시간이 많이 든다",
        },
        {
          description:
            "후기 자산을 쌓고 싶은지, 화제성을 노리는지, 방문 유도가 목적인지에 따라 접근 방식이 달라야 합니다.",
          title: "목표에 맞는 포맷을 고르기 어렵다",
        },
      ],
      process: [
        {
          description:
            "브랜드 목표, 일정, 업종, 예산 범위 같은 기본 정보를 정리합니다.",
          step: "1",
          title: "문의 및 목표 정리",
        },
        {
          description:
            "목표에 맞는 캠페인 유형과 모집 방향, 크리에이터 기준을 정리합니다.",
          step: "2",
          title: "캠페인 구조 설계",
        },
        {
          description:
            "후보군 제안, 브리프 전달, 일정 조율 등 실제 운영 단계를 카드형 흐름으로 이어갑니다.",
          step: "3",
          title: "모집 및 콘텐츠 진행",
        },
        {
          description:
            "콘텐츠 발행 이후 반응과 결과 포인트를 정리하고, 다음 집행 방향까지 연결합니다.",
          step: "4",
          title: "결과 확인 및 후속 운영",
        },
      ],
      reportBars: [
        {
          label: "리뷰형 콘텐츠 반응",
          value: "82%",
          width: "w-[82%]",
        },
        {
          label: "방문 유도 캠페인 클릭률",
          value: "64%",
          width: "w-[64%]",
        },
        {
          label: "숏폼 확산 전달 효율",
          value: "91%",
          width: "w-[91%]",
        },
      ],
      reportMetrics: [
        { label: "콘텐츠 발행 수", value: "18건" },
        { label: "총 도달", value: "124K" },
        { label: "저장/공유 반응", value: "2.8K" },
        { label: "방문 유도 클릭", value: "1.2K" },
      ],
      reportSection: {
        cardEyebrow: "리포트 미리보기",
        description:
          "실제 서비스 단계에서는 더 정교한 데이터가 붙겠지만, 초기 랜딩에서도 결과 리포트가 어떤 관점으로 정리되는지 보여 주고 있습니다.",
        eyebrow: "결과 리포트 방향",
        summary:
          "아래 목업은 실제 수치가 아닌 예시이며, 어떤 지표를 중심으로 브랜드가 다음 액션을 결정할 수 있는지 보여 주는 목적입니다.",
        title: "광고주가 기대할 수 있는 결과 리포트 예시",
      },
      sections: {
        campaignTypes: {
          description:
            "브랜드 목적에 따라 선택해야 하는 캠페인 유형이 달라집니다. 히트픽은 아래와 같은 기본 운영 방향을 기점으로 출발합니다.",
          eyebrow: "캠페인 유형",
          title: "광고주가 선택할 수 있는 캠페인 운영 방향",
        },
        pains: {
          description:
            "광고주는 크리에이터를 많이 보유한 플랫폼보다, 지금 어떤 문제를 어떤 구조로 해결할 수 있는지를 먼저 확인하고 싶어집니다.",
          eyebrow: "광고주 문제",
          title: "광고주가 캠페인을 시작하기 전에 겪는 대표 문제",
        },
        process: {
          description:
            "문의 이후 어떤 리듬으로 진행되는지 명확해야 광고주가 신뢰하고 다음 단계를 밟을 수 있습니다.",
          eyebrow: "운영 프로세스",
          stepLabel: "단계",
          title: "광고주 캠페인의 운영 프로세스",
        },
        solutions: {
          description:
            "히트픽은 이 문제를 단순 소개가 아니라 실제 운영 구조로 연결하는 데 초점을 둡니다.",
          eyebrow: "히트픽 해결 방식",
          title: "히트픽이 문제를 해결하는 방식",
        },
      },
      solutions: [
        {
          description:
            "브랜드의 목적을 먼저 정리한 뒤, 그에 맞는 모집 방식과 크리에이터 방향을 설계합니다.",
          title: "문제를 캠페인 구조로 번역",
        },
        {
          description:
            "일정, 산출물, 메시지 톤을 카드형 보드로 정리해 내부와 외부 커뮤니케이션을 단순화합니다.",
          title: "운영 흐름을 시각적으로 정리",
        },
        {
          description:
            "후기형, 숏폼형, 방문형, 장기형 등 목적에 맞는 포맷을 선택할 수 있게 기본 카테고리를 나눕니다.",
          title: "목표별 포맷을 빠르게 선택",
        },
      ],
    },
    campaignTypeDetails: [
      {
        deliverables: ["방문 후기", "현장 사진", "짧은 숏폼"],
        description:
          "오프라인 방문 경험을 자연스럽게 콘텐츠로 연결해 매장 체험과 현장 반응을 함께 보여 주는 방식입니다.",
        label: "체험형",
        title: "방문 체험단",
        useCases: ["신규 매장 오픈", "팝업 운영", "지역 기반 확산"],
      },
      {
        deliverables: ["상세 사용 후기", "비교 포인트", "구매 유도 리뷰"],
        description:
          "제품의 장점과 사용 맥락을 구체적으로 전달해 전환 가능성과 신뢰도를 함께 높이는 기본 포맷입니다.",
        label: "리뷰형",
        title: "제품 리뷰",
        useCases: ["신제품 출시", "기능 설명", "후기 축적"],
      },
      {
        deliverables: ["릴스/쇼츠", "15초 내외 영상", "빠른 노출 콘텐츠"],
        description:
          "짧고 선명한 콘텐츠를 중심으로 화제성과 도달을 만들고 싶은 브랜드에 적합한 확산형 캠페인입니다.",
        label: "확산형",
        title: "숏폼 콘텐츠",
        useCases: ["런칭 화제성", "트렌드 반응", "빠른 도달"],
      },
      {
        deliverables: ["피드 게시물", "스토리 노출", "비주얼 후기"],
        description:
          "일상형 콘텐츠 속에서 제품을 자연스럽게 노출하고, 감도 높은 리뷰를 통해 브랜드 인상을 쌓는 방식입니다.",
        label: "소셜형",
        title: "인스타그램 리뷰",
        useCases: ["비주얼 강조", "일상 침투", "라이프스타일 브랜딩"],
      },
      {
        deliverables: ["검색형 포스팅", "상세 후기", "비교형 정리"],
        description:
          "검색 유입과 정보 전달이 중요한 브랜드에 적합하며, 긴 호흡으로 후기 자산을 쌓는 데 유리한 포맷입니다.",
        label: "검색형",
        title: "블로그 리뷰",
        useCases: ["검색 노출", "정보 전달", "장기 아카이브"],
      },
      {
        deliverables: ["브이로그", "리뷰 영상", "장면 중심 협업"],
        description:
          "브랜드 사용 맥락과 신뢰도를 깊이 있게 전달해야 할 때 적합한 영상 협업형 캠페인입니다.",
        label: "영상형",
        title: "유튜브 협업",
        useCases: ["설명력 강화", "리치 콘텐츠", "신뢰 형성"],
      },
      {
        deliverables: ["시리즈 콘텐츠", "브랜드 서사", "반복 노출 구조"],
        description:
          "브랜드 메시지와 세계관을 길게 축적하고 싶은 경우에 적합한 시리즈형 브랜딩 캠페인입니다.",
        label: "브랜딩형",
        title: "콘텐츠 IP 캠페인",
        useCases: ["브랜드 세계관 확장", "시리즈 운영", "콘텐츠 자산화"],
      },
      {
        deliverables: ["정기 콘텐츠", "커뮤니티 접점", "반복 협업 구조"],
        description:
          "단발 협업을 넘어 지속적인 노출과 팬 커뮤니케이션까지 이어 가고 싶은 브랜드에 적합한 관계형 캠페인입니다.",
        label: "관계형",
        title: "브랜드 앰배서더",
        useCases: ["장기 파트너십", "반복 노출", "브랜드 충성도 강화"],
      },
    ],
    campaignsPage: {
      decisionGuides: [
        {
          description:
            "검색성과 신뢰도 확보가 중요하면 제품 리뷰나 블로그 리뷰처럼 정보 밀도가 높은 포맷이 적합합니다.",
          title: "후기를 쌓고 싶을 때",
        },
        {
          description:
            "짧은 시간 안에 화제성과 도달을 만들고 싶다면 숏폼 콘텐츠나 인스타그램 리뷰가 유리합니다.",
          title: "빠른 확산이 필요할 때",
        },
        {
          description:
            "브랜드 경험 자체를 전달하고 싶다면 방문 체험단, 유튜브 협업, 앰배서더형 운영이 잘 맞습니다.",
          title: "경험과 관계를 만들고 싶을 때",
        },
      ],
      finalCta: {
        description:
          "목표와 예산, 원하는 포맷만 있어도 어떤 유형이 적합한지 상담을 시작할 수 있습니다.",
        eyebrow: "마지막 안내",
        label: "캠페인 문의하기",
        title:
          "지금 히트픽에 문의하고 브랜드에 맞는 캠페인 유형부터 정리해 보세요",
      },
      hero: {
        description:
          "히트픽은 다양한 브랜드 목표와 크리에이터 스타일에 맞게 캠페인 유형을 나누고, 각 포맷의 운영 목적과 산출물 방향을 함께 정리합니다.",
        eyebrow: "캠페인 유형",
        highlight: {
          description:
            "한 가지 방식만 고집하지 않고, 브랜드 목적에 따라 적합한 카테고리를 선택할 수 있도록 기본 프레임을 분명히 나눴습니다.",
          items: [
            "방문 체험단부터 브랜드 앰배서더까지 이어지는 8개 유형",
            "카테고리별 적합한 목적과 산출물 방향 정리",
            "브랜드와 크리에이터 모두 이해하기 쉬운 카드형 설명 방식",
          ],
          label: "유형별 한눈 요약",
          title: "히트픽에서 운영 가능한 대표 캠페인 카테고리",
        },
        primaryAction: "캠페인 문의하기",
        secondaryAction: "문의 페이지 열기",
        stats: [
          { label: "대표 카테고리 수", value: "8개 유형" },
          { label: "목적별 선택 기준", value: "3개 가이드" },
          { label: "대표 산출물 방향", value: "카드별 정리" },
        ],
        title: "브랜드 목적에 따라 선택하는 히트픽 캠페인 유형",
      },
      metadata: {
        description:
          "히트픽 캠페인 유형 소개 페이지입니다. 방문 체험단부터 브랜드 앰배서더까지 8가지 대표 유형을 확인할 수 있습니다.",
        title: "캠페인 유형 소개",
      },
      sections: {
        categories: {
          deliverablesLabel: "대표 산출물",
          description:
            "브랜드 목표와 크리에이터 스타일에 따라 적합한 캠페인 유형이 달라집니다. 히트픽은 아래 8가지 대표 유형을 기본 축으로 소개합니다.",
          eyebrow: "캠페인 유형",
          title: "히트픽 대표 캠페인 유형 8가지",
          useCasesLabel: "추천 상황",
        },
        decisionGuides: {
          description:
            "브랜드 상황에 따라 선택해야 하는 캠페인 방향이 달라집니다. 어떤 상황에 어떤 포맷이 적합한지 아래 가이드를 참고할 수 있습니다.",
          eyebrow: "선택 가이드",
          title: "어떤 상황에 어떤 캠페인을 고르면 좋을까요?",
        },
      },
    },
    creatorsPage: {
      benefits: [
        {
          description:
            "채널 톤과 활동 분야에 맞는 브랜드 협업을 제안받고, 무리한 매칭보다 어울리는 기회를 우선 탐색할 수 있습니다.",
          title: "채널에 맞는 협업 기회",
        },
        {
          description:
            "리뷰, 숏폼, 방문 체험단, 장기 협업 등 활동 스타일에 따라 참여할 수 있는 캠페인 포맷이 다양합니다.",
          title: "포맷별로 열려 있는 참여 기회",
        },
        {
          description:
            "지원 전에 브리프, 일정, 산출물 방향을 먼저 확인할 수 있어 참여 판단이 훨씬 수월합니다.",
          title: "브리프를 먼저 보는 흐름",
        },
        {
          description:
            "단발성 캠페인뿐 아니라 반복 참여나 장기 파트너십으로 이어질 수 있는 운영 구조를 염두에 둡니다.",
          title: "지속 가능한 관계 가능성",
        },
      ],
    finalCta: {
      description:
        "기본 정보와 관심 캠페인만 남겨도 다음 참여 흐름을 시작할 수 있도록 준비했습니다.",
      eyebrow: "마지막 안내",
      label: "크리에이터 등록하기",
      title:
        "지금 히트픽에 크리에이터로 등록하고, 채널에 맞는 작업 기회를 시작해 보세요",
    },
    faqs: [
      {
        answer:
          "리뷰, 숏폼, 방문 체험단, 인스타그램 리뷰, 유튜브 협업 등 다양한 포맷이 열려 있으며 캠페인 성격에 따라 제안 방식이 달라집니다.",
        question: "어떤 크리에이터가 참여할 수 있나요?",
      },
      {
        answer:
          "활동 채널과 활동 분야, 관심 캠페인 정도만 정리되어 있어도 등록을 시작할 수 있습니다. 세부 정보는 이후 조율 가능합니다.",
        question: "등록 전에 모든 정보를 완벽하게 준비해야 하나요?",
      },
      {
        answer:
          "브랜드 목표와 채널 톤, 일정 조건을 함께 고려해 적합한 캠페인 방향을 제안하는 구조를 기본으로 잡고 있습니다.",
        question: "어떤 기준으로 캠페인이 연결되나요?",
      },
      {
        answer:
          "현재 페이지의 CTA는 모두 문의 페이지로 연결되며, 등록 후에는 실제 운영 흐름에 맞춰 안내가 이어질 수 있게 설계되어 있습니다.",
        question: "크리에이터 등록은 어디서 하나요?",
      },
    ],
    hero: {
        description:
          "히트픽은 기회가 필요한 크리에이터가 채널에 맞는 브랜드 협업을 더 쉽게 찾을 수 있도록, 참여 동선과 캠페인 구조를 선명하게 정리한 모집 페이지를 제공합니다.",
        eyebrow: "크리에이터 모집",
        highlight: {
          description:
            "지원만 받는 구조가 아니라, 어떤 협업이 어떤 흐름으로 진행되는지 먼저 이해할 수 있도록 구성했습니다.",
          items: [
            "브랜드와 채널 톤의 핏을 고려한 참여 구조",
            "브리프와 산출물 방향을 먼저 보여 주는 카드형 정보",
            "단발 리뷰부터 장기 협업까지 확장 가능한 포맷",
          ],
          label: "크리에이터용 한눈 요약",
          title: "참여 전에 캠페인 감각이 먼저 보이는 구조",
        },
        primaryAction: "크리에이터 등록하기",
        secondaryAction: "참여 가능한 캠페인 보기",
        stats: [
          { label: "기본 참여 유형", value: "8개 캠페인 카테고리" },
          { label: "참여 방식", value: "리뷰부터 앰배서더까지" },
          { label: "진행 흐름", value: "4단계 참여 프로세스" },
        ],
        title: "히트픽과 함께 성장할 크리에이터를 모집합니다",
      },
      metadata: {
        description:
          "히트픽 크리에이터 모집 상세 페이지입니다. 혜택, 참여 가능한 캠페인, 참여 프로세스, FAQ를 확인할 수 있습니다.",
        title: "크리에이터 모집 상세",
      },
      process: [
        {
          description:
            "기본 정보와 활동 채널, 관심 캠페인을 남기면 히트픽이 참여 가능 영역을 정리합니다.",
          step: "1",
          title: "크리에이터 등록",
        },
        {
          description:
            "브랜드 목표와 채널 핏을 기준으로 어울리는 캠페인 유형과 진행 방향을 연결합니다.",
          step: "2",
          title: "캠페인 매칭",
        },
        {
          description:
            "브리프, 일정, 산출물 조건을 함께 확인하고 콘텐츠 진행 방향을 맞춥니다.",
          step: "3",
          title: "브리프 확인 및 진행",
        },
        {
          description:
            "콘텐츠 발행 이후 결과와 후속 기회를 정리하며 장기 협업 가능성을 이어갑니다.",
          step: "4",
          title: "성과 확인 및 후속 연결",
        },
      ],
      sections: {
        benefits: {
          description:
            "히트픽은 단순히 지원자를 받는 구조보다, 크리에이터가 왜 참여해야 하는지와 어떤 방식으로 작업이 이어지는지까지 함께 설명하는 방향을 택합니다.",
          eyebrow: "크리에이터의 선택",
          title: "크리에이터가 히트픽에서 기대할 수 있는 선택",
        },
        campaignTypes: {
          description:
            "히트픽은 채널 성격과 캠페인 목적에 따라 다양한 방식으로 참여 기회를 엽니다. 아래는 크리에이터가 참여할 수 있는 대표 유형입니다.",
          eyebrow: "참여 가능한 캠페인",
          title: "크리에이터가 참여할 수 있는 주요 캠페인",
        },
        faqs: {
          description:
            "크리에이터가 등록 전에 가장 자주 궁금해하는 질문을 먼저 정리했습니다.",
          eyebrow: "자주 묻는 질문",
          title: "크리에이터 모집 자주 묻는 질문",
        },
        process: {
          description:
            "등록 이후 어떤 단계가 이어지는지 미리 이해하면 참여 경험이 더 선명해집니다. 히트픽은 이 흐름을 명확하게 보여 주는 구조를 지향합니다.",
          eyebrow: "참여 프로세스",
          stepLabel: "단계",
          title: "크리에이터 참여 프로세스",
        },
      },
    },
  },
} satisfies Record<Locale, unknown>;

export function getAdvertisersPageContent(locale: Locale) {
  return detailPageContent[locale].advertisersPage;
}

export function getCampaignTypeDetails(locale: Locale) {
  return detailPageContent[locale].campaignTypeDetails;
}

export function getCampaignsPageContent(locale: Locale) {
  return detailPageContent[locale].campaignsPage;
}

export function getCreatorsPageContent(locale: Locale) {
  return detailPageContent[locale].creatorsPage;
}
