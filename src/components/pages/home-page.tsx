import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import { getHomePageContent } from "@/content/home";
import { getLocalizedPath, type Locale } from "@/lib/locale";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getHomePageContent(locale);
  const contactHref = getLocalizedPath("/contact", locale);

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
                  {content.hero.signals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {signal}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs font-semibold tracking-[0.32em] text-[#148f86] uppercase">
                  {content.hero.eyebrow}
                </p>
                <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-slate-950 md:text-6xl">
                  {content.hero.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                  {content.hero.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <CTAButton href={contactHref}>{content.hero.ctaPrimary}</CTAButton>
                  <CTAButton
                    className="border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                    href={contactHref}
                    variant="outline"
                  >
                    {content.hero.ctaSecondary}
                  </CTAButton>
                </div>

                <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
                  {content.hero.stats.map((item) => (
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
                      {content.hero.selectionCard.eyebrow}
                    </p>
                    <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                      {content.hero.selectionCard.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {content.hero.selectionCard.description}
                    </p>
                  </Card>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
                    {content.audienceCards.map((item, index) => (
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
                          {item.heroTitle}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                        <CTAButton
                          className="mt-5 w-full justify-center"
                          href={getLocalizedPath(item.href, locale)}
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
        description={content.audienceSection.description}
        eyebrow={content.audienceSection.eyebrow}
        tone="light"
        title={content.audienceSection.title}
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-2">
          {content.audienceCards.map((item, index) => (
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
                  <CTAButton
                    className="mt-8 w-fit"
                    href={getLocalizedPath(item.href, locale)}
                  >
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
        description={content.campaignCategorySection.description}
        eyebrow={content.campaignCategorySection.eyebrow}
        tone="light"
        title={content.campaignCategorySection.title}
      >
        <StaggerGroup className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {content.campaignCategories.map((category) => (
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
        description={content.creatorSection.description}
        eyebrow={content.creatorSection.eyebrow}
        tone="light"
        title={content.creatorSection.title}
      >
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <Card accent className="h-full p-7 md:p-8" tone="light">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                {content.creatorSection.highlightEyebrow}
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {content.creatorSection.highlightTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {content.creatorSection.highlightDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {content.creatorSection.chips.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <CTAButton className="mt-8 w-fit" href={contactHref}>
                {content.creatorSection.cta}
              </CTAButton>
            </Card>
          </Reveal>

          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {content.creatorRecruitingPoints.map((item) => (
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
        description={content.advertiserSection.description}
        eyebrow={content.advertiserSection.eyebrow}
        tone="light"
        title={content.advertiserSection.title}
      >
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            {content.advertiserRecruitingPoints.map((item) => (
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
                {content.advertiserSection.highlightEyebrow}
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {content.advertiserSection.highlightTitle}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {content.advertiserSection.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.advertiserSection.goalChips.map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <CTAButton className="mt-8 w-fit" href={contactHref}>
                {content.advertiserSection.cta}
              </CTAButton>
            </Card>
          </Reveal>
        </div>
      </SectionLayout>

      <SectionLayout
        align="center"
        description={content.processSection.description}
        eyebrow={content.processSection.eyebrow}
        tone="light"
        title={content.processSection.title}
      >
        <StaggerGroup className="grid gap-5 lg:grid-cols-4">
          {content.processSteps.map((item) => (
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
                    {content.processSection.stepLabel}
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
        description={content.exampleCampaignSection.description}
        eyebrow={content.exampleCampaignSection.eyebrow}
        tone="light"
        title={content.exampleCampaignSection.title}
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {content.sampleCampaigns.map((campaign, index) => (
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
        description={content.trustSection.description}
        eyebrow={content.trustSection.eyebrow}
        tone="light"
        title={content.trustSection.title}
      >
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {content.partnershipBadges.map((badge) => (
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
          {content.trustCards.map((item) => (
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
        description={content.faqSection.description}
        eyebrow={content.faqSection.eyebrow}
        tone="light"
        title={content.faqSection.title}
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {content.faqSection.items.map((item, index) => (
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
                  {content.finalCta.eyebrow}
                </p>
                <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  {content.finalCta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {content.finalCta.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <CTAButton href={contactHref}>{content.finalCta.primaryCta}</CTAButton>
                <CTAButton
                  className="border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                  href={contactHref}
                  variant="outline"
                >
                  {content.finalCta.secondaryCta}
                </CTAButton>
              </div>
            </div>
          </Card>
        </Reveal>
      </SectionLayout>
    </div>
  );
}
