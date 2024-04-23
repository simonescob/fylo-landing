import React from 'react'
import Feature from '../components/Feature';
import anyFile from '../images/icon-any-file.svg';
import accAny from '../images/icon-access-anywhere.svg';
import security from '../images/icon-security.svg';
import collab from '../images/icon-collaboration.svg';

function Features() {

  const featureList = [
    {
      icon: anyFile,
      title: 'Access your files, anywhere',
      description: 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    },
    {
      icon: security,
      title: 'Security you can trust',
      description: '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    },
    {
      icon: collab,
      title: 'Real-time collaboration',
      description: 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
    },
    {
      icon: accAny,
      title: 'Store any type of file',
      description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ]

  return (
    <div className='flex justify-center text-white pt-64 lg:pt-0'>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center flex-wrap text-white">
        <div className="flex justify-between flex-wrap w-[380px] lg:w-[50rem]">
          {featureList.map(feature => 
            <Feature icon={feature.icon} title={feature.title} description={feature.description}/>
          )}
        </div> 
      </div>
    </div>
  )
}

export default Features;