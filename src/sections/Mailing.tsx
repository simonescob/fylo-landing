import React from 'react'

function Mailing() {
  return (
    <div className='h-[400px] relative'>

      <div className="flex flex-col items-center justify-center lg:px-16 lg:py-10 absolute top-[15%] left-[15%] bg-intro-dark-blue text-white">
        
        <div className="font-raleway font-bold text-4xl mb-4">
          Get early access today
        </div>

        <div className="text-center mb-8">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br /> 
          questions, our support team would be happy to help you.
        </div>

        <div className="h-fit flex justify-center items-center">

          <input className='w-11/12 lg:w-[500px] p-3 rounded-full outline-none mr-8' type="text" placeholder='email@example.com' />
          <button className='bg-cyan-400 text-white py-3 px-12 rounded-full'>Get Started For Free</button>

        </div>

      </div>
      <div className="h-1/2 bg-main-dark-blue"></div>
      <div className="h-1/2 bg-footer-dark-blue"></div>

    </div>
  )
}

export default Mailing;