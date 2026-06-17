import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import {
  advertiserRecruitingPoints,
  campaignCategories,
  creatorRecruitingPoints,
  dummyCampaignCards,
  faqItems,
  homeAudienceCards,
  homeHeroSignals,
  homeHeroStats,
  partnershipBadges,
  processSteps,
  trustCards,
} from "@/content/home";

export const metadata: Metadata = {
  description:
    "히트픽은 리뷰, 숏폼, 방문 체험단, 콘텐츠 캠페인을 통해 브랜드와 크리에이터가 함께 성장하는 캠페인 플랫폼입니다.",
  title: "콘텐츠가 필요한 브랜드와 기회가 필요한 크리에이터를 연결합니다",
};

export default function Home() {
  return (
    <div className="relative overflow-hidden pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffdf8_0%,#f7f8fc_22%,#f5f7fb_55%,#eef4ff_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(255,122,89,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(72,211,196,0.16),transparent_22%)]"
      />
      <div
        aria-hidden
        className="absolute top-56 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(255,122,89,0.12)] blur-3xl"
      />

      <section className="pt-10 pb-10 md:pt-16 md:pb-14">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/82 p-7 shadow-[0_30px_120px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <Reveal className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-2">
                  {homeHeroSignals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {signal}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs font-semibold tracking-[0.32em] text-[#148f86] uppercase">
                  히트픽 홈
                </p>
                <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-slate-950 md:text-6xl">
                  콘텐츠가 필요한 브랜드와 기회가 필요한 크리에이터를 연결합니다
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  히트픽은 리뷰, 숏폼, 방문 체험단, 콘텐츠 캠페인을 통해
                  브랜드와 크리에이터가 함께 성장하는 캠페인 플랫폼입니다.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <CTAButton href="/contact">크리에이터로 참여하기</CTAButton>
                  <CTAButton
                    className="border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                    href="/contact"
                    variant="outline"
                  >
                    광고주 캠페인 문의하기
                  </CTAButton>
                </div>

                <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
                  {homeHeroStats.map((item) => (
                    <StaggerItem key={item.value}>
                      <div className="rounded-[24px] border border-slate-200/80 bg-slate-50/90 p-4">
                        <p className="font-display text-xl font-semibold tracking-tight text-slate-950">
                          {item.value}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.label}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-4">
                  <Card accent className="p-7" tone="light">
                    <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                      바로 선택하기
                    </p>
                    <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                      히어로에서 바로 참여 목적을 선택할 수 있도록 구성했습니다.
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      브랜드는 캠페인 문의로, 크리에이터는 참여 문의로 바로
                      이동할 수 있도록 두 개의 진입 카드를 전면에 배치했습니다.
                    </p>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                    {homeAudienceCards.map((item, index) => (
                      <Card
                        key={item.title}
                        accent={index === 0}
                        className="p-6"
                        tone="light"
                      >
                        <p className="text-xs font-semibold tracking-[0.28em] text-[#148f86] uppercase">
                          {item.eyebrow}
                        </p>
                        <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                          {index === 0
                            ? "크리에이터로 참여하기"
                            : "광고주 캠페인 문의하기"}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                        <CTAButton
                          className="mt-5 w-full justify-center"
                          href={item.href}
                        >
                          {item.cta}
                        </CTAButton>
                      </Card>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <SectionLayout
        description="홈에서 두 타깃이 스스로 맞는 진입점을 고를 수 있도록, 참여 목적을 선명하게 나눈 카드 구조를 먼저 배치했습니다."
        eyebrow="타깃 선택"
        tone="light"
        title="크리에이터와 광고주가 바로 선택할 수 있는 두 개의 카드"
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-2">
          {homeAudienceCards.map((item, index) => (
            <StaggerItem key={item.title}>
              <Card accent={index === 0} className="h-full p-7" tone="light">
                <div className="flex h-full flex-col">
                  <p className="text-xs font-semibold tracking-[0.28em] text-[#148f86] uppercase">
                    {item.eyebrow}
                  </p>
                  <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton className="mt-8 w-fit" href={item.href}>
                    {item.cta}
                  </CTAButton>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        align="center"
        description="히트픽은 다양한 콘텐츠 포맷을 하나의 캠페인 허브에서 연결할 수 있도록 설계됩니다. 홈에서는 대표 카테고리를 먼저 선명하게 보여 줍니다."
        eyebrow="캠페인 카테고리"
        tone="light"
        title="운영 가능한 캠페인 카테고리"
      >
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {campaignCategories.map((category) => (
            <StaggerItem key={category.title}>
              <Card className="h-full p-5" tone="light">
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full bg-[rgba(255,122,89,0.12)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                    {category.label}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-slate-950">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {category.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        description="히트픽의 크리에이터 모집은 단순 지원보다, 어떤 기회를 어떤 방식으로 만날 수 있는지 먼저 보여 주는 데 초점을 둡니다."
        eyebrow="크리에이터 모집"
        tone="light"
        title="기회가 필요한 크리에이터를 위한 모집 구조"
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Card accent className="h-full p-7 md:p-8" tone="light">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                크리에이터 중심 동선
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                내 채널과 맞는 협업을 더 쉽게 고를 수 있도록
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                리뷰, 숏폼, 방문 체험단, 장기 협업까지 콘텐츠 스타일에 따라
                선택지가 나뉘고, 참여 전에 핵심 브리프를 먼저 확인할 수 있는
                흐름을 기본으로 잡았습니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["리뷰", "숏폼", "방문 체험단", "장기 협업"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <CTAButton className="mt-8 w-fit" href="/contact">
                크리에이터로 참여하기
              </CTAButton>
            </Card>
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {creatorRecruitingPoints.map((item) => (
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
        </div>
      </SectionLayout>

      <SectionLayout
        description="히트픽의 광고주 모집은 모집, 진행, 후속 집행까지 생각할 수 있는 기본 프레임을 빠르게 세우는 데 목적이 있습니다."
        eyebrow="광고주 모집"
        tone="light"
        title="콘텐츠가 필요한 브랜드를 위한 캠페인 시작 구조"
      >
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {advertiserRecruitingPoints.map((item) => (
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

          <Reveal>
            <Card accent className="h-full p-7 md:p-8" tone="light">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                브랜드 중심 동선
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                브랜드 목표에 맞는 포맷부터 먼저 설계할 수 있도록
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                인지도, 후기, 방문, 반복 노출 중 어떤 목적이 필요한지부터
                정리하고, 그에 맞는 크리에이터 모집과 운영 구조를 이어 붙일 수
                있는 랜딩 흐름입니다.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["인지 확산", "리뷰 축적", "방문 유도", "장기 파트너십"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
              <CTAButton className="mt-8 w-fit" href="/contact">
                광고주 캠페인 문의하기
              </CTAButton>
            </Card>
          </Reveal>
        </div>
      </SectionLayout>

      <SectionLayout
        align="center"
        description="참여와 문의 이후 어떤 단계가 이어지는지 미리 보여 주면 전환 장벽이 크게 낮아집니다. 히트픽은 이 기본 리듬을 투명하게 보여 주는 방향으로 출발합니다."
        eyebrow="참여 및 진행 프로세스"
        tone="light"
        title="참여부터 진행까지의 기본 프로세스"
      >
        <StaggerGroup className="grid gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <StaggerItem key={item.step}>
              <Card
                accent={item.step === "1"}
                className="h-full p-6"
                tone="light"
              >
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
        description="콘텐츠 플랫폼 감각을 살리기 위해 실제 운영 전에 참고할 수 있는 더미 캠페인 카드를 메인에 배치했습니다."
        eyebrow="더미 캠페인"
        tone="light"
        title="예시로 보는 캠페인 카드 6개"
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dummyCampaignCards.map((campaign, index) => (
            <StaggerItem key={campaign.title}>
              <Card
                accent={index === 0 || index === 5}
                className="h-full p-6"
                tone="light"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[rgba(255,122,89,0.12)] px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]">
                    {campaign.badge}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {campaign.category}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {campaign.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {campaign.description}
                </p>
                <div className="mt-5 rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  {campaign.summary}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </SectionLayout>

      <SectionLayout
        align="center"
        description="브랜드와 크리에이터가 모두 안심하고 시작할 수 있도록, 히트픽은 파트너십 구조와 운영 신뢰 포인트를 함께 보여 주는 방향을 지향합니다."
        eyebrow="파트너십 및 신뢰도"
        tone="light"
        title="파트너십과 신뢰도를 만드는 기본 구조"
      >
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {partnershipBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 grid gap-6 lg:grid-cols-3">
          {trustCards.map((item) => (
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
        description="처음 랜딩을 접하는 사용자들이 가장 궁금해할 질문부터 먼저 정리했습니다."
        eyebrow="자주 묻는 질문"
        tone="light"
        title="자주 묻는 질문"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {faqItems.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <Card className="h-full p-0" tone="light">
                <details className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                    <span className="font-display text-xl font-semibold tracking-tight text-slate-950">
                      {item.question}
                    </span>
                    <span className="mt-1 text-xl font-semibold text-slate-400 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              </Card>
            </Reveal>
          ))}
        </div>
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
                  지금 히트픽에서 브랜드와 크리에이터를 연결하는 첫 문의를
                  시작해 보세요.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  크리에이터는 참여 기회를, 브랜드는 캠페인 기획의 시작점을 만들
                  수 있도록 메인 랜딩의 핵심 동선을 한 화면에 정리했습니다.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <CTAButton href="/contact">크리에이터로 참여하기</CTAButton>
                <CTAButton
                  className="border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                  href="/contact"
                  variant="outline"
                >
                  광고주 캠페인 문의하기
                </CTAButton>
              </div>
            </div>
          </Card>
        </Reveal>
      </SectionLayout>
    </div>
  );
}
