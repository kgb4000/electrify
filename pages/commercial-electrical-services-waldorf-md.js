import React from 'react'
import PageContactForm from '@/components/PageContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GetQuoteForm from '@/components/GetQuoteForm'
import Link from 'next/link'
import WhyUs from '@/components/WhyUs'

import { NextSeo } from 'next-seo'

const electricalServices = () => {
  const SEO = {
    title:
      'Commercial Electrical Services in Waldorf, MD | Electrical Contractors!',
    description: `Looking for commercial electrical services in Waldorf, MD? We’re your trusted choice. Call Electrify Electric and get yours installed today!`,
    canonical:
      'https://electrify247.com/commercial-electrical-services-waldorf-md',
    openGraph: {
      title:
        'Commercial Electrical Services in Waldorf, MD | Electrical Contractors!',
      description: `Looking for commercial electrical services in Waldorf, MD? We’re your trusted choice. Call Electrify Electric and get yours installed today!`,
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
              Commercial Electrical Services in Waldorf, MD
            </h1>
            <p className="py-2 text-xl">
              At Electrify Electric, we know how crucial it is to find a
              trustworthy commercial electrician, especially when it comes to
              keeping your business power running. We strive to earn your trust
              by treating every home with the utmost respect and focusing on
              your priorities—affordable and high-quality service.
            </p>
            <p className="py-2 text-xl">
              Our team comprises seasoned commercial electricians are trained to
              excel in commercial electrical services, ensuring every job is
              done right the first time. We are here to address your electrical
              needs promptly, with a commitment to excellence and precision.
            </p>
            <p className="py-2 text-xl">
              For commercial electrical services in Waldorf, Maryland, contact
              us today at 240-467-5116 or complete our contact form to kickstart
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
      </section>
      <section>
        <div className="max-w-6xl mx-auto px-6">
          {' '}
          <h2 className="text-5xl font-bold mb-5">
            Businesses We Provide Commercial Services
          </h2>
          <p className="py-10 text-2xl">
            Unlike{' '}
            <Link
              href="residential-electrical-services-waldorf-md"
              className="text-green-600 underline"
            >
              residential services
            </Link>
            , commercial services require more robust systems, higher voltages,
            and more intricate design considerations because of the complex
            nature of commercial building design and the operations they
            support. We provide commercial electrical services for:
          </p>
          <div className=" lg:grid grid-cols-3 justify-center bg-slate-50 px-20 py-10">
            <li className="my-2 text-2xl">Retail Stores and Malls</li>
            <li className="my-2 text-2xl">Offices</li>
            <li className="my-2 text-2xl">Hotels and motels</li>
            <li className="my-2 text-2xl">Hospitals and clinics</li>
            <li className="my-2 text-2xl">Industrial factories</li>
            <li className="my-2 text-2xl">Warehouses</li>
            <li className="my-2 text-2xl">Restaurants and Cafes</li>
            <li className="my-2 text-2xl">Data centers</li>
            <li className="my-2 text-2xl">Schools and universities</li>
            <li className="my-2 text-2xl">Gyms and recreational facilities</li>
            <li className="my-2 text-2xl">Cinemas and theaters</li>
            <li className="my-2 text-2xl">Grocery stores and supermarkets</li>
            <li className="my-2 text-2xl">Gas stations</li>
            <li className="my-2 text-2xl">Agricultural Facilities</li>
            <li className="my-2 text-2xl">Construction Companies</li>
            <li className="my-2 text-2xl">Transportation Facilities</li>
            <li className="my-2 text-2xl">Auto Repair Shops</li>
            <li className="my-2 text-2xl">Hair Salons and Spas</li>
            <li className="my-2 text-2xl">Breweries and Distilleries</li>
            <li className="my-2 text-2xl">Entertainment Venues</li>
            <li className="my-2 text-2xl">Real Estate & Property Management</li>
          </div>
          <div className="mt-20 mb-10 text-center">
            <Link
              href="#"
              className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
            >
              Call Us Today <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container px-6 max-w-6xl mx-auto">
          <div className="py-5 lg:py-20">
            <h2 className="text-4xl font-bold tracking-tight text-black lg:text-6xl leading-10 py-6">
              Our Commercial Electrical Services
            </h2>
            <div className="py-5">
              <h3 className="text-3xl font-bold">
                Commercial Electrical Installations
              </h3>
              <div className="my-8 lg:my-8 text-lg md:grid grid-cols-2 gap-10">
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Electrical Panel Installation:</p>
                  <p className="py-5">
                    This includes installing wiring and electrical systems for
                    new constructions, whether residential, commercial, or
                    industrial buildings.
                  </p>
                </div>

                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Commercial Lighting Installation:</p>
                  <p className="py-5">
                    Illuminate every room perfectly with our specialized
                    lighting installation expertise.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Wiring and Rewiring Solutions:</p>
                  <p className="py-5">
                    Restore brilliance efficiently with our comprehensive
                    lighting repair services.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Switch and Outlet Installation:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Switch and Outlet Installation:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Transformer Installation:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Backup Generator Systems:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Electrical Panel Upgrades:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">
                    Electric Vehicle Charging Stations:
                  </p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Energy Management Systems:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-5">
              <h3 className="text-3xl font-bold">
                Electrical Maintenance and Repairs
              </h3>
              <div className="my-8 lg:my-8 text-lg md:grid grid-cols-2 gap-10">
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Electrical Safety Inspections:</p>
                  <p className="py-5">
                    This includes installing wiring and electrical systems for
                    new constructions, whether residential, commercial, or
                    industrial buildings.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Electrical Panel Maintenance:</p>
                  <p className="py-5">
                    This includes installing wiring and electrical systems for
                    new constructions, whether residential, commercial, or
                    industrial buildings.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded mb-5">
                  <p className="font-bold">Electrical Panel Upgrades:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Emergency Repair Services:</p>
                  <p className="py-5">
                    Illuminate every room perfectly with our specialized
                    lighting installation expertise.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">
                    Troubleshooting & Fault Detection:
                  </p>
                  <p className="py-5">
                    Restore brilliance efficiently with our comprehensive
                    lighting repair services.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">Transformer Maintenance:</p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">
                    Regular Preventive Maintenance Contracts:
                  </p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
                <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                  <p className="font-bold">
                    Energy Management System Monitoring & Upkeep:
                  </p>
                  <p className="py-5">
                    Modernize spaces with our expert recessed lighting
                    installation for a sleek look.
                  </p>
                </div>
              </div>
              <div className="py-5">
                <h3 className="text-3xl font-bold">
                  Specialty Electrical Services
                </h3>
                <div className="my-8 lg:my-8 text-lg md:grid grid-cols-2 gap-10">
                  <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                    <p className="font-bold">
                      Modern/vintage lighting fixtures:
                    </p>
                    <p className="py-5">
                      This includes installing wiring and electrical systems for
                      new constructions, whether residential, commercial, or
                      industrial buildings.
                    </p>
                  </div>
                  <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                    <p className="font-bold">Drop ceiling lighting fixtures:</p>
                    <p className="py-5">
                      Illuminate every room perfectly with our specialized
                      lighting installation expertise.
                    </p>
                  </div>
                  <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                    <p className="font-bold">
                      Suspended LED lighting fixtures:
                    </p>
                    <p className="py-5">
                      Restore brilliance efficiently with our comprehensive
                      lighting repair services.
                    </p>
                  </div>
                  <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                    <p className="font-bold">
                      Exit/emergency lighting fixtures:
                    </p>
                    <p className="py-5">
                      Modernize spaces with our expert recessed lighting
                      installation for a sleek look.
                    </p>
                  </div>
                  <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                    <p className="font-bold">Hospital bed lighting fixtures:</p>
                    <p className="py-5">
                      Modernize spaces with our expert recessed lighting
                      installation for a sleek look.
                    </p>
                  </div>
                  <div className="p-10 border-spacing-10 border-slate-50 bg-slate-100 rounded">
                    <p className="font-bold">
                      Refrigeration lighting fixtures:
                    </p>
                    <p className="py-5">
                      Modernize spaces with our expert recessed lighting
                      installation for a sleek look.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 mb-10">
              <Link
                href="#"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                Get Your Quote Today <span aria-hidden="true">→</span>
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
      </section>
      <Footer />
    </>
  )
}

export default electricalServices
