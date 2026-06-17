import type { Metadata } from "next";
import { DetailHero } from "@/components/site/detail-hero";
import { FAQList } from "@/components/site/faq-list";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import {
  campaignTypeDetails,
  creatorsPageContent,
} from "@/content/detail-pages";

export const metadata: Metadata = {
  description:
    "히트픽 크리에이터 모집 상세 페이지입니다. 혜택, 참여 가능한 캠페인, 참여 프로세스, 자주 묻는 질문을 확인하고 등록을 시작할 수 있습니다.",
  title: "크리에이터 모집 상세",
};

export default function CreatorsPage() {
  return (
    <LightPageShell>
      <DetailHero
        description={creatorsPageContent.hero.description}
        eyebrow={creatorsPageContent.hero.eyebrow}
        highlight={creatorsPageContent.hero.highlight}
        primaryAction={{ href: "/contact", label: "크리에이터 등록하기" }}
        secondaryAction={creatorsPageContent.hero.secondaryAction}
        stats={creatorsPageContent.hero.stats}
        title={creatorsPageContent.hero.title}
      />

      <SectionLayout
        description="히트픽은 단순히 지원을 받는 구조보다, 크리에이터가 왜 참여해야 하는지와 어떤 방식으로 협업을 이어갈 수 있는지를 함께 설명하는 데 집중합니다."
        eyebrow="크리에이터 혜택"
        tone="light"
        title="크리에이터가 히트픽에서 기대할 수 있는 혜택"
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {creatorsPageContent.benefits.map((item) => (
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
        description="히트픽은 채널 성격과 캠페인 목적에 따라 다양한 포맷으로 참여 기회를 열어 둡니다. 아래는 크리에이터가 참여할 수 있는 대표 유형입니다."
        eyebrow="참여 가능한 캠페인"
        tone="light"
        title="크리에이터가 참여할 수 있는 주요 캠페인"
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {campaignTypeDetails.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full p-5" tone="light">
                <span className="rounded-full bg-[rgba(255,122,89,0.12)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                  {item.label}
                </span>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-slate-950">
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
        description="등록 이후 어떤 단계가 이어지는지 미리 이해하면 참여 장벽이 훨씬 낮아집니다. 히트픽은 이 흐름을 명확하게 안내하는 구조를 지향합니다."
        eyebrow="참여 프로세스"
        tone="light"
        title="크리에이터 참여 프로세스"
      >
        <StaggerGroup className="grid gap-5 lg:grid-cols-4">
          {creatorsPageContent.process.map((item) => (
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
        description="크리에이터들이 가장 자주 궁금해하는 질문을 먼저 정리했습니다."
        eyebrow="자주 묻는 질문"
        tone="light"
        title="크리에이터 모집 자주 묻는 질문"
      >
        <FAQList items={creatorsPageContent.faqs} />
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
                  지금 히트픽에 크리에이터로 등록하고, 채널에 맞는 협업
                  기회를 시작해 보세요.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  기본 정보와 관심 캠페인을 남기면, 히트픽이 다음 단계의 참여
                  흐름을 이어갈 수 있도록 준비된 구조입니다.
                </p>
              </div>
              <CTAButton href="/contact">크리에이터 등록하기</CTAButton>
            </div>
          </Card>
        </Reveal>
      </SectionLayout>
    </LightPageShell>
  );
}
