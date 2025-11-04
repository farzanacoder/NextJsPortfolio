import Image from 'next/image'
import React from 'react'

export default function PrjectList({img , text , title}) {
  return (
    <div>
        <Image src={img} alt='project'/>
        <p className='text-[24px] font-semibold  my-[16px]'>{title}</p>
        <p className='text-base text-[#FFFFFF]'>{text}</p>
    </div>
  )
}
