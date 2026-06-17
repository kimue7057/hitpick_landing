import type { Metadata } from "next";
import { DetailHero } from "@/components/site/detail-hero";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import {
  campaignTypeDetails,
  campaignsPageContent,
} from "@/content/detail-pages";

export const metadata: Metadata = {
  description:
    "히트픽 캠페인 유형 소개 페이지입니다. 방문 체험단부터 브랜드 앰배서더까지 8개 대표 유형을 확인할 수 있습니다.",
  title: "캠페인 유형 소개",
};

export default function CampaignsPage() {
  return (
    <LightPageShell>
      <DetailHero
        description={campaignsPageContent.hero.description}
        eyebrow={campaignsPageContent.hero.eyebrow}
        highlight={campaignsPageContent.hero.highlight}
        primaryAction={{ href: "/contact", label: "캠페인 문의하기" }}
        secondaryAction={campaignsPageContent.hero.secondaryAction}
        stats={campaignsPageContent.hero.stats}
        title={campaignsPageContent.hero.title}
      />

      <SectionLayout
        description="브랜드 목표와 크리에이터 활동 방식에 따라 적합한 캠페인 유형은 달라집니다. 히트픽은 아래 8개 대표 유형을 기본 축으로 소개합니다."
        eyebrow="캠페인 유형"
        tone="light"
        title="히트픽 대표 캠페인 유형 8가지"
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {campaignTypeDetails.map((item, index) => (
            <StaggerItem key={item.title}>
              <Card
                accent={index === 0 || index === 7}
                className="h-full p-5"
                tone="light"
              >
                <span className="rounded-full bg-[rgba(255,122,89,0.12)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                  {item.label}
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <div className="mt-5">
                  <p className="text-xs font-semibold tracking-[0.24em] text-slate-400 uppercase">
                    추천 상황
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.useCases.map((useCase) => (
                      <span
                        key={useCase}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-semibold tracking-[0.24em] text-slate-400 uppercase">
                    대표 산출물
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {item.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#148f86]" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        description="브랜드의 목표가 다르면 선택해야 하는 캠페인 방향도 달라집니다. 어떤 상황에 어떤 포맷이 더 적합한지 아래 가이드를 참고할 수 있습니다."
        eyebrow="선택 가이드"
        tone="light"
        title="어떤 상황에 어떤 캠페인을 고르면 좋을까요?"
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {campaignsPageContent.decisionGuides.map((item) => (
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

      <SectionLayout className="pt-0" tone="light">
        <Reveal>
          <Card accent className="overflow-hidden p-8 md:p-10" tone="light">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                  마지막 안내
                </p>
                <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  지금 히트픽에 문의하고, 브랜드에 맞는 캠페인 유형부터 함께
                  정리해 보세요.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  목표와 예산, 원하는 포맷만 있어도 어떤 유형이 적합한지
                  상담을 시작할 수 있습니다.
                </p>
              </div>
              <CTAButton href="/contact">캠페인 문의하기</CTAButton>
            </div>
          </Card>
        </Reveal>
      </SectionLayout>
    </LightPageShell>
  );
}
