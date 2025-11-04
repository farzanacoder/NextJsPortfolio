import React from 'react'
import ExpList from '../components/ExpList'
import Title from '../components/Title'

export default function Experience() {
  return (
    <section>
       <div className="container flex justify-between">
         <div>
        <Title title='My Work' span='Experience'/>
            <ExpList/>
            <ExpList/>
            <ExpList/>
        </div>

         <div>
            <p className='text-4xl font-bold'>My  <span className='text-[#A2F4FD]'>Education</span></p>
            <ExpList/>
            <ExpList/>
            <ExpList/>
        </div>
       </div>


    </section>
  )
}
