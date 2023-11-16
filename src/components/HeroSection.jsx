import React from 'react'
import Heroimg from '../assets/hero.png'

const HeroSection = () => {
  return (
    <div className='bg-[#f3f3f3]'>
        <div class="grid max-w-screen-xl px-6 lg:px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-bold leading-none md:text-5xl xl:text-6xl">When <span className='bg-green-500'>banking</span> meets minimalist</h1>
                <p class="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-4 md:text-lg lg:text-xl">A simpler banking experience for a simpler life</p>
                <a href="#" class="inline-flex items-center justify-center py-2 mr-3 text-base font-medium text-center text-green-700 border-b border-green-700">
                Learn more
                    <svg className='w-4 h-4 ml-2 -mr-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                    </svg>
                </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Heroimg} alt="Hero image" />
            </div>                
        </div>
    </div>
  )
}

export default HeroSection