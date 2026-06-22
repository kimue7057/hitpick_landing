import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";

export const metadata: Metadata = {
  description:
    "Hitpick은 글로벌 시장을 목표로 하는 브랜드와 크리에이터를 연결하는 매칭 플랫폼입니다. 캠페인, 크리에이터 네트워크, 매칭 엔진을 한 화면에서 확인할 수 있습니다.",
  title: "Pick creators. Hit global.",
};

export default function Page() {
  return <HomePage locale="ko" />;
}
