import React from 'react'
import img from '../images/illustration-stay-productive.png';

function HowWorks() {
  return (
    <div className='flex justify-center pt-20 pb-28'>

      <div className="flex flex-col lg:flex-row lg:w-[85%] 2xl:w-4/6">

        <div className="w-[60%]">

          <img src={img} alt="image-info" />

        </div>

        <div className="w-2/3 flex flex-col justify-center items-start text-sm pl-14 text-white">

          <div className="w-3/5 font-raleway font-bold text-4xl mb-4">Stay productive, wherever you are</div>
    
          <div className="mb-4">
            Never let location be an issue when accessing your files. Fylo has you <br /> covered for all of your file storage needs.
          </div>
    
          <div className="mb-4">
            Securely share files and folders with friends, family and colleagues for live <br /> collaboration. No email attachments required.
          </div>
    
          <a className='underline underline-offset-8 text-cyan-cta leading-3' href="/">See how Fylo works</a>

        </div>

      </div>

    </div>
  )
}

export default HowWorks;