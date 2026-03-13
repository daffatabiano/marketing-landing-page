"use client";

import { motion } from "framer-motion";
import { Section, Container } from "@/components/ui";
import { slideUp, staggerContainer, viewportConfig } from "@/lib/animations";

const stats = [
  { value: "35+", label: "Global Regions", description: "Edge nodes across 6 continents" },
  { value: "99.99%", label: "Uptime SLA", description: "Guaranteed availability" },
  { value: "2M+", label: "Deployments/month", description: "Shipped by our customers" },
  { value: "<30s", label: "Deploy Time", description: "Average time to production" },
];

export function StatsSection() {
  return (
    <Section id="stats" padding="md" background="muted">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-surface-700/40 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-surface-800"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={slideUp}
            className="flex flex-col items-center text-center px-6 py-2"
          >
            <span className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight leading-none mb-2">
              {stat.value}
            </span>
            <span className="font-body font-semibold text-surface-200 text-sm mb-1">
              {stat.label}
            </span>
            <span className="font-body text-surface-500 text-xs">
              {stat.description}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}