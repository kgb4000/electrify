import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GetQuoteForm from '@/components/GetQuoteForm'
import Footer from '@/components/Footer'
import Testimonials from '@/components/Testimonials'
import Testimonial from '@/components/Testimonial'

const electricianWaldorfMD = () => {
  return (
    <>
      <Header />
      {/* <Hero
        Hero
        h1text="Electrical Contractors and Electricians in Waldorf, MD"
        subtext="We're electricians serving residential
            and commerical customers in Waldorf, Maryland"
      /> */}
      <div className="bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljaWFuJTIwd29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60')] bg-center bg-no-repeat bg-cover">
        <div className="mx-auto max-w-6xl py-40 sm:py-30 px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-8xl">
              Electrical Contractor and Electrician in Waldorf, MD
            </h1>
            <p className="mt-6 text-2xl leading-10 text-white">
              We're electricians serving residential and commerical customers in
              Waldorf, Maryland
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
        <div className="mx-auto max-w-6xl py-10 sm:py-12 lg:py-16">
          <div className="text-center w-4xl">
            {/* <h2 className="text-center text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Why Choose Electrify Electric
            </h2> */}
          </div>
          <div className="mx-auto max-w-5xl py-10 sm:py-12 lg:py-16 px-6">
            <div>
              <div>
                <GetQuoteForm />
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 py-5">
                  Electrician in Waldorf, MD
                </h2>
                <p className="py-5">
                  Finding a reliable electrician in Waldorf, Maryland, can be a
                  task.
                </p>
                <p className="py-5">
                  Every homeowner or business owner wants to ensure safety,
                  efficiency, and value for money.
                </p>
                <p className="py-5">That’s where we come in.</p>
                <p className="py-5">We’re Electrify Electric.</p>
                <p className="py-5">
                  We're your neighbors, local, and trusted electricians in
                  Waldorf.
                </p>
                <p className="py-5">
                  From the charming residences to its bustling business centers,
                  our team has been the cornerstone of quality electrical
                  solutions for years.
                </p>
                <p className="py-5">
                  We have a deep-rooted commitment to the community and pride
                  ourselves on understanding the unique electrical needs of
                  Waldorf residents and businesses alike.
                </p>
                <p className="py-5">
                  So, whether you're renovating your dream home, setting up a
                  new office, or simply needing a quick repair, you can count on
                  us to be there with unmatched expertise and genuine care.
                </p>
                <p className="py-5">
                  Experience electrical service in Waldorf as it should be:
                  local, reliable, and tailored to you.
                </p>
              </div>
              <div className="mt-20">
                <a
                  href="#"
                  className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
                >
                  Call Us Today <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="mt-20">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 py-5">
                  Residential Electrician in Waldorf, MD
                </h2>
                <p className="py-2">
                  Every home is a sanctuary, and its electrical system should be
                  nothing short of perfect.
                </p>
                <p className="py-2">Our electrical services include:</p>
                <div className="grid lg:grid-cols-2 gap-6 py-2">
                  <div>
                    <p className="font-bold">Electrical Installation: </p>
                    <p className="py-2">
                      This includes installing wiring and electrical systems for
                      new constructions, whether residential, commercial, or
                      industrial buildings.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Lighting Installation:</p>
                    <p className="py-2">
                      Illuminate every room perfectly with our specialized
                      lighting installation expertise.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Lighting Repair:</p>
                    <p className="py-2">
                      Restore brilliance efficiently with our comprehensive
                      lighting repair services.
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
                      Upgrading a home or building's electrical panel to
                      accommodate a higher power capacity.
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
                      Boost your home's power hub. Professional panel upgrade
                      for modern electrical demands.
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
                      Light up when you move. Expert motion lighting
                      installation for convenience & safety.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold ">USB Port Installation:</p>
                    <p className="py-2">
                      Modernize your outlets for the digital age; convenient and
                      expert USB port installations keep your devices charged
                      and ready.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold ">Home Remodeling Projects:</p>
                    <p className="py-2">
                      Revitalize your living space with expert electrical
                      upgrades and installations tailored to your remodeling
                      needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <a
                  href="#"
                  className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
                >
                  Get Your Quote Today <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="mt-20">
                <h2 className="text-4xl font-bold tracking-tight text-black sm:text-6xl leading-10 py-5 ">
                  Commercial Electrician in Waldorf, Maryland
                </h2>
                <p className="py-2">
                  Every business in Waldorf needs reliable electricity to
                  perform and to be profitable.
                </p>
                <p className="py-2">
                  That's why our commercial services include:
                </p>
                <div className="grid lg:grid-cols-2 gap-6 py-2">
                  <div>
                    <p className="font-bold">Commercial Service Contracts:</p>
                    <p className="py-2">
                      Empower your business. Commercial service contracts for
                      consistent electrical health.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Transformer installation:</p>
                    <p className="py-2">
                      Power distribution mastered. Expert transformer
                      installation for efficient energy flow.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Office building build-out:</p>
                    <p className="py-2">
                      Elevate your workspace. Expert office building build-out
                      for efficient & modern spaces.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Office building renovations:</p>
                    <p className="py-2">
                      Revitalize your workspace. Office building renovations for
                      a productive environment.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Transfer replacement:</p>
                    <p className="py-2">
                      Shift power seamlessly. Expert transfer replacement for
                      reliable electrical transitions.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Electrical Panel upgrade:</p>
                    <p className="py-2">
                      Power your future. Expert panel upgrade tailored to modern
                      appliances & technology.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold">Lighting replacement:</p>
                    <p className="py-2">
                      Rejuvenate your spaces. Expert lighting replacement for
                      brightness & energy savings.
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
                    <p className="font-bold">Emergency repairs:</p>
                    <p className="py-2">
                      Immediate response, same-day service, expert solutions:
                      Rely on us for urgent electrical repairs.
                    </p>
                  </div>
                </div>
                <div className="mt-20">
                  <a
                    href="#"
                    className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
                  >
                    Get Your Quote Today <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-6 bg-zinc-50 py-28">
        <div className="mx-auto max-w-6xl">
          <section className="mb-32 text-center">
            <div className="text-center w-4xl px-6">
              <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Customer reviews
              </h2>
              <p className="mx-auto max-w-2xl mt-6 text-lg leading-8 text-gray-600 text-center">
                See what more than 240 customers on Google had to say about our
                services.
              </p>
            </div>
            <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12 my-10 px-6">
              <Testimonial
                name="Karen Gray"
                text="I can ALWAYS count on Electrify Electric, LLC to understand my vision and deliver quality service. It's not always easy to find a company that isn't looking to drain your pockets, but I've found that company with Electrify Electric, LLC."
              />
              <Testimonial
                name="Vin Gee"
                text="This company provided the best service and installation process for a 240v connection from my breaker box to an electric range. Cable routing was clean and professional. The price was very reasonable for the level of service provided."
              />
              <Testimonial
                name="Dorthy M"
                text="Excellent work! Ron and Hez did an amazing job! Knowledgeable and professional team. Had some outlets not functioning properly. They recognized the issues (different issues for each outlet) and got everything working like new! I trust them to keep my home functional and safe! Thank you!"
              />
            </div>
            <div className="text-center mt-20">
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block  bg-yellow-400 rounded px-10 py-5 text-base  font-semibold  text-black uppercase leading-normal text-primary transition duration-150 ease-in-out"
              >
                Read More Testimonials
              </button>
            </div>
          </section>
        </div>
      </div>
      {/* <Testimonials /> */}
      <div className="bg-green-600">
        <div className="mx-auto max-w-6xl py-10 sm:py-12 lg:py-32">
          <div className="text-center w-4xl">
            <h2 className="text-center text-4xl font-bold tracking-tight text-yellow-400 sm:text-5xl">
              Why Choose Electrify Electric
            </h2>
          </div>
          <div className="mx-auto max-w-3xl py-10 sm:py-12 lg:py-16 px-6">
            <div>
              <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                Expertise You Can Trust
              </h3>
              <p className="text-white text-xl/loose">
                Our team consists of licensed and seasoned electricians with
                years of serving the Southern Maryland community. When you
                choose Electrify Electric, you choose unparalleled knowledge and
                skills, ensuring your electrical needs are addressed precisely.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                Peace of Mind, Guaranteed
              </h3>
              <p className="text-white text-xl/loose">
                Worried about your new electrical setup? Don't be. When you
                choose us, you're not just getting top-tier electrical service.
                You're also getting a rock-solid ONE-YEAR warranty on all our
                service installs. That's 365 days of zero stress, zero worries,
                and 100% confidence that we stand by our work.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                Round-the-clock Service{' '}
              </h3>
              <p className="text-white text-xl/loose">
                We understand that electrical issues don't always arise during
                business hours. That's why our 24-hour emergency electrical
                service is always ready, offering you peace of mind at all
                times.
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                Ahead of the Tech Curve
              </h3>
              <p className="text-white text-xl/loose">
                In an ever-evolving electrical landscape, we're pioneers. Our
                commitment to ongoing training and investment in the latest
                technology ensures we bring you the most efficient and advanced
                solutions.
              </p>
            </div>
            {/* <div>
              <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                Transparent Pricing
              </h3>
              <p className="text-white text-xl/loose">
                No hidden fees, no surprises. We pride ourselves on offering
                competitive pricing with clear breakdowns, ensuring you get
                value for every dollar spent.
              </p>
            </div> */}
            <div>
              <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                Our Commitment to Safety
              </h3>
              <p className="text-white text-xl/loose">
                No matter how small, every task is approached with unparalleled
                safety measures. Our rigorous protocols ensure that your space
                remains secure and hazard-free.
              </p>
            </div>
            <div className="mt-20 text-center">
              <a
                href="#"
                className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              >
                Call Us Today <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default electricianWaldorfMD
