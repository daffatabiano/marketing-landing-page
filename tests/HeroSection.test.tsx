import React from "react";
import { render, screen } from "@testing-library/react";
import { HeroSection } from "@/components/sections/HeroSection";
import type { HeroSectionProps } from "@/types";

// ─── Default props fixture ───────────────────────────────────

const defaultProps: HeroSectionProps = {
  title: "Ship Faster. Scale Smarter.",
  highlightText: "Scale Smarter.",
  description: "The platform that transforms how teams build and deploy applications.",
  primaryCTA: { label: "Start for free", href: "/signup" },
};

describe("HeroSection Component", () => {
  // ─── Core content ────────────────────────────────────────────

  it("renders the section with aria-label", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByRole("region", { name: /hero/i })).toBeInTheDocument();
  });

  it("renders the title text", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders primary CTA button with correct label", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByRole("link", { name: /start for free/i })).toBeInTheDocument();
  });

  it("primary CTA links to correct href", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.getByRole("link", { name: /start for free/i })).toHaveAttribute("href", "/signup");
  });

  // ─── Optional props ──────────────────────────────────────────

  it("renders badge when badge prop is provided", () => {
    render(<HeroSection {...defaultProps} badge={{ label: "Now in beta", variant: "brand" }} />);
    expect(screen.getByText("Now in beta")).toBeInTheDocument();
  });

  it("does NOT render badge when badge prop is omitted", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.queryByText("Now in beta")).not.toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(<HeroSection {...defaultProps} subtitle="The platform your team will love." />);
    expect(screen.getByText("The platform your team will love.")).toBeInTheDocument();
  });

  it("does NOT render subtitle when omitted", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.queryByText(/your team will love/i)).not.toBeInTheDocument();
  });

  it("renders secondary CTA when provided", () => {
    render(
      <HeroSection
        {...defaultProps}
        secondaryCTA={{ label: "View demo", href: "/demo" }}
      />
    );
    expect(screen.getByRole("link", { name: /view demo/i })).toBeInTheDocument();
  });

  it("does NOT render secondary CTA when omitted", () => {
    render(<HeroSection {...defaultProps} />);
    expect(screen.queryByRole("link", { name: /view demo/i })).not.toBeInTheDocument();
  });

  it("secondary CTA links to correct href", () => {
    render(
      <HeroSection
        {...defaultProps}
        secondaryCTA={{ label: "View demo", href: "/demo" }}
      />
    );
    expect(screen.getByRole("link", { name: /view demo/i })).toHaveAttribute("href", "/demo");
  });

  // ─── Highlighted text ────────────────────────────────────────

  it("renders highlighted text as a styled span", () => {
    render(<HeroSection {...defaultProps} />);
    const heading = screen.getByRole("heading", { level: 1 });
    // The inner span carries text-brand-400; the outer wrapper is "relative inline-block"
    const highlight = heading.querySelector("span.text-brand-400");
    expect(highlight).toBeInTheDocument();
    expect(highlight).toHaveClass("text-brand-400");
    expect(highlight?.textContent).toContain("Scale Smarter.");
  });

  it("renders title without highlight span when highlightText is omitted", () => {
    const { highlightText: _ht, ...noHighlight } = defaultProps;
    render(<HeroSection {...noHighlight} />);
    const heading = screen.getByRole("heading", { level: 1 });
    // Should not have colored span when no highlightText
    const brandSpan = heading.querySelector(".text-brand-400");
    expect(brandSpan).not.toBeInTheDocument();
  });

  // ─── Variants ────────────────────────────────────────────────

  it("renders centered variant (default) without error", () => {
    render(<HeroSection {...defaultProps} variant="centered" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders split variant without error", () => {
    render(<HeroSection {...defaultProps} variant="split" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders minimal variant without error", () => {
    render(<HeroSection {...defaultProps} variant="minimal" />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  // ─── Dashboard mockup ────────────────────────────────────────

  it("renders the dashboard mockup in centered variant", () => {
    render(<HeroSection {...defaultProps} variant="centered" />);
    // Mockup contains deploy activity text
    expect(screen.getByText("Deploy Activity")).toBeInTheDocument();
  });

  // ─── Accessibility ───────────────────────────────────────────

  it("scroll indicator is aria-hidden", () => {
    render(<HeroSection {...defaultProps} />);
    // Background/decorative elements should be aria-hidden
    const ariaHidden = document.querySelectorAll('[aria-hidden="true"]');
    expect(ariaHidden.length).toBeGreaterThan(0);
  });

  it("external CTA opens in new tab", () => {
    render(
      <HeroSection
        {...defaultProps}
        primaryCTA={{ label: "Docs", href: "https://docs.velox.dev", external: true }}
      />
    );
    expect(screen.getByRole("link", { name: /docs/i })).toHaveAttribute("target", "_blank");
  });
});