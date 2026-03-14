"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-body font-medium tracking-wide",
    "rounded-xl border transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none cursor-pointer",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-brand-500 text-surface-950 border-brand-500",
          "hover:bg-brand-400 hover:border-brand-400 hover:shadow-glow",
          "active:bg-brand-600",
        ],
        secondary: [
          "bg-surface-800 text-surface-100 border-surface-700",
          "hover:bg-surface-700 hover:border-surface-600",
          "active:bg-surface-900",
        ],
        outline: [
          "bg-transparent text-surface-200 border-surface-700",
          "hover:bg-surface-800/50 hover:border-surface-500 hover:text-white",
          "active:bg-surface-800",
        ],
        ghost: [
          "bg-transparent text-surface-300 border-transparent",
          "hover:bg-surface-800/50 hover:text-white",
          "active:bg-surface-800",
        ],
        danger: [
          "bg-red-600 text-white border-red-600",
          "hover:bg-red-500 hover:border-red-500",
          "active:bg-red-700",
        ],
      },
      size: {
        xs: "h-7 px-3 text-xs rounded-lg",
        sm: "h-8 px-4 text-sm rounded-lg",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-base rounded-2xl",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || loading}
        onClick={props.onClick as React.MouseEventHandler<HTMLButtonElement>}
        type={props.type ?? "button"}
        aria-label={props["aria-label"]}
        data-testid={props["data-testid" as keyof typeof props] as string}
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };