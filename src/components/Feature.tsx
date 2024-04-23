import React from 'react'

type FeatureProps = {
  icon: string, 
  title: string, 
  description: string,
}

function Feature({icon, title, description}:FeatureProps) {
  return (
    <div className='w-[400px] flex flex-col items-center py-4 mb-5'>
      <div className="h-20 flex justify-center items-center mb-5">
        <img className='max-h-full' src={icon} alt={`title-icon-fylo`} />
      </div>
      <h3 className='font-raleway font-bold text-lg mb-1'>{title}</h3>
      <div className='w-[380px] font-noto-sans font-normal text-sm text-center'>{description}</div>   
    </div>
  )
}

export default Feature;