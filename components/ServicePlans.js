import React from 'react'

const ServicePlans = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl py-10 sm:py-12 lg:py-16">
        <div className="text-center w-4xl">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Explore Our Electrical Service Plans
          </h2>
          <p className="mx-auto max-w-4xl mt-6 text-lg leading-8 text-gray-600 text-center">
            With an electrical maintenace plan, you won't find yourself in a
            pannic wondering who to call when you're having problems with your
            electrical system.
          </p>
        </div>
        <div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div class="grid gap-8 lg:grid-cols-3 grid-rows-1">
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-10">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-6">
                    Silver Service Plan
                  </h3>
                  <ul className="space-y-6">
                    <li>Annual Inspection</li>
                    <li>Panel Inspection & Tune-Up</li>
                    <li>Inside Outlets</li>
                    <li>Plugs</li>
                    <li>GFCI’s (Ground Fault Circuit Interrupters)</li>
                    <li>Light Bulbs</li>
                    <li>Contact within 4 hours</li>
                  </ul>
                </div>
              </div>
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-10">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-6">
                    Gold Service Plan
                  </h3>
                  <ul className="space-y-6">
                    <li>Annual Inspection</li>
                    <li>Includes All Silver Level Plan Features Plus...</li>
                    <li>Line Cords</li>
                    <li>Appliances</li>
                    <li>Lighting/Fixtures</li>
                    <li>Halogen Floor Lamps</li>
                    <li>5% Discount on Emergency Service </li>
                    <li>Contact within 2 hours</li>
                  </ul>
                </div>
              </div>
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="p-10">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl pb-6">
                    Platinum Service Plan
                  </h3>
                  <ul className="space-y-6">
                    <li>Annual Inspection</li>
                    <li>
                      Includes All Silver Level & Gold Level Plan Features
                      Plus...
                    </li>
                    <li>Plug-In Appliances</li>
                    <li>Space Heaters</li>
                    <li>Outdoor Safety</li>
                    <li>10% Discount on Emergency Service</li>
                    <li>$350 Coverage per repair, up to $1500 Annually</li>
                    <li>Contact within 1 hour</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-20 mb-10">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="inline-block  bg-yellow-400 rounded px-10 py-5 text-base font-semibold  text-black uppercase leading-normal text-primary transition duration-150 ease-in-out"
            >
              Call Us to Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicePlans
