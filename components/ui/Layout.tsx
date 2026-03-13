import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import type { SectionProps } from "@/types";

// ─── Container ───────────────────────────────────────────────

const containerVariants = cva("w-full mx-auto px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    },
  },
  defaultVariants: { size: "xl" },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ size, className }))}
      {...props}
    />
  )
);
Container.displayName = "Container";

// ─── Section ─────────────────────────────────────────────────

const sectionVariants = cva("relative w-full", {
  variants: {
    background: {
      default: "bg-surface-950",
      muted: "bg-surface-900",
      brand: "bg-brand-500",
      dark: "bg-black",
      transparent: "bg-transparent",
    },
    padding: {
      none: "",
      sm: "py-12 sm:py-16",
      md: "py-16 sm:py-20 lg:py-24",
      lg: "py-20 sm:py-28 lg:py-32",
      xl: "py-28 sm:py-36 lg:py-40",
    },
  },
  defaultVariants: {
    background: "default",
    padding: "lg",
  },
});

const Section = forwardRef<
  HTMLElement,
  SectionProps & VariantProps<typeof sectionVariants>
>(
  (
    {
      id,
      background,
      padding,
      container = true,
      className,
      children,
      ...props
    },
    ref
  ) => (
    <section
      ref={ref}
      id={id}
      className={cn(sectionVariants({ background, padding, className }))}
      {...props}
    >
      {container ? (
        <Container>{children}</Container>
      ) : (
        children
      )}
    </section>
  )
);
Section.displayName = "Section";

// ─── Grid ────────────────────────────────────────────────────

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

const colsMap: Record<NonNullable<GridProps["cols"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

const gapMap: Record<NonNullable<GridProps["gap"]>, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 3, gap = "md", className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("grid", colsMap[cols], gapMap[gap], className)}
      {...props}
    />
  )
);
Grid.displayName = "Grid";

export { Container, Section, Grid, containerVariants, sectionVariants };