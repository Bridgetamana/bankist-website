import React from 'react'
import Icon from "../assets/icon.png"

const Footer = () => {
  return (
    <div>
        <footer class="bg-[#37383d] p-8 md:p-10">
  <div class="mx-auto max-w-screen-xl text-center">
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-300">
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Pricing</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">Terms of Use</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Careers</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Blogs</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact us</a>
          </li>
      </ul>
      <a href="#" class="flex justify-center items-center text-sm font-semibold text-gray-900 mb-4">  
        <img src={Icon} alt="" className='w-12 h-12'/>    
      </a>
      <span class="text-sm text-gray-400 sm:text-center">©2022 <a href="#" class="hover:underline text-gray-300">Bridget</a>. All Rights Reserved.</span>
  </div>
</footer>
    </div>
  )
}

export default Footer