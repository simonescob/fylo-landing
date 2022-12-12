import React from 'react'

import logo from '../images/logo.svg';
import locationIcon from '../images/icon-location.svg';
import emailIcon from '../images/icon-email.svg';
import phoneIcon from '../images/icon-phone.svg';

function Footer() {
  return (
    <footer className='flex flex-col justify-center px-24 py-12 bg-footer-dark-blue text-white'>

      <div className="mb-5">
        <img src={logo} alt="" />
      </div>

      <div className="flex justify-between items-start">

        <div className="flex items-start">
          
          <img className='mt-1.5 mr-5' src={locationIcon} alt="" />

          <div className="">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et 
            dolore magna aliqua
          </div>

        </div>

        <div className="">

          <div className="flex items-center mb-4">
            <img className='mr-4' src={phoneIcon} alt="" />
            <div className="">
              +1-543-123-4567
            </div>
          </div>

          <div className="flex items-center">
            <img className='mr-4' src={emailIcon} alt="" />
            <div className="">
              example@fylo.com
            </div>
          </div>

        </div>

        <div className="">

          <div className="mb-4">
            About Us
          </div>
          
          <div className="mb-4">
            Jobs
          </div>
          
          <div className="mb-4">
            Press
          </div>

          <div className="">
            Blog
          </div>

        </div>
        
        <div className="">

          <div className="mb-4">Contact Us</div>
          <div className="mb-4">Terms</div>
          <div className="">Privacy</div>

        </div>

        <div className="flex">

          <i className="fa-brands fa-facebook text-2xl mr-4 cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-2xl mr-4 cursor-pointer"></i>
          <i className="fa-brands fa-instagram text-2xl cursor-pointer"></i>

        </div>
      
      </div>
      
      <div className="">

        <p className="attribution">
          Challenge by <a className='underline' href="https://www.frontendmentor.io?ref=challenge"  rel="noreferrer" target="_blank">Frontend Mentor</a>. 
          Coded by <a className='underline' href="http://simonescob.github.io/">Simon Escobar</a>.
        </p>

      </div>

    </footer>
  )
}

export default Footer;