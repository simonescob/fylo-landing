import React from 'react'

interface BtnProps {
  text: string,
}

function ButtonCTA( { text } : BtnProps ) {

  return (
    <button className='bg-cyan-400 text-white my-7 py-3 px-12 rounded-full'>{text}</button>
  )
}

export default ButtonCTA;