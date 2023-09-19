import React from 'react'

const LogoCloud = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center w-4xl">
            <h2 className="text-center text-4xl font-bold tracking-loose text-gray-900 sm:text-5xl">
              Associations and Certifications
            </h2>
            <p className="mx-auto max-w-3xl mt-6 text-lg leading-8 text-gray-600 text-center">
              We're not just any electrical service; we're active, proud members
              of your local Maryland business community! Yep, we're right here,
              sharing the same bay views, and cheering for the same Maryland and
              Washington sports teams.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
              src="/images/maryland-department-of-transportation-office-of-minority-business-enterprise-logo.png.webp"
              alt="Maryland Department of Transportation"
              width={195}
              height={115}
            />
            <img
              className="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
              src="/images/metropolitan-washington-airports-authority-logo.png.webp"
              alt="Metropolitan Washington Airports Authority"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-22 w-full object-contain lg:col-span-1"
              src="/images/small-business-enterprise-logo.png.webp"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-22 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="/images/state-of-maryland-logo.png.webp"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-22 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/maryland-washington-minority-companies-association-logo.png.webp"
              alt="Statamic"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-22 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="/images/charles-county-chamber-of-commerce-logo.png.webp"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
          <div className="text-center m-10">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              class="inline-block  bg-yellow-400 rounded px-10 py-5 text-base  font-semibold  text-black uppercase leading-normal text-primary transition duration-150 ease-in-out"
            >
              Contact Us: Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogoCloud
