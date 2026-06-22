import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  description:
    "Hitpick is a global creator matching platform connecting brands and creators through campaign discovery, creator network cards, and matching engine insights.",
  title: "Pick creators. Hit global.",
};

export default function Page() {
  return <HomePage locale="en" />;
}
