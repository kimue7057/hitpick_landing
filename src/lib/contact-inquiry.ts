import { z } from "zod";

const phoneRegex = /^[0-9+\-\s()]{8,20}$/;

export const inquiryTypeSchema = z.enum([
  "creator",
  "advertiser",
  "partnership",
]);

export const contactInquirySchema = z
  .object({
    activityChannel: z.string().trim().optional(),
    brandName: z.string().trim().optional(),
    budgetRange: z.string().trim().optional(),
    businessType: z.string().trim().optional(),
    channelName: z.string().trim().optional(),
    channelUrl: z
      .string()
      .trim()
      .optional()
      .refine(
        (value) =>
          !value || value.length === 0 || /^https?:\/\/.+/.test(value),
        "채널 URL은 http:// 또는 https://로 시작해 주세요.",
      ),
    companyName: z.string().trim().optional(),
    contactName: z.string().trim().min(2, "이름을 2자 이상 입력해 주세요."),
    email: z
      .string()
      .trim()
      .email("이메일 형식을 확인해 주세요."),
    inquiryType: inquiryTypeSchema,
    interestCampaign: z.string().trim().optional(),
    message: z.string().trim().optional(),
    partnerType: z.string().trim().optional(),
    phone: z
      .string()
      .trim()
      .regex(phoneRegex, "연락처 형식을 확인해 주세요."),
    profile: z.string().trim().optional(),
  })
  .superRefine((values, context) => {
    const requireField = (
      condition: boolean,
      path: keyof typeof values,
      message: string,
    ) => {
      const value = values[path];

      if (
        condition &&
        (typeof value !== "string" || value.trim().length === 0)
      ) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message,
          path: [path],
        });
      }
    };

    if (values.inquiryType === "creator") {
      requireField(true, "channelName", "활동명 또는 채널명을 입력해 주세요.");
      requireField(true, "activityChannel", "주요 활동 채널을 선택해 주세요.");
      requireField(true, "channelUrl", "채널 URL을 입력해 주세요.");
      requireField(true, "interestCampaign", "관심 캠페인을 선택해 주세요.");
      requireField(true, "profile", "자기소개 또는 활동 분야를 입력해 주세요.");
    }

    if (values.inquiryType === "advertiser") {
      requireField(true, "brandName", "회사명 또는 브랜드명을 입력해 주세요.");
      requireField(true, "businessType", "업종을 선택해 주세요.");
      requireField(true, "interestCampaign", "원하는 캠페인 유형을 선택해 주세요.");
      requireField(true, "budgetRange", "예산 범위를 선택해 주세요.");
      requireField(true, "message", "문의 내용을 입력해 주세요.");
    }

    if (values.inquiryType === "partnership") {
      requireField(true, "companyName", "회사 또는 기관명을 입력해 주세요.");
      requireField(true, "partnerType", "제휴 유형을 선택해 주세요.");
      requireField(true, "message", "문의 내용을 입력해 주세요.");
    }

    if (
      values.profile &&
      values.profile.trim().length > 0 &&
      values.profile.trim().length < 10
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "자기소개 또는 활동 분야를 10자 이상 입력해 주세요.",
        path: ["profile"],
      });
    }

    if (
      values.message &&
      values.message.trim().length > 0 &&
      values.message.trim().length < 10
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "문의 내용을 10자 이상 입력해 주세요.",
        path: ["message"],
      });
    }
  });

export type ContactInquiryValues = z.infer<typeof contactInquirySchema>;

export const defaultContactInquiryValues: ContactInquiryValues = {
  activityChannel: "",
  brandName: "",
  budgetRange: "",
  businessType: "",
  channelName: "",
  channelUrl: "",
  companyName: "",
  contactName: "",
  email: "",
  inquiryType: "creator",
  interestCampaign: "",
  message: "",
  partnerType: "",
  phone: "",
  profile: "",
};

export async function submitContactInquiry(values: ContactInquiryValues) {
  console.log("Hitpick contact inquiry submitted", values);

  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return {
    success: true,
    type: values.inquiryType,
  } as const;
}
