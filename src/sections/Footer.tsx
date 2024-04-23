import React from 'react'

import logo from '../images/logo.svg';
import locationIcon from '../images/icon-location.svg';
import emailIcon from '../images/icon-email.svg';
import phoneIcon from '../images/icon-phone.svg';

function Footer() {
  return (
    <footer className='flex flex-col justify-center p-8 lg:px-24 lg:py-12 bg-footer-dark-blue text-white'>
      <div className="mb-5">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="flex items-start">
          <img className='mt-1.5 mr-5' src={locationIcon} alt="" />
          <div className="">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et 
            dolore magna aliqua
          </div>
        </div>
        <div className="mb-10 lg:mb-0">
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
        <div className="mb-10 space-y-2 lg:mb-0 lg:space-y-4">
          <div className="">
            About Us
          </div>
          <div className="">
            Jobs
          </div>
          <div className="">
            Press
          </div>
          <div className="">
            Blog
          </div>
        </div>
        <div className="mb-10 space-y-2 lg:mb-0 lg:space-y-4">
          <div className="">Contact Us</div>
          <div className="">Terms</div>
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