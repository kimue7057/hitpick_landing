import type { Metadata } from "next";
import { CreatorsPage } from "@/components/pages/creators-page";
import { getCreatorsPageContent } from "@/content/detail-pages";

export const metadata: Metadata = getCreatorsPageContent("en").metadata;

export default function Page() {
  return <CreatorsPage locale="en" />;
}
