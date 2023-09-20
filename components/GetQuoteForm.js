import React from 'react'

const GetQuoteForm = () => {
  return (
    <>
      <div className="bg-yellow-400 p-10 rounded sm:block lg:float-right ml-8 mb-10 shadow-lg">
        <form className="w-full max-w-sm ">
          <h3 className="text-4xl font-bold tracking-tight text-green-600 sm:text-4xl pb-14">
            How Can We Help You Today?
          </h3>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-name"
                type="text"
                placeholder="Charmaine"
              />
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="Charmaine@gmail.com"
              />
              {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="phone"
                placeholder="(301) 333-3333"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            {/* <div className="w-full md:w-1/3 px-1 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Waldorf"
              />
            </div> */}
            {/* <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Maryland</option>
                  <option>DC</option>
                  <option>Virginia</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                </div>
              </div>
            </div> */}
            {/* <div className="w-full md:w-1/3 px-1 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div> */}
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                type="text"
                placeholder="Tell us what's happening."
                height={20}
                rows="8"
              ></textarea>
              {/* <p classNameName="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p> */}
            </div>
          </div>
          <div className="text-center">
            <div className="w-100">
              <button
                className="shadow bg-green-600 text-white hover:bg-green-700 hover:text-white focus:shadow-outline focus:outline-none 
                font-bold py-4 px-8 rounded"
                type="button"
              >
                Help Fix My Electrical Issues &#8594;
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default GetQuoteForm
