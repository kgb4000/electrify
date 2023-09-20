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
      <div className="bg-[url('https://images.pexels.com/photos/942316/pexels-photo-942316.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-center bg-no-repeat bg-cover">
        <div className="mx-auto max-w-6xl py-40 sm:py-30 px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
              Electrical Services
            </h1>
            <p className="mt-6 text-2xl leading-10 text-white">
              Residential and commercial electrical services we offer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-yellow-400 w-50 py-2.5 px-4 text-base font-semibold text-black shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Call (240) 476-5116
              </a>
              <a
                href="#"
                className="text-base font-semibold leading-6 text-white"
              >
                Get Your Quote Today <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-5xl py-10 sm:py-12 lg:py-16 px-6">
          <div>
            <h2
              id="residential"
              className="text-4xl text-center font-bold tracking-tight text-black sm:text-6xl leading-10 py-5"
            >
              Residential Electricial Services
            </h2>
            <p className="py-2 text-xl text-center">
              Every home is a sanctuary, and its electrical system should be
              nothing short of perfect.
            </p>
            <p className="py-2 text-xl text-center">
              Our electrical services include:
            </p>
            <div className="grid lg:grid-cols-2 gap-10 my-10 lg:my-20 text-lg max-w-3xl mx-auto">
              <div>
                <p className="font-bold">Electrical Installation: </p>
                <p className="py-2">
                  This includes installing wiring and electrical systems for new
                  constructions, whether residential, commercial, or industrial
                  buildings.
                </p>
              </div>
              <div>
                <p className="font-bold">Lighting Installation:</p>
                <p className="py-2">
                  Illuminate every room perfectly with our specialized lighting
                  installation expertise.
                </p>
              </div>
              <div>
                <p className="font-bold">Lighting Repair:</p>
                <p className="py-2">
                  Restore brilliance efficiently with our comprehensive lighting
                  repair services.
                </p>
              </div>
              <div>
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-2">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div>
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-2">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div>
                <p className="font-bold">Ring floodlight installation:</p>
                <p className="py-2">
                  Enhance security with clarity. Expert Ring floodlight
                  installation for vigilant homes.
                </p>
              </div>
              <div>
                <p className="font-bold">Panel Upgrades:</p>
                <p className="py-2">
                  Upgrading a home or building's electrical panel to accommodate
                  a higher power capacity.
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
                <p className="font-bold">Home EV Charger Installation:</p>
                <p className="py-2">
                  With the rise in electric vehicles, installing home and
                  business charging stations has become a common service.
                </p>
              </div>
              <div>
                <p className="font-bold">Surge Protection:</p>
                <p className="py-2">
                  Installing whole-house surge protectors to protect appliances
                  and electronics from voltage spikes.
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
                  Optimize airflow & reduce heat: Premier attic fan installation
                  for home comfort.
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
          </div>
          <div className="text-center mt-20 mb-10">
            <Link
              href="#"
              className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
            >
              get Your Quote Today <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-10 sm:py-12 lg:py-16 px-6">
          <div id="commercial">
            <h2 className="text-4xl text-center font-bold tracking-tight text-black sm:text-6xl leading-10 py-10">
              Commercial Electrical Services
            </h2>
            <p className="py-2 text-xl text-center">
              Every home is a sanctuary, and its electrical system should be
              nothing short of perfect.
            </p>
            <p className="py-2 text-xl text-center">
              Our electrical services include:
            </p>
            <div className="grid lg:grid-cols-2 gap-10 my-10 lg:my-20 text-lg max-w-3xl mx-auto">
              <div>
                <p className="font-bold">Electrical Installation: </p>
                <p className="py-2">
                  This includes installing wiring and electrical systems for new
                  constructions, whether residential, commercial, or industrial
                  buildings.
                </p>
              </div>
              <div>
                <p className="font-bold">Lighting Installation:</p>
                <p className="py-2">
                  Illuminate every room perfectly with our specialized lighting
                  installation expertise.
                </p>
              </div>
              <div>
                <p className="font-bold">Lighting Repair:</p>
                <p className="py-2">
                  Restore brilliance efficiently with our comprehensive lighting
                  repair services.
                </p>
              </div>
              <div>
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-2">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div>
                <p className="font-bold">Recessed Lighting Installation:</p>
                <p className="py-2">
                  Modernize spaces with our expert recessed lighting
                  installation for a sleek look.
                </p>
              </div>
              <div>
                <p className="font-bold">Ring floodlight installation:</p>
                <p className="py-2">
                  Enhance security with clarity. Expert Ring floodlight
                  installation for vigilant homes.
                </p>
              </div>
              <div>
                <p className="font-bold">Panel Upgrades:</p>
                <p className="py-2">
                  Upgrading a home or building's electrical panel to accommodate
                  a higher power capacity.
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
                <p className="font-bold">Home EV Charger Installation:</p>
                <p className="py-2">
                  With the rise in electric vehicles, installing home and
                  business charging stations has become a common service.
                </p>
              </div>
              <div>
                <p className="font-bold">Surge Protection:</p>
                <p className="py-2">
                  Installing whole-house surge protectors to protect appliances
                  and electronics from voltage spikes.
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
                  Optimize airflow & reduce heat: Premier attic fan installation
                  for home comfort.
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
          </div>
          <div className="text-center mt-20 mb-10">
            <Link
              href="#"
              className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
            >
              Get Your Quote Today <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default electricalServices
