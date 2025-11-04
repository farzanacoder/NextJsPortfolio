import Image from 'next/image'
import React from 'react'
import Logo from '@/public/images/logo.png'
import Link from 'next/link'
import Button from "../components/Button";


export default function Header() {
  return (
   <section>
     <div className='container flex justify-between items-center py-10'>
      <div className='flex gap-2.5 justify-center items-center font-bold text-lg'>
        <Image src={Logo} alt='logo'/>
        <p className='text-'>FARZANA</p>
      </div>


      <nav className='text-lg flex gap-5'>
        <Link href={'/contact'}>Home</Link>
        <Link href={'/contact'}>Services</Link>
        <Link href={'/contact'}>Resume</Link>
        <Link href={'/contact'}>Works</Link>
        <Link href={'/contact'}>Skills</Link>
        <Link href={'/contact'}>Testimonials</Link>
        <Link href={'/contact'}>Contact</Link>
      </nav>


      <div>
         <Button btn='Download CV'/>
      </div>
    </div>
   </section>
  )
}
