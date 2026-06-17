import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type CTAButtonVariant = "solid" | "outline" | "ghost";

type CTAButtonLinkProps = {
  children: ReactNode;
  className?: string;
  external?: boolean;
  href: string;
  variant?: CTAButtonVariant;
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className" | "href"
>;

type CTAButtonNativeProps = {
  children: ReactNode;
  className?: string;
  href?: undefined;
  variant?: CTAButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonBaseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(255,122,89,0.45)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]";

const buttonVariantClasses: Record<CTAButtonVariant, string> = {
  solid:
    "bg-[linear-gradient(135deg,#ff8b6f_0%,#ff5a36_100%)] text-white shadow-[0_18px_40px_rgba(255,90,54,0.26)] hover:-translate-y-0.5 hover:shadow-[0_24px_48px_rgba(255,90,54,0.3)]",
  outline:
    "border border-white/[0.14] bg-white/[0.04] text-white hover:border-white/[0.3] hover:bg-white/[0.08]",
  ghost: "text-[var(--muted)] hover:text-white",
};

export function CTAButton(props: CTAButtonLinkProps | CTAButtonNativeProps) {
  const variant = props.variant ?? "solid";
  const className = cn(
    buttonBaseClasses,
    buttonVariantClasses[variant],
    props.className,
  );

  if ("href" in props && props.href) {
    const { children, external, href, rel, ...rest } = props;

    if (external) {
      return (
        <a
          {...rest}
          className={className}
          href={href}
          rel={rel ?? "noreferrer noopener"}
          target="_blank"
        >
          {children}
        </a>
      );
    }

    return (
      <Link {...rest} className={className} href={href}>
        {children}
      </Link>
    );
  }

  const { children, type = "button", ...rest } = props as CTAButtonNativeProps;
  const buttonType: NonNullable<
    ButtonHTMLAttributes<HTMLButtonElement>["type"]
  > = type;

  return (
    <button {...rest} className={className} type={buttonType}>
      {children}
    </button>
  );
}
