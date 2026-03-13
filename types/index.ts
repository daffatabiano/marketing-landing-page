// ============================================================
// CORE TYPE DEFINITIONS
// ============================================================

import type { ReactNode, ComponentPropsWithoutRef } from "react";

// ─── Generic Types ───────────────────────────────────────────

export type WithChildren = { children: ReactNode };
export type WithClassName = { className?: string };
export type WithChildrenAndClass = WithChildren & WithClassName;

// ─── Component Variants ──────────────────────────────────────

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export type BadgeVariant =
  | "default"
  | "brand"
  | "success"
  | "warning"
  | "error"
  | "info";

export type BadgeSize = "sm" | "md" | "lg";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type HeadingSize =
  | "display-2xl"
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "xl"
  | "lg"
  | "md"
  | "sm";

// ─── CTA Types ───────────────────────────────────────────────

export interface CTAButton {
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
}

// ─── Hero Section Types ──────────────────────────────────────

export interface HeroSectionProps {
  badge?: {
    label: string;
    variant?: BadgeVariant;
  };
  title: string;
  highlightText?: string;
  subtitle?: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  variant?: "centered" | "split" | "minimal";
  align?: "left" | "center" | "right";
}

// ─── Feature Types ───────────────────────────────────────────

export interface FeatureItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  badge?: string;
  highlight?: boolean;
}

export interface FeatureSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  layout?: "grid" | "list" | "alternating";
  columns?: 2 | 3 | 4;
}

// ─── Testimonial Types ───────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    avatar?: string;
  };
  rating?: number;
  featured?: boolean;
}

// ─── Pricing Types ───────────────────────────────────────────

export type PricingInterval = "monthly" | "yearly";

export interface PricingFeature {
  label: string;
  included: boolean;
  tooltip?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: Record<PricingInterval, number | "custom">;
  features: PricingFeature[];
  cta: CTAButton;
  highlighted?: boolean;
  badge?: string;
}

// ─── Navigation Types ────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
  children?: NavLink[];
}

export interface NavbarProps {
  logo: ReactNode;
  links: NavLink[];
  cta?: CTAButton;
  sticky?: boolean;
}

// ─── Footer Types ────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  logo: ReactNode;
  description: string;
  sections: FooterSection[];
  socials?: Array<{
    icon: ReactNode;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

// ─── Stats Types ─────────────────────────────────────────────

export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
  description?: string;
}

// ─── FAQ Types ───────────────────────────────────────────────

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// ─── Card Types ──────────────────────────────────────────────

export type CardVariant = "default" | "elevated" | "bordered" | "ghost";
export type CardSize = "sm" | "md" | "lg";

export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  variant?: CardVariant;
  size?: CardSize;
  hoverable?: boolean;
}

// ─── Section Types ───────────────────────────────────────────

export type SectionBackground = "default" | "muted" | "brand" | "dark" | "transparent";

export interface SectionProps extends WithChildrenAndClass {
  id?: string;
  background?: SectionBackground;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  container?: boolean;
}

// ─── Meta / SEO Types ────────────────────────────────────────

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    image?: string;
    type?: "website" | "article" | "product";
  };
  twitter?: {
    card?: "summary" | "summary_large_image";
    site?: string;
    creator?: string;
  };
}

// ─── Animation Variants ──────────────────────────────────────

export interface AnimationConfig {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  exit?: Record<string, unknown>;
  transition?: Record<string, unknown>;
}