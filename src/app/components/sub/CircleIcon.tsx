import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

interface CircleIconProps {
  reference: React.RefObject<HTMLElement>;
}

const CircleIcon: React.FC<CircleIconProps> = ({reference }) => {
  const ref = useRef(null)
    const {scrollYProgress} = useScroll({
      target: reference,
      offset: ["center end", "center center"]
    })
  return (
    <figure className='absolute left-0 stroke-white'>
      <svg className='-rotate-90' width='75' height='75' viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" className='stroke-cyan-500 stroke-1 fill-none'/>
        <motion.circle cx="75" cy="50" r="20" className='stroke-[5px] fill-[#030014]' 
        style={{
          pathLength: scrollYProgress,
        }}
        />
        <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-cyan-500'/>
      </svg>
    </figure>
  )
}

export default CircleIcon