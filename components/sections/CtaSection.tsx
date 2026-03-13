"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section, Button } from "@/components/ui";
import { slideUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function CTASection() {
  return (
    <Section id="cta" padding="xl" background="default" container={false}>
      {/* Full-width inner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative rounded-3xl overflow-hidden border border-surface-800 bg-surface-900"
        >
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/15 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950/50 to-transparent" />
            {/* Grid */}
            <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 lg:py-24 text-center">
            <motion.div variants={slideUp} className="mb-3">
              <span className="inline-flex items-center gap-2 text-brand-400 text-sm font-body font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                Get started in under 2 minutes
              </span>
            </motion.div>

            <motion.h2
              variants={slideUp}
              className="font-display font-bold text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] mb-6"
            >
              Ready to ship
              <br />
              <span className="text-brand-400">10x faster?</span>
            </motion.h2>

            <motion.p
              variants={slideUp}
              className="font-body text-surface-400 text-lg max-w-xl mx-auto mb-10"
            >
              Join 2,000+ engineering teams who chose Velox to eliminate deployment friction and reclaim their velocity.
            </motion.p>

            <motion.div
              variants={slideUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/signup">
                <Button
                  size="xl"
                  variant="primary"
                  rightIcon={
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  }
                >
                  Start for free
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="xl" variant="outline">
                  Book a demo
                </Button>
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={slideUp}
              className="flex flex-wrap items-center justify-center gap-6 mt-10"
            >
              {[
                "No credit card",
                "Free forever plan",
                "SOC 2 certified",
                "Cancel anytime",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="font-body text-surface-400 text-sm">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}