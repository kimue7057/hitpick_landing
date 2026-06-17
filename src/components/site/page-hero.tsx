import { CTAButton } from "@/components/ui/cta-button";
import { Card } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

type HeroAction = {
  href: string;
  label: string;
};

type HeroStat = {
  label: string;
  value: string;
};

type HeroPanel = {
  description: string;
  items: Array<{
    description: string;
    title: string;
  }>;
  label: string;
  title: string;
};

type PageHeroProps = {
  description: string;
  eyebrow: string;
  panel: HeroPanel;
  primaryAction: HeroAction;
  secondaryAction?: HeroAction;
  stats: HeroStat[];
  title: string;
};

export function PageHero({
  description,
  eyebrow,
  panel,
  primaryAction,
  secondaryAction,
  stats,
  title,
}: PageHeroProps) {
  return (
    <section className="pt-10 pb-8 md:pt-14 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal className="flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-[0.32em] text-[var(--accent-secondary)] uppercase">
            {eyebrow}
          </p>
          <h1 className="font-display mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href={primaryAction.href}>
              {primaryAction.label}
            </CTAButton>
            {secondaryAction ? (
              <CTAButton href={secondaryAction.href} variant="outline">
                {secondaryAction.label}
              </CTAButton>
            ) : null}
          </div>

          <StaggerGroup className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((item) => (
              <StaggerItem key={item.label}>
                <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                  <p className="font-display text-2xl font-semibold tracking-tight text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {item.label}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal delay={0.08}>
          <Card accent className="h-full p-7 md:p-8">
            <p className="text-xs font-semibold tracking-[0.28em] text-[var(--accent-secondary)] uppercase">
              {panel.label}
            </p>
            <h2 className="font-display mt-4 text-2xl font-semibold tracking-tight text-white">
              {panel.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              {panel.description}
            </p>

            <div className="mt-6 space-y-4">
              {panel.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-black/[0.15] p-4"
                >
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
