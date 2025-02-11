import React from 'react'
import HeroContent from '../sub/HeroContent'
import StarsCanvas from './StarBackground'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-screen w-full'>
      <video autoPlay muted loop className='h-full absolute left-0 z-[1] w-full object-cover'>
        <source src='/linedot.webm' type='video/webm'/>
      </video>
      <StarsCanvas/>
      <HeroContent/>
    </div>
  )
}

export default Hero