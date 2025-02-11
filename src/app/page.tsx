import Image from 'next/image'
import Hero from './components/main/Hero'
import Experience from './components/main/Experience'

export default function Home() {
  return (
   <main className='h-full w-full gap-20 flex flex-col'>
      <Hero />
      <Experience />
   </main>
  )
}
