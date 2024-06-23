import Hero from '@/src/components/hero'
import Features01 from '@/src/components/features-01'
import Features02 from '@/src/components/features-02'
import Features03 from '@/src/components/features-03'
import PricingTabs from '@/src/components/pricing-tabs'
import Testimonials from '@/src/components/testimonials'
import ScrollToTop from '@/src/components/ui/scroll-to-top'
import Cta from '@/src/components/cta'

export const metadata = {
  title: 'Savia - Optimize Every Order, Every Channel',
  description: 'Savia is a robust Order Management System (OMS) designed to streamline your omnichannel operations',
}
export default function Home() {

  return (
    <>
      <Hero />
      <Features01 />
      <Features02 />
      <PricingTabs />
      <Cta />
      <ScrollToTop />
    </>
  )
}
