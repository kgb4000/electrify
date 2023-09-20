import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <>
      <div class="container mx-auto px-4 max-w-5xl py-20">
        <div className="text-center w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Electrical Contractors and Electricians in Southern
            Maryland
          </h2>
          <div className="mt-6 text-center text-lg leading-8 text-gray-600 ">
            <p className="text-xl leading-10 my-6">
              Hello, we're Electrify Electric. Founded by Jerome Monticquee, a
              certified electrician with a passion for anything electrical.
              Elecrtify Electric has grown into a leader in residential and
              commercial electrical installation and repair. Our company is now
              a well-established firm with a team of highly skilled technicians
              ready to serve homeowners across the Southern Maryland region.
              What sets us apart is our unwavering commitment to quality,
              efficiency, and exceptional customer service. We believe that
              understanding your unique needs is the key to providing the best
              solution. That's why we take the time to consult with you, guide
              you through various options, and tailor the perfect solution for
              your home. Our team of professionals is certified, trained, and
              equipped with the latest tools and technology. We pride ourselves
              on our craftsmanship and attention to detail - whether it's a new
              installation, a routine maintenance visit, or an emergency repair.
            </p>
          </div>
        </div>
        <div className="text-center mt-20 mb-10">
          <Link
            href="/about"
            className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
          >
            Learn More About Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Intro
