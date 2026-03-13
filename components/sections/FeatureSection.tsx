"use client";

import { motion } from "framer-motion";
import { Section, Badge, Heading } from "@/components/ui";
import { cn } from "@/utils/cn";
import { slideUp, staggerContainer, viewportConfig } from "@/lib/animations";

const features = [
  {
    id: "instant-deploy",
    icon: <RocketIcon />,
    title: "Instant Deployments",
    description: "Push to production in under 30 seconds. Zero-downtime deploys with automatic rollback on failure.",
    badge: "Core",
    accentColor: "group-hover:from-brand-500/10",
  },
  {
    id: "auto-scaling",
    icon: <ScaleIcon />,
    title: "Auto-Scaling",
    description: "Handles traffic spikes automatically. Scale from zero to millions with no configuration required.",
    badge: null,
    accentColor: "group-hover:from-violet-500/10",
  },
  {
    id: "observability",
    icon: <ChartIcon />,
    title: "Real-Time Observability",
    description: "End-to-end tracing, log aggregation, and alerting. Debug production issues in seconds, not hours.",
    badge: null,
    accentColor: "group-hover:from-sky-500/10",
  },
  {
    id: "security",
    icon: <ShieldIcon />,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified. End-to-end encryption, SSO, RBAC, and audit logs out of the box.",
    badge: "New",
    accentColor: "group-hover:from-emerald-500/10",
  },
  {
    id: "cicd",
    icon: <PipelineIcon />,
    title: "Built-In CI/CD",
    description: "Automated testing, preview environments on every PR, and multi-stage deployment workflows.",
    badge: null,
    accentColor: "group-hover:from-rose-500/10",
  },
  {
    id: "global-cdn",
    icon: <GlobeIcon />,
    title: "Global Edge Network",
    description: "Deploy to 35+ regions worldwide. Sub-50ms latency for users anywhere on the planet.",
    badge: null,
    accentColor: "group-hover:from-amber-500/10",
  },
];

export function FeaturesSection() {
  return (
    <Section id="features" padding="lg" background="default">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.div variants={slideUp} className="mb-4">
          <Badge variant="brand" dot>Everything you need</Badge>
        </motion.div>
        <motion.div variants={slideUp}>
          <Heading as="h2" size="display-lg" className="mb-4">
            Built for teams who{" "}
            <span className="text-brand-400">move fast</span>
          </Heading>
        </motion.div>
        <motion.p variants={slideUp} className="font-body text-surface-400 text-lg leading-relaxed">
          Every feature you need to ship production-grade applications at velocity — without wrestling with infrastructure.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={slideUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative rounded-2xl border border-surface-800 bg-surface-900 p-6 overflow-hidden group cursor-pointer"
          >
            <div className={cn("absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl", feature.accentColor)} />
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-surface-800 border border-surface-700/50 group-hover:border-surface-600 transition-colors">
                  {feature.icon}
                </div>
                {feature.badge && (
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    feature.badge === "New"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-brand-500/10 text-brand-400 border-brand-500/30"
                  )}>
                    {feature.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display font-semibold text-white text-lg leading-snug mb-2">{feature.title}</h3>
              <p className="font-body text-surface-400 text-sm leading-relaxed">{feature.description}</p>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-body font-medium text-surface-500 group-hover:text-brand-400 transition-colors">
                <span>Learn more</span>
                <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function RocketIcon() {
  return <svg className="h-5 w-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.12 14.98 14.98 0 003.47 14.24a6 6 0 0011.28-1.94" /></svg>;
}
function ScaleIcon() {
  return <svg className="h-5 w-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" /></svg>;
}
function ChartIcon() {
  return <svg className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>;
}
function ShieldIcon() {
  return <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>;
}
function PipelineIcon() {
  return <svg className="h-5 w-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>;
}
function GlobeIcon() {
  return <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>;
}