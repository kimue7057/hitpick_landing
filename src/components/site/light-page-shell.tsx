import type { ReactNode } from "react";

export function LightPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffdf8_0%,#f7f8fc_22%,#f5f7fb_55%,#eef4ff_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(255,122,89,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(72,211,196,0.16),transparent_22%)]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-56 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(255,122,89,0.12)] blur-3xl"
      />
      {children}
    </div>
  );
}
