import React, {useState} from 'react'
import OpenAccountModal from './OpenAccountModal';

const CTA = () => {

  const [openAccountModalOpen, setOpenAccountModalOpen] = useState(false);
    
  const openAccountModal = () => {
      setOpenAccountModalOpen(true);
    };
  
    const closeAccountModal = () => {
      setOpenAccountModalOpen(false);
    };
  return (
    <div className='bg-[#37383d] border-b border-solid border-[#444] transition-transform duration-500'>
        <div class=" px-4 mx-auto max-w-screen-xl sm:py-16 lg:py-24 ">
            <div class="mx-auto max-w-screen-sm text-center">
                <h2 class="mb-12 text-4xl font-bold leading-tight text-gray-50 ">The best day to join Bankist was one year ago. The second best is today!</h2>
                <a href="#" class="text-gray-900 bg-green-500 hover:bg-green-400 focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-3 mr-2 mb-2 focus:outline-none " onClick={openAccountModal}>Open your free account</a>
            </div>
        </div>
        {openAccountModalOpen && <OpenAccountModal closeModal={closeAccountModal} />}
    </div>
  )
}

export default CTA