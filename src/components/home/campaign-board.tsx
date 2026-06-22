import type {
  CampaignItem,
  HomePlatformContent,
} from "@/content/home-platform";
import { getLocalizedPath, type Locale } from "@/lib/locale";
import { ActionLink, SectionHeading, Tag } from "./home-primitives";

const statusToneClasses: Record<CampaignItem["statusTone"], string> = {
  amber: "bg-[#FFF5E8] text-[#D97706]",
  blue: "bg-[#EEF3FF] text-[#1F4FFF]",
  lime: "bg-[#F2FFE0] text-[#3F8C00]",
};

function CampaignCard({
  campaign,
  locale,
}: {
  campaign: CampaignItem;
  locale: Locale;
}) {
  const isKorean = locale === "ko";

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-[#E6E8EF] bg-white p-6 shadow-[0_18px_48px_rgba(15,23,42,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[#101114]">
            {campaign.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Tag>{campaign.target}</Tag>
            <Tag>{campaign.category}</Tag>
          </div>
        </div>
        <span
          className={`rounded-full px-3 py-1.5 text-xs font-bold ${statusToneClasses[campaign.statusTone]}`}
        >
          {campaign.status}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 rounded-[22px] bg-[#F7F8FA] p-4">
        <div>
          <p className="text-xs font-medium text-slate-500">
            {isKorean ? "필요 크리에이터" : "Creators needed"}
          </p>
          <p className="font-display mt-2 text-4xl font-semibold tracking-tight text-[#101114]">
            {campaign.creatorsNeeded}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-slate-500">
            {isKorean ? "매칭 점수" : "Match score"}
          </p>
          <p className="font-display mt-2 text-4xl font-semibold tracking-tight text-[#1F4FFF]">
            {campaign.match}%
          </p>
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#E6E8EF]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#1F4FFF_0%,#5B7FFF_100%)]"
          style={{ width: `${campaign.match}%` }}
        />
      </div>

      <ActionLink
        ariaLabel={`${campaign.title} campaign details`}
        className="mt-6"
        href={getLocalizedPath("/campaigns", locale)}
        variant="secondary"
      >
        {isKorean ? "캠페인 보기" : "View campaign"}
      </ActionLink>
    </article>
  );
}

export function CampaignBoard({
  campaigns,
  copy,
  locale,
}: {
  campaigns: CampaignItem[];
  copy: HomePlatformContent["campaignBoard"];
  locale: Locale;
}) {
  return (
    <section
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-[4.5rem] lg:px-8 lg:py-24"
      id="campaign-board"
    >
      <SectionHeading
        description={copy.description}
        eyebrow={copy.eyebrow}
        title={copy.title}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {campaigns.map((campaign) => (
          <CampaignCard
            campaign={campaign}
            key={campaign.title}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
