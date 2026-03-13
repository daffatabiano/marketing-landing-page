import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const badgeVariants = cva(
  [
    "inline-flex items-center gap-1.5 font-body font-medium",
    "rounded-full border transition-colors",
  ],
  {
    variants: {
      variant: {
        default: "bg-surface-800 text-surface-300 border-surface-700",
        brand:
          "bg-brand-500/10 text-brand-400 border-brand-500/30",
        success:
          "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        warning:
          "bg-amber-500/10 text-amber-400 border-amber-500/30",
        error:
          "bg-red-500/10 text-red-400 border-red-500/30",
        info: "bg-blue-500/10 text-blue-400 border-blue-500/30",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, dot = false, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              variant === "brand" && "bg-brand-400",
              variant === "success" && "bg-emerald-400",
              variant === "warning" && "bg-amber-400",
              variant === "error" && "bg-red-400",
              variant === "info" && "bg-blue-400",
              (!variant || variant === "default") && "bg-surface-400"
            )}
          />
        )}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };