import type { HomePlatformContent } from "@/content/home-platform";
import { getLocalizedPath, type Locale } from "@/lib/locale";
import { ActionLink } from "./home-primitives";

export function FinalCTA({
  copy,
  locale,
}: {
  copy: HomePlatformContent["finalCta"];
  locale: Locale;
}) {
  return (
    <section className="bg-[#101114] px-6 py-24 text-center md:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-4xl leading-[1.02] font-semibold tracking-tight text-white md:text-6xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">
          {copy.description}
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ActionLink
            ariaLabel={copy.primaryLabel}
            href={getLocalizedPath(copy.primaryHref, locale)}
          >
            {copy.primaryLabel}
          </ActionLink>
          <ActionLink
            ariaLabel={copy.secondaryLabel}
            href={getLocalizedPath(copy.secondaryHref, locale)}
            variant="lime"
          >
            {copy.secondaryLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
