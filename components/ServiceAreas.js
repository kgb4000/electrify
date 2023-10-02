import React from 'react'
import Link from 'next/link'

const ServiceAreas = () => {
  return (
    <div className="mx-auto max-w-6xl py-10 sm:py-12 lg:py-32" id="locations">
      <div className="text-center w-4xl">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Service Areas
        </h2>
        <p className="mt-6 leading-8 text-gray-600 text-center text-2xl">
          These are the Cities and Towns we provide service in Southern Maryland
        </p>
      </div>
      <div>
        <div className="mt-10 flex items-center justify-center text-center">
          <div class="container grid lg:grid-cols-3 text-center">
            <div className="my-10">
              <ul className="space-y-8">
                <li className="text-2xl">Bel Alton, MD</li>
                <li className="text-2xl">Benedict, MD</li>
                <li className="text-2xl">Bennsville, MD</li>
                <li className="text-2xl">Bryans Road, MD</li>
                <li className="text-2xl">Brandywine, MD</li>
                <li className="text-2xl">Clinton, MD</li>
                <li className="text-2xl">Cobb Island, MD</li>
                <li className="text-2xl">Faulkner, MD</li>
              </ul>
            </div>
            <div className="my-10">
              <ul className="space-y-8">
                <li className="text-2xl">Faulkner, MD</li>
                <li className="text-2xl">
                  <Link
                    href="electrician-fort-washington-md"
                    className="hover:text-green-600 hover:underline decoration-green-600 decoration-2 underline-offset-8"
                  >
                    Fort Washington, MD
                  </Link>
                </li>
                <li className="text-2xl">Hughesville, MD</li>
                <li className="text-2xl">Indian Head, MD</li>
                <li className="text-2xl">Ironside, MD</li>
                <li className="text-2xl">Issue, MD</li>
                <li className="text-2xl">La Plata, MD</li>
                <li className="text-2xl">Marbury, MD</li>
              </ul>
            </div>
            <div className="my-10">
              <ul className="space-y-8">
                <li className="text-2xl">Mount Victoria, MD</li>
                <li className="text-2xl">Nanjemoy, MD</li>
                <li className="text-2xl">Newburg, MD</li>
                <li className="text-2xl">Pomfret, MD</li>
                <li className="text-2xl">Port Tobacco, MD</li>
                <li className="text-2xl">Rock Point, MD</li>
                <li className="text-2xl">
                  <Link
                    href="electrician-waldorf-md"
                    className="hover:text-green-600 hover:underline decoration-green-600 decoration-2 underline-offset-8"
                  >
                    Waldorf, MD
                  </Link>
                </li>
                <li className="text-2xl">White Plains, MD</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-20 mb-10">
          <Link
            href="#"
            className="rounded-md bg-yellow-400 w-80 px-10 py-5 text-base  font-semibold text-black shadow-sm uppercase leading-normal hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
          >
            See All Our Services <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceAreas
