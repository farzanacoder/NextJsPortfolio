'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'


const ScrolToTop = () => {
  const [scrll ,setScrll] = useState(false)

  useEffect(()=>{
    const toggleScrll =()=>{
      if(window.scrollY > 300) setScrll(true)
        else setScrll(false)
    }
    window.addEventListener('scroll' , toggleScrll)
    return ()=> window.addEventListener('scroll' , toggleScrll)
  },[])

  const scroll =()=>{
    window.scrollTo({top:0 , behavior:'smooth'})
  }



  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {
        scrll && (
          <button className='bg-blue-950/60 cursor-pointer text-white rounded-full h-12 w-12 flex justify-center focus:outline-none items-center' onClick={scroll}>
            <FaArrowUp/>
          </button>
        )
      }
    </div>
  )
}

export default ScrolToTop