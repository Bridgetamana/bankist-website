import React from 'react'
import Digital from '../assets/digital.jpg'
import Grow from '../assets/grow.jpg'
import Card from '../assets/card.jpg'

const Feature = () => {
  return (
    <div className='border-t border-solid border-gray-300 transition-transform duration-500 bg-[#f3f3f3]' id='features'>
        <div className='flex flex-col items-center my-16 mx-12 lg:mx-0'>
            <span>
                <h1 className='text-start uppercase text-xl md:text-2xl font-semibold text-green-500 mb-4 '>Features</h1>
                <p className='text-start text-2xl md:text-4xl font-medium text-gray-700'>Everything you need in a modern bank and more.</p>
            </span>
        </div>

        <div class="grid max-w-screen-xl px-6 lg:px-8 py-8 mx-auto lg:gap-28 lg:py-16 lg:grid-cols-12">
            <div class=" lg:mt-0 lg:col-span-6 lg:flex transition-filter duration-500 mb-4">
                <img src={Digital} alt="Computer" />
            </div>                

            <div class=" place-self-center lg:col-span-5">
                <span className='bg-green-500 flex w-12 h-12 rounded-full opacity-10 mb-4'></span>
                <h1 class="max-w-2xl mb-4 text-xl font-bold leading-none md:text-2xl text-gray-600 ">100% digital bank</h1>
                <p class="max-w-2xl font-normal text-gray-600 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.</p>
            </div>
        </div>

        <div class="grid max-w-screen-xl px-6 lg:px-8 py-8 mx-auto lg:gap-28 lg:py-16 lg:grid-cols-12">
            <div class="lg:flex lg:flex-col lg:col-span-6 lg:order-2">
                <img src={Grow} alt="Computer" class="mb-4 lg:mt-0" />
            </div>

            <div class="place-self-center lg:col-span-5 lg:order-1">
                <span className='bg-green-500 flex w-12 h-12 rounded-full opacity-10 mb-4'></span>
                <h1 class="max-w-2xl mb-4 text-xl font-bold leading-none md:text-2xl text-gray-600 ">Watch your money grow</h1>
                <p class="max-w-2xl font-normal text-gray-600 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.</p>
            </div>
        </div>

        <div class="grid max-w-screen-xl px-6 lg:px-8 py-8 mx-auto lg:gap-24 lg:py-16 lg:grid-cols-12">
            <div class=" lg:mt-0 lg:col-span-6 lg:flex transition-filter duration-500 mb-4">
                <img src={Card} alt="Computer" />
            </div>                

            <div class="mr-auto place-self-center lg:col-span-5">
                <span className='bg-green-500 flex w-12 h-12 rounded-full opacity-10 mb-4'></span>
                <h1 class="max-w-2xl mb-4 text-xl font-bold leading-none md:text-2xl text-gray-600 ">Free debit card includede</h1>
                <p class="max-w-2xl font-normal text-gray-600 md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus.</p>
            </div>
        </div>


    </div>
  )
}

export default Feature