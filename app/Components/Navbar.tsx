/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
    <nav className='flex justify-around items-center h-24'>
        <h1>AdityaGupta_.</h1>
        <ul className='flex justify-evenly w-[400px]'>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// home</span></Link></li>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// about</span></Link></li>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// projects</span></Link></li>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// contact</span></Link></li>
        </ul>
        <button className='border px-4 py-1.5 text-center align-middle rounded-md' >Resume</button>
    </nav>
    </header>
  )
}

export default Navbar