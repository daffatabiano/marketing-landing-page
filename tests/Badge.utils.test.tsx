import React from "react";
import { render, screen } from "@testing-library/react";
import { Badge } from "@/components/ui/Badge";
import { cn, slugify, formatCompact, clamp } from "@/utils/cn";

// ─── Badge Tests ─────────────────────────────────────────────

describe("Badge Component", () => {
  it("renders children correctly", () => {
    render(<Badge>Beta</Badge>);
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("applies default variant classes", () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText("Default")).toHaveClass("bg-surface-800");
  });

  it("applies brand variant classes", () => {
    render(<Badge variant="brand">Brand</Badge>);
    expect(screen.getByText("Brand")).toHaveClass("text-brand-400");
  });

  it("applies success variant classes", () => {
    render(<Badge variant="success">Success</Badge>);
    expect(screen.getByText("Success")).toHaveClass("text-emerald-400");
  });

  it("applies warning variant classes", () => {
    render(<Badge variant="warning">Warning</Badge>);
    expect(screen.getByText("Warning")).toHaveClass("text-amber-400");
  });

  it("applies error variant classes", () => {
    render(<Badge variant="error">Error</Badge>);
    expect(screen.getByText("Error")).toHaveClass("text-red-400");
  });

  it("applies sm size classes", () => {
    render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small")).toHaveClass("text-xs");
  });

  it("applies lg size classes", () => {
    render(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toHaveClass("text-sm");
  });

  it("renders dot indicator when dot=true", () => {
    render(<Badge dot variant="brand">With Dot</Badge>);
    const badge = screen.getByText("With Dot").closest("span");
    // The dot span is a sibling inside the badge
    const spans = badge?.querySelectorAll("span");
    expect(spans?.length).toBeGreaterThan(0);
  });

  it("does NOT render dot when dot=false (default)", () => {
    render(<Badge variant="brand">No Dot</Badge>);
    const badge = screen.getByText("No Dot").closest("span");
    const innerSpans = badge?.querySelectorAll("span");
    expect(innerSpans?.length ?? 0).toBe(0);
  });

  it("merges custom className", () => {
    render(<Badge className="test-custom">Custom</Badge>);
    expect(screen.getByText("Custom")).toHaveClass("test-custom");
  });

  it("forwards HTML span props", () => {
    render(<Badge data-testid="my-badge">Props</Badge>);
    expect(screen.getByTestId("my-badge")).toBeInTheDocument();
  });
});

// ─── cn() Utility Tests ──────────────────────────────────────

describe("cn() utility", () => {
  it("merges class strings", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("handles conditional classes with objects", () => {
    expect(cn("base", { active: true, disabled: false })).toBe("base active");
  });

  it("resolves Tailwind conflicts (last wins)", () => {
    // tailwind-merge: p-2 should override p-4
    expect(cn("p-4", "p-2")).toBe("p-2");
  });

  it("handles undefined and null gracefully", () => {
    expect(cn("a", undefined, null, "b")).toBe("a b");
  });

  it("handles arrays of classes", () => {
    expect(cn(["a", "b"], "c")).toBe("a b c");
  });

  it("returns empty string for no args", () => {
    expect(cn()).toBe("");
  });
});

// ─── slugify() Tests ─────────────────────────────────────────

describe("slugify() utility", () => {
  it("converts to lowercase", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("replaces spaces with hyphens", () => {
    expect(slugify("foo bar baz")).toBe("foo-bar-baz");
  });

  it("removes special characters", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  it("collapses multiple hyphens", () => {
    expect(slugify("foo  bar   baz")).toBe("foo-bar-baz");
  });

  it("handles empty string", () => {
    expect(slugify("")).toBe("");
  });
});

// ─── formatCompact() Tests ───────────────────────────────────

describe("formatCompact() utility", () => {
  it("formats thousands with K", () => {
    expect(formatCompact(1000)).toBe("1K");
  });

  it("formats millions with M", () => {
    expect(formatCompact(1_000_000)).toBe("1M");
  });

  it("formats numbers under 1000 as-is", () => {
    expect(formatCompact(999)).toBe("999");
  });

  it("handles 1500 as 1.5K", () => {
    expect(formatCompact(1500)).toBe("1.5K");
  });
});

// ─── clamp() Tests ───────────────────────────────────────────

describe("clamp() utility", () => {
  it("returns value when within range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("clamps to min when below range", () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it("clamps to max when above range", () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it("handles equal min and max", () => {
    expect(clamp(5, 3, 3)).toBe(3);
  });
});