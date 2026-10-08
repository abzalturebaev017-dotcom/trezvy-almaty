import { Hero } from '@/components/hero'
import { Steps } from '@/components/steps'
import { Pricing } from '@/components/pricing'
import { Services } from '@/components/services'
import { Drivers } from '@/components/drivers'
import { Reviews } from '@/components/reviews'
import { Faq } from '@/components/faq'
import { FinalCta, Footer, StickyBar } from '@/components/footer'

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Steps />
        <Pricing />
        <Services />
        <Drivers />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyBar />
    </>
  )
}
