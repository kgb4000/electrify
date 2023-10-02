import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'

const FAQ = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVsZWN0cmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60')] bg-center bg-no-repeat bg-cover">
        <div className="mx-auto max-w-4xl py-40 sm:py-30 px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-8xl">
              FAQs
            </h1>
            <p className="mt-6 text-2xl leading-10 text-white">
              Frequently asked questions
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
      {/* <Hero
        // backgroundImage="/images/hero-img.jpg"
        h1text="About Us"
        subtext="Learn more about Electrify Electric and why we're the right fit for your residential or commercial electrical projects."
      /> */}
      <main>
        <div className="mx-auto max-w-7xl py-10 sm:py-12 lg:py-16">
          <div className="text-center w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center max-w-2xl mx-auto">
              If you still have more questions, please use our contact form,
              give us a call at 240-476-5116 or email us at
              Jerome@Electrify247.com.
            </p>
          </div>
          <div className="mx-auto max-w-5xl py-5 px-6 sm:py-12 lg:py-16">
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Why should I use a Master Electrician?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Can you do electrical work without a license in Maryland?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                What can I do to lower my electric bill?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                What kind of electrical panel do I need?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                What is the difference between 110 and 220 volts?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Can I install electrical wiring myself?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Why is my electrical panel buzzing?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Do I need to replace an outlet if the plug is loose?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Why Do My Lights Flicker?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                What does “grounding” mean?
              </h3>
              <p className="py-5 text-xl leading-10">
                At Electrify Electric LLC, we give the most efficient service at
                the highest possible quality and in the spirit of harmony. We
                earn the reputation for honesty and exceptional work.
              </p>
            </div>
            <div className="text-center m-20">
              <Link
                href="/electrical-services"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                See All Our Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FAQ
