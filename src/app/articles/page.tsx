'use client'
import React from 'react'
import ParticlesComponent from '../components/sub/ParticlesComponent'

const Articles = () => {
  return (
    <div className="relative flex h-screen w-full overflow-hidden items-center justify-center">
      <div className='absolute h-full w-full z-[-1]'>
      <ParticlesComponent/>
      </div>
      <div className='card flex items-center justify-center text-[40px] font-bold'>
          <div className=" text-white text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">THE SITE IS UNDER CONSTRUCTION</div>
      </div>
    </div>
  )
}

export default Articles