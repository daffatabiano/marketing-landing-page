"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge, Button } from "@/components/ui";
import { cn } from "@/utils/cn";
import { fadeIn, slideUp, staggerContainer } from "@/lib/animations";
import type { HeroSectionProps } from "@/types";

export function HeroSection({
  badge,
  title,
  highlightText,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "centered",
  align = "center",
}: HeroSectionProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-950"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-surface-950 to-transparent" />
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-600/5 rounded-full blur-[80px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
        {variant === "centered" && (
          <CenteredVariant
            badge={badge}
            title={title}
            highlightText={highlightText}
            subtitle={subtitle}
            description={description}
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
            alignClass={alignClass}
          />
        )}
        {variant === "split" && (
          <SplitVariant
            badge={badge}
            title={title}
            highlightText={highlightText}
            description={description}
            primaryCTA={primaryCTA}
            secondaryCTA={secondaryCTA}
          />
        )}
        {variant === "minimal" && (
          <MinimalVariant
            title={title}
            highlightText={highlightText}
            description={description}
            primaryCTA={primaryCTA}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs font-body text-surface-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-surface-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}

interface VariantProps extends Omit<HeroSectionProps, "variant" | "align" | "image"> {
  alignClass?: string;
}

function CenteredVariant({ badge, title, highlightText, subtitle, description, primaryCTA, secondaryCTA, alignClass }: VariantProps) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className={cn("flex flex-col gap-6 max-w-4xl mx-auto", alignClass)}>
      {badge && (
        <motion.div variants={slideUp}>
          <Badge variant={badge.variant ?? "brand"} size="md" dot>{badge.label}</Badge>
        </motion.div>
      )}
      <motion.div variants={slideUp}>
        <h1 className="font-display font-bold text-white leading-[1.05] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
          {highlightText ? (
            <>
              {title.split(highlightText)[0]}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-400">{highlightText}</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-500 to-brand-300 rounded-full" aria-hidden="true" />
              </span>
              {title.split(highlightText)[1]}
            </>
          ) : title}
        </h1>
      </motion.div>
      {subtitle && (
        <motion.p variants={slideUp} className="font-body text-lg sm:text-xl text-surface-300 font-medium max-w-2xl mx-auto">
          {subtitle}
        </motion.p>
      )}
      <motion.p variants={slideUp} className="font-body text-base sm:text-lg text-surface-500 leading-relaxed max-w-xl mx-auto">
        {description}
      </motion.p>
      <motion.div variants={slideUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2">
        <Link href={primaryCTA.href} target={primaryCTA.external ? "_blank" : undefined}>
          <Button size="lg" variant="primary">{primaryCTA.label}</Button>
        </Link>
        {secondaryCTA && (
          <Link href={secondaryCTA.href} target={secondaryCTA.external ? "_blank" : undefined}>
            <Button size="lg" variant="outline">{secondaryCTA.label}</Button>
          </Link>
        )}
      </motion.div>
      <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 pt-6 border-t border-surface-800/50">
        <div className="flex items-center -space-x-2">
          {[
            { color: "bg-violet-500", initial: "A" },
            { color: "bg-sky-500", initial: "M" },
            { color: "bg-emerald-500", initial: "J" },
            { color: "bg-amber-500", initial: "S" },
            { color: "bg-rose-500", initial: "K" },
          ].map(({ color, initial }) => (
            <div key={initial} className={cn("h-8 w-8 rounded-full border-2 border-surface-950 flex items-center justify-center text-xs font-bold text-white", color)}>{initial}</div>
          ))}
        </div>
        <div className="text-left">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="h-3.5 w-3.5 text-brand-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-xs font-body text-surface-500 mt-0.5"><span className="text-white font-medium">4.9/5</span> from 2,000+ teams</p>
        </div>
        <div className="h-8 w-px bg-surface-800 hidden sm:block" />
        <p className="text-xs font-body text-surface-500">No credit card required · Free forever plan</p>
      </motion.div>
      <motion.div variants={slideUp} className="mt-12 relative max-w-5xl mx-auto w-full">
        <DashboardMockup />
      </motion.div>
    </motion.div>
  );
}

function SplitVariant({ badge, title, highlightText, description, primaryCTA, secondaryCTA }: VariantProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col gap-6">
        {badge && <motion.div variants={slideUp}><Badge variant={badge.variant ?? "brand"} dot>{badge.label}</Badge></motion.div>}
        <motion.h1 variants={slideUp} className="font-display font-bold text-white text-4xl sm:text-5xl tracking-tight leading-[1.08]">
          {highlightText ? <>{title.split(highlightText)[0]}<span className="text-brand-400">{highlightText}</span>{title.split(highlightText)[1]}</> : title}
        </motion.h1>
        <motion.p variants={slideUp} className="font-body text-surface-400 text-lg leading-relaxed">{description}</motion.p>
        <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-3">
          <Link href={primaryCTA.href}><Button size="lg">{primaryCTA.label}</Button></Link>
          {secondaryCTA && <Link href={secondaryCTA.href}><Button size="lg" variant="outline">{secondaryCTA.label}</Button></Link>}
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
        <DashboardMockup />
      </motion.div>
    </div>
  );
}

function MinimalVariant({ title, highlightText, description, primaryCTA }: VariantProps) {
  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
      <motion.h1 variants={slideUp} className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
        {highlightText ? <>{title.split(highlightText)[0]}<span className="text-brand-400">{highlightText}</span>{title.split(highlightText)[1]}</> : title}
      </motion.h1>
      <motion.p variants={slideUp} className="font-body text-surface-400 text-xl leading-relaxed">{description}</motion.p>
      <motion.div variants={slideUp}><Link href={primaryCTA.href}><Button size="xl">{primaryCTA.label}</Button></Link></motion.div>
    </motion.div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      <div className="absolute inset-x-8 -bottom-8 h-40 bg-brand-500/15 blur-3xl rounded-full" aria-hidden="true" />
      <div className="relative rounded-2xl border border-surface-700/80 bg-surface-900/80 backdrop-blur-sm overflow-hidden shadow-elevated">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-800 bg-surface-950/60">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-amber-500/70" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-3 py-1 rounded-md bg-surface-800/60 border border-surface-700/50">
              <span className="text-xs font-mono text-surface-500">app.velox.dev/dashboard</span>
            </div>
          </div>
        </div>
        <div className="p-5 grid grid-cols-3 gap-4">
          {[
            { label: "Deployments", value: "2,847", change: "+12%", color: "text-emerald-400" },
            { label: "Uptime", value: "99.99%", change: "+0.2%", color: "text-brand-400" },
            { label: "Requests/s", value: "48.2K", change: "+34%", color: "text-violet-400" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl bg-surface-800/60 border border-surface-700/50 p-3">
              <p className="text-xs font-body text-surface-500 mb-1">{stat.label}</p>
              <p className="font-display font-bold text-white text-lg leading-none">{stat.value}</p>
              <p className={cn("text-xs font-body mt-1", stat.color)}>{stat.change} this week</p>
            </div>
          ))}
          <div className="col-span-2 rounded-xl bg-surface-800/60 border border-surface-700/50 p-3">
            <p className="text-xs font-body text-surface-500 mb-3">Deploy Activity</p>
            <div className="flex items-end gap-1 h-16">
              {[30, 55, 40, 70, 45, 85, 60, 90, 75, 95, 65, 80, 70, 100].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-brand-500/30 hover:bg-brand-500/60 transition-colors" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-surface-800/60 border border-surface-700/50 p-3">
            <p className="text-xs font-body text-surface-500 mb-2">Latest Deploy</p>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-surface-300">prod-v2.4.1</span>
            </div>
            <p className="text-[10px] text-surface-600 font-mono">2s ago · main</p>
          </div>
        </div>
      </div>
    </div>
  );
}