import Image from 'next/image'
import React from 'react'

export default function AboutList({img , title , text}) {
  return (
    <div>
        <Image src={img} alt='about'/>
        <p className='text-2xl my-[25px] '>{title}</p>
        <p className='text-base w-[218.72px]'>{text}</p>
    </div>
  )
}
