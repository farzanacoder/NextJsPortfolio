import Image from 'next/image'
import React from 'react'

export default function AboutList({img , title , text}) {
  return (
     <div>
        <Image src={img} alt='img' height={60} width={60}/>
        <h1 className='my-6 text-xl md:text-2xl font-bold text-gray-200'>{title}</h1>
        <p className='text-gray-300'>{text}</p>
    </div>
  )
}
