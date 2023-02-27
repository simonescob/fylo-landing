import React from 'react';

import logo from '../../images/logo.svg';

function Topbar() {

  const links = [
    {
      name: 'Features',
      url: '/',
    },
    {
      name: 'Team',
      url: '/',
    },
    {
      name: 'Sign In',
      url: '/',
    },
  ]

  return (
    <div className='flex justify-between items-center px-6 py-8 lg:px-20 lg:py-7 bg-intro-dark-blue text-white'>
      
      <img className='w-24 lg:w-32' src={logo} alt="" />
      
      <div className='flex'>
        {
          links.map((link: any) =>
            <a className='lg:w-[72px] mr-5 lg:mr-7 last:mr-0 text-sm lg:text-base text-center font-raleway text-gray-200 hover:font-bold hover:underline' href={link.url}>{link.name}</a>
          )
        }
      </div>

    </div>
  )
}

export default Topbar;