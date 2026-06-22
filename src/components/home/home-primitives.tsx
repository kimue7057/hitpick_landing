import Link from "next/link";
import { cn } from "@/lib/utils";

type ActionLinkProps = {
  ariaLabel?: string;
  children: React.ReactNode;
  className?: string;
  href: string;
  variant?: "lime" | "primary" | "secondary";
};

type BrandMarkProps = {
  tone?: "dark" | "light";
};

const actionLinkVariants: Record<
  NonNullable<ActionLinkProps["variant"]>,
  string
> = {
  lime: "bg-[#A3FF12] text-[#101114] shadow-[0_18px_48px_rgba(163,255,18,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_56px_rgba(163,255,18,0.32)]",
  primary:
    "bg-[#1F4FFF] text-white shadow-[0_20px_52px_rgba(31,79,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_28px_60px_rgba(31,79,255,0.34)]",
  secondary:
    "border border-[#E6E8EF] bg-white text-[#101114] hover:border-[#CBD2E1] hover:bg-[#F8FAFC]",
};

export function ActionLink({
  ariaLabel,
  children,
  className,
  href,
  variant = "primary",
}: ActionLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    actionLinkVariants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRightIcon className="h-4 w-4" />
    </>
  );

  if (href.startsWith("#")) {
    return (
      <a aria-label={ariaLabel} className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classes} href={href}>
      {content}
    </Link>
  );
}

export function BrandMark({ tone = "dark" }: BrandMarkProps) {
  const isLight = tone === "light";

  return (
    <div className="flex items-center gap-3">
      <span
        className={cn(
          "font-display flex h-11 w-11 items-center justify-center rounded-full text-lg font-semibold",
          isLight ? "bg-white text-[#101114]" : "bg-[#101114] text-white",
        )}
      >
        H
      </span>
      <div>
        <p
          className={cn(
            "font-display text-lg font-semibold tracking-tight",
            isLight ? "text-white" : "text-[#101114]",
          )}
        >
          Hit<span className="text-[#1F4FFF]">pick</span>
        </p>
        <p
          className={cn(
            "text-xs font-medium tracking-[0.24em] uppercase",
            isLight ? "text-white/60" : "text-slate-500",
          )}
        >
          Creator x Brand
        </p>
      </div>
    </div>
  );
}

export function SectionHeading({
  description,
  eyebrow,
  title,
  tone = "dark",
}: {
  description: string;
  eyebrow: string;
  title: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <div className="max-w-3xl">
      <p
        className={cn(
          "text-xs font-semibold tracking-[0.24em] uppercase",
          isLight ? "text-[#A3FF12]" : "text-[#1F4FFF]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display mt-4 text-3xl font-semibold tracking-tight md:text-5xl",
          isLight ? "text-white" : "text-[#101114]",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-4 max-w-2xl text-sm leading-7 md:text-base md:leading-8",
          isLight ? "text-white/70" : "text-slate-600",
        )}
      >
        {description}
      </p>
    </div>
  );
}

export function Tag({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold",
        tone === "light"
          ? "border-white/10 bg-white/[0.06] text-white/78"
          : "border-[#E6E8EF] bg-white text-slate-600",
      )}
    >
      {children}
    </span>
  );
}

export function ScoreBar({
  className,
  label,
  tone = "blue",
  value,
}: {
  className?: string;
  label: string;
  tone?: "blue" | "lime";
  value: number;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-slate-600">{label}</span>
        <span
          className={cn(
            "text-sm font-bold",
            tone === "lime" ? "text-[#5BBA00]" : "text-[#1F4FFF]",
          )}
        >
          {value}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[#E6E8EF]">
        <div
          className={cn(
            "h-full rounded-full",
            tone === "lime"
              ? "bg-[linear-gradient(90deg,#A3FF12_0%,#2BD4A3_100%)]"
              : "bg-[linear-gradient(90deg,#1F4FFF_0%,#5B7FFF_100%)]",
          )}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function GradientAvatar({
  gradient,
  initials,
  size = "md",
}: {
  gradient: string;
  initials: string;
  size?: "lg" | "md";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]",
        size === "lg" ? "h-14 w-14" : "h-11 w-11",
      )}
      style={{ backgroundImage: gradient }}
    >
      {initials}
    </div>
  );
}

export function CheckBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#E6E8EF] bg-white px-3.5 py-1.5 text-sm font-medium text-slate-600">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#EEF3FF] text-[#1F4FFF]">
        <CheckIcon className="h-3 w-3" />
      </span>
      {children}
    </span>
  );
}

export function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m5 5 10 10M15 5 5 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m4 8.2 2.4 2.3L12 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
