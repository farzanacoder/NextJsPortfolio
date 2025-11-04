import { Navlinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props ={
  nav: boolean
  closeNav: ()=> void
}

const MobileNav = ({nav , closeNav}:Props) => {
  const navOpen = nav ? 'translate-x-0' : 'translate-x-[100%]'


  return (
    <div>
      {/* overlay */}
      <div onClick={closeNav} className={`fixed inset-0 transform transition-all right-0 duration-500 z-[10002] bg-black opacity-70 w-full h-screen ${navOpen}`}></div>
      {/* navlinks */}
      <div className={`fixed text-white justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 z-[10050] right-0 ${navOpen}`}>
        {
          Navlinks.map((link)=>{
            return(
              <Link key={link.id} href={link.url}>
                <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] border-white sm:text-3xl'>
                  {link.label}
                </p>
              </Link>
            )
          })
        }
      {/* cross icon */}
      <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 h-6 w-6' />
      </div>

    </div>
  )
}

export default MobileNav