import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and resolves Tailwind conflicts with twMerge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a number with compact notation (1000 → 1K, 1000000 → 1M)
 */
export function formatCompact(value: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Generate a URL-friendly slug from a string
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Delay utility for async operations
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Type-safe object entries
 */
export function typedEntries<T extends object>(
  obj: T
): [keyof T, T[keyof T]][] {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
}

/**
 * Check if running on client side
 */
export const isClient = typeof window !== "undefined";

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (!isClient) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Get animation duration based on user preference
 */
export function getAnimationDuration(
  base: number,
  reduced = 0
): number {
  return prefersReducedMotion() ? reduced : base;
}