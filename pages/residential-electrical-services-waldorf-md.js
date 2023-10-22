import React from 'react'
import PageContactForm from '@/components/PageContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GetQuoteForm from '@/components/GetQuoteForm'
import Link from 'next/link'
import Testimonial from '@/components/Testimonial'

import { NextSeo } from 'next-seo'

const electricalServices = () => {
  const SEO = {
    title: 'Residential Electrical Services in Waldorf, MD | Call Today!',
    description: `Looking for professional residential electric services in Waldorf, MD? Call Electrify Electric and get yours installed today!`,
    canonical:
      'https://electrify247.com/residential-electrical-services-waldorf-md',
    openGraph: {
      title: 'Residential Electrical Services in Waldorf, MD | Call Today!',
      description: `Looking for professional residential electric services in Waldorf, MD? Call Electrify Electric and get yours installed today!`,
      image: [{}],
    },
  }
  return (
    <>
      <NextSeo {...SEO} />
      <Header />
      <div className="bg-[url('https://images.pexels.com/photos/942316/pexels-photo-942316.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-center bg-no-repeat bg-cover h-40"></div>
      <section className="mt-10">
        <div className="container mx-auto w-5xl py-5 flex flex-row px-6 justify-center items-center">
          <div className="basis:12/12 lg:basis-6/12">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl pb-6">
              Residential Electrical Services
            </h1>
            <p className="py-2 text-xl">
              At Electrify Electric, we know how crucial it is to find a
              trustworthy electrician, especially when it comes to maintaining
              the sanctity of your private space. We strive to earn your trust
              by treating every home with the utmost respect and focusing on
              your priorities—affordable and high-quality service.
            </p>
            <p className="py-2 text-xl">
              Our team comprises seasoned electricians, extensively trained to
              excel in residential electrical services, ensuring every job is
              done right the first time. We are here to address your electrical
              needs promptly, with a commitment to excellence and precision.
            </p>
            <p className="py-2 text-xl">
              For immediate assistance in Waldorf, Maryland, reach out to us
              today at{' '}
              <a
                href="tel:12404675166"
                className="text-white font-bold bg-green-600 px-4"
              >
                240-467-5116
              </a>{' '}
              or complete our contact form to kickstart your service with
              experts who care.
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
      </section>
      <section>
        <div className="container px-6 max-w-5xl mx-auto py-5">
          <h2
            id="residential"
            className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 py-6"
          >
            Residential/Home Wiring Solutions
          </h2>
          <p className="py-2 text-xl">
            When you need an{' '}
            <Link
              href="/electrician-waldorf-md"
              className="text-green-600 underline"
            >
              electrician
            </Link>{' '}
            or electrical contractor, we're here for you! We provide a suite of
            residential electrical services at prices that are hard to beat.
            Below are some of the services we provide.
          </p>
          <div className="my-10 lg:my-20 text-lg md:grid grid-cols-2 gap-5">
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Residential Wiring:</p>
              <p className="py-5">
                Expert installation and repair of home electrical systems for a
                safe and efficient living environment.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Electrical Panel Upgrades:</p>
              <p className="py-2">
                Boost your home's electrical capacity and safety with our
                comprehensive panel upgrade services.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Home Generator Installation:</p>
              <p className="py-2">
                Stay prepared for power outages with our expert home generator
                installation and setup.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Home EV Charger Installation:</p>
              <p className="py-2">
                Power up your electric vehicle conveniently at home with our
                specialized EV charger installations.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Circuit Breaker replacements:</p>
              <p className="py-2">
                Make sure your home is safe with professional circuit breaker
                upgrades and replacements.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Lighting Installation and Repair:</p>
              <p className="py-5">
                Enhancing your home's ambiance with tailored lighting solutions
                and prompt repair services.
              </p>
            </div>
            <Link
              href="/ceiling-fan-installation-waldorf-md"
              className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5 hover:bg-green-600 hover:text-white"
            >
              <p className="font-bold">Ceiling Fan Installation:</p>
              <p className="py-5">
                Optimize room comfort and aesthetics with our expert ceiling fan
                installation services.
              </p>
            </Link>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Outlet Wiring:</p>
              <p className="py-5">
                Secure and functional outlet wiring to power your devices and
                appliances with ease.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">GFCI Outlet Installation:</p>
              <p className="py-5">
                Prioritize safety in moisture-prone areas with our GFCI outlet
                installations, reducing electrical shock risks.
              </p>
            </div>
            <Link
              href="/recessed-lighting-installation-waldorf-md"
              className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5 hover:bg-green-600 hover:text-white"
            >
              <p className="font-bold">Recessed Lighting Installation:</p>
              <p className="py-5">
                Seamlessly integrate modern illumination into your ceilings with
                our specialized recessed lighting services.
              </p>
            </Link>

            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Dimmer Switch Installation:</p>
              <p className="py-2">
                Enhance room ambiance and save energy with our professional
                dimmer switch installations.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Surge Protection:</p>
              <p className="py-2">
                Guard your home electronics against unexpected power surges with
                our robust surge protection solutions.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold ">
                Electrical Code Violation Correction:
              </p>
              <p className="py-2">
                Restore your property's safety and compliance with our
                meticulous electrical code violation corrections.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Attic Fan Installation:</p>
              <p className="py-2">
                Promote efficient home cooling and improved air circulation with
                our attic fan installation services.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Outdoor Lighting Installation:</p>
              <p className="py-2">
                Enhance your property's exterior and security with our tailored
                outdoor lighting installations.
              </p>
            </div>

            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Circuit Breaker Installation:</p>
              <p className="py-2">
                Safeguard your electric flow. Precise circuit breaker
                installation for peak protection.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Basement wiring:</p>
              <p className="py-2">
                Power up your lower level. Transform your basement into a
                functional space with our comprehensive electrical wiring
                services.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Landscape Lighting:</p>
              <p className="py-2">
                Illuminate your outdoors. Expert landscape lighting for beauty,
                safety, and ambiance.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold">Smoke detector installation:</p>
              <p className="py-2">
                Protect your loved ones with our professional smoke detector
                installations, ensuring timely alerts during emergencies.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold ">Security Light Installation:</p>
              <p className="py-2">
                Boost your property's security and nighttime visibility with our
                durable security light installations.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold ">USB Port Installation:</p>
              <p className="py-2">
                Modernize your outlets for the digital age; convenient and
                expert USB port installations keep your devices charged and
                ready.
              </p>
            </div>
            <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
              <p className="font-bold ">Pool & Hot Tub Wiring:</p>
              <p className="py-2">
                Safely power your relaxation spaces with our specialized wiring
                services for pools and hot tubs.
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
      </section>
      <section>
        <div className="container max-w-7xl mx-auto px-6 py-15">
          <h2 className="text-3xl font-bold tracking-tight text-black lg:text-4xl leading-10 py-5 text-center">
            Testimonials
          </h2>
        </div>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="lg:grid grid-cols-3">
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
      </section>
      <div className="mt-20 mb-10 text-center">
        <Link
          href="#"
          className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
        >
          get Your Quote Today <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* <div className="text-center mt-20 mb-10">
            <Link
              href="#"
              className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
            >
              Get Your Quote Today <span aria-hidden="true">→</span>
            </Link>
          </div> */}

      <Footer />
    </>
  )
}

export default electricalServices
