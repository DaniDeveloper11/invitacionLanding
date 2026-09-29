import { CallToAction } from '@/components/CallToAction'
import { Conditions } from '@/components/Conditions'
import { CustomDesign } from '@/components/CustomDesign'
import { Extras } from '@/components/Extras'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Pricing } from '@/components/Pricing'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <SecondaryFeatures />
      <Extras />
      <HowItWorks />
      <CustomDesign />
      <Faqs />
      <Conditions />
      <CallToAction />
    </>
  )
}
