import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import type { HeadingLevel } from "@/types";

const headingVariants = cva("font-display font-bold tracking-tight text-white", {
  variants: {
    size: {
      "display-2xl": "text-5xl sm:text-6xl lg:text-7xl leading-[1.05]",
      "display-xl": "text-4xl sm:text-5xl lg:text-6xl leading-[1.08]",
      "display-lg": "text-3xl sm:text-4xl lg:text-5xl leading-[1.1]",
      "display-md": "text-2xl sm:text-3xl lg:text-4xl leading-[1.15]",
      "display-sm": "text-xl sm:text-2xl lg:text-3xl leading-[1.2]",
      xl: "text-xl sm:text-2xl leading-snug",
      lg: "text-lg sm:text-xl leading-snug",
      md: "text-base sm:text-lg leading-snug",
      sm: "text-sm sm:text-base leading-snug",
    },
    color: {
      default: "text-white",
      muted: "text-surface-300",
      brand: "text-brand-400",
    },
  },
  defaultVariants: {
    size: "display-lg",
    color: "default",
  },
});

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = "h2", size, color, className, ...props }, ref) => (
    <Tag
      ref={ref}
      className={cn(headingVariants({ size, color, className }))}
      {...props}
    />
  )
);

Heading.displayName = "Heading";

export { Heading, headingVariants };