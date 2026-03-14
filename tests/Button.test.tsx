import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "@/components/ui/Button";

describe("Button Component", () => {
  // ─── Rendering ──────────────────────────────────────────────

  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("renders with primary variant classes by default", () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-brand-500");
  });

  it("renders secondary variant with correct styles", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-surface-800");
  });

  it("renders danger variant", () => {
    render(<Button variant="danger">Danger</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-600");
  });

  // ─── Sizes ──────────────────────────────────────────────────

  it("applies sm size class", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-8");
  });

  it("applies lg size class", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-12");
  });

  it("applies xl size class", () => {
    render(<Button size="xl">Extra Large</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-14");
  });

  // ─── Width ──────────────────────────────────────────────────

  it("adds w-full when fullWidth is true", () => {
    render(<Button fullWidth>Full</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it("does NOT add w-full by default", () => {
    render(<Button>Normal</Button>);
    expect(screen.getByRole("button")).not.toHaveClass("w-full");
  });

  // ─── Disabled / Loading ─────────────────────────────────────

  it("is disabled when disabled prop passed", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is disabled while loading and shows spinner", () => {
    render(<Button loading>Loading</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toBeDisabled();
    expect(btn.querySelector("svg.animate-spin")).toBeInTheDocument();
  });

  it("hides leftIcon while loading", () => {
    render(<Button loading leftIcon={<span data-testid="icon">←</span>}>Go</Button>);
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });

  // ─── Icons ──────────────────────────────────────────────────

  it("renders leftIcon when not loading", () => {
    render(<Button leftIcon={<span data-testid="left">←</span>}>Go</Button>);
    expect(screen.getByTestId("left")).toBeInTheDocument();
  });

  it("renders rightIcon when not loading", () => {
    render(<Button rightIcon={<span data-testid="right">→</span>}>Go</Button>);
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  // ─── Interactions ───────────────────────────────────────────

  it("fires onClick handler on click", () => {
    const handler = jest.fn();
    render(<Button onClick={handler}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("does NOT fire onClick when disabled", () => {
    const handler = jest.fn();
    render(<Button disabled onClick={handler}>Click</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).not.toHaveBeenCalled();
  });

  // ─── Misc ────────────────────────────────────────────────────

  it("merges custom className", () => {
    render(<Button className="my-custom">Styled</Button>);
    expect(screen.getByRole("button")).toHaveClass("my-custom");
  });

  it("forwards ref to underlying button element", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("passes type='submit' attribute", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});