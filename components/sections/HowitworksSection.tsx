"use client";

import { motion } from "framer-motion";
import { Section, Badge, Heading } from "@/components/ui";
import { slideUp, slideInFromLeft, slideInFromRight, staggerContainer, viewportConfig } from "@/lib/animations";

const steps = [
  {
    step: "01",
    title: "Connect your repository",
    description: "Link your GitHub, GitLab, or Bitbucket repo in one click. Velox detects your framework and configures everything automatically.",
    code: `$ velox init
✓ Detected Next.js 14
✓ Connected to github.com/acme/app
✓ Environment configured`,
    color: "text-brand-400",
  },
  {
    step: "02",
    title: "Configure your pipeline",
    description: "Define build steps, environment variables, and deploy targets using our intuitive YAML config or visual editor.",
    code: `# velox.yml
deploy:
  target: production
  regions: [us-east, eu-west]
  scaling: auto`,
    color: "text-violet-400",
  },
  {
    step: "03",
    title: "Ship with confidence",
    description: "Every push triggers automated tests, preview deployments, and one-click promotion to production. Zero-downtime guaranteed.",
    code: `✓ Tests passed (47/47)
✓ Preview: preview-abc123.velox.app
✓ Deployed to production
  → 2.847s · 0 errors`,
    color: "text-emerald-400",
  },
];

export function HowItWorksSection() {
  return (
    <Section id="how-it-works" padding="lg" background="muted">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <motion.div variants={slideUp} className="mb-4">
          <Badge variant="brand" dot>How it works</Badge>
        </motion.div>
        <motion.div variants={slideUp}>
          <Heading as="h2" size="display-lg" className="mb-4">
            From code to{" "}
            <span className="text-brand-400">production</span>
            <br />in three steps
          </Heading>
        </motion.div>
        <motion.p variants={slideUp} className="font-body text-surface-400 text-lg">
          No DevOps team required. Velox handles the complexity so your engineers can focus on building.
        </motion.p>
      </motion.div>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <StepItem key={step.step} step={step} index={index} />
        ))}
      </div>
    </Section>
  );
}

interface Step {
  step: string;
  title: string;
  description: string;
  code: string;
  color: string;
}

function StepItem({ step, index }: { step: Step; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:[direction:rtl]"}`}>
      {/* Text */}
      <motion.div
        variants={isEven ? slideInFromLeft : slideInFromRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="lg:[direction:ltr]"
      >
        <div className={`font-display text-6xl font-bold ${step.color} opacity-20 leading-none mb-4 select-none`}>
          {step.step}
        </div>
        <h3 className="font-display font-bold text-white text-2xl sm:text-3xl leading-tight mb-4">
          {step.title}
        </h3>
        <p className="font-body text-surface-400 text-lg leading-relaxed mb-6">
          {step.description}
        </p>
        <div className="flex items-center gap-2">
          <div className={`h-1.5 w-1.5 rounded-full ${step.color.replace("text-", "bg-")}`} />
          <span className="text-sm font-body text-surface-500">Takes less than 2 minutes</span>
        </div>
      </motion.div>

      {/* Code terminal */}
      <motion.div
        variants={isEven ? slideInFromRight : slideInFromLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="lg:[direction:ltr]"
      >
        <div className="rounded-2xl border border-surface-700 bg-surface-950 overflow-hidden shadow-elevated">
          {/* Terminal chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-800 bg-surface-900">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-amber-500/70" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
            </div>
            <span className="text-xs font-mono text-surface-600 ml-2">Terminal</span>
          </div>
          {/* Code content */}
          <div className="p-5">
            <pre className="font-mono text-sm leading-relaxed text-surface-300 whitespace-pre-wrap">
              {step.code}
            </pre>
            {/* Blinking cursor */}
            <div className="flex items-center mt-2">
              <span className="text-surface-500 font-mono text-sm">$</span>
              <span className="ml-1.5 inline-block h-4 w-0.5 bg-brand-400 animate-pulse" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}