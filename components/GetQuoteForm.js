import React from 'react'

const GetQuoteForm = () => {
  return (
    <>
      <div className="hidden max-w-3xl bg-yellow-400 p-10 rounded ml-8 mb-10 shadow-lg lg:block">
        <form className="">
          <p className="text-4xl font-bold tracking-tight text-green-600 sm:text-4xl pb-6">
            How Can We Help You Today?
          </p>
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
                rows="6"
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
