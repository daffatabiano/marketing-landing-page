"use client";

import { motion } from "framer-motion";
import { Section, Badge, Heading } from "@/components/ui";
import { cn } from "@/utils/cn";
import { slideUp, staggerContainer, viewportConfig } from "@/lib/animations";

const testimonials = [
  {
    id: "1",
    quote: "Velox cut our deployment pipeline from 45 minutes to under 30 seconds. Our team's velocity doubled in the first month.",
    author: { name: "Sarah Chen", title: "VP of Engineering", company: "Meridian Labs", initials: "SC", color: "bg-violet-500" },
    rating: 5,
    featured: true,
  },
  {
    id: "2",
    quote: "We were spending 20% of our sprint just on infrastructure. With Velox, that dropped to nearly zero. Now we just ship.",
    author: { name: "Marcus Ruiz", title: "CTO", company: "Stackbloom", initials: "MR", color: "bg-sky-500" },
    rating: 5,
    featured: false,
  },
  {
    id: "3",
    quote: "The auto-scaling is genuinely impressive. We had a 50x traffic spike during a product launch and didn't notice a thing. Zero intervention required.",
    author: { name: "Priya Kapoor", title: "Lead Backend Engineer", company: "Fluxion", initials: "PK", color: "bg-emerald-500" },
    rating: 5,
    featured: false,
  },
  {
    id: "4",
    quote: "Switched from our self-managed Kubernetes setup to Velox. 8-hour migrations became 20-minute onboardings. The team hasn't looked back.",
    author: { name: "James Wu", title: "Platform Engineer", company: "Cortex Systems", initials: "JW", color: "bg-rose-500" },
    rating: 5,
    featured: false,
  },
  {
    id: "5",
    quote: "Enterprise SSO, audit logs, and SOC 2 compliance out of the box? That saved us 3 months of security review. Our CISO was impressed.",
    author: { name: "Elena Petrov", title: "Head of DevOps", company: "FinEdge", initials: "EP", color: "bg-amber-500" },
    rating: 5,
    featured: false,
  },
  {
    id: "6",
    quote: "The preview environments on every PR have been game-changing for our QA process. Stakeholders can review changes before they hit staging.",
    author: { name: "David Okonkwo", title: "Engineering Manager", company: "Luminary AI", initials: "DO", color: "bg-brand-500" },
    rating: 5,
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" padding="lg" background="muted">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.div variants={slideUp} className="mb-4">
          <Badge variant="brand" dot>Testimonials</Badge>
        </motion.div>
        <motion.div variants={slideUp}>
          <Heading as="h2" size="display-lg" className="mb-4">
            Loved by{" "}
            <span className="text-brand-400">engineering teams</span>
            {" "}worldwide
          </Heading>
        </motion.div>
        <motion.p variants={slideUp} className="font-body text-surface-400 text-lg">
          Join 2,000+ companies that trust Velox to power their deployments.
        </motion.p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.id}
            variants={slideUp}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className={cn(
              "break-inside-avoid rounded-2xl border p-6 mb-5",
              t.featured
                ? "bg-surface-900 border-brand-500/30 shadow-glow"
                : "bg-surface-900 border-surface-800"
            )}
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="h-4 w-4 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <svg className="h-6 w-6 text-surface-700 mb-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="font-body text-surface-300 text-sm leading-relaxed mb-5">
              {t.quote}
            </p>

            <div className="flex items-center gap-3">
              <div className={cn("h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0", t.author.color)}>
                {t.author.initials}
              </div>
              <div>
                <p className="font-body font-semibold text-white text-sm">{t.author.name}</p>
                <p className="font-body text-surface-500 text-xs">{t.author.title} · {t.author.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="mt-16 text-center"
      >
        <p className="font-body text-surface-600 text-sm mb-8 uppercase tracking-widest">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-40">
          {["Meridian", "Stackbloom", "Fluxion", "Cortex", "FinEdge", "Luminary"].map((name) => (
            <span key={name} className="font-display font-bold text-surface-300 text-lg tracking-tight">
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}