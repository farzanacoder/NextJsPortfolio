import React from "react";
import Proimg from '../../public/images/img.png'
import Proimg1 from '../../public/images/img2.png'
import Proimg2 from '../../public/images/img4.png'
import Proimg3 from '../../public/images/img3.png'
import PrjectList from "../components/PrjectList";
import Title from "../components/Title";


export default function Projects() {
  return (
    <section className="mt-[146px]">
      <div className="container">
        <Title title='A small selection of recent' span='projects' className=' w-[622.19px] m-auto'/>

        <div className="flex flex-wrap gap-[42px] justify-between">
            <PrjectList img={Proimg} text='Apps , UI/UX' title='Modern Finance Dashboard UI'/>
            <PrjectList img={Proimg1} text='Apps , UI/UX' title='Modern Finance Dashboard UI'/>
            <PrjectList img={Proimg2} text='Apps , UI/UX' title='Modern Finance Dashboard UI'/>
            <PrjectList img={Proimg3} text='Apps , UI/UX' title='Modern Finance Dashboard UI'/>
        </div>
      </div>
    </section>
  );
}
