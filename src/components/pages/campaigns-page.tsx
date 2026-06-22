import { DetailHero } from "@/components/site/detail-hero";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import {
  getCampaignTypeDetails,
  getCampaignsPageContent,
} from "@/content/detail-pages";
import { getLocalizedPath, type Locale } from "@/lib/locale";

export function CampaignsPage({ locale }: { locale: Locale }) {
  const content = getCampaignsPageContent(locale);
  const campaignTypeDetails = getCampaignTypeDetails(locale);
  const contactHref = getLocalizedPath("/contact", locale);

  return (
    <LightPageShell>
      <DetailHero
        description={content.hero.description}
        eyebrow={content.hero.eyebrow}
        highlight={content.hero.highlight}
        primaryAction={{ href: contactHref, label: content.hero.primaryAction }}
        secondaryAction={{ href: contactHref, label: content.hero.secondaryAction }}
        stats={content.hero.stats}
        title={content.hero.title}
      />

      <SectionLayout
        description={content.sections.categories.description}
        eyebrow={content.sections.categories.eyebrow}
        tone="light"
        title={content.sections.categories.title}
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
                    {content.sections.categories.useCasesLabel}
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
                    {content.sections.categories.deliverablesLabel}
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
        description={content.sections.decisionGuides.description}
        eyebrow={content.sections.decisionGuides.eyebrow}
        tone="light"
        title={content.sections.decisionGuides.title}
      >
        <StaggerGroup className="grid gap-6 lg:grid-cols-3">
          {content.decisionGuides.map((item) => (
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
