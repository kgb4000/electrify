import React from 'react'
import PageContactForm from '@/components/PageContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GetQuoteForm from '@/components/GetQuoteForm'
import Link from 'next/link'

const electricalServices = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('https://images.pexels.com/photos/942316/pexels-photo-942316.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-center bg-no-repeat bg-cover h-40"></div>
      <div>
        <div className="container mx-auto w-5xl py-10 flex flex-row px-6 justify-center items-center">
          <div className="basis-6/12">
            <h1 className="text-6xl font-bold tracking-tight sm:text-8xl pb-6">
              Commercial Electric Services
            </h1>
            <p className="py-2 text-xl">
              At Electrify electric, we know how crucial it is to find a
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
            <p className="py-2 text-xl font-bold">
              For immediate assistance in Southern, Maryland, reach out to us
              today at 240-467-5116 or complete our contact form to kickstart
              your service with experts who care.
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
        <div className="container px-6 max-w-7xl mx-auto">
          <div>
            <div className="py-20">
              <h2
                id="residential"
                className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 py-6"
              >
                Commercial Electricial Services
              </h2>
              <p className="py-2 text-xl">
                When you need electrical services our team of electricians is
                ready to assist! We provide a comprehensive suite of electrical
                services at prices that are hard to beat. Below is a glimpse of
                the residential electrical services we offer:
              </p>
              <div className="my-10 lg:my-20 text-lg grid grid-cols-2 gap-10">
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Electrical Installation:</p>
                  <p className="py-5">
                    This includes installing wiring and electrical systems for
                    new constructions, whether residential, commercial, or
                    industrial buildings.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Lighting Installation:</p>
                  <p className="py-5">
                    Illuminate every room perfectly with our specialized
                    lighting installation expertise.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Lighting Repair:</p>
                  <p className="py-5">
                    Restore brilliance efficiently with our comprehensive
                    lighting repair services.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Recessed Lighting Installation:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Recessed Lighting Installation:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Ring floodlight installation:</p>
                  <p className="py-2">
                    Enhance security with clarity. Expert Ring floodlight
                    installation for vigilant homes.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Panel Upgrades:</p>
                  <p className="py-2">
                    Upgrading a home or building's electrical panel to
                    accommodate a higher power capacity.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Dimmer Switch Installation:</p>
                  <p className="py-2">
                    Set the mood to save energy. Expert dimmer lighting switch
                    installation for ambiance.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Home EV Charger Installation:</p>
                  <p className="py-2">
                    With the rise in electric vehicles, installing home and
                    business charging stations has become a common service.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Surge Protection:</p>
                  <p className="py-2">
                    Installing whole-house surge protectors to protect
                    appliances and electronics from voltage spikes.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Dimmer Switch Installation:</p>
                  <p className="py-2">
                    Set the mood to save energy. Expert dimmer lighting switch
                    installation for ambiance.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Attic Fan Installation:</p>
                  <p className="py-2">
                    Optimize airflow & reduce heat: Premier attic fan
                    installation for home comfort.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Outdoor Lighting Installation:</p>
                  <p className="py-2">
                    Enhance curb appeal and security with our expert outdoor
                    lighting installation.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Home Generator Installation:</p>
                  <p className="py-2">
                    nstalling and maintaining backup generators for homes and
                    businesses.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Circuit Breaker Installation:</p>
                  <p className="py-2">
                    Safeguard your electric flow. Precise circuit breaker
                    installation for peak protection.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Basement wiring:</p>
                  <p className="py-2">
                    Power up your lower level. Expert basement wiring ensures
                    reliable connections & safety.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Electrical Panel Upgrade:</p>
                  <p className="py-2">
                    Boost your home's power hub. Professional panel upgrade for
                    modern electrical demands.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Landscape Lighting:</p>
                  <p className="py-2">
                    Illuminate your outdoors. Expert landscape lighting for
                    beauty, safety, and ambiance.
                  </p>
                </div>
                <div>
                  <p className="font-bold">Smoke detector installation:</p>
                  <p className="py-2">
                    Prioritize safety. Expert smoke detector installation for
                    alertness & peace of mind.
                  </p>
                </div>
                <div>
                  <p className="font-bold ">Motion Lighting Installation:</p>
                  <p className="py-2">
                    Light up when you move. Expert motion lighting installation
                    for convenience & safety.
                  </p>
                </div>
                <div>
                  <p className="font-bold ">USB Port Installation:</p>
                  <p className="py-2">
                    Modernize your outlets for the digital age; convenient and
                    expert USB port installations keep your devices charged and
                    ready.
                  </p>
                </div>
                <div>
                  <p className="font-bold ">Home Remodeling Projects:</p>
                  <p className="py-2">
                    Revitalize your living space with expert electrical upgrades
                    and installations tailored to your remodeling needs.
                  </p>
                </div>
              </div>
              <div className="mt-20 mb-10">
                <Link
                  href="#"
                  className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
                >
                  get Your Quote Today <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-20 mb-10">
            <Link
              href="#"
              className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
            >
              Get Your Quote Today <span aria-hidden="true">→</span>
            </Link>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default electricalServices
