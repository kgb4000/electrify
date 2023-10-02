import React from 'react'
import Link from 'next/link'

const Intro = () => {
  return (
    <>
      <div class="container mx-auto px-6 max-w-5xl py-5">
        <div className=" w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Electrical Contractors and Electricians in Southern Maryland
          </h2>
          <div className="mt-6 text-lg leading-8 text-gray-600 ">
            <p>
              Hello! We are Electrify Electric, your go-to experts for all
              things electrical in Southern Maryland.
            </p>
            <p>
              We have a team of skilled technicians ready to help with any
              electrical needs for homes or businesses. We stand out because of
              our commitment to quality work and great customer service. We work
              hard to understand your needs so we can give you the best solution
              possible.
            </p>
            <p>
              Whether it’s a new installation, regular maintenance, or an urgent
              repair, we focus on doing the job right with attention to detail.
              We’re all about providing reliable and top-notch service to meet
              your electrical needs. Welcome to Electrify Electric!
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
