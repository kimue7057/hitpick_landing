import type { Metadata } from "next";
import { DetailHero } from "@/components/site/detail-hero";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import { advertisersPageContent } from "@/content/detail-pages";

export const metadata: Metadata = {
  description:
    "히트픽 광고주 모집 상세 페이지입니다. 광고주 문제, 해결 방식, 캠페인 유형, 운영 프로세스, 결과 리포트 목업을 확인할 수 있습니다.",
  title: "광고주 모집 상세",
};

export default function AdvertisersPage() {
  return (
    <LightPageShell>
      <DetailHero
        description={advertisersPageContent.hero.description}
        eyebrow={advertisersPageContent.hero.eyebrow}
        highlight={advertisersPageContent.hero.highlight}
        primaryAction={{ href: "/contact", label: "광고주 상담 신청하기" }}
        secondaryAction={advertisersPageContent.hero.secondaryAction}
        stats={advertisersPageContent.hero.stats}
        title={advertisersPageContent.hero.title}
      />

      <SectionLayout
        description="광고주는 크리에이터를 많이 보유한 플랫폼보다, 지금 어떤 문제를 어떤 구조로 해결할 수 있는지를 먼저 확인하고 싶어합니다."
        eyebrow="광고주 문제"
        tone="light"
        title="광고주가 캠페인 시작 전에 겪는 대표 문제"
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {advertisersPageContent.pains.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full" tone="light">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        description="히트픽은 이 문제를 단순 소개가 아니라 실제 운영 구조로 연결하는 데 초점을 둡니다."
        eyebrow="히트픽 해결 방식"
        tone="light"
        title="히트픽이 문제를 해결하는 방식"
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {advertisersPageContent.solutions.map((item) => (
            <StaggerItem key={item.title}>
              <Card accent className="h-full" tone="light">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        description="브랜드 목적에 따라 선택해야 하는 캠페인 유형은 달라집니다. 히트픽은 아래와 같은 기본 운영 방향을 기준으로 출발할 수 있습니다."
        eyebrow="캠페인 유형"
        tone="light"
        title="광고주가 선택할 수 있는 캠페인 운영 방향"
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advertisersPageContent.campaignTypes.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full" tone="light">
                <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        description="문의 이후 어떤 리듬으로 진행되는지 명확해야 광고주가 안심하고 다음 단계를 밟을 수 있습니다."
        eyebrow="운영 프로세스"
        tone="light"
        title="광고주 캠페인 운영 프로세스"
      >
        <StaggerGroup className="grid gap-5 lg:grid-cols-4">
          {advertisersPageContent.process.map((item) => (
            <StaggerItem key={item.step}>
              <Card accent={item.step === "1"} className="h-full p-6" tone="light">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-4xl font-semibold text-slate-950">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    단계
                  </span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        description="실제 서비스 단계에서는 더 정교한 데이터가 붙겠지만, 초기 랜딩에서도 결과 리포트가 어떤 관점으로 정리되는지는 보여 줄 수 있습니다."
        eyebrow="결과 리포트 목업"
        tone="light"
        title="광고주가 기대할 수 있는 결과 리포트 예시"
      >
        <Reveal>
          <Card accent className="p-8 md:p-10" tone="light">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                  리포트 스냅샷
                </p>
                <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  운영 이후에는 도달, 반응, 방문 유도 같은 핵심 포인트를
                  정리하는 리포트 구조로 이어질 수 있습니다.
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  아래 목업은 실제 수치가 아닌 예시이며, 어떤 지표를 중심으로
                  브랜드와 후속 액션을 논의할 수 있는지 보여 주는 목적입니다.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {advertisersPageContent.reportMetrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4"
                    >
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="font-display mt-2 text-3xl font-semibold text-slate-950">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-4">
                  {[
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
                      label: "숏폼 확산 도달 속도",
                      value: "91%",
                      width: "w-[91%]",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-100">
                        <div
                          className={`h-2 rounded-full bg-[linear-gradient(90deg,#ff8b6f_0%,#48d3c4_100%)] ${item.width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </SectionLayout>

      <SectionLayout className="pt-0" tone="light">
        <Reveal>
          <Card accent className="overflow-hidden p-8 md:p-10" tone="light">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                  마지막 안내
                </p>
                <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  지금 히트픽에 상담을 남기고 브랜드에 맞는 캠페인 구조를
                  함께 설계해 보세요.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  목표와 일정, 원하는 콘텐츠 방향만 있어도 광고주 상담 흐름을
                  시작할 수 있습니다.
                </p>
              </div>
              <CTAButton href="/contact">광고주 상담 신청하기</CTAButton>
            </div>
          </Card>
        </Reveal>
      </SectionLayout>
    </LightPageShell>
  );
}
