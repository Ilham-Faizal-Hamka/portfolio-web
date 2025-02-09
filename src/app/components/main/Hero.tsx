import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video autoPlay muted loop className='h-screen absolute left-0 z-[1] w-full object-cover'>
        <source src='/linedot.webm' type='video/webm'/>
      </video>
      <HeroContent/>
    </div>
  )
}

export default Hero