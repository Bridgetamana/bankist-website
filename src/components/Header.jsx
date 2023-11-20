import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';
import OpenAccountModal from './OpenAccountModal';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccountModalOpen, setOpenAccountModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openAccountModal = () => {
    setOpenAccountModalOpen(true);
  };

  const closeAccountModal = () => {
    setOpenAccountModalOpen(false);
  };

  return (
    <div className='sticky top-0 z-40 shadow-sm transition-all duration-300'>
      <nav className="bg-[#f3f3f3] border-gray-200 px-4 lg:px-6 py-4 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <img src={Logo} className=" h-6 sm:h-9" alt="Bankist Logo" />
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-gray-900 bg-green-500 hover:bg-green-400 font-medium rounded-full text-sm px-4 lg:px-7 py-2 lg:py-3 mr-2  focus:outline-none" onClick={openAccountModal}
            >
              Open account
            </a>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${mobileMenuOpen ? 'hidden' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg
                className={`w-5 h-5 ${mobileMenuOpen ? '' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`lg:flex justify-between items-center w-full ${mobileMenuOpen ? 'block' : 'hidden'} lg:w-auto`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="features"
                  spy={true}
                  smooth={true}
                  offset={-70} 
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-500 rounded text-xl lg:bg-transparent lg:hover:text-green-700 lg:p-0 cursor-pointer "
                  aria-current="page"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="operations"
                  spy={true}
                  smooth={true}
                  offset={-70} 
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-500 border-b text-xl lg:bg-transparent border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 cursor-pointer"
                >
                  Operations
                </Link>
              </li>
              <li>
                <Link
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  offset={-70} 
                  duration={500}
                  className="block py-2 pr-4 pl-3 text-gray-500 border-b text-xl border-gray-100 lg:bg-transparent hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-green-700 lg:p-0 cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {openAccountModalOpen && <OpenAccountModal closeModal={closeAccountModal} />}
    </div>
  );
};

export default Header;
