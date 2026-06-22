import type { CreatorItem, HomePlatformContent } from "@/content/home-platform";
import { getLocalizedPath, type Locale } from "@/lib/locale";
import {
  ActionLink,
  GradientAvatar,
  ScoreBar,
  SectionHeading,
  Tag,
} from "./home-primitives";

function CreatorCard({
  creator,
  locale,
}: {
  creator: CreatorItem;
  locale: Locale;
}) {
  const isKorean = locale === "ko";

  return (
    <article className="rounded-[28px] border border-[#E6E8EF] bg-white p-5 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <GradientAvatar
          gradient={creator.gradient}
          initials={creator.initials}
          size="lg"
        />
        <span className="rounded-full bg-[#EEF3FF] px-3 py-1.5 text-xs font-bold text-[#1F4FFF]">
          {creator.market}
        </span>
      </div>

      <p className="mt-5 text-[11px] font-semibold tracking-[0.22em] text-slate-500 uppercase">
        {creator.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-[#101114]">
        {creator.name}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{creator.summary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {creator.languages.map((language) => (
          <Tag key={language}>{language}</Tag>
        ))}
      </div>

      <ScoreBar
        className="mt-5"
        label={isKorean ? "글로벌 적합도" : "Global fit"}
        value={creator.fit}
      />

      <ActionLink
        ariaLabel={`${creator.name} creator opportunities`}
        className="mt-5"
        href={getLocalizedPath("/creators", locale)}
        variant="secondary"
      >
        {isKorean ? "크리에이터 보기" : "View creator fit"}
      </ActionLink>
    </article>
  );
}

export function CreatorNetwork({
  copy,
  creators,
  locale,
}: {
  copy: HomePlatformContent["creatorNetwork"];
  creators: CreatorItem[];
  locale: Locale;
}) {
  return (
    <section
      className="scroll-mt-24 border-y border-[#E6E8EF] bg-white"
      id="creator-network"
    >
      <div className="mx-auto max-w-7xl px-6 py-[4.5rem] lg:px-8 lg:py-24">
        <SectionHeading
          description={copy.description}
          eyebrow={copy.eyebrow}
          title={copy.title}
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {creators.map((creator) => (
            <CreatorCard creator={creator} key={creator.name} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
