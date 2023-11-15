import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className='flex items-center w-[80%] max-w-[1200px] mx-auto'>
        <section className='flex min-h-full flex-col py-[200px] gap-5'>
        <div className='fade-in-bottom'>
        <h2>HELLO, MY NAME IS ADITYA</h2>
        </div>
        <div className=' delay-[2000ms] fade-in-bottom'>
            <h1 className='text-6xl'>I make websites and apps.</h1>
        </div>
        <div className='delay-200 fade-in-bottom'>
            <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero reiciendis similique officia distinctio quis non labore consequatur aliquam, accusantium eligendi, maxime asperiores architecto impedit. Velit magni reiciendis dolores cumque perferendis!
            </h2>
        </div>
        </section>
    </main>
  )
}

export default Hero