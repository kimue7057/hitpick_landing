import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/contact-page";
import { getContactPageContent } from "@/content/contact";

export const metadata: Metadata = getContactPageContent("en").metadata;

export default function Page() {
  return <ContactPage locale="en" />;
}
