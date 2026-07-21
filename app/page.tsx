import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Stats } from '@/components/stats'
import { Approach } from '@/components/approach'
import { About } from '@/components/about'
import { CommunityImpact } from '@/components/community-impact'
import { CaseStudies } from '@/components/case-studies'
import { Certifications } from '@/components/certifications'
import { Team } from '@/components/team'
import { Insights } from '@/components/insights'
import { Testimonial } from '@/components/testimonial'
import { Faq } from '@/components/faq'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Approach />
        <About />
        <CommunityImpact />
        <CaseStudies />
        <Certifications />
        <Team />
        <Insights />
        <Testimonial />
        <Faq />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  )
}
