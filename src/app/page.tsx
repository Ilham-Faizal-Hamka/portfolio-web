import Image from 'next/image'
import Hero from './components/main/Hero'
import Experience from './components/main/Experience'

export default function Home() {
  return (
   <main className='h-full w-full'>
    <div className='flex flex-col h-[850px] gap-20'>
      <Hero />
      <Experience />
      <div className='mt-[1000px]'> 
        sdada
      </div>
    </div>
      

   </main>
  )
}
