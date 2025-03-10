import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='min-h-screen  bg-customeGreen flex items-center w-full overflow-hidden' id='Home'>
        <Navbar/>
        <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white' >
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 font-head'>Lorem ipsum dolor sit amet.</h2>
            <div className='space-x-6 mt-16 font-para'>
                <a href="#Contact" className='border border-white px-8 py-3 rounded-md '>Contact</a>
                <a href="#Donate" className='text-customeGreen bg-customeWhite px-8 py-3 rounded-md '>Donate</a>
            </div>
        </div>
    </div>
  )
}

export default Header

