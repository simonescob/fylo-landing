import React from 'react'
import ButtonCTA from '../components/ButtonCTA';
import img from '../images/illustration-intro.png';
import bgCurveDT from '../images/bg-curvy-desktop.svg';

function Header() {
  return (
    <header className='flex flex-col justify-center items-center bg-intro-dark-blue text-white'>
      
      <img className='mt-8' src={img} alt="" />

      <div className="relative flex flex-col justify-center items-center">

        <div className="w-[33rem] font-raleway font-bold text-4xl text-center pt-7">
          All your files in one secure location, accessible anywhere.
        </div>

        <div className="w-[30rem] font-noto-sans font-normal text-base text-center pt-7">
          Fylo stores all your most important files in one secure location. Access them wherever 
          you need, share and collaborate with friends family, and co-workers.
        </div>

        <ButtonCTA
          text='Get Started'
        />

      </div>

      <img className='-mt-60' src={bgCurveDT} alt="bg-curve" />
      
    </header>
  )
}

export default Header;