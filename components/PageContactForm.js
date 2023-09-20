import React from 'react'

const PageContactForm = () => {
  return (
    <>
      <div className="bg-yellow-400 py-10 px-8 lg:px-20 my-5 lg:my-20 shadow-lg rounded">
        <form className="w-full">
          <h3 className="text-4xl font-bold tracking-tight text-green-600 sm:text-4xl pb-14 text-center">
            Get the electrical service you need today!
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
                htmlFor="grid-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-email"
                type="email"
                placeholder="Charmaine@gmail.com"
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
                htmlFor="grid-phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full bg-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-name"
                type="text"
                placeholder="(301) 333-4444"
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
                htmlFor="grid-name"
              >
                Name
              </label>
              <textarea
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="message"
                type="text"
                placeholder="Tell us what's happening."
                height={20}
                rows="8"
              ></textarea>
              {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default PageContactForm
