"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui";
import { cn } from "@/utils/cn";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface-950/90 backdrop-blur-xl border-b border-surface-800/80 shadow-elevated"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Velox — Go Home"
            >
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 bg-brand-500 rounded-lg rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative h-8 w-8 bg-surface-950 rounded-lg border border-surface-700 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 12L8 4L13 12H3Z"
                      fill="currentColor"
                      className="text-brand-400"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-display text-xl font-bold text-white tracking-tight">
                Velox
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-body font-medium rounded-lg",
                    "text-surface-400 hover:text-white",
                    "hover:bg-surface-800/60",
                    "transition-all duration-150"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-body font-medium text-surface-400 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Button size="sm" variant="primary">
                Start for free
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileOpen}
              onClick={() => setIsMobileOpen((v) => !v)}
              className={cn(
                "md:hidden p-2 rounded-lg",
                "text-surface-400 hover:text-white hover:bg-surface-800",
                "transition-colors"
              )}
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-5 w-5">
                <motion.span
                  className="absolute block h-0.5 w-5 bg-current"
                  animate={isMobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 2 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-5 bg-current top-1/2 -translate-y-1/2"
                  animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-5 bg-current"
                  animate={isMobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 14 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-surface-950/95 backdrop-blur-xl border-b border-surface-800"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-4 py-3 text-sm font-body font-medium text-surface-300 hover:text-white hover:bg-surface-800/60 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-surface-800 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setIsMobileOpen(false)}
                  className="px-4 py-3 text-sm font-body font-medium text-surface-400 hover:text-white transition-colors"
                >
                  Sign in
                </Link>
                <Button variant="primary" size="md" fullWidth>
                  Start for free →
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}