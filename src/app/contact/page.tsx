'use client';
import React from 'react'
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const info = [
  {
    icon: <FaWhatsapp />,
    label: "Whatsapp",
    value: "(+62) 813-3786-3325"
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "faizalhamka45.dev@gmail.com"
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "Ilham Faizal Hamka"
  }
]

import {motion} from "framer-motion"; 


const Contact = () => {
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}

    className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] roundedn-xl'>
              <h3 className='text-xl text-[#9ffeff]'>Let&apos;s Work Together</h3>
              <p className='text-white/60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, ea!</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type='firstname' placeholder='First Name'/>
                <Input type='lastname' placeholder='Last Name'/>
                <Input type='email' placeholder='Email Address'/>
                <Input type='phone' placeholder='Phone Number'/>
              </div>
              <Select>
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder='Select a Service' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value='consulting'>Consulting</SelectItem>
                    <SelectItem value='frontend'>Front-End Development</SelectItem>
                    <SelectItem value='backend'>Back-End Development</SelectItem>
                    <SelectItem value='fullstack'>Fullstack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea 
              className='h-[200px]'
              placeholder='Type your message here...'
              />
              <Button className='max-w-40'>Send Message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact