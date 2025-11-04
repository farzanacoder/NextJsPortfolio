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
        <Title title='My Work' span='Education'/>
            <ExpList/>
            <ExpList/>
            <ExpList/>
        </div>
       </div>


    </section>
  )
}
