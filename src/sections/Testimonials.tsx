import React from 'react'

import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';
import bgQuotes from "../images/bg-quotes.png";

function Testimonials() {

  const testimonials = [
    {
      name: 'Satish Patel',
      position: 'Founder & CEO, Hudd',
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      avatar: profile1,
    },
    {
      name: 'Bruce McKenzie',
      position: 'Founder & CEO, Huddle',
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      avatar: profile2,
    },
    {
      name: 'Iva Boyd',
      position: 'Founder & CEO, Huddle',
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      avatar: profile3,
    },
  ]

  return (

    <div className='flex justify-center items-center relative text-sm font-noto-sans pb-28'>

      <img className='absolute top-0 lg:left-[7%] 2xl:left-[16.3%]' src={bgQuotes} alt="quotes" />

      <div className="w-full flex flex-col lg:flex-row z-10 mt-9 lg:w-[85%] 2xl:w-4/6">

        {

          testimonials.map((testimonial: any, i) => 

            <div key={i} className="w-[350px] bg-testimonials-dark-blue rounded-md p-6 mr-8 last:mr-0 text-white">

              <div className="font-normal">
                {testimonial.text}
              </div>

              <div className="flex items-center mt-4">
              
                <img className='rounded-full' width={30} src={testimonial.avatar} alt="profile" />

                <div className="ml-2">

                  <div className="text-xs font-bold mb-1">{testimonial.name}</div>
                  <div className="text-[10px] font-normal">{testimonial.position}</div>
                
                </div>
              
              </div>

            </div>

          )

        }

      </div>

    </div>

  )
}

export default Testimonials;