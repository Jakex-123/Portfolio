import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className='flex min-h-screen items-center w-[80%] max-w-[1200px] mx-auto relative'>
        <section className=' py-[100px]'>
        <div className='fade-in-bottom mb-6'>
        <h2 className='font-semibold text-xl text-[#a55ded]' >HELLO, MY NAME IS ADITYA</h2>
        </div>
        <div className='fade-in-bottom'>
            <h1 className='text-[3rem] leading-[50px] md:text-[6rem] font-extrabold md:leading-[85px]'>I make websites and apps.</h1>
        </div>
        <div className='fade-in-bottom'>
            <h2 className='text-[1.5rem] mt-6 leading-9'>
             I'm a software engineer adept at frontend and app development, blending technical expertise with a keen eye for design to create engaging digital experiences.
            </h2>
        </div>
        <div className="mouse"></div>
        </section>
    </main>
  )
}

export default Hero