import { CampaignBoard } from "@/components/home/campaign-board";
import { CreatorNetwork } from "@/components/home/creator-network";
import { FinalCTA } from "@/components/home/final-cta";
import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { HeroSection } from "@/components/home/hero-section";
import { MatchingEngine } from "@/components/home/matching-engine";
import { SplitCTA } from "@/components/home/split-cta";
import { StatStrip } from "@/components/home/stat-strip";
import { homePlatformContent } from "@/content/home-platform";
import { type Locale } from "@/lib/locale";

export function HomePage({ locale }: { locale: Locale }) {
  const content = homePlatformContent[locale];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#F7F8FA] text-[#101114]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(31,79,255,0.16),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(163,255,18,0.12),transparent_24%),linear-gradient(180deg,#f7f8fa_0%,#f7f8fa_100%)]"
      />

      <div className="relative">
        <Header
          locale={locale}
          menuAriaLabel={content.header.menuAriaLabel}
          navigationItems={content.navigationItems}
          primaryCtaHref={content.header.primaryCtaHref}
          primaryCtaLabel={content.header.primaryCtaLabel}
          primaryCtaSrLabel={content.header.primaryCtaSrLabel}
        />

        <main>
          <HeroSection
            dashboard={content.hero.dashboard}
            hero={content.hero}
            heroCreators={content.heroCreators}
            locale={locale}
            marketTags={content.marketTags}
            matchingScores={content.matchingScores}
          />
          <StatStrip stats={content.stats} />
          <CampaignBoard
            campaigns={content.campaigns}
            copy={content.campaignBoard}
            locale={locale}
          />
          <CreatorNetwork
            copy={content.creatorNetwork}
            creators={content.creators}
            locale={locale}
          />
          <MatchingEngine
            copy={content.matchingEngine}
            locale={locale}
            marketTags={content.marketTags}
            matchingScores={content.matchingScores}
          />
          <SplitCTA items={content.splitCtas} locale={locale} />
          <FinalCTA copy={content.finalCta} locale={locale} />
        </main>

        <Footer copy={content.footer} locale={locale} />
      </div>
    </div>
  );
}
