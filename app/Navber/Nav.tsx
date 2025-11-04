'use client'
import { Navlinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { AiOutlineDownload } from 'react-icons/ai';
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props ={
  openNav: ()=> void
}

const Nav = ({openNav}:Props) => {

  const [navBg,setNAavBg] = useState(false)

  useEffect(()=>{
    const handler =()=>{
      if(window.scrollY >= 90) setNAavBg(true)
      if(window.scrollY < 90) setNAavBg(false)
    }
  window.addEventListener('scroll',handler)

  return ()=> window.removeEventListener('scroll',handler)
  })


  return (
    <div className={`transition-all duration-200 h-[12vh] z-[1000] fixed w-full ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'}`}>
        <div className='flex items-center h-full justify-between mx-auto w-[90%]'>
            <div className="logo flex items-center space-x-2">
                <div className='h-10 w-10 bg-white rounded-full flex items-center justify-center flex-col'>
                    <FaCode className='h-5 w-5 text-black' />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold uppercase'>Farzana</h1>
            </div>

            <div className="nav hidden lg:flex items-center space-x-10">
              {
                Navlinks.map((link)=>{
                  return<Link key={link.id} href={link.url} className=' text-base hover:text-cyan-300 text-white font-medium transition-all duration-200'>
                    <p>{link.label}</p>
                  </Link>
                })
              }
            </div>

            <div className="flex items-center space-x-4">
              <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
                <AiOutlineDownload className='h-5 w-5' />
                <span>Download Cv</span>
              </button>
              <HiBars3BottomRight onClick={openNav} className='h-8 w-8 cursor-pointer text-white lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Nav