import type {
  HeroCreatorItem,
  HomePlatformContent,
  MatchingScoreItem,
} from "@/content/home-platform";
import { getLocalizedPath, type Locale } from "@/lib/locale";
import {
  ActionLink,
  CheckBadge,
  GradientAvatar,
  ScoreBar,
  Tag,
} from "./home-primitives";

type HeroSectionProps = {
  dashboard: HomePlatformContent["hero"]["dashboard"];
  hero: HomePlatformContent["hero"];
  heroCreators: HeroCreatorItem[];
  locale: Locale;
  marketTags: string[];
  matchingScores: MatchingScoreItem[];
};

const networkCities = [
  { name: "Seoul", x: 68, y: 38 },
  { name: "Tokyo", x: 83, y: 34 },
  { name: "Bangkok", x: 66, y: 58 },
  { name: "Singapore", x: 70, y: 67 },
  { name: "LA", x: 14, y: 38 },
];

const networkEdges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 3],
  [2, 3],
] as const;

function HeroCreatorCard({
  creator,
  index,
  locale,
}: {
  creator: HeroCreatorItem;
  index: number;
  locale: Locale;
}) {
  const isKorean = locale === "ko";

  return (
    <article className="rounded-2xl border border-[#E6E8EF] bg-[#F7F8FA] p-3">
      <div className="flex items-start justify-between gap-3">
        <GradientAvatar
          gradient={creator.gradient}
          initials={creator.initials}
        />
        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#1F4FFF]">
          Fit {creator.fit}%
        </span>
      </div>
      <p className="mt-3 text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
        {index === 0
          ? isKorean
            ? "대표 크리에이터"
            : "Hero creator"
          : isKorean
            ? "크리에이터 카드"
            : "Creator card"}
      </p>
      <p className="mt-1 text-sm font-semibold text-[#101114]">
        {creator.name}
      </p>
      <p className="mt-1 text-xs text-slate-500">{creator.marketRoute}</p>
      <p className="mt-2 text-xs font-medium text-slate-600">{creator.role}</p>
    </article>
  );
}

function NetworkPulse() {
  return (
    <div className="relative h-[88px] overflow-hidden rounded-2xl border border-[#D4DCFF] bg-[#F0F4FF]">
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 75"
      >
        {networkEdges.map(([start, end]) => (
          <line
            key={`${start}-${end}`}
            stroke="#1F4FFF"
            strokeDasharray="2,2"
            strokeOpacity="0.25"
            strokeWidth="0.45"
            x1={networkCities[start].x}
            x2={networkCities[end].x}
            y1={networkCities[start].y}
            y2={networkCities[end].y}
          />
        ))}
        {networkCities.map((city) => (
          <g key={city.name}>
            <circle
              cx={city.x}
              cy={city.y}
              fill="#1F4FFF"
              opacity="0.14"
              r="2.7"
            />
            <circle
              cx={city.x}
              cy={city.y}
              fill="#1F4FFF"
              opacity="0.92"
              r="1.2"
            />
          </g>
        ))}
      </svg>
      <div className="absolute right-2 bottom-2 left-2 flex flex-wrap gap-1.5">
        {networkCities.map((city) => (
          <span
            className="rounded-full border border-[#D8E0FF] bg-white px-2 py-1 text-[10px] font-semibold text-[#1F4FFF]"
            key={city.name}
          >
            {city.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HeroSection({
  dashboard,
  hero,
  heroCreators,
  locale,
  marketTags,
  matchingScores,
}: HeroSectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-14 pb-[4.5rem] lg:px-8 lg:pt-20 lg:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,496px)] lg:gap-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF3FF] px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#1F4FFF]" />
            <span className="text-xs font-bold tracking-[0.16em] text-[#1F4FFF] uppercase">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-display mt-7 text-5xl leading-[0.96] font-semibold tracking-tight text-[#101114] md:text-7xl">
            {hero.titleLines.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink
              ariaLabel={hero.primaryCtaLabel}
              href={getLocalizedPath(hero.primaryCtaHref, locale)}
            >
              {hero.primaryCtaLabel}
            </ActionLink>
            <ActionLink
              ariaLabel={hero.secondaryCtaLabel}
              href={getLocalizedPath(hero.secondaryCtaHref, locale)}
              variant="secondary"
            >
              {hero.secondaryCtaLabel}
            </ActionLink>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {hero.supportingTags.map((tag) => (
              <CheckBadge key={tag}>{tag}</CheckBadge>
            ))}
          </div>
        </div>

        <div className="relative rounded-[32px] border border-[#E6E8EF] bg-white p-5 shadow-[0_24px_64px_rgba(31,79,255,0.1),0_4px_16px_rgba(0,0,0,0.05)] md:p-6">
          <div className="absolute -top-3 -right-3 rounded-full bg-[#A3FF12] px-3 py-1 text-[10px] font-black tracking-[0.18em] text-[#101114] uppercase shadow-[0_12px_28px_rgba(163,255,18,0.3)]">
            {dashboard.liveBadge}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                {dashboard.panelEyebrow}
              </p>
              <p className="mt-1 text-lg font-semibold text-[#101114] md:text-xl">
                {dashboard.panelTitle}
              </p>
            </div>
            <span className="rounded-full bg-[#EEF3FF] px-3 py-1.5 text-xs font-semibold text-[#1F4FFF]">
              {dashboard.campaignMatchLabel}
            </span>
          </div>

          <div className="mt-5 rounded-[24px] border border-[#E6E8EF] bg-[#F7F8FA] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  {dashboard.campaignLabel}
                </p>
                <h2 className="mt-2 text-base font-bold text-[#101114]">
                  {dashboard.campaignTitle}
                </h2>
              </div>
              <span className="rounded-full bg-[#EEF3FF] px-2.5 py-1 text-[11px] font-bold text-[#1F4FFF]">
                {dashboard.campaignStatus}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {dashboard.campaignTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#DDE3F1]">
                <div className="h-full w-[94%] rounded-full bg-[#1F4FFF]" />
              </div>
              <span className="text-xs font-bold text-[#1F4FFF]">
                {dashboard.campaignMatchLabel}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                {dashboard.creatorCardsLabel}
              </p>
              <p className="text-xs font-medium text-slate-500">
                {locale === "ko"
                  ? `${heroCreators.length}명의 추천 후보`
                  : `${heroCreators.length} creators surfaced`}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {heroCreators.map((creator, index) => (
                <HeroCreatorCard
                  creator={creator}
                  index={index}
                  key={creator.name}
                  locale={locale}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[24px] border border-[#D4DCFF] bg-[#F0F4FF] p-4">
            <p className="text-sm font-bold text-[#101114]">
              {dashboard.matchingScoreLabel}
            </p>
            <div className="mt-4 space-y-3">
              {matchingScores.map((score, index) => (
                <ScoreBar
                  key={score.label}
                  label={score.label}
                  tone={index === matchingScores.length - 1 ? "lime" : "blue"}
                  value={score.value}
                />
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                {dashboard.marketLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {marketTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
                {dashboard.networkLabel}
              </p>
              <NetworkPulse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
