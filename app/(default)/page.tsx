export const metadata = {
  title: 'Savia',
  description: 'Savia is a robust Order Management System (OMS) designed to streamline your omnichannel operations',
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import PricingTabs from '@/components/pricing-tabs'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Features01 />
      <PricingTabs />
      {/* <Testimonials /> */}
      <Cta />
    </>
  )
}
