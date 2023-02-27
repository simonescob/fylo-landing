import React from 'react'
import ButtonCTA from '../components/ButtonCTA';
import img from '../images/illustration-intro.png';
import bgCurveDT from '../images/bg-curvy-desktop.svg';

function Header() {
  return (
    <header className='flex flex-col justify-center items-center bg-intro-dark-blue text-white'>
      
      <img className='relative z-50 w-[80%] lg:w-fit mt-8' src={img} alt="" />

      <div className="relative flex flex-col justify-center items-center">

        <div className="lg:w-[33rem] font-raleway font-bold text-2xl lg:text-4xl text-center mx-4 lg:mx-0 pt-7">
          All your files in one secure location, accessible anywhere.
        </div>

        <div className="w-[80%] lg:w-[30rem] font-noto-sans font-normal text-sm lg:text-base text-center pt-7">
          Fylo stores all your most important files in one secure location. Access them wherever 
          you need, share and collaborate with friends family, and co-workers.
        </div>

        <ButtonCTA
          text='Get Started'
        />

      </div>

      <img className='-mt-[370px] lg:-mt-60' src={bgCurveDT} alt="bg-curve" />
      
    </header>
  )
}

export default Header;