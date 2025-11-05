import Image from 'next/image'
import React from 'react'

export default function PrjectList({img , text , title}) {
  return (
    <div>
      <div className='hover:bg-[#0C072A]'>
        <Image src={img} alt='project' className='h-[272px] w-[484px] rounded-2xl cursor-pointer '/>
      </div>
        <p className='text-[24px] font-semibold  my-[16px]'>{title}</p>
        <p className='text-base text-[#FFFFFF]'>{text}</p>
    </div>
  )
}
