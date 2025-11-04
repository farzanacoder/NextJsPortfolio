'use client'
import React from 'react'
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Tilt from 'react-parallax-tilt'
import Title from '../components/Title'

const Skils =[
    {
        name: 'JavaScript',
        icon: <SiJavascript/>,
        percentage: 89,
    },
    {
        name: 'React.js',
        icon: <SiReact/>,
        percentage: 92,
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs/>,
        percentage: 90,
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs/>,
        percentage: 88,
    },
    {
        name: 'Tailwindcss',
        icon: <SiTailwindcss/>,
        percentage: 94,
    },
    {
        name: 'TypeScript',
        icon: <SiTypescript/>,
        percentage: 86,
    },
]

export default function Skills() {
  return (
    <section className='mt-16'>
        <div className="container">
                    <Title title='My' span='Skills'/>
      
       <div className='flex flex-wrap justify-center gap-6 mt-16'>
        {
            Skils.map((item,index)=>{
                return (
                    <Tilt key={item.name} scale={1.5} transitionSpeed={400}>
                        <div data-aos='flip-right' data-aos-delay={index*100} data-aos-anchor-placement='top-center' className='bg-[#14134145] text-center h-48 rounded-3xl flex flex-col items-center justify-center w-40 shadow-lg transition hover:scale-105'>
                            <div className='text-5xl mb-4 text-gray-300 '>{item.icon}</div>
                            <div className='text-2xl font-semibold '>{item.percentage}%</div>
                            <div className='mt-1 text-purple-400 '>{item.name}</div>
                        </div>
                    </Tilt>
                )
            })
        }
       </div>
    </div>
    </section>
  )
}




