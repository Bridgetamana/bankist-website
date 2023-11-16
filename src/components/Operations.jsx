import React, { useState } from 'react';

const Operations = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleClick = (index) => {
    setSelectedOption(index);
  };

  const buttonStyles = [
    'flex items-center justify-center text-black bg-amber-500 hover:bg-amber-400 focus:outline-none font-medium rounded-full text-base px-6 md:px-10 py-2 text-center transform -translate-y-1/2 transition-transform duration-300 ',
    'flex items-center justify-center text-black bg-green-500 hover:bg-green-400 focus:outline-none font-medium rounded-full text-sm px-6 md:px-10 py-2 text-center transform -translate-y-1/2 transition-transform duration-300',
    'flex items-center justify-center text-black bg-red-500 hover:bg-red-400 focus:outline-none font-medium rounded-full text-sm px-6 md:px-10 py-2 text-center transform -translate-y-1/2 transition-transform duration-300',
  ];

  const content = [
    {
      title: 'Transfer money to anyone, instantly! No fees, no BS.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Buy a home or make your dreams come true, with instant loans.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'No longer need your account? No problem! Close it instantly.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className='border-t border-solid border-gray-300 transition-transform duration-1000 bg-[#f3f3f3] pb-16' id='operations'>
      <div className='flex flex-col items-center my-16 mx-12 lg:mx-0'>
        <span>
          <h1 className='text-start uppercase text-xl md:text-2xl font-semibold text-green-500 mb-4'>operations</h1>
          <p className='text-start text-2xl md:text-4xl font-medium text-gray-700'>Everything as simple as possible, but no simpler.</p>
        </span>
      </div>
      <div className='bg-white mx-4 md:mx-auto md:w-3/5'>
        <div className='mx-auto grid grid-cols-3 gap-x-5 px-4 md:px-16 lg:mx-20'>
          {buttonStyles.map((style, index) => (
            <button
              key={index}
              type="button"
              className={`${style} ${selectedOption === index ? 'bg-opacity-80 translate-y-[-25px]' : ''}`}
              onClick={() => handleClick(index)}
            >
              <span className='hidden md:block mr-2 font-bold '>{index + 1}</span>
              <p className='hidden md:block mr-1'>Instant </p>
              <span className='md:inline-block'>{index === 0 ? 'Transfer' : index === 1 ? 'Loans' : 'Closing'}</span>
            </button>
          ))}
        </div>
        <div>
          <ul className='px-4 md:px-16 pt-6 md:pt-10 pb-16'>
            <li className='flex items-start'>
              <span className={`bg-amber-500 opacity-10 flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full mb-4 md:mb-0`}></span>
              <span className='ml-4 md:ml-8'>
                <h1 className='text-xl md:text-2xl font-medium text-stone-600 mb-4'>{content[selectedOption].title}</h1>
                <p className='text-sm text-gray-500'>{content[selectedOption].description}</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Operations;
