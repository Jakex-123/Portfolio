/* eslint-disable react/jsx-no-comment-textnodes */
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center h-16'>
        <h1>AdityaGupta_.</h1>
        <ul className='flex justify-evenly w-[400px]'>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// home</span></Link></li>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// about</span></Link></li>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// projects</span></Link></li>
            <li className='relative p-2'><Link href='/'  className='navlink'><span>// contact</span></Link></li>
        </ul>
        <button>Resume</button>
    </nav>
  )
}

export default Navbar