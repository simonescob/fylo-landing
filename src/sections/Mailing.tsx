import React from 'react'

function Mailing() {
  return (
    <div className='h-[400px] relative'>
      <div className="flex flex-col items-center justify-center p-5 m-5 lg:px-16 lg:py-10 absolute lg:top-[15%] lg:left-[15%] 2xl:left-[25%] bg-intro-dark-blue text-white">
        <div className="font-raleway font-bold text-xl lg:text-4xl mb-4">
          Get early access today
        </div>
        <div className="text-center mb-8">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br className='hidden lg:block' /> 
          questions, our support team would be happy to help you.
        </div>
        <div className="w-full h-fit flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <input className='w-full lg:w-[500px] p-3 rounded-full outline-none lg:mr-8' type="text" placeholder='email@example.com' />
          <button className='w-full bg-cyan-400 text-white py-3 px-12 rounded-full'>Get Started For Free</button>
        </div>
      </div>
      <div className="h-1/2 bg-main-dark-blue"></div>
      <div className="h-1/2 bg-footer-dark-blue"></div>
    </div>
  )
}

export default Mailing;