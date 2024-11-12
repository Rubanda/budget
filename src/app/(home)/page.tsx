import { HeroSection } from "@/components/sections/hero"
import { SponsorsSection } from "@/components/sections/sponsors"

export default async function Page() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      {/* <BenefitsSection />
      <ServicesSection />
      <TestimonialSection />
      < FAQSection /> */}
    </>
  )
}