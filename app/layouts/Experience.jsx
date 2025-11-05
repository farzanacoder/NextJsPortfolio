import React from 'react'
import ExpList from '../components/ExpList'
import Title from '../components/Title'
import { FaDatabase, FaReact } from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa6'
import { BiBadge } from 'react-icons/bi'

export default function Experience() {
  return (
    <div className='py-16 mt-4' id='experience'>
      <div className='grid mx-auto w-[90%] sm:w-[70%] grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
            <Title title='My Work' span='Experience'/>
            <div className='mt-10' data-aos='zoom-in' data-aos-anchor-placement='top-center'>
                <ExpList icon={FaCodepen} role='Full-Stack Developer' text='Skilled in both front-end and back-end technologies, capable of building complete web applications from start to finish.'/>
                <ExpList icon={FaReact} role='Front-End Developer' text='Focused on building responsive, user-friendly web interfaces using modern tools like React, HTML, CSS, and JavaScript.'/>
                <ExpList icon={FaDatabase} role='Backend Developer' text='Specialized in server-side development, database management, and API integration to ensure smooth functionality behind the scenes.'/>
            </div>
        </div>


        <div>
            <Title title='My Work' span='Education'/>
            <div className='mt-10' data-aos-delay='300' data-aos='zoom-out' data-aos-anchor-placement='top-center'>
                <ExpList icon={BiBadge} role='Full Stack Developer' date='Jan 2024 - Dec 2025' text='Creative It Institute'/>
                <ExpList icon={FaReact} role='Frontend Development With React and NextJs' date='Jan 2023 - Dec 2024' text='Creative It Institute'/>
                <ExpList icon={FaDatabase} role='Certificate in WordPress Development' date='Jan 2022 - Dec 2023' text='SofTech It Institute'/>
            </div>
        </div>
      </div>
    </div>

  )
}





