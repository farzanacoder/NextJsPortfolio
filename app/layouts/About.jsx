import React from "react";
import AboutList from "../components/AboutList";
import Abt from '../../public/images/service.png'
import Abt1 from '../../public/images/service1.png'
import Abt2 from '../../public/images/service2.png'
import Abt3 from '../../public/images/service3.png'


export default function About() {
  return (
    <section className="mb-[162px]">
      <div className="container">
        <p className="text-5xl text-center w-[537.15px] m-auto pb-[75px]">Colleborate with brand and agencies to create impactful results</p>

        <div className="flex flex-wrap justify-between">
            <AboutList img={Abt} title='UI and UX' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        <AboutList img={Abt1} title='UI and UX' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        <AboutList img={Abt2} title='UI and UX' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        <AboutList img={Abt3} title='UI and UX' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
      </div>
    </section>
  );
}
