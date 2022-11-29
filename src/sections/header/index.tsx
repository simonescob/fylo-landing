import React from 'react'
import ButtonCTA from '../../components/ButtonCTA';
import img from '../../images/illustration-intro.png';

function Header() {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-900 text-white'>
      
      <img className='mt-8' src={img} alt="" />

      <div className="w-[55%] font-raleway font-bold text-4xl text-center pt-7">
        All your files in one secure location, accessible anywhere.
      </div>

      <div className="w-[38%] font-noto-sans font-normal text-base text-center pt-7">
        Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers.
      </div>

      <ButtonCTA
        text='Get Started'
      />
      
    </div>
  )
}

export default Header;