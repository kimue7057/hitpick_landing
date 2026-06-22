import { ContactInquiryForm } from "@/components/forms/contact-inquiry-form";
import { DetailHero } from "@/components/site/detail-hero";
import { LightPageShell } from "@/components/site/light-page-shell";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { getContactPageContent } from "@/content/contact";
import { getLocalizedPath, type Locale } from "@/lib/locale";

export function ContactPage({ locale }: { locale: Locale }) {
  const content = getContactPageContent(locale);
  const campaignsHref = getLocalizedPath("/campaigns", locale);

  return (
    <LightPageShell>
      <DetailHero
        description={content.hero.description}
        eyebrow={content.hero.eyebrow}
        highlight={content.hero.highlight}
        primaryAction={{ href: "#contact-form", label: content.hero.primaryAction }}
        secondaryAction={{
          href: campaignsHref,
          label: content.hero.secondaryAction,
        }}
        stats={content.hero.stats}
        title={content.hero.title}
      />

      <section className="pb-20">
        <div
          className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8"
          id="contact-form"
        >
          <Card accent className="p-0" tone="light">
            <div className="border-b border-slate-200 px-6 py-6 md:px-8">
              <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                {content.page.formEyebrow}
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {content.page.formTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {content.page.formDescription}
              </p>
            </div>
            <div className="px-6 py-6 md:px-8">
              <ContactInquiryForm locale={locale} />
            </div>
          </Card>

          <div className="space-y-6">
            {content.supportCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="h-full" tone="light">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </LightPageShell>
  );
}
