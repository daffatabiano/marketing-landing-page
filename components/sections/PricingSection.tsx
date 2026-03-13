"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Section, Badge, Heading, Button } from "@/components/ui";
import { cn } from "@/utils/cn";
import { slideUp, staggerContainer, viewportConfig } from "@/lib/animations";
import type { PricingInterval } from "@/types";

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for indie developers and side projects.",
    price: { monthly: 0, yearly: 0 },
    badge: null,
    highlighted: false,
    cta: { label: "Get started free", href: "/signup" },
    features: [
      { label: "3 projects", included: true },
      { label: "100 deployments/month", included: true },
      { label: "Shared resources", included: true },
      { label: "Community support", included: true },
      { label: "Custom domains", included: false },
      { label: "Team members", included: false },
      { label: "Analytics", included: false },
      { label: "Priority support", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "For growing teams shipping at scale.",
    price: { monthly: 49, yearly: 39 },
    badge: "Most Popular",
    highlighted: true,
    cta: { label: "Start free trial", href: "/signup?plan=pro" },
    features: [
      { label: "Unlimited projects", included: true },
      { label: "Unlimited deployments", included: true },
      { label: "Dedicated resources", included: true },
      { label: "Priority support", included: true },
      { label: "Custom domains", included: true },
      { label: "Up to 10 team members", included: true },
      { label: "Advanced analytics", included: true },
      { label: "SSO", included: false },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with advanced needs.",
    price: { monthly: "custom" as const, yearly: "custom" as const },
    badge: null,
    highlighted: false,
    cta: { label: "Contact sales", href: "/contact" },
    features: [
      { label: "Everything in Pro", included: true },
      { label: "Unlimited team members", included: true },
      { label: "SLA guarantee", included: true },
      { label: "24/7 dedicated support", included: true },
      { label: "Custom contracts", included: true },
      { label: "SSO & SAML", included: true },
      { label: "Audit logs", included: true },
      { label: "On-premise option", included: true },
    ],
  },
];

export function PricingSection() {
  const [interval, setInterval] = useState<PricingInterval>("monthly");

  return (
    <Section id="pricing" padding="lg" background="default">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <motion.div variants={slideUp} className="mb-4">
          <Badge variant="brand" dot>Pricing</Badge>
        </motion.div>
        <motion.div variants={slideUp}>
          <Heading as="h2" size="display-lg" className="mb-4">
            Simple,{" "}
            <span className="text-brand-400">transparent</span>
            {" "}pricing
          </Heading>
        </motion.div>
        <motion.p variants={slideUp} className="font-body text-surface-400 text-lg mb-8">
          Start for free. Scale as you grow. No hidden fees, no surprise bills.
        </motion.p>

        {/* Interval toggle */}
        <motion.div variants={slideUp} className="inline-flex items-center gap-1 p-1 rounded-xl bg-surface-900 border border-surface-800">
          {(["monthly", "yearly"] as PricingInterval[]).map((i) => (
            <button
              key={i}
              onClick={() => setInterval(i)}
              className={cn(
                "relative px-5 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200",
                interval === i
                  ? "bg-brand-500 text-surface-950 shadow-sm"
                  : "text-surface-400 hover:text-white"
              )}
            >
              {i === "monthly" ? "Monthly" : "Yearly"}
              {i === "yearly" && (
                <span className={cn(
                  "absolute -top-2 -right-2 px-1.5 py-0.5 text-[10px] font-bold rounded-full",
                  interval === "yearly" ? "bg-emerald-500 text-white" : "bg-emerald-500/20 text-emerald-400"
                )}>
                  -20%
                </span>
              )}
            </button>
          ))}
        </motion.div>
      </motion.div>

      {/* Plan cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} interval={interval} />
        ))}
      </motion.div>

      {/* Trust line */}
      <motion.p
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center font-body text-surface-500 text-sm mt-10"
      >
        All plans include a 14-day free trial · No credit card required · Cancel anytime
      </motion.p>
    </Section>
  );
}

interface Plan {
  id: string;
  name: string;
  description: string;
  price: { monthly: number | "custom"; yearly: number | "custom" };
  badge: string | null;
  highlighted: boolean;
  cta: { label: string; href: string };
  features: { label: string; included: boolean }[];
}

function PlanCard({ plan, interval }: { plan: Plan; interval: PricingInterval }) {
  const price = plan.price[interval];
  const isCustom = price === "custom";

  return (
    <motion.div
      variants={slideUp}
      className={cn(
        "relative rounded-2xl border p-6 flex flex-col",
        plan.highlighted
          ? "bg-surface-900 border-brand-500/50 shadow-glow"
          : "bg-surface-900 border-surface-800"
      )}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 rounded-full text-xs font-body font-semibold bg-brand-500 text-surface-950">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display font-bold text-white text-xl mb-1">{plan.name}</h3>
        <p className="font-body text-surface-500 text-sm">{plan.description}</p>
      </div>

      <div className="mb-6">
        {isCustom ? (
          <div className="font-display font-bold text-white text-3xl">Custom</div>
        ) : (
          <div className="flex items-end gap-1">
            <span className="font-display font-bold text-white text-4xl leading-none">
              ${price}
            </span>
            <span className="font-body text-surface-500 text-sm pb-1">/mo</span>
          </div>
        )}
        {!isCustom && interval === "yearly" && (
          <p className="font-body text-emerald-400 text-xs mt-1">Billed annually · Save ${((plan.price.monthly as number) - price) * 12}/yr</p>
        )}
      </div>

      <Link href={plan.cta.href} className="mb-6">
        <Button
          variant={plan.highlighted ? "primary" : "outline"}
          size="md"
          fullWidth
        >
          {plan.cta.label}
        </Button>
      </Link>

      <ul className="space-y-3 flex-1">
        {plan.features.map((feature) => (
          <li key={feature.label} className={cn("flex items-center gap-3 text-sm font-body", feature.included ? "text-surface-300" : "text-surface-600")}>
            {feature.included ? (
              <svg className="h-4 w-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-surface-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {feature.label}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}