import type { StatItem } from "@/content/home-platform";

export function StatStrip({ stats }: { stats: StatItem[] }) {
  return (
    <section className="border-y border-[#E6E8EF] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <article
              className="rounded-[24px] border border-[#E6E8EF] bg-[#F7F8FA] px-5 py-6 text-center md:border-transparent md:bg-transparent"
              key={stat.label}
            >
              <p className="font-display text-4xl font-semibold tracking-tight text-[#101114] md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-600">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
