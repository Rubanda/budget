import { Shell } from "@/components/shell/shell"
import { HeroSection } from "@/components/sections/hero"
import { SponsorsSection } from "@/components/sections/sponsors"
import { BenefitsSection } from "@/components/sections/benefits"
import { ServicesSection } from "@/components/sections/services"
import { TestimonialSection } from "@/components/sections/testimonial"
import { FAQSection } from "@/components/sections/faq"

export default async function Page() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <ServicesSection />
      <TestimonialSection />
      < FAQSection />
    </>
  )
}