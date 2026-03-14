import type { Metadata } from "next";

interface SiteConfigSocials {
  readonly twitter: string;
  readonly github: string;
  readonly linkedin: string;
}

interface SiteConfigBase {
  readonly name: string;
  readonly tagline: string;
  readonly description: string;
  readonly url: string;
  readonly ogImage: string;
  readonly creator: string;
  readonly socials: SiteConfigSocials;
}

export interface SiteConfig extends SiteConfigBase {
  keywords: string[];
  authors: Array<{ name: string; url: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Marketing Landing",
  tagline: "Ship Faster. Scale Smarter.",
  description:
    "Velox is the all-in-one developer platform that transforms the way teams build, deploy, and scale modern applications — with blazing speed and zero friction.",
  url: "https://dafportabs.vercel.app",
  ogImage: "https://dafportabs.vercel.app/og-image.png",
  keywords: [
    "developer platform",
    "deployment",
    "CI/CD",
    "cloud infrastructure",
    "DevOps",
    "SaaS",
    "Next.js",
    "TypeScript",
    "scalable",
    "performance",
  ],
  authors: [{ name: "Daffa Tabiano", url: "https://dafportabs.vercel.app" }],
  creator: "@daffatabiano",
  socials: {
    twitter: "https://twitter.com/daffatabiano",
    github: "https://github.com/daffatabiano",
    linkedin: "https://linkedin.com/in/daffatabiano",
  },
};