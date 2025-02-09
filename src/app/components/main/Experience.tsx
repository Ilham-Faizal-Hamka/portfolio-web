"use client"
import { Experiences } from '@/constans'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import CircleIcon from '../sub/CircleIcon'

interface DetailProps {
  position: string,
  company: string,
  time: string,
  address: string,
  description: string,
  skills: string[]
}

const Detail = ({detail}: {detail:DetailProps}) => {
  const ref = useRef(null)
  return <li ref={ref} className='my-12 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between text-white'>
    <CircleIcon reference={ref}/>
    <motion.div 
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:'spring'}}
    >
      <h3 className='capitalize text-2xl font-bold text-white'>{detail.position}&nbsp;<span className='text-cyan-500 capitalize'>@{detail.company}</span></h3>
      <span className='text-cyan-200 capitalize font-medium '>
        {detail.time} | {detail.address}
        </span>
        <p className='font-medium w-full text-white'>
          {detail.description}
        </p>
        <p className='font-medium w-full text-white'>
          skills: <span className='text-cyan-500'>{detail.skills.join(', ')}</span>
        </p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className='my-64'>
      <h2 className='text-8xl font-bold text-center mb-40 w-full text-white'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative left-[180px]'>
          <motion.div 
          style={{scaleY: scrollYProgress}} 
          transition={{duration:0.5, type:'spring'}}
          className='absolute left-9 top-0 w-[4px] h-[93%] bg-white origin-top'/>
        {Experiences.map((experience) => (<>
          <ul className='w-full flex flex-col items-start justify-between ml-4 mb-20'>
          <Detail key={experience.id} detail={{
            position: experience.position,
            company: experience.company,
            time: experience.time,
            address: experience.place,
            description: experience.description,
            skills: experience.skills
          }}/>
          </ul>
        </>))}
      </div>
    </div>
  )
}

export default Experience