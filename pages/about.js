import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from 'next/link'
const About = () => {
  return (
    <>
      <Header />
      <div className="bg-[url('https://images.unsplash.com/photo-1583954964358-1bd7215b6f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGVsZWN0cmljaWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60')] bg-center bg-no-repeat bg-cover">
        <div className="mx-auto max-w-4xl py-40 sm:py-30 px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-8xl">
              About Us
            </h1>
            <p className="mt-6 text-2xl leading-10 text-white">
              Learn more about Electrify Electric and why we're the right fit
              for your residential or commercial electrical projects.
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
        <div className="mx-auto max-w-6xl py-10 sm:py-12 lg:py-16">
          <div className="text-center w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
              How we started and where we're going.
            </p>
          </div>
          <div className="mx-auto max-w-3xl py-5 px-6 sm:py-12 lg:py-16">
            <p className="py-5">
              At Electrify Electric LLC, we give the most efficient service at
              the highest possible quality and in the spirit of harmony. We earn
              the reputation for honesty and exceptional work.
            </p>
            <p className="py-5">
              Our level of dedication matches our level of experience and that
              is exactly what clients have come to know and expect. Whether
              working on a new construction project or wiring a home for a
              theater system, we take the time to do the job right the first
              time.
            </p>
            <p className="py-5">
              In 2018, Jerome Monticquee founded Electrify Electric, LLC, and
              began providing residential electrical services.
            </p>
            <p className="py-5">
              y focusing on custom electrical renovations, the company has built
              a five-star reputation. Since then, we have expanded our services
              to include electrical upgrades, fire alarms, public address
              systems and commercial remodeling in both the commercial and
              residential spaces.
            </p>
            <p className="py-5">
              Our mission at Electrify Electric, LLC is to provide the best
              possible electrical service experience and highest level of
              customer service possible while maintaining our core values of
              safety, teamwork, and professionalism.
            </p>
            <p className="py-5">
              Electrify Electric’s steady growth and stellar reputation have
              demonstrated the continuing efforts of our dedicated staff in
              delivering superior services.
            </p>
            <p className="py-5">
              Our competitive pricing and certifications as a Minority Business
              Enterprise (MBE) and Small Business Reserve (SBR) vendor afford
              our partners opportunities to meet their participation goals.
            </p>
            <p className="py-5">
              Electrify Electric, LLC was named Best of Waldorf 2019 Electrical
              Installation Service winner.
            </p>
            <p className="py-5">
              Electrify Electric LLC has steadily increased its market share in
              the Mid-Atlantic region as a direct result of the growth and
              capabilities of the company and staff. Electrician Fixing Light
              Fitting in Newly Decorated Room
            </p>
            <div className="text-center m-20">
              <a
                href="#"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                See All Our Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="text-center w-4xl">
            <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Approach
            </h2>
            <p className="m-6 text-lg leading-8 text-gray-600 text-center">
              Electrify Electric, LLC has over 20 years experience in the
              Electrical Industry.
            </p>
            <ul className="space-y-6">
              <li className="text-3xl">
                We are Maryland Minority Enterprise Certified
              </li>
              <li className="text-3xl">
                Master Electrician Licenses in MD, VA, and DC
              </li>
              <li className="text-3xl">
                We warrant our service installs for one year
              </li>
            </ul>
            <div className="text-center mt-20">
              <Link
                href="#"
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

export default About
