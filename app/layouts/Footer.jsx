import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='p-5 bg-blue-900/20'>
      <h1 className='text-lg text-white/70 text-center'><Link href={'/'} className='hover:text-amber-500'>Farzana</Link> - Personal Portfolio Website</h1>
    </footer>
  )
}
