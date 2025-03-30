import React from 'react';

const Donation = () => {
  const donationAmounts = [25, 50, 100, 250, 500, 1000];
  const programOptions = [
    'General Fund', 
    'Endangered Species Protection', 
    'Wildlife Habitat Restoration', 
    'Education & Outreach', 
    'Animal Welfare & Medical Care'
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <div className="inline-block p-3 bg-green-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
            Support Our Conservation Efforts
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl lg:text-2xl font-light">
            Your donation helps us protect endangered species, restore habitats, and educate the next generation of
            conservationists.
          </p>
          <div className="w-24 h-1 bg-green-500 rounded-full mt-2"></div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_450px] lg:gap-16 xl:grid-cols-[1fr_550px]">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-green-100 transition-all duration-300 hover:shadow-2xl">
            <div className="space-y-8">
              {/* Donation Type Selector */}
              <div className="w-full flex items-center justify-center space-x-2 bg-gray-50 p-1 rounded-xl">
                <button className="w-1/2 py-3 text-white bg-green-600 rounded-lg font-medium transition">
                  One-time
                </button>
                <button className="w-1/2 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition">
                  Monthly
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Select Amount</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {donationAmounts.map((amount, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`h-16 text-lg font-semibold rounded-lg transition-all duration-200 ${
                          index === 1 ? "bg-green-600 text-white shadow-lg shadow-green-200" : "border border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-700"
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
                    <input
                      id="custom-amount"
                      type="text"
                      className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none text-lg"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Choose a Program</h3>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full flex justify-between items-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 hover:border-green-300"
                  >
                    <span>General Fund</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone (Optional)
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="button"
                  className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-200 transform hover:-translate-y-1 duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Proceed to Payment
                </button>
                <p className="text-sm text-center text-gray-500 mt-4">
                  Your donation is tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="bg-green-50 rounded-xl p-6 space-y-5 border border-green-100 shadow-lg">
              <h3 className="text-2xl font-semibold flex items-center text-green-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-3 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Your Impact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-green-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">$25 provides food for a rescued animal for one week</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-green-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">$50 supports habitat restoration projects</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-green-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">$100 funds educational programs for local schools</span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-3 text-green-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg">$250 helps provide veterinary care for injured wildlife</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-xl overflow-hidden h-80 shadow-xl group">
              <img
                src="/api/placeholder/500/320"
                alt="Conservation efforts"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-400 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <h3 className="text-xl text-white font-semibold">Join Our Global Community</h3>
                </div>
                <p className="text-white text-lg">Join 5,000+ supporters worldwide making a difference every day</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <svg width="40" height="40" viewBox="0 0 24 24" className="text-green-600 mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10.5H4V17H8V10.5Z" fill="currentColor" />
                <path d="M14 7.5H10V17H14V7.5Z" fill="currentColor" />
                <path d="M16 4H20V17H16V4Z" fill="currentColor" />
                <path d="M4 19H20V21H4V19Z" fill="currentColor" />
              </svg>
              <div className="flex flex-col space-y-4">
                <div className="flex">
                  <div className="text-3xl font-bold text-green-600">5,000+</div>
                  <div className="ml-2 text-sm bg-green-100 text-green-800 px-2 rounded-full h-6 flex items-center font-semibold">+12% this year</div>
                </div>
                <p className="text-gray-600">Active donors worldwide</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-100">
              <blockquote className="italic text-gray-600 text-lg border-l-4 border-green-500 pl-4">
                "Your generous donations have helped us rescue over 200 endangered animals and restore 500 acres of
                critical habitat in the past year alone."
              </blockquote>
              <div className="mt-6 flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="font-semibold text-green-600">DR</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-lg">Dr. Rebecca Chen</p>
                  <p className="text-gray-500">Conservation Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;