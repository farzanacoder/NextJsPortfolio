'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ReasponsiveNav = () => {
  const [nav , setNav] = useState(false)

  const openNavHandler = ()=> setNav(true)
  const closeNavHandler = ()=> setNav(false)


  return (
    <div>
        <Nav openNav={openNavHandler}/>
        <MobileNav nav={nav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ReasponsiveNav