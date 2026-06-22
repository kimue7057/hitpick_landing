import type {
  HomePlatformContent,
  SplitCtaItem,
} from "@/content/home-platform";
import { getLocalizedPath, type Locale } from "@/lib/locale";
import { ActionLink } from "./home-primitives";

function SplitCtaCard({ cta, locale }: { cta: SplitCtaItem; locale: Locale }) {
  const isCreator = cta.variant === "creator";

  return (
    <article
      className={
        isCreator
          ? "rounded-[32px] bg-[#101114] p-8 text-white shadow-[0_26px_72px_rgba(0,0,0,0.22)] md:p-10"
          : "rounded-[32px] border border-[#D4DCFF] bg-[#EEF3FF] p-8 shadow-[0_22px_60px_rgba(31,79,255,0.08)] md:p-10"
      }
    >
      <span
        className={
          isCreator
            ? "inline-flex rounded-full bg-[#A3FF12] px-3 py-1.5 text-xs font-black tracking-[0.18em] text-[#101114] uppercase"
            : "inline-flex rounded-full bg-[#1F4FFF] px-3 py-1.5 text-xs font-black tracking-[0.18em] text-white uppercase"
        }
      >
        {cta.audience}
      </span>

      <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        {cta.title}
      </h2>
      <p
        className={
          isCreator
            ? "mt-4 max-w-lg text-base leading-8 text-white/70"
            : "mt-4 max-w-lg text-base leading-8 text-slate-600"
        }
      >
        {cta.description}
      </p>

      <ActionLink
        ariaLabel={cta.buttonLabel}
        className="mt-8"
        href={getLocalizedPath(cta.href, locale)}
        variant={isCreator ? "lime" : "primary"}
      >
        {cta.buttonLabel}
      </ActionLink>
    </article>
  );
}

export function SplitCTA({
  items,
  locale,
}: {
  items: HomePlatformContent["splitCtas"];
  locale: Locale;
}) {
  return (
    <section className="border-y border-[#E6E8EF] bg-[#F7F8FA]" id="split-cta">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-[4.5rem] lg:px-8 lg:py-24 xl:grid-cols-2">
        {items.map((item) => (
          <SplitCtaCard cta={item} key={item.audience} locale={locale} />
        ))}
      </div>
    </section>
  );
}
