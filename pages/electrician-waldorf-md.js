import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GetQuoteForm from '@/components/GetQuoteForm'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import PageContactForm from '@/components/PageContactForm'

const electricianWaldorfMD = () => {
  return (
    <>
      <Header />
      <div className="hidden max-w-7xl mx-auto lg:block bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljaWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60')] bg-top bg-no-repeat bg-cover h-40"></div>
      <div className="container mx-auto max-w-7xl flex flex-row px-6 justify-center items-center mt-10 lg:mt-10">
        <div className="basis-12/12 lg:basis-8/12">
          <h1 className="text-6xl font-bold tracking-tight sm:text-8xl pb-6">
            Electrician in Waldorf, MD
          </h1>
          <p className="py-2 text-xl">
            At Electrify Electric, we recognize the necessity of having a
            reliable electrician at your service, especially one local to
            Waldorf, MD, who understands the community's specific needs. We aim
            to secure your trust by delivering professional, high-quality, and
            budget-friendly services.
          </p>
          <p className="py-2 text-xl">
            Our team comprises expert electricians, each rigorously trained to
            excel in various electrical services, ensuring every project, big or
            small, is completed with accuracy and excellence. We are committed
            to promptly addressing your electrical concerns, focusing on
            providing outstanding and precise service.
          </p>
          <p className="py-2 text-xl">
            If you live in Waldorf, MD, and require immediate assistance or want
            to schedule a service, please contact us at{' '}
            <span className="font-bold">301-555-1234</span> or complete our
            online contact form to begin your journey with experts who are
            genuinely invested in your satisfaction.
          </p>
          <div className="mt-20 mb-10">
            <Link
              href="#"
              className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
            >
              Call Us Today <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="basis-4/12">
          <GetQuoteForm />
        </div>
      </div>
      <section className="container px-6 max-w-7xl mx-auto">
        <div>
          <div className="py-5">
            <h2
              id="residential"
              className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 py-6"
            >
              Residential Electrical Services
            </h2>
            <p className="py-2 text-xl">
              When you need electrical services our team of electricians is
              ready to assist! We provide a comprehensive suite of electrical
              services at prices that are hard to beat. Below is a glimpse of
              the residential electrical services we offer to residents in
              Waldorf, MD:
            </p>
            <div className="my-10 lg:my-20 text-lg lg:grid grid-cols-2 gap-10">
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Electrical Installation:</p>
                <p className="py-5">
                  This includes installing wiring and electrical systems for new
                  constructions, whether residential, commercial, or industrial
                  buildings.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Lighting Installation:</p>
                <p className="py-5">
                  Illuminate every room perfectly with our specialized lighting
                  installation expertise.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Lighting Repair:</p>
                <p className="py-5">
                  Restore brilliance efficiently with our comprehensive lighting
                  repair services.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-5">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-5">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Ring floodlight installation:</p>
                <p className="py-2">
                  Enhance security with clarity. Expert Ring floodlight
                  installation for vigilant homes.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Panel Upgrades:</p>
                <p className="py-2">
                  Upgrading a home or building's electrical panel to accommodate
                  a higher power capacity.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Dimmer Switch Installation:</p>
                <p className="py-2">
                  Set the mood to save energy. Expert dimmer lighting switch
                  installation for ambiance.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Home EV Charger Installation:</p>
                <p className="py-2">
                  With the rise in electric vehicles, installing home and
                  business charging stations has become a common service.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Surge Protection:</p>
                <p className="py-2">
                  Installing whole-house surge protectors to protect appliances
                  and electronics from voltage spikes.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Dimmer Switch Installation:</p>
                <p className="py-2">
                  Set the mood to save energy. Expert dimmer lighting switch
                  installation for ambiance.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Attic Fan Installation:</p>
                <p className="py-2">
                  Optimize airflow & reduce heat: Premier attic fan installation
                  for home comfort.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Outdoor Lighting Installation:</p>
                <p className="py-2">
                  Enhance curb appeal and security with our expert outdoor
                  lighting installation.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Home Generator Installation:</p>
                <p className="py-2">
                  Installing and maintaining backup generators for homes and
                  businesses.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Circuit Breaker Installation:</p>
                <p className="py-2">
                  Safeguard your electric flow. Precise circuit breaker
                  installation for peak protection.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Basement wiring:</p>
                <p className="py-2">
                  Power up your lower level. Expert basement wiring ensures
                  reliable connections & safety.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Electrical Panel Upgrade:</p>
                <p className="py-2">
                  Boost your home's power hub. Professional panel upgrade for
                  modern electrical demands.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Landscape Lighting:</p>
                <p className="py-2">
                  Illuminate your outdoors. Expert landscape lighting for
                  beauty, safety, and ambiance.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Smoke detector installation:</p>
                <p className="py-2">
                  Prioritize safety. Expert smoke detector installation for
                  alertness & peace of mind.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold ">Motion Lighting Installation:</p>
                <p className="py-2">
                  Light up when you move. Expert motion lighting installation
                  for convenience & safety.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold ">USB Port Installation:</p>
                <p className="py-2">
                  Modernize your outlets for the digital age; convenient and
                  expert USB port installations keep your devices charged and
                  ready.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold ">Home Remodeling Projects:</p>
                <p className="py-2">
                  Revitalize your living space with expert electrical upgrades
                  and installations tailored to your remodeling needs.
                </p>
              </div>
            </div>
            {/* <div className="mt-20 mb-10 text-center">
              <Link
                href="#"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                get Your Quote Today <span aria-hidden="true">→</span>
              </Link>
            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto py-20">
          <div className="px-6">
            <div className="py-5">
              <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 ">
                Testimonials
              </h2>
            </div>
            <div className="lg:flex flex-direction-row gap-10">
              <Testimonial
                name="Robert Rafford"
                text="Extremely professional and efficient! Had a ground wire put in between my garage and shed to get power out to the shed. Have used these guys twice now and would HIGHLY recommend them! Ronald is quick to let you know if there is going to be any delay or issues. Everything these guys have done for me has been top notch!!"
              />
              <Testimonial
                name="Robert Rafford"
                text="Extremely professional and efficient! Had a ground wire put in between my garage and shed to get power out to the shed. Have used these guys twice now and would HIGHLY recommend them! Ronald is quick to let you know if there is going to be any delay or issues. Everything these guys have done for me has been top notch!!"
              />
              <Testimonial
                name="Robert Rafford"
                text="Extremely professional and efficient! Had a ground wire put in between my garage and shed to get power out to the shed. Have used these guys twice now and would HIGHLY recommend them! Ronald is quick to let you know if there is going to be any delay or issues. Everything these guys have done for me has been top notch!!"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 mb-20 text-center">
          <Link
            href="#"
            className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
          >
            get Your Quote Today <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
      <section className="container px-6 max-w-7xl mx-auto">
        <div>
          <div className="py-5">
            <h2
              id="residential"
              className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 py-6"
            >
              Commercial Electricial Services
            </h2>
            <p className="py-2 text-xl">
              When you need electrical services for your business, our team is
              ready to assist! We provide a comprehensive suite of electrical
              services at prices that are hard to beat. Below is a glimpse of
              the commercial electrical services we offer to businesses in
              Waldorf:
            </p>
            <div className="my-10 lg:my-20 text-lg lg:grid grid-cols-2 gap-10">
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Electrical Installation:</p>
                <p className="py-5">
                  This includes installing wiring and electrical systems for new
                  constructions, whether residential, commercial, or industrial
                  buildings.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Lighting Installation:</p>
                <p className="py-5">
                  Illuminate every room perfectly with our specialized lighting
                  installation expertise.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Lighting Repair:</p>
                <p className="py-5">
                  Restore brilliance efficiently with our comprehensive lighting
                  repair services.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-5">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-5">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Ring floodlight installation:</p>
                <p className="py-2">
                  Enhance security with clarity. Expert Ring floodlight
                  installation for vigilant homes.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Panel Upgrades:</p>
                <p className="py-2">
                  Upgrading a home or building's electrical panel to accommodate
                  a higher power capacity.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Dimmer Switch Installation:</p>
                <p className="py-2">
                  Set the mood to save energy. Expert dimmer lighting switch
                  installation for ambiance.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Home EV Charger Installation:</p>
                <p className="py-2">
                  With the rise in electric vehicles, installing home and
                  business charging stations has become a common service.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Surge Protection:</p>
                <p className="py-2">
                  Installing whole-house surge protectors to protect appliances
                  and electronics from voltage spikes.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Dimmer Switch Installation:</p>
                <p className="py-2">
                  Set the mood to save energy. Expert dimmer lighting switch
                  installation for ambiance.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Attic Fan Installation:</p>
                <p className="py-2">
                  Optimize airflow & reduce heat: Premier attic fan installation
                  for home comfort.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Outdoor Lighting Installation:</p>
                <p className="py-2">
                  Enhance curb appeal and security with our expert outdoor
                  lighting installation.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Home Generator Installation:</p>
                <p className="py-2">
                  Installing and maintaining backup generators for homes and
                  businesses.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Circuit Breaker Installation:</p>
                <p className="py-2">
                  Safeguard your electric flow. Precise circuit breaker
                  installation for peak protection.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Basement wiring:</p>
                <p className="py-2">
                  Power up your lower level. Expert basement wiring ensures
                  reliable connections & safety.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Electrical Panel Upgrade:</p>
                <p className="py-2">
                  Boost your home's power hub. Professional panel upgrade for
                  modern electrical demands.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Landscape Lighting:</p>
                <p className="py-2">
                  Illuminate your outdoors. Expert landscape lighting for
                  beauty, safety, and ambiance.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold">Smoke detector installation:</p>
                <p className="py-2">
                  Prioritize safety. Expert smoke detector installation for
                  alertness & peace of mind.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold ">Motion Lighting Installation:</p>
                <p className="py-2">
                  Light up when you move. Expert motion lighting installation
                  for convenience & safety.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold ">USB Port Installation:</p>
                <p className="py-2">
                  Modernize your outlets for the digital age; convenient and
                  expert USB port installations keep your devices charged and
                  ready.
                </p>
              </div>
              <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded my-5">
                <p className="font-bold ">Home Remodeling Projects:</p>
                <p className="py-2">
                  Revitalize your living space with expert electrical upgrades
                  and installations tailored to your remodeling needs.
                </p>
              </div>
            </div>
            <div className="mt-20 mb-10 text-center">
              <Link
                href="#"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                get Your Quote Today <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonials /> */}

      <Footer />
    </>
  )
}

export default electricianWaldorfMD
