import React from 'react'
import Banner from '../layouts/Banner'
import About from '../layouts/About'
import Experience from '../layouts/Experience'
import Projects from '../layouts/Projects'
import Contact from '../layouts/Contact'
import Skills from '../layouts/Skills'

export default function page() {
  return (
    <>
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
    </>
  )
}
