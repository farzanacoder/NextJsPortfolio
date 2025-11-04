import React from 'react'

export default function Button({btn , className}) {
  return (
    <button className={`bg-[#0C1E5D] hover:bg-transparent border border-[#0C1E5D] px-5 py-2.5 rounded-full cursor-pointer ${className}`}>
          {btn}
        </button>
  )
}
