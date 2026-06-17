"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  activityChannelOptions,
  budgetRangeOptions,
  industryOptions,
  inquiryTypeOptions,
  interestCampaignOptions,
  partnershipTypeOptions,
} from "@/content/contact";
import { CTAButton } from "@/components/ui/cta-button";
import {
  contactInquirySchema,
  defaultContactInquiryValues,
  submitContactInquiry,
  type ContactInquiryValues,
} from "@/lib/contact-inquiry";
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

export function ContactInquiryForm() {
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
    resolver: zodResolver(contactInquirySchema),
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
        <p className="text-sm font-semibold text-slate-950">문의 유형 선택</p>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {inquiryTypeOptions.map((option) => {
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
            {inquiryType === "advertiser" ? "담당자 이름" : "이름"}
          </label>
          <input
            className={cn(fieldClasses, "mt-2")}
            id="contactName"
            placeholder="홍길동"
            {...register("contactName")}
          />
          <FieldError message={errors.contactName?.message} />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-950" htmlFor="phone">
            연락처
          </label>
          <input
            className={cn(fieldClasses, "mt-2")}
            id="phone"
            placeholder="010-1234-5678"
            {...register("phone")}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-950" htmlFor="email">
            이메일
          </label>
          <input
            className={cn(fieldClasses, "mt-2")}
            id="email"
            placeholder="hello@hitpick.kr"
            type="email"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </div>

        {inquiryType === "creator" ? (
          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="channelName">
              활동명/채널명
            </label>
            <input
              className={cn(fieldClasses, "mt-2")}
              id="channelName"
              placeholder="예: hitpick_creator"
              {...register("channelName")}
            />
            <FieldError message={errors.channelName?.message} />
          </div>
        ) : null}

        {inquiryType === "advertiser" ? (
          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="brandName">
              회사명/브랜드명
            </label>
            <input
              className={cn(fieldClasses, "mt-2")}
              id="brandName"
              placeholder="예: 히트픽 브랜드"
              {...register("brandName")}
            />
            <FieldError message={errors.brandName?.message} />
          </div>
        ) : null}

        {inquiryType === "partnership" ? (
          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="companyName">
              회사/기관명
            </label>
            <input
              className={cn(fieldClasses, "mt-2")}
              id="companyName"
              placeholder="예: 히트픽 파트너스"
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
                주요 활동 채널
              </label>
              <select
                className={cn(fieldClasses, "mt-2")}
                id="activityChannel"
                {...register("activityChannel")}
              >
                <option value="">선택해 주세요</option>
                {activityChannelOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FieldError message={errors.activityChannel?.message} />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-950" htmlFor="channelUrl">
                채널 URL
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
              관심 캠페인
            </label>
            <select
              className={cn(fieldClasses, "mt-2")}
              id="interestCampaign"
              {...register("interestCampaign")}
            >
              <option value="">선택해 주세요</option>
              {interestCampaignOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError message={errors.interestCampaign?.message} />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="profile">
              자기소개/활동 분야
            </label>
            <textarea
              className={cn(fieldClasses, "mt-2 min-h-40 resize-none")}
              id="profile"
              placeholder="주요 콘텐츠 주제, 활동 분야, 협업 스타일 등을 적어 주세요."
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
                업종
              </label>
              <select
                className={cn(fieldClasses, "mt-2")}
                id="businessType"
                {...register("businessType")}
              >
                <option value="">선택해 주세요</option>
                {industryOptions.map((option) => (
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
                원하는 캠페인 유형
              </label>
              <select
                className={cn(fieldClasses, "mt-2")}
                id="interestCampaign"
                {...register("interestCampaign")}
              >
                <option value="">선택해 주세요</option>
                {interestCampaignOptions.map((option) => (
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
              예산 범위
            </label>
            <select
              className={cn(fieldClasses, "mt-2")}
              id="budgetRange"
              {...register("budgetRange")}
            >
              <option value="">선택해 주세요</option>
              {budgetRangeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError message={errors.budgetRange?.message} />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="message">
              문의 내용
            </label>
            <textarea
              className={cn(fieldClasses, "mt-2 min-h-40 resize-none")}
              id="message"
              placeholder="브랜드 목표, 희망 일정, 타깃 오디언스, 요청 사항 등을 적어 주세요."
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
              제휴 유형
            </label>
            <select
              className={cn(fieldClasses, "mt-2")}
              id="partnerType"
              {...register("partnerType")}
            >
              <option value="">선택해 주세요</option>
              {partnershipTypeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError message={errors.partnerType?.message} />
          </div>

          <div>
            <label className="text-sm font-medium text-slate-950" htmlFor="message">
              문의 내용
            </label>
            <textarea
              className={cn(fieldClasses, "mt-2 min-h-40 resize-none")}
              id="message"
              placeholder="제휴 목적, 협업 방식, 기대하는 방향 등을 적어 주세요."
              {...register("message")}
            />
            <FieldError message={errors.message?.message} />
          </div>
        </>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-7 text-slate-600">
          제출 시 현재는 브라우저 콘솔에 값이 출력되고 성공 메시지가
          표시됩니다. 추후 API 연동은 분리된 submit handler에 연결하면 됩니다.
        </p>
        <CTAButton className="w-full sm:w-auto" type="submit">
          {isSubmitting ? "전송 중..." : "히트픽 문의 보내기"}
        </CTAButton>
      </div>

      {submittedType ? (
        <div className="rounded-[22px] border border-[rgba(72,211,196,0.26)] bg-[rgba(72,211,196,0.1)] px-4 py-3 text-sm text-slate-900">
          {submittedType === "creator"
            ? "크리에이터 참여 문의가 정상적으로 준비되었습니다."
            : submittedType === "advertiser"
              ? "광고주 캠페인 문의가 정상적으로 준비되었습니다."
              : "파트너십/제휴 문의가 정상적으로 준비되었습니다."}
        </div>
      ) : null}
    </form>
  );
}
