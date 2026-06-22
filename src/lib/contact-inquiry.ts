import { z } from "zod";

const phoneRegex = /^[0-9+\-\s()]{8,20}$/;

export const inquiryTypeSchema = z.enum([
  "creator",
  "advertiser",
  "partnership",
]);

type ContactInquiryValidationMessages = {
  activityChannelRequired: string;
  brandNameRequired: string;
  budgetRangeRequired: string;
  businessTypeRequired: string;
  channelNameRequired: string;
  channelUrlInvalid: string;
  channelUrlRequired: string;
  companyNameRequired: string;
  contactNameMin: string;
  emailInvalid: string;
  interestCampaignRequired: string;
  messageMin: string;
  messageRequired: string;
  partnerTypeRequired: string;
  phoneInvalid: string;
  profileMin: string;
  profileRequired: string;
};

export function createContactInquirySchema(
  messages: ContactInquiryValidationMessages,
) {
  return z
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
          messages.channelUrlInvalid,
        ),
      companyName: z.string().trim().optional(),
      contactName: z.string().trim().min(2, messages.contactNameMin),
      email: z.string().trim().email(messages.emailInvalid),
      inquiryType: inquiryTypeSchema,
      interestCampaign: z.string().trim().optional(),
      message: z.string().trim().optional(),
      partnerType: z.string().trim().optional(),
      phone: z.string().trim().regex(phoneRegex, messages.phoneInvalid),
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
        requireField(true, "channelName", messages.channelNameRequired);
        requireField(true, "activityChannel", messages.activityChannelRequired);
        requireField(true, "channelUrl", messages.channelUrlRequired);
        requireField(true, "interestCampaign", messages.interestCampaignRequired);
        requireField(true, "profile", messages.profileRequired);
      }

      if (values.inquiryType === "advertiser") {
        requireField(true, "brandName", messages.brandNameRequired);
        requireField(true, "businessType", messages.businessTypeRequired);
        requireField(true, "interestCampaign", messages.interestCampaignRequired);
        requireField(true, "budgetRange", messages.budgetRangeRequired);
        requireField(true, "message", messages.messageRequired);
      }

      if (values.inquiryType === "partnership") {
        requireField(true, "companyName", messages.companyNameRequired);
        requireField(true, "partnerType", messages.partnerTypeRequired);
        requireField(true, "message", messages.messageRequired);
      }

      if (
        values.profile &&
        values.profile.trim().length > 0 &&
        values.profile.trim().length < 10
      ) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: messages.profileMin,
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
          message: messages.messageMin,
          path: ["message"],
        });
      }
    });
}

export type ContactInquiryValues = z.infer<
  ReturnType<typeof createContactInquirySchema>
>;

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
