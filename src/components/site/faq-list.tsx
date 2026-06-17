import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

type FAQItem = {
  answer: string;
  question: string;
};

export function FAQList({
  items,
  tone = "light",
}: {
  items: FAQItem[];
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {items.map((item, index) => (
        <Reveal key={item.question} delay={index * 0.04}>
          <Card className="h-full p-0" tone={tone}>
            <details className="group px-6 py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                <span
                  className={
                    isLight
                      ? "font-display text-xl font-semibold tracking-tight text-slate-950"
                      : "font-display text-xl font-semibold tracking-tight text-white"
                  }
                >
                  {item.question}
                </span>
                <span
                  className={
                    isLight
                      ? "mt-1 text-xl font-semibold text-slate-400 transition group-open:rotate-45"
                      : "mt-1 text-xl font-semibold text-white/50 transition group-open:rotate-45"
                  }
                >
                  +
                </span>
              </summary>
              <p
                className={
                  isLight
                    ? "mt-4 pr-8 text-sm leading-7 text-slate-600"
                    : "mt-4 pr-8 text-sm leading-7 text-[var(--muted)]"
                }
              >
                {item.answer}
              </p>
            </details>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
