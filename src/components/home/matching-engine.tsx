import type {
  HomePlatformContent,
  MatchingScoreItem,
} from "@/content/home-platform";
import { type Locale } from "@/lib/locale";
import { ActionLink, ScoreBar, SectionHeading, Tag } from "./home-primitives";

export function MatchingEngine({
  copy,
  locale,
  marketTags,
  matchingScores,
}: {
  copy: HomePlatformContent["matchingEngine"];
  locale: Locale;
  marketTags: string[];
  matchingScores: MatchingScoreItem[];
}) {
  const isKorean = locale === "ko";
  const overallScore = Math.round(
    matchingScores.reduce((total, item) => total + item.value, 0) /
      matchingScores.length,
  );

  return (
    <section
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-[4.5rem] lg:px-8 lg:py-24"
      id="matching-engine"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <div>
          <SectionHeading
            description={copy.description}
            eyebrow={copy.eyebrow}
            title={copy.title}
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {marketTags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600">
            {copy.helper}
          </p>

          <ActionLink
            ariaLabel="Explore matching engine details"
            className="mt-8"
            href="#split-cta"
          >
            {isKorean ? "매칭 흐름 보기" : "Explore the matching flow"}
          </ActionLink>
        </div>

        <div className="rounded-[32px] border border-[#E6E8EF] bg-[#F7F8FA] p-6 shadow-[0_22px_56px_rgba(15,23,42,0.06)] md:p-8">
          <div className="rounded-[24px] border border-[#D4DCFF] bg-[#EEF3FF] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  {copy.panelLabel}
                </p>
                <p className="mt-1 text-lg font-semibold text-[#101114]">
                  {isKorean
                    ? "크리에이터 추천 로직"
                    : "Creator recommendation logic"}
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-[#1F4FFF]">
                {isKorean
                  ? `종합 ${overallScore}%`
                  : `Overall ${overallScore}%`}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {marketTags.slice(0, 4).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {matchingScores.map((score, index) => (
              <ScoreBar
                key={score.label}
                label={score.label}
                tone={index === matchingScores.length - 1 ? "lime" : "blue"}
                value={score.value}
              />
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-[22px] border border-[#E6E8EF] bg-white p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                {isKorean ? "시장" : "Market"}
              </p>
              <p className="mt-3 text-base font-semibold text-[#101114]">
                {isKorean
                  ? "시장 경로 기반 크리에이터 소싱"
                  : "Route-based creator sourcing"}
              </p>
            </article>
            <article className="rounded-[22px] border border-[#E6E8EF] bg-white p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                {isKorean ? "오디언스" : "Audience"}
              </p>
              <p className="mt-3 text-base font-semibold text-[#101114]">
                {isKorean
                  ? "언어와 니치 정합성"
                  : "Language and niche alignment"}
              </p>
            </article>
            <article className="rounded-[22px] border border-[#E6E8EF] bg-white p-4">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                {isKorean ? "콘텐츠" : "Content"}
              </p>
              <p className="mt-3 text-base font-semibold text-[#101114]">
                {isKorean
                  ? "숏폼 포맷 적합성"
                  : "Short-form format compatibility"}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
