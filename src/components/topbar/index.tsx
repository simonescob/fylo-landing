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
    <div className='flex justify-between items-center px-20 py-7 bg-slate-900 text-white'>
      
      <img className='w-32' src={logo} alt="" />
      
      <div className='flex'>
        {
          links.map((link: any) =>
            <a className='font-raleway mx-3 text-gray-200 hover:underline' href={link.url}>{link.name}</a>
          )
        }
      </div>

    </div>
  )
}

export default Topbar;