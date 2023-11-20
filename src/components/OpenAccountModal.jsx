import React from 'react'

const OpenAccountModal = ({ closeModal }) => {
  return (
    <div >
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm z-50 transition-all duration-500'> 

            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 fixed top-0 right-0 left-0 z-50 ">
                
                <div class="w-full shadow md:mt-0 sm:max-w-lg xl:p-0 flex-col justify-center bg-[#f3f3f3] ">
                    <a href="#" class="flex justify-end mb-4 pr-6 pt-3 font-semibold text-gray-700 text-4xl text-center" onClick={closeModal}>
                        x   
                    </a>
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight text-gray-900 md:text-4xl">
              Open your bank account in just
              <span className='bg-gradient-to-r from-green-400 to-green-600 ml-2'>
                 5 minutes
              </span>
            </h1>
                        <form class="space-y-4 md:space-y-6 flex flex-col justify-center items-center" action="#">
                            <div className='flex items-center gap-4'>
                                <label for="email" class="block mb-2 md:text-base text-sm font-medium text-gray-900 w-24">First Name</label>
                                <input type="email" name="email" id="email" class="bg-white border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-green-600 focus:border-green-600 block p-1.5 md:py-2.5 md:px-8"  required="" />
                            </div>
                            <div className='flex items-center gap-4 '>
                                <label for="email" class="block mb-2 md:text-base text-sm font-medium text-gray-900 w-24">Last Name</label>
                                <input type="email" name="email" id="email" class="bg-white border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-green-600 focus:border-green-600 block p-1.5 md:py-2.5 md:px-8"  required="" />
                            </div>
                            <div className='flex items-center gap-4'>
                                <label for="email" class="block mb-2 md:text-base text-sm font-medium text-gray-900 w-24">Email address</label>
                                <input type="email" name="email" id="email" class="bg-white border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-green-600 focus:border-green-600 block p-1.5 md:py-2.5 md:px-8"  required="" />
                            </div>

                            <button type="submit" class=" text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-full md:text-base text-sm px-5 py-2.5 text-center flex items-center justify-center gap-3">Next step
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 md:w-6 md:h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OpenAccountModal