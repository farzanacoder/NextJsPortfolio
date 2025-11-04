import React from 'react'

export default function Title({title , className , span}) {
  return (
    <p className={`${className} text-5xl text-center font-bold w-[622.19px] m-auto mb-14`}>{title} <span className="text-[#53EAFD]">{span}</span></p>
  )
}
