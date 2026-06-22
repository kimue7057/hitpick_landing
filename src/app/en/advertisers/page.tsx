import type { Metadata } from "next";
import { AdvertisersPage } from "@/components/pages/advertisers-page";
import { getAdvertisersPageContent } from "@/content/detail-pages";

export const metadata: Metadata = getAdvertisersPageContent("en").metadata;

export default function Page() {
  return <AdvertisersPage locale="en" />;
}
