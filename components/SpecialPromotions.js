import React from 'react'

const SpecialPromotions = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:py-32">
        <div className="text-center w-4xl">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Specials and Promotions
          </h2>
          <p className="mx-auto max-w-5xl mt-6 text-lg leading-8 text-gray-600 text-center">
            We understand that you value every dollar.
            Our goal is to offer everyone the most affordable services at the
            exceptional quality. When it comes to Electrical Work in our
            community, Electrify Electric is a household name. We keep it
            Electrifying!!!
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 my-20 px-6">
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h3 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-10">
              5% Discount
            </h3>
            <h4 className="p-5 text-center text-2xl">
              {' '}
              Military & 1st Responders
            </h4>
            <p className="text-lg px-10 pt-5 pb-10">
              We know you've got our backs, and we want to have yours too. How
              does an exclusive 5% discount on any electrical service under
              $4,999 sound? It's our small way of saying a BIG thank you for all
              you do.
            </p>
          </div>
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h3 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-10">
              10% Off
            </h3>
            <h4 className="p-5 text-center text-2xl">
              Military & 1st Responders
            </h4>
            <p className="text-lg px-10 pt-5 pb-10">
              Big plans need big rewards, right? So listen up: If you're in the
              military or a first responder, we've got something special just
              for you—a whopping 10% OFF on all electrical services that exceed
              $5,000!
            </p>
          </div>
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h3 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-10">
              5% Discount
            </h3>
            <h4 className="p-5 text-center text-2xl">
              Senior Citizens (60 & Over)
            </h4>
            <p className="text-lg px-10 pt-5 pb-10">
              Are you 60 or better and have some electrical work on the to-do
              list? Well, you're in luck! We're rolling out a special 5%
              discount for all electrical services under $4,999 — just for you
              fabulous seniors!
            </p>
          </div>
          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <h3 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-10">
              10% Discount
            </h3>
            <h4 className="p-5 text-center text-2xl">
              Senior Citizens (60 & Over)
            </h4>
            <p className="text-lg px-10 pt-5 pb-10">
              Big dreams don't have age limits, and neither should big savings!
              If you're 60 or over and you're ready to dive into a grand-scale
              electrical project, guess what? We're thrilled to offer you an
              extraordinary 10% OFF on all electrical services that total more
              than $5,000!
            </p>
          </div>
        </div>
        <div>
          <p className="mx-auto max-w-3xl text-lg text-center">
            We also offer financing options via Wisetack – Easy monthly payments
            – Easy Application – Allowing you to afford the services you care
            about – No surprises or unexpected late fees
          </p>
        </div>
        <div className="text-center mt-40">
          <a
            href="#"
            className="inline-block  bg-yellow-400 rounded px-10 py-5 text-base font-semibold  text-black uppercase leading-normal text-primary transition duration-150 ease-in-out"
          >
            Call Us To Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default SpecialPromotions
