import React from 'react'

const Hero = ({ h1text, subtext, backgroundImage, backgroundHeight }) => {
  return (
    <>
      <div className="bg-[url('/images/hero-img.jpg')] h-4/6 bg-no-repeat bg-cover bg-bottom backdrop-saturate-50 bg-black/30">
        <div className="mx-auto max-w-4xl py-60 xl:py-60 2xl:py-70">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-8xl">
              {h1text}
            </h1>
            <p className="mt-6 text-2xl leading-10 text-white">{subtext}</p>
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

export default Hero

// '/images/hero-img.jpg'
