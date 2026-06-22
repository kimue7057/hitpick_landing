# Hitpick Landing

Hitpick is a global creator matching platform that connects brands aiming for international growth with creators who fit each market, audience, and content style.

This repository contains the Next.js landing and platform-style homepage for Hitpick. The current homepage was refactored from a Figma Make output into a production-ready React + TypeScript + Tailwind structure while preserving the original visual direction.

## Local Preview

- Main local URL: [http://localhost:3000](http://localhost:3000)
- Alternate local URL sometimes running in parallel: [http://localhost:3001](http://localhost:3001)

## Homepage Structure

The homepage is organized into these sections:

- `Header`
- `HeroSection`
- `StatStrip`
- `CampaignBoard`
- `CreatorNetwork`
- `MatchingEngine`
- `SplitCTA`
- `FinalCTA`
- `Footer`

## Key Files

- `src/components/pages/home-page.tsx`
- `src/components/home/`
- `src/content/home-platform.ts`
- `src/components/layout/root-layout-shell.tsx`

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Run Locally

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Open:

```bash
http://localhost:3000
```

## Validation Commands

```bash
pnpm exec tsc --noEmit
pnpm exec eslint src/app/layout.tsx src/app/page.tsx src/app/en/page.tsx src/components/layout/root-layout-shell.tsx src/components/pages/home-page.tsx src/components/home src/content/home-platform.ts
pnpm build:next
```

Note:

- `pnpm exec eslint .` may fail because of an existing lint issue in `.open-next/cloudflare/init.js` that is unrelated to the homepage refactor.

## Continue On Another Computer

Clone the repository, move to the current working branch, install dependencies, and run the project:

```bash
git clone https://github.com/kimue7057/hitpick_landing.git
cd hitpick_landing
git checkout feature/hitpick-campaign-landing-preview
pnpm install
pnpm dev
```

If the branch is not available remotely yet, push it first from the current computer:

```bash
git checkout feature/hitpick-campaign-landing-preview
git add .
git commit -m "Refactor Hitpick homepage"
git push -u origin feature/hitpick-campaign-landing-preview
```

Then on the other computer:

```bash
git clone https://github.com/kimue7057/hitpick_landing.git
cd hitpick_landing
git fetch origin
git checkout feature/hitpick-campaign-landing-preview
pnpm install
pnpm dev
```

## Design Direction

The homepage keeps the platform-first visual tone from the Figma Make draft:

- premium SaaS feel
- blue and lime accents
- dashboard-style hero
- campaign cards
- creator cards
- matching score UI
- global market tags
- responsive layout for desktop, tablet, and mobile
