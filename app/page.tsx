import {
  HeroSection,
  StatsSection,
  FeaturesSection,
  HowItWorksSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge={{ label: "Now in public beta · Join 2,000+ teams", variant: "brand" }}
        title="Ship Faster. Scale Smarter."
        highlightText="Scale Smarter."
        subtitle="The deployment platform your team will actually love."
        description="Velox eliminates the gap between writing code and running it in production. Automated pipelines, global edge delivery, and zero-config scaling — all in one place."
        primaryCTA={{ label: "Start for free", href: "/signup" }}
        secondaryCTA={{ label: "View demo", href: "/demo" }}
        variant="centered"
        align="center"
      />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}