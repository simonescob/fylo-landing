import React from 'react'
import img from '../images/illustration-stay-productive.png';

function HowWorks() {
  return (
    <div className='flex justify-center pt-20 pb-28'>
      <div className="flex flex-col lg:flex-row lg:w-[85%] 2xl:w-4/6 p-7">
        <div className="w-full lg:w-[60%]">
          <img src={img} alt="info" />
        </div>
        <div className="lg:w-2/3 flex flex-col justify-center items-start text-sm lg:pl-14 text-white">
          <div className="lg:w-3/5 font-raleway font-bold text-xl lg:text-4xl mb-4">Stay productive, wherever you are</div>
          <div className="mb-4 text-base lg:text-sm">
            Never let location be an issue when accessing your files. Fylo has you <br className='hidden lg:block' /> covered for all of your file storage needs.
          </div>
          <div className="mb-4 text-base lg:text-sm">
            Securely share files and folders with friends, family and colleagues for live <br className='hidden lg:block' /> collaboration. No email attachments required.
          </div>
          <a className='underline underline-offset-8 text-cyan-cta leading-3' href="/">See how Fylo works</a>
        </div>
      </div>
    </div>
  )
}

export default HowWorks;