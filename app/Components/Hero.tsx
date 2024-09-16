import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col -mt-20 justify-center items-center min-h-screen'>
      <div className='text-left md:text-left'>
        <div className='animate-fade-up mb-6'>
          <h2 className='font-bold font-body text-xl md:text-2xl dark:text-accentPurple text-lightTertiaryBg'>HELLO, MY NAME IS ADITYA</h2>
        </div>
        <div className='animate-fade-up'>
          <h1 className='text-[2.5rem] font-heading leading-[40px] md:text-[6rem] md:leading-[85px] font-extrabold'>
            I make websites and apps.
          </h1>
        </div>
        <div className='animate-fade-up'>
          <h2 className='text-2xl md:text-3xl md:mt-16 font-thin font-body mt-6 leading-8 md:leading-9'>
            I<span>&apos;</span>m a software engineer adept at frontend and app development, blending technical expertise with a keen eye for design to create engaging digital experiences.
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Hero
