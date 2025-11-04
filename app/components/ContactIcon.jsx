import React from 'react'
import { BsTelephone } from 'react-icons/bs'

export default function ContactIcon() {
  return (
    <div className='flex gap-5 items-center my-5'>
        <BsTelephone size={20} className='text-[#53EAFD]'/>
        <p className='text-[20px] font-bold text-[#99A1AF]'>+9843582345</p>
    </div>
  )
}
