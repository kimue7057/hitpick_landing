import { DetailHero } from "@/components/site/detail-hero";
import { FAQList } from "@/components/site/faq-list";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { SectionLayout } from "@/components/ui/section-layout";
import {
  getCampaignTypeDetails,
  getCreatorsPageContent,
} from "@/content/detail-pages";
import { getLocalizedPath, type Locale } from "@/lib/locale";

export function CreatorsPage({ locale }: { locale: Locale }) {
  const content = getCreatorsPageContent(locale);
  const campaignTypeDetails = getCampaignTypeDetails(locale);
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
        description={content.sections.benefits.description}
        eyebrow={content.sections.benefits.eyebrow}
        tone="light"
        title={content.sections.benefits.title}
      >
        <StaggerGroup className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.benefits.map((item) => (
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
        description={content.sections.campaignTypes.description}
        eyebrow={content.sections.campaignTypes.eyebrow}
        tone="light"
        title={content.sections.campaignTypes.title}
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
        description={content.sections.faqs.description}
        eyebrow={content.sections.faqs.eyebrow}
        tone="light"
        title={content.sections.faqs.title}
      >
        <FAQList items={content.faqs} />
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
