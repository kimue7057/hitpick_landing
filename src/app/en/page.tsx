import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";
import { getHomePageContent } from "@/content/home";

export const metadata: Metadata = getHomePageContent("en").metadata;

export default function Page() {
  return <HomePage locale="en" />;
}
