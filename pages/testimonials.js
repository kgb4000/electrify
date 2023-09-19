import React from 'react'
import Header from '@/components/Header'

const Testimonials = () => {
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
              Our Reviews
            </h1>
            <p className="mt-6 text-2xl leading-10 text-white">
              Reviwes From Our Customers
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
    </>
  )
}

export default Testimonials