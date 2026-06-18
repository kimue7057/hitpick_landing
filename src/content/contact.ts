export const inquiryTypeOptions = [
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
] as const;

export const activityChannelOptions = [
  "인스타그램",
  "유튜브",
  "블로그",
  "틱톡",
  "스레드/커뮤니티",
  "기타",
];

export const interestCampaignOptions = [
  "방문 체험단",
  "제품 리뷰",
  "숏폼 콘텐츠",
  "인스타그램 리뷰",
  "블로그 리뷰",
  "유튜브 협업",
  "콘텐츠 IP 캠페인",
  "브랜드 앰배서더",
];

export const industryOptions = [
  "뷰티",
  "푸드",
  "라이프스타일",
  "패션",
  "테크",
  "교육",
  "지역 매장/오프라인",
  "기타",
];

export const budgetRangeOptions = [
  "300만원 미만",
  "300만원 ~ 1,000만원",
  "1,000만원 ~ 3,000만원",
  "3,000만원 이상",
  "미정",
];

export const partnershipTypeOptions = [
  "브랜드 제휴",
  "기관/행사 협업",
  "플랫폼/서비스 제휴",
  "미디어/콘텐츠 협업",
  "기타",
];

export const contactSupportCards = [
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
];
