import type { Metadata } from "next";
import { CampaignsPage } from "@/components/pages/campaigns-page";
import { getCampaignsPageContent } from "@/content/detail-pages";

export const metadata: Metadata = getCampaignsPageContent("en").metadata;

export default function Page() {
  return <CampaignsPage locale="en" />;
}
