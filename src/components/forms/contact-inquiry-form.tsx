"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { CTAButton } from "@/components/ui/cta-button";
import { getContactPageContent } from "@/content/contact";
import {
  createContactInquirySchema,
  defaultContactInquiryValues,
  submitContactInquiry,
  type ContactInquiryValues,
} from "@/lib/contact-inquiry";
import { type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[rgba(255,122,89,0.45)] focus:bg-white";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-xs text-[var(--accent-strong)]">{message}</p>;
}

function InquiryTypeLabel({
  selected,
  title,
}: {
  selected: boolean;
  title: string;
}) {
  return (
    <span
      className={cn(
        "block text-sm font-semibold",
        selected ? "text-slate-950" : "text-slate-700",
      )}
    >
      {title}
    </span>
  );
}

export function ContactInquiryForm({ locale }: { locale: Locale }) {
  const formContent = getContactPageContent(locale).form;
  const [submittedType, setSubmittedType] = useState<
    ContactInquiryValues["inquiryType"] | null
  >(null);

  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactInquiryValues>({
    defaultValues: defaultContactInquiryValues,
    resolver: zodResolver(createContactInquirySchema(formContent.validation)),
    shouldUnregister: true,
  });

  const inquiryType =
    useWatch({
      control,
      name: "inquiryType",
    }) ?? "creator";

  const onSubmit = async (values: ContactInquiryValues) => {
    const result = await submitContactInquiry(values);

    startTransition(() => {
      setSubmittedType(result.type);
    });

    reset({
      ...defaultContactInquiryValues,
      inquiryType: values.inquiryType,
    });
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-sm font-semibold text-slate-950">
          {formContent.inquiryTypeLabel}
        </p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {formContent.inquiryTypeOptions.map((option) => {
            const selected = inquiryType === option.value;

            return (
              <label
                key={option.value}
                className={cn(
                  "cursor-pointer rounded-[24px] border px-5 py-5 transition",
                  selected
                    ? "border-[rgba(255,122,89,0.35)] bg-[rgba(255,122,89,0.1)] shadow-[0_18px_50px_rgba(255,122,89,0.08)]"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
                )}
              >
                <input
                  className="sr-only"
                  type="radio"
                  value={option.value}
                  {...register("inquiryType")}
                />
                <InquiryTypeLabel selected={selected} title={option.title} />
                <span className="mt-2 block text-sm leading-7 text-slate-600">
                  {option.description}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-950" htmlFor="contactName">
            {inquiryType === "advertiser"
              ? formContent.contactNameAdvertiserLabel
              : formContent.contactNameLabel}
          </label>
          <input
            className={cn(fieldClasses, "mt-2")}
            id="contactName"
            placeholder={formContent.contactNamePlaceholder}
            {...register("contactName")}
          />
          <FieldError message={errors.contactName?.message} />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-950" htmlFor="phone">
            {formContent.phoneLabel}
          </label>
          <input
            className={cn(fieldClasses, "mt-2")}
            id="phone"
            placeholder={formContent.phonePlaceholder}
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-950" htmlFor="email">
            {formContent.emailLabel}
          </label>
          <input
            className={cn(fieldClasses, "mt-2")}
            id="email"
            placeholder={formContent.emailPlaceholder}
            type="email"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        {inquiryType === "creator" ? (
          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="channelName">
              {formContent.channelNameLabel}
            </label>
            <input
              className={cn(fieldClasses, "mt-2")}
              id="channelName"
              placeholder={formContent.channelNamePlaceholder}
              {...register("channelName")}
            />
            <FieldError message={errors.channelName?.message} />
          </div>
        ) : null}

        {inquiryType === "advertiser" ? (
          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="brandName">
              {formContent.brandNameLabel}
            </label>
            <input
              className={cn(fieldClasses, "mt-2")}
              id="brandName"
              placeholder={formContent.brandNamePlaceholder}
              {...register("brandName")}
            />
            <FieldError message={errors.brandName?.message} />
          </div>
        ) : null}

        {inquiryType === "partnership" ? (
          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="companyName">
              {formContent.companyNameLabel}
            </label>
            <input
              className={cn(fieldClasses, "mt-2")}
              id="companyName"
              placeholder={formContent.companyNamePlaceholder}
              {...register("companyName")}
            />
            <FieldError message={errors.companyName?.message} />
          </div>
        ) : null}
      </div>

      {inquiryType === "creator" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                className="text-sm font-medium text-slate-950"
                htmlFor="activityChannel"
              >
                {formContent.activityChannelLabel}
              </label>
              <select
                className={cn(fieldClasses, "mt-2")}
                id="activityChannel"
                {...register("activityChannel")}
              >
                <option value="">{formContent.selectPlaceholder}</option>
                {formContent.activityChannelOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FieldError message={errors.activityChannel?.message} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-950" htmlFor="channelUrl">
                {formContent.channelUrlLabel}
              </label>
              <input
                className={cn(fieldClasses, "mt-2")}
                id="channelUrl"
                placeholder="https://..."
                {...register("channelUrl")}
              />
              <FieldError message={errors.channelUrl?.message} />
            </div>
          </div>

          <div>
            <label
              className="text-sm font-medium text-slate-950"
              htmlFor="interestCampaign"
            >
              {formContent.interestCampaignLabelCreator}
            </label>
            <select
              className={cn(fieldClasses, "mt-2")}
              id="interestCampaign"
              {...register("interestCampaign")}
            >
              <option value="">{formContent.selectPlaceholder}</option>
              {formContent.interestCampaignOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError message={errors.interestCampaign?.message} />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="profile">
              {formContent.creatorProfileLabel}
            </label>
            <textarea
              className={cn(fieldClasses, "mt-2 min-h-40 resize-none")}
              id="profile"
              placeholder={formContent.creatorProfilePlaceholder}
              {...register("profile")}
            />
            <FieldError message={errors.profile?.message} />
          </div>
        </>
      ) : null}

      {inquiryType === "advertiser" ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-950" htmlFor="businessType">
                {formContent.industryLabel}
              </label>
              <select
                className={cn(fieldClasses, "mt-2")}
                id="businessType"
                {...register("businessType")}
              >
                <option value="">{formContent.selectPlaceholder}</option>
                {formContent.industryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FieldError message={errors.businessType?.message} />
            </div>

            <div>
              <label
                className="text-sm font-medium text-slate-950"
                htmlFor="interestCampaign"
              >
                {formContent.interestCampaignLabelAdvertiser}
              </label>
              <select
                className={cn(fieldClasses, "mt-2")}
                id="interestCampaign"
                {...register("interestCampaign")}
              >
                <option value="">{formContent.selectPlaceholder}</option>
                {formContent.interestCampaignOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FieldError message={errors.interestCampaign?.message} />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="budgetRange">
              {formContent.budgetRangeLabel}
            </label>
            <select
              className={cn(fieldClasses, "mt-2")}
              id="budgetRange"
              {...register("budgetRange")}
            >
              <option value="">{formContent.selectPlaceholder}</option>
              {formContent.budgetRangeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError message={errors.budgetRange?.message} />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="message">
              {formContent.advertiserMessageLabel}
            </label>
            <textarea
              className={cn(fieldClasses, "mt-2 min-h-40 resize-none")}
              id="message"
              placeholder={formContent.advertiserMessagePlaceholder}
              {...register("message")}
            />
            <FieldError message={errors.message?.message} />
          </div>
        </>
      ) : null}

      {inquiryType === "partnership" ? (
        <>
          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="partnerType">
              {formContent.partnerTypeLabel}
            </label>
            <select
              className={cn(fieldClasses, "mt-2")}
              id="partnerType"
              {...register("partnerType")}
            >
              <option value="">{formContent.selectPlaceholder}</option>
              {formContent.partnerTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError message={errors.partnerType?.message} />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="message">
              {formContent.partnershipMessageLabel}
            </label>
            <textarea
              className={cn(fieldClasses, "mt-2 min-h-40 resize-none")}
              id="message"
              placeholder={formContent.partnershipMessagePlaceholder}
              {...register("message")}
            />
            <FieldError message={errors.message?.message} />
          </div>
        </>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          {formContent.helperText}
        </p>
        <CTAButton className="w-full sm:w-auto" type="submit">
          {isSubmitting ? formContent.submitPending : formContent.submitIdle}
        </CTAButton>
      </div>

      {submittedType ? (
        <div className="rounded-[22px] border border-[rgba(72,211,196,0.26)] bg-[rgba(72,211,196,0.1)] px-4 py-3 text-sm text-slate-900">
          {submittedType === "creator"
            ? formContent.successCreator
            : submittedType === "advertiser"
              ? formContent.successAdvertiser
              : formContent.successPartnership}
        </div>
      ) : null}
    </form>
  );
}
