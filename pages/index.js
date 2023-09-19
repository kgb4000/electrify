import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import Services from '@/components/Services'
import ServicePlans from '@/components/ServicePlans'
import ServiceAreas from '@/components/ServiceAreas'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import SpecialPromotions from '@/components/SpecialPromotions'
import WhyUs from '@/components/WhyUs'

export default function Home() {
  return (
    <main
    // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <Hero
        // backgroundImage="/images/hero-img.jpg"
        h1text="Electrify Electric"
        subtext="We are Electrical Contractors and Electricians Serving Residential
            and Commerical Customers in Southern Maryland, DC and Northern
            Virginia"
      />
      <Services />
      <Testimonials />
      <ServicePlans />
      <SpecialPromotions />
      <WhyUs />
      <ServiceAreas />
      <LogoCloud />
      <Footer />
    </main>
  )
}
