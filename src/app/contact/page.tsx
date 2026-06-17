import type { Metadata } from "next";
import { ContactInquiryForm } from "@/components/forms/contact-inquiry-form";
import { DetailHero } from "@/components/site/detail-hero";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { contactSupportCards } from "@/content/contact";

export const metadata: Metadata = {
  description:
    "히트픽 통합 신청 및 문의 페이지입니다. 크리에이터 참여, 광고주 캠페인 문의, 파트너십/제휴 문의를 한 화면에서 선택하고 접수할 수 있습니다.",
  title: "통합 신청 및 문의",
};

export default function ContactPage() {
  return (
    <LightPageShell>
      <DetailHero
        description="히트픽은 크리에이터 참여, 광고주 캠페인 문의, 파트너십/제휴 문의를 하나의 문의 허브에서 시작할 수 있도록 통합 신청 구조를 제공합니다."
        eyebrow="통합 신청 및 문의"
        highlight={{
          description:
            "첫 화면에서 문의 목적을 고르면 해당 유형에 맞는 입력 항목만 보이도록 구성했습니다. 이후에는 분리된 submit handler에 API만 연결하면 실제 접수 흐름으로 확장할 수 있습니다.",
          items: [
            "크리에이터 참여 문의",
            "광고주 캠페인 문의",
            "파트너십/제휴 문의",
          ],
          label: "문의 유형 선택",
          title: "문의 목적부터 먼저 고르는 히트픽 통합 폼",
        }}
        primaryAction={{ href: "#contact-form", label: "문의 폼 작성하기" }}
        secondaryAction={{ href: "/campaigns", label: "캠페인 유형 보기" }}
        stats={[
          { label: "문의 목적 선택", value: "3개 유형" },
          { label: "폼 검증 방식", value: "React Hook Form + Zod" },
          { label: "제출 흐름", value: "console.log + 성공 메시지" },
        ]}
        title="히트픽 통합 신청 폼으로 문의를 시작하세요"
      />

      <section className="pb-20">
        <div
          className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
          id="contact-form"
        >
          <Card accent className="p-0" tone="light">
            <div className="border-b border-slate-200 px-6 py-6 md:px-8">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                통합 문의 폼
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                문의 유형에 따라 달라지는 히트픽 통합 신청 폼
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                첫 화면에서 문의 목적을 선택하면, 해당 유형에 맞는 필드만
                노출되도록 구성했습니다.
              </p>
            </div>
            <div className="px-6 py-6 md:px-8">
              <ContactInquiryForm />
            </div>
          </Card>

          <div className="space-y-6">
            {contactSupportCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="h-full" tone="light">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </LightPageShell>
  );
}
