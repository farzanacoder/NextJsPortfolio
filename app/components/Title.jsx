import React from 'react'

export default function Title({title , className , span}) {
  return (
    <p className={`${className} text-3xl sm:text-4xl font-bold text-white text-center`}>{title} <span className="text-[#53EAFD]">{span}</span></p>
  )
}
