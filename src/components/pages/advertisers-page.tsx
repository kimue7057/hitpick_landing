import { DetailHero } from "@/components/site/detail-hero";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import { getAdvertisersPageContent } from "@/content/detail-pages";
import { getLocalizedPath, type Locale } from "@/lib/locale";

export function AdvertisersPage({ locale }: { locale: Locale }) {
  const content = getAdvertisersPageContent(locale);
  const contactHref = getLocalizedPath("/contact", locale);
  const campaignsHref = getLocalizedPath("/campaigns", locale);

  return (
    <LightPageShell>
      <DetailHero
        description={content.hero.description}
        eyebrow={content.hero.eyebrow}
        highlight={content.hero.highlight}
        primaryAction={{ href: contactHref, label: content.hero.primaryAction }}
        secondaryAction={{
          href: campaignsHref,
          label: content.hero.secondaryAction,
        }}
        stats={content.hero.stats}
        title={content.hero.title}
      />

      <SectionLayout
        description={content.sections.pains.description}
        eyebrow={content.sections.pains.eyebrow}
        tone="light"
        title={content.sections.pains.title}
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {content.pains.map((item) => (
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
        description={content.sections.solutions.description}
        eyebrow={content.sections.solutions.eyebrow}
        tone="light"
        title={content.sections.solutions.title}
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {content.solutions.map((item) => (
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
        description={content.sections.campaignTypes.description}
        eyebrow={content.sections.campaignTypes.eyebrow}
        tone="light"
        title={content.sections.campaignTypes.title}
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.campaignTypes.map((item) => (
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
        description={content.sections.process.description}
        eyebrow={content.sections.process.eyebrow}
        tone="light"
        title={content.sections.process.title}
      >
        <StaggerGroup className="grid gap-5 lg:grid-cols-4">
          {content.process.map((item) => (
            <StaggerItem key={item.step}>
              <Card accent={item.step === "1"} className="h-full p-6" tone="light">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-4xl font-semibold text-slate-950">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {content.sections.process.stepLabel}
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
        description={content.reportSection.description}
        eyebrow={content.reportSection.eyebrow}
        tone="light"
        title={content.reportSection.title}
      >
        <Reveal>
          <Card accent className="p-8 md:p-10" tone="light">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                  {content.reportSection.cardEyebrow}
                </p>
                <h3 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {content.reportSection.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {content.reportSection.summary}
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  {content.reportMetrics.map((item) => (
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
                  {content.reportBars.map((item) => (
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
                  {content.finalCta.eyebrow}
                </p>
                <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                  {content.finalCta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  {content.finalCta.description}
                </p>
              </div>
              <CTAButton href={contactHref}>{content.finalCta.label}</CTAButton>
            </div>
          </Card>
        </Reveal>
      </SectionLayout>
    </LightPageShell>
  );
}
