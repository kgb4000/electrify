import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-50 mx-auto max-w-full lg:text-left lg:py-16 px-6">
        {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
        <div className="mx-6 py-10 md:text-left">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* <!-- Tailwind Elements section --> */}
            <div className="">
              <h6 className="mb-4 lg:flex justify-center font-semibold uppercase md:justify-start">
                Hours of Operation
              </h6>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Sunday: Closed
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Monday: 9:00 am - 5:00 pm
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Tuesday: 9:00 am - 5:00 pm
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Wednesday: 9:00 am - 5:00 pm
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Thursday: 9:00 am - 5:00 pm
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Friday: 9:00 am - 5:00 pm
                </a>
              </p>
              <p className="mb-4 text-neutral-600 dark:text-neutral-200">
                Saturday: Closed
              </p>
            </div>
            {/* <!-- Useful links section --> */}
            <div className="">
              <h6 className="mb-4 lg:flex justify-center font-semibold uppercase md:justify-start">
                Useful links
              </h6>
              <p className="mb-4">
                <Link
                  href="/"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Home
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/electrical-services"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Services
                </Link>
              </p>
              <p className="mb-4">
                <Link
                  href="/about"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  About us
                </Link>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">Blog</a>
              </p>
              <p className="mb-4">
                <Link
                  href="/testimonials"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  Testimonials
                </Link>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Get a Quote Today
                </a>
              </p>
              <p className="mb-4">
                <Link
                  href="/faqs"
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  FAQs
                </Link>
              </p>
            </div>
            {/* <!-- Products section --> */}
            <div className="">
              <h6 className="mb-4 lg:flex justify-center font-semibold uppercase md:justify-start">
                Residential
              </h6>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Electrical Wiring
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Electrical Outlet Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Dimmer Switch Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Ceiling Fan Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Attic Fan Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Recessed Lighting Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Electrical Panel Upgrades
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Circuit Breaker Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Home Generator Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Home EV Charger Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Basement Wiring
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Pool & Hot Tub Wiring
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Kitchen and Bath Lighting
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Chandelier Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Outdoor Lighting Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Smoke Detector Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  24-Hour Emergency Electrician
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 lg:flex justify-center font-semibold uppercase md:justify-start">
                Commercial
              </h6>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Commercial Panel Upgrade
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Office building build-out
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Panel Upgrades & Heavy-ups
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Industrial Ceiling Fan Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Circuit Breaker Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Commercial Tennant Build-Outs
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Security Lighting Installation
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Parking Lot Lighting
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  Lighting Replacements
                </a>
              </p>
              <p className="mb-4">
                <a className="text-neutral-600 dark:text-neutral-200">
                  24-Hour Emergency Electrician
                </a>
              </p>
            </div>

            {/* <!-- Contact section --> */}
            <div>
              <h6 className="mb-4 lg:flex justify-center font-semibold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 lg:flex items-center justify-center md:justify-start">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-7"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg> */}
                Address: 3235 Old Washington Rd,
              </p>
              <p className="mb-4 lg:flex md:justify-start">Waldorf, MD 20602</p>
              <p className="mb-4 lg:flex items-center justify-center md:justify-start">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg> */}
                Email: Jerome@Electrify247.com
              </p>
              <p className="mb-4 lg:flex items-center justify-center md:justify-start">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg> */}
                Call: (240)-476-5116
              </p>
              {/* <p className="flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                    clipRule="evenodd"
                  />
                </svg>
                + 01 234 567 89
              </p> */}
            </div>
          </div>
        </div>
      </footer>
      {/* <!--Copyright section--> */}
      <div className="bg-black p-6 text-center ">
        <div className="font-semibold text-yellow-300 mb-4">
          <span>&copy; {new Date().getFullYear()} Copyright </span>
          <Link href="/">Electrify Electric</Link>
        </div>
        <a className="text-yellow-600" href="mailto:">
          Site by: Jubilee Technology Services
        </a>
      </div>
    </>
  )
}

export default Footer
