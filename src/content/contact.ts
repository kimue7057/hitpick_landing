import { type Locale } from "@/lib/locale";

const contactPageContent = {
  en: {
    form: {
      activityChannelLabel: "Primary channel",
      activityChannelOptions: [
        "Instagram",
        "YouTube",
        "Blog",
        "TikTok",
        "Threads / Community",
        "Other",
      ],
      advertiserMessageLabel: "Campaign details",
      advertiserMessagePlaceholder:
        "Tell us about your brand goal, target audience, preferred timeline, and any requests.",
      brandNameLabel: "Company / brand name",
      brandNamePlaceholder: "e.g. Hitpick Brand",
      budgetRangeLabel: "Budget range",
      budgetRangeOptions: [
        "Below KRW 3M",
        "KRW 3M - KRW 10M",
        "KRW 10M - KRW 30M",
        "Above KRW 30M",
        "Undecided",
      ],
      channelNameLabel: "Creator name / channel name",
      channelNamePlaceholder: "e.g. hitpick_creator",
      channelUrlLabel: "Channel URL",
      companyNameLabel: "Company / organization name",
      companyNamePlaceholder: "e.g. Hitpick Partners",
      contactNameAdvertiserLabel: "Contact person",
      contactNameLabel: "Name",
      contactNamePlaceholder: "Jane Doe",
      creatorProfileLabel: "About you / content focus",
      creatorProfilePlaceholder:
        "Share your main topics, niche, audience, or the style of collaborations you prefer.",
      emailLabel: "Email",
      emailPlaceholder: "hello@hitpick.kr",
      helperText:
        "Right now, submission prints values in the browser console and shows a success message. The separated submit handler is ready for a future API connection.",
      industryLabel: "Industry",
      industryOptions: [
        "Beauty",
        "Food",
        "Lifestyle",
        "Fashion",
        "Tech",
        "Education",
        "Local store / offline",
        "Other",
      ],
      inquiryTypeLabel: "Choose inquiry type",
      inquiryTypeOptions: [
        {
          description:
            "Leave your channel information and campaign interests to begin creator collaboration opportunities with Hitpick.",
          title: "I want to join as a creator",
          value: "creator",
        },
        {
          description:
            "Talk through a campaign structure built for your brand goals and start creator recruitment.",
          title: "I want to run a campaign as an advertiser",
          value: "advertiser",
        },
        {
          description:
            "Discuss partnership possibilities across brands, institutions, communities, and platforms.",
          title: "Partnership / alliance inquiry",
          value: "partnership",
        },
      ],
      interestCampaignLabelAdvertiser: "Preferred campaign type",
      interestCampaignLabelCreator: "Campaigns of interest",
      interestCampaignOptions: [
        "Visit Experience Crew",
        "Product Review",
        "Short-form Content",
        "Instagram Review",
        "Blog Review",
        "YouTube Collaboration",
        "Content IP Campaign",
        "Brand Ambassador",
      ],
      partnerTypeLabel: "Partnership type",
      partnerTypeOptions: [
        "Brand alliance",
        "Institution / event collaboration",
        "Platform / service partnership",
        "Media / content collaboration",
        "Other",
      ],
      partnershipMessageLabel: "Inquiry details",
      partnershipMessagePlaceholder:
        "Tell us the goal of the partnership, how you want to collaborate, and what kind of outcome you hope to build.",
      phoneLabel: "Phone",
      phonePlaceholder: "+82-10-1234-5678",
      selectPlaceholder: "Please select",
      submitIdle: "Send inquiry to Hitpick",
      submitPending: "Sending...",
      successAdvertiser: "Your advertiser campaign inquiry is ready.",
      successCreator: "Your creator participation inquiry is ready.",
      successPartnership: "Your partnership inquiry is ready.",
      validation: {
        activityChannelRequired: "Please select your main activity channel.",
        brandNameRequired: "Please enter your company or brand name.",
        channelNameRequired: "Please enter your creator or channel name.",
        channelUrlInvalid:
          "Channel URLs should start with http:// or https://.",
        channelUrlRequired: "Please enter your channel URL.",
        companyNameRequired: "Please enter your company or organization name.",
        contactNameMin: "Please enter at least 2 characters for the name.",
        emailInvalid: "Please check the email format.",
        interestCampaignRequired: "Please choose a campaign type.",
        messageMin:
          "Please enter at least 10 characters for the inquiry details.",
        messageRequired: "Please enter your inquiry details.",
        partnerTypeRequired: "Please select the partnership type.",
        phoneInvalid: "Please check the phone number format.",
        profileMin:
          "Please enter at least 10 characters for your intro or activity area.",
        profileRequired: "Please introduce yourself or your content focus.",
        businessTypeRequired: "Please select your industry.",
        budgetRangeRequired: "Please select a budget range.",
      },
    },
    hero: {
      description:
        "Hitpick brings creator participation, advertiser campaign inquiries, and partnership requests into one inquiry hub so the right route can start from a single place.",
      eyebrow: "Unified Inquiry Hub",
      highlight: {
        description:
          "Once someone chooses the purpose of the inquiry, the form reveals only the fields that match that path. The submit handler is already separated, so it can later connect to a real API flow easily.",
        items: [
          "Creator participation inquiry",
          "Advertiser campaign inquiry",
          "Partnership / alliance inquiry",
        ],
        label: "Choose a path first",
        title: "Start the inquiry by choosing the purpose first",
      },
      primaryAction: "Write an inquiry",
      secondaryAction: "View campaign types",
      stats: [
        { label: "Inquiry routes", value: "3 paths" },
        { label: "Validation", value: "React Hook Form + Zod" },
        { label: "Submission flow", value: "console.log + success message" },
      ],
      title: "Start your Hitpick inquiry through one unified intake flow",
    },
    metadata: {
      description:
        "A unified contact page for creator participation, advertiser campaigns, and partnership inquiries.",
      title: "Unified Contact",
    },
    page: {
      formDescription:
        "Once the inquiry type is chosen, only the fields for that route are revealed.",
      formEyebrow: "Unified inquiry form",
      formTitle: "A single intake form that adapts to the inquiry type",
    },
    supportCards: [
      {
        description:
          "The first step is choosing the purpose of the inquiry, after which only the relevant input fields are shown.",
        title: "Purpose-based form routing",
      },
      {
        description:
          "For now, submission shows a success state and prints to the console, while the logic remains separated for easy future API integration.",
        title: "Easy future API connection",
      },
      {
        description:
          "Hitpick keeps creator, advertiser, and partnership inquiries together inside one communication hub.",
        title: "One inquiry hub",
      },
    ],
  },
  ko: {
    form: {
      activityChannelLabel: "주요 활동 채널",
      activityChannelOptions: [
        "인스타그램",
        "유튜브",
        "블로그",
        "틱톡",
        "스레드/커뮤니티",
        "기타",
      ],
      advertiserMessageLabel: "문의 내용",
      advertiserMessagePlaceholder:
        "브랜드 목표, 희망 일정, 타깃 오디언스, 요청 사항 등을 적어 주세요.",
      brandNameLabel: "회사명/브랜드명",
      brandNamePlaceholder: "예: 히트픽 브랜드",
      budgetRangeLabel: "예산 범위",
      budgetRangeOptions: [
        "300만원 미만",
        "300만원 ~ 1,000만원",
        "1,000만원 ~ 3,000만원",
        "3,000만원 이상",
        "미정",
      ],
      channelNameLabel: "활동명/채널명",
      channelNamePlaceholder: "예: hitpick_creator",
      channelUrlLabel: "채널 URL",
      companyNameLabel: "회사/기관명",
      companyNamePlaceholder: "예: 히트픽 파트너스",
      contactNameAdvertiserLabel: "담당자 이름",
      contactNameLabel: "이름",
      contactNamePlaceholder: "홍길동",
      creatorProfileLabel: "자기소개/활동 분야",
      creatorProfilePlaceholder:
        "주요 콘텐츠 주제, 활동 분야, 협업 스타일 등을 적어 주세요.",
      emailLabel: "이메일",
      emailPlaceholder: "hello@hitpick.kr",
      helperText:
        "제출 시 현재는 브라우저 콘솔에 값이 출력되고 성공 메시지가 표시됩니다. 추후 API 연동은 분리된 submit handler에 연결하면 됩니다.",
      industryLabel: "업종",
      industryOptions: [
        "뷰티",
        "푸드",
        "라이프스타일",
        "패션",
        "테크",
        "교육",
        "지역 매장/오프라인",
        "기타",
      ],
      inquiryTypeLabel: "문의 유형 선택",
      inquiryTypeOptions: [
        {
          description:
            "채널 정보와 관심 캠페인을 남기고 히트픽과 협업 기회를 시작합니다.",
          title: "크리에이터로 참여하고 싶어요",
          value: "creator",
        },
        {
          description:
            "브랜드 목표에 맞는 캠페인 구조를 상담하고 크리에이터 모집을 시작합니다.",
          title: "광고주로 캠페인을 진행하고 싶어요",
          value: "advertiser",
        },
        {
          description:
            "브랜드, 기관, 커뮤니티, 플랫폼 간의 제휴나 협업 가능성을 논의합니다.",
          title: "파트너십/제휴 문의",
          value: "partnership",
        },
      ],
      interestCampaignLabelAdvertiser: "원하는 캠페인 유형",
      interestCampaignLabelCreator: "관심 캠페인",
      interestCampaignOptions: [
        "방문 체험단",
        "제품 리뷰",
        "숏폼 콘텐츠",
        "인스타그램 리뷰",
        "블로그 리뷰",
        "유튜브 협업",
        "콘텐츠 IP 캠페인",
        "브랜드 앰배서더",
      ],
      partnerTypeLabel: "제휴 유형",
      partnerTypeOptions: [
        "브랜드 제휴",
        "기관/행사 협업",
        "플랫폼/서비스 제휴",
        "미디어/콘텐츠 협업",
        "기타",
      ],
      partnershipMessageLabel: "문의 내용",
      partnershipMessagePlaceholder:
        "제휴 목적, 협업 방식, 기대하는 방향 등을 적어 주세요.",
      phoneLabel: "연락처",
      phonePlaceholder: "010-1234-5678",
      selectPlaceholder: "선택해 주세요",
      submitIdle: "히트픽 문의 보내기",
      submitPending: "전송 중...",
      successAdvertiser: "광고주 캠페인 문의가 정상적으로 준비되었습니다.",
      successCreator: "크리에이터 참여 문의가 정상적으로 준비되었습니다.",
      successPartnership: "파트너십/제휴 문의가 정상적으로 준비되었습니다.",
      validation: {
        activityChannelRequired: "주요 활동 채널을 선택해 주세요.",
        brandNameRequired: "회사명 또는 브랜드명을 입력해 주세요.",
        channelNameRequired: "활동명 또는 채널명을 입력해 주세요.",
        channelUrlInvalid:
          "채널 URL은 http:// 또는 https://로 시작해 주세요.",
        channelUrlRequired: "채널 URL을 입력해 주세요.",
        companyNameRequired: "회사 또는 기관명을 입력해 주세요.",
        contactNameMin: "이름을 2자 이상 입력해 주세요.",
        emailInvalid: "이메일 형식을 확인해 주세요.",
        interestCampaignRequired: "관심 캠페인을 선택해 주세요.",
        messageMin: "문의 내용을 10자 이상 입력해 주세요.",
        messageRequired: "문의 내용을 입력해 주세요.",
        partnerTypeRequired: "제휴 유형을 선택해 주세요.",
        phoneInvalid: "연락처 형식을 확인해 주세요.",
        profileMin: "자기소개 또는 활동 분야를 10자 이상 입력해 주세요.",
        profileRequired: "자기소개 또는 활동 분야를 입력해 주세요.",
        businessTypeRequired: "업종을 선택해 주세요.",
        budgetRangeRequired: "예산 범위를 선택해 주세요.",
      },
    },
    hero: {
      description:
        "히트픽은 크리에이터 참여, 광고주 캠페인 문의, 파트너십/제휴 문의를 하나의 문의 허브에서 시작할 수 있도록 통합 구조를 제공합니다.",
      eyebrow: "통합 요청 및 문의",
      highlight: {
        description:
          "첫 화면에서 문의 목적을 고르면, 해당 유형에 맞는 폼 필드만 노출되도록 구성했습니다. 이후에는 분리된 submit handler와 API만 연결하면 실제 접수 흐름으로 확장할 수 있습니다.",
        items: [
          "크리에이터 참여 문의",
          "광고주 캠페인 문의",
          "파트너십/제휴 문의",
        ],
        label: "문의 유형 선택",
        title: "문의 목적부터 먼저 고르는 히트픽 통합 폼",
      },
      primaryAction: "문의 폼 작성하기",
      secondaryAction: "캠페인 유형 보기",
      stats: [
        { label: "문의 목적 선택", value: "3개 유형" },
        { label: "폼 검증 방식", value: "React Hook Form + Zod" },
        { label: "제출 흐름", value: "console.log + 성공 메시지" },
      ],
      title: "히트픽 통합 요청으로 문의를 시작해 보세요",
    },
    metadata: {
      description:
        "히트픽 통합 요청 및 문의 페이지입니다. 크리에이터 참여, 광고주 캠페인, 파트너십 문의를 한 곳에서 시작할 수 있습니다.",
      title: "통합 요청 및 문의",
    },
    page: {
      formDescription:
        "첫 화면에서 문의 목적을 선택하면, 해당 유형에 맞는 필드만 노출되도록 구성했습니다.",
      formEyebrow: "통합 문의 폼",
      formTitle: "문의 유형에 따라 달라지는 히트픽 통합 요청 폼",
    },
    supportCards: [
      {
        description:
          "첫 화면에서 문의 목적을 고르면, 해당 유형에 맞는 폼 필드만 노출되도록 설계했습니다.",
        title: "문의 목적별 맞춤 입력",
      },
      {
        description:
          "현재 제출 시에는 브라우저 콘솔 출력과 성공 메시지만 표시하며, 이후 API 연동이 쉽도록 핸들러를 분리해 두었습니다.",
        title: "추후 API 연동이 쉬운 구조",
      },
      {
        description:
          "히트픽은 크리에이터, 광고주, 파트너십 문의를 하나의 문의 허브에서 관리할 수 있도록 통합 구조를 제공합니다.",
        title: "하나의 문의 허브",
      },
    ],
  },
} satisfies Record<Locale, unknown>;

export function getContactPageContent(locale: Locale) {
  return contactPageContent[locale];
}
