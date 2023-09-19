import React from 'react'
import GetQuoteForm from './GetQuoteForm'

const WhyUs = () => {
  return (
    <>
      <div className="bg-green-600">
        <div className="mx-auto max-w-6xl py-10 sm:py-12 lg:py-32">
          <div className="mx-auto max-w-5xl py-10 sm:py-12 lg:py-16 px-6">
            <div>
              <GetQuoteForm />
              <div>
                <div className="w-4xl">
                  <h2 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-5xl mb-10">
                    Why Choose Electrify Electric
                  </h2>
                </div>
                <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                  Expertise You Can Trust
                </h3>
                <p className="text-white">
                  Our team consists of licensed and seasoned electricians with
                  years of serving the Southern Maryland community. When you
                  choose Electrify Electric, you choose unparalleled knowledge
                  and skills, ensuring your electrical needs are addressed
                  precisely.
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                  Peace of Mind, Guaranteed
                </h3>
                <p className="text-white">
                  Worried about your new electrical setup? Don't be. When you
                  choose us, you're not just getting top-tier electrical
                  service. You're also getting a rock-solid ONE-YEAR warranty on
                  all our service installs. That's 365 days of zero stress, zero
                  worries, and 100% confidence that we stand by our work.
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                  Round-the-clock Service{' '}
                </h3>
                <p className="text-white">
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
                <p className="text-white">
                  In an ever-evolving electrical landscape, we're pioneers. Our
                  commitment to ongoing training and investment in the latest
                  technology ensures we bring you the most efficient and
                  advanced solutions.
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                  Transparent Pricing
                </h3>
                <p className="text-white">
                  No hidden fees, no surprises. We pride ourselves on offering
                  competitive pricing with clear breakdowns, ensuring you get
                  value for every dollar spent.
                </p>
              </div>
              <div>
                <h3 className="text-4xl font-bold tracking-tight text-yellow-400 sm:text-3xl py-5">
                  Our Commitment to Safety
                </h3>
                <p className="text-white">
                  No matter how small, every task is approached with
                  unparalleled safety measures. Our rigorous protocols ensure
                  that your space remains secure and hazard-free.
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs
