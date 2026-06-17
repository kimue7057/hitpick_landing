import { CTAButton } from "@/components/ui/cta-button";
import { Card } from "@/components/ui/card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";

type DetailHeroProps = {
  description: string;
  eyebrow: string;
  primaryAction: {
    href: string;
    label: string;
  };
  secondaryAction?: {
    href: string;
    label: string;
  };
  stats: Array<{
    label: string;
    value: string;
  }>;
  title: string;
  highlight: {
    description: string;
    items: string[];
    label: string;
    title: string;
  };
};

export function DetailHero({
  description,
  eyebrow,
  highlight,
  primaryAction,
  secondaryAction,
  stats,
  title,
}: DetailHeroProps) {
  return (
    <section className="pt-10 pb-10 md:pt-16 md:pb-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] border border-white/70 bg-white/82 p-7 shadow-[0_30px_120px_rgba(15,23,42,0.08)] backdrop-blur md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.32em] text-[#148f86] uppercase">
                {eyebrow}
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-slate-950 md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <CTAButton href={primaryAction.href}>
                  {primaryAction.label}
                </CTAButton>
                {secondaryAction ? (
                  <CTAButton
                    className="border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                    href={secondaryAction.href}
                    variant="outline"
                  >
                    {secondaryAction.label}
                  </CTAButton>
                ) : null}
              </div>

              <StaggerGroup className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
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
              <Card accent className="h-full p-7 md:p-8" tone="light">
                <p className="text-xs font-semibold tracking-[0.3em] text-[#148f86] uppercase">
                  {highlight.label}
                </p>
                <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  {highlight.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {highlight.description}
                </p>
                <div className="mt-6 space-y-3">
                  {highlight.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-slate-200 bg-white px-4 py-3 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
