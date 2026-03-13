"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Badge, Heading } from "@/components/ui";
import { cn } from "@/utils/cn";
import { slideUp, staggerContainer, viewportConfig } from "@/lib/animations";

const faqs = [
  {
    id: "1",
    question: "How does Velox handle scaling during traffic spikes?",
    answer: "Velox uses predictive auto-scaling that monitors real-time traffic patterns and scales your infrastructure proactively, before performance degrades. We spin up additional capacity in under 5 seconds and scale back down automatically when traffic normalizes — so you only pay for what you use.",
  },
  {
    id: "2",
    question: "Can I migrate my existing deployments to Velox?",
    answer: "Absolutely. We provide guided migration tooling that analyzes your existing infrastructure and generates a migration plan. Most teams complete the migration in under an hour. We support imports from Heroku, Render, Railway, AWS Elastic Beanstalk, and any Dockerfile-based setup.",
  },
  {
    id: "3",
    question: "What frameworks and languages does Velox support?",
    answer: "Velox supports all major frameworks — Next.js, Remix, SvelteKit, Nuxt, Astro, Django, Rails, Laravel, Spring Boot, and more. If it runs in a Docker container, it runs on Velox. We also offer first-class support for monorepos using Turborepo and Nx.",
  },
  {
    id: "4",
    question: "Is Velox SOC 2 certified?",
    answer: "Yes. Velox is SOC 2 Type II certified, GDPR compliant, and HIPAA-ready. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We maintain a full audit log of every infrastructure event, accessible from your dashboard.",
  },
  {
    id: "5",
    question: "What does the 99.99% uptime SLA actually mean?",
    answer: "Our SLA guarantees no more than 52 minutes of downtime per year. In the unlikely event we fall below this, you'll receive service credits automatically — no need to file a ticket. Our current 12-month actual uptime is 99.997%, tracked publicly on our status page.",
  },
  {
    id: "6",
    question: "Can I self-host Velox for on-premise requirements?",
    answer: "Yes, our Enterprise plan includes an on-premise deployment option. You get all Velox features running in your own private cloud or data center. We provide dedicated engineering support for the initial setup and ongoing maintenance.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <Section id="faq" padding="lg" background="default">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <motion.div variants={slideUp} className="mb-4">
            <Badge variant="brand" dot>FAQ</Badge>
          </motion.div>
          <motion.div variants={slideUp}>
            <Heading as="h2" size="display-lg" className="mb-4">
              Frequently asked{" "}
              <span className="text-brand-400">questions</span>
            </Heading>
          </motion.div>
          <motion.p variants={slideUp} className="font-body text-surface-400 text-lg">
            Everything you need to know about Velox. Can&apos;t find your answer?{" "}
            <a href="/contact" className="text-brand-400 hover:text-brand-300 transition-colors underline underline-offset-2">
              Chat with our team.
            </a>
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="space-y-3"
        >
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      variants={slideUp}
      className={cn(
        "rounded-2xl border transition-colors duration-200",
        isOpen ? "border-brand-500/30 bg-surface-900" : "border-surface-800 bg-surface-900 hover:border-surface-700"
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={cn(
          "font-body font-semibold text-base transition-colors",
          isOpen ? "text-white" : "text-surface-200"
        )}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex-shrink-0 h-6 w-6 rounded-full border flex items-center justify-center transition-colors",
            isOpen ? "border-brand-500/50 bg-brand-500/10" : "border-surface-700"
          )}
        >
          <svg className={cn("h-3 w-3 transition-colors", isOpen ? "text-brand-400" : "text-surface-500")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 font-body text-surface-400 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}