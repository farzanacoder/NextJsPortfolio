import React from "react";
import Proimg from '../../public/images/img.png'
import Proimg1 from '../../public/images/img2.png'
import Proimg2 from '../../public/images/img4.png'
import Proimg3 from '../../public/images/img3.png'
import PrjectList from "../components/PrjectList";


export default function Projects() {
  return (
    <section className="mt-[146px]">
      <div className="container">
        <p className="text-5xl text-center font-bold w-[622.19px] m-auto mb-14">A small selection of recent <span className="text-[#53EAFD]">projects</span></p>

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
