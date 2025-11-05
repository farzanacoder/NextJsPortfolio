import React from "react";
import AboutList from "../components/AboutList";
import Abt from '../../public/images/service.png'
import Abt1 from '../../public/images/service1.png'
import Abt2 from '../../public/images/service2.png'
import Abt3 from '../../public/images/service3.png'


export default function About() {
  return (
    <div className='py-16 mt-22'>
      <h1 className='text-center text-2xl md:text-4xl lg:text-5xl font-bold text-white w-[40%] mx-auto'>Colleborate with brand and agencies to create impactful results</h1>
      <div className='grid mx-auto w-[90%] sm:w-[70%] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 items-center'>
        <div  data-aos='fade-right' data-aos-anchor-placement='top-center'>
            <AboutList img={Abt} title='UI and UX' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
        <div  data-aos='fade-right' data-aos-delay='100' data-aos-anchor-placement='top-center'>
           <AboutList img={Abt1} title='Web and Mobile App' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
        <div data-aos='fade-right2' data-aos-delay='200' data-aos-anchor-placement='top-center'>
             <AboutList img={Abt2} title='Design & Creative' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
        <div data-aos='fade-right3' data-aos-delay='300' data-aos-anchor-placement='top-center'>
          <AboutList img={Abt3} title='Development' text='Designing interfaces that are intuitive, efficient, and enjoyable to use.'/>
        </div>
      </div>
    </div>

  );
}
