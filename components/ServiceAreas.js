import React from 'react'
import Link from 'next/link'

const ServiceAreas = () => {
  return (
    <div className="mx-auto max-w-6xl py-10 sm:py-12 lg:py-32">
      <div className="text-center w-4xl">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Geographic Service Areas
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          These are the Cities and Towns we provide service in Southern Maryland
        </p>
      </div>
      <div>
        <div className="mt-10 flex items-center justify-center">
          <div class="container grid lg:grid-cols-3 text-center">
            <div className="my-10">
              <ul className="space-y-8">
                <li>Bel Alton, MD</li>
                <li>Benedict, MD</li>
                <li>Bennsville, MD</li>
                <li>Bryans Road, MD</li>
                <li>Brandywine, MD</li>
                <li>Clinton, MD</li>
                <li>Cobb Island, MD</li>
                <li>Faulkner, MD</li>
              </ul>
            </div>
            <div className="my-10">
              <ul className="space-y-8">
                <li>Faulkner, MD</li>
                <li>Fort Washington, MD</li>
                <li>Hughesville, MD</li>
                <li>Indian Head, MD</li>
                <li>Ironside, MD</li>
                <li>Issue, MD</li>
                <li>La Plata, MD</li>
                <li>Marbury, MD</li>
              </ul>
            </div>
            <div className="my-10">
              <ul className="space-y-8">
                <li>Mount Victoria, MD</li>
                <li>Nanjemoy, MD</li>
                <li>Newburg, MD</li>
                <li>Pomfret, MD</li>
                <li>Port Tobacco, MD</li>
                <li>Rock Point, MD</li>
                <li>
                  <Link href="electrician-waldorf-md">Waldorf, MD</Link>
                </li>
                <li>White Plains, MD</li>
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
