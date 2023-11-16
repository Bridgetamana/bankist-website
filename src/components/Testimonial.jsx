import React, { useState } from 'react';
import User1 from '../assets/user-1.jpg';
import User2 from '../assets/user-2.jpg';
import User3 from '../assets/user-3.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      header: "Best financial decision ever!",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
      location: "San Francisco, USA",
      user: User1,
    },
    {
      header: "The last step to becoming a complete minimalist",
      text: "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.",
      location: "London, UK",
      user: User2,
    },
    {
      header: "Finally free from old-school banks",
      text: "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.",
      location: "Lisbon, Portugal",
      user: User3,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='border-t border-solid border-gray-300 transition-transform duration-1000 bg-[#f3f3f3] ' id='testimonial'>
      <div className='flex flex-col items-center my-16'>
        <span>
          <h1 className='text-start uppercase text-xl md:text-2xl font-semibold text-green-500 mb-4 '>not sure yet?</h1>
          <p className='text-start text-2xl md:text-4xl font-medium text-gray-700'>Millions of Bankists are already making their lives simpler.</p>
        </span>
      </div>

      <div className='relative'>
        {currentTestimonial > 0 && (
            <span className='inline-flex items-center justify-center w-12 h-12 me-2 text-sm font-semibold text-gray-800 bg-white rounded-full absolute top-1/2 left-6 lg:left-36 transform -translate-y-1/2 cursor-pointer' onClick={handlePrevTestimonial}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
            </span>
        )}

        {currentTestimonial < testimonials.length - 1 && (
            <span className='inline-flex items-center justify-center w-12 h-12 me-2 text-sm font-semibold text-gray-800 bg-white rounded-full absolute top-1/2 right-4 lg:right-36 transform -translate-y-1/2 cursor-pointer' onClick={handleNextTestimonial}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </span>
        )}
        <div className="w-full flex flex-col items-center justify-center gap-4 text-left pb-20">
            <h1 className='text-center font-medium text-xl md:text-3xl text-gray-700'>{testimonials[currentTestimonial].header}</h1>
        
            <p className=" text-center text-base text-gray-500 leading-relaxed w-1/2">
            {testimonials[currentTestimonial].text}
            </p>
            <div className="flex items-center gap-4">
            <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                <img src={testimonials[currentTestimonial].user} alt={`User ${currentTestimonial + 1}`} />
            </div>
            <div className="flex flex-col tracking-wider">
                <label className="text-gray-600 font-bold text-base">Aarav Lynn</label>
                <label className="text-gray-400 font-normal text-sm">{testimonials[currentTestimonial].location}</label>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
