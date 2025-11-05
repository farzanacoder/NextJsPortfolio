import React from "react";
import Proimg from "../../public/images/img.jpg";
import Proimg1 from "../../public/images/img2.jpg";
import Proimg2 from "../../public/images/img4.jpg";
import Proimg3 from "../../public/images/img3.jpg";
import PrjectList from "../components/PrjectList";
import Title from "../components/Title";

export default function Projects() {
  return (
    <section className="py-16">
      <div className="container">
        <Title
          title="A small selection of recent"
          span="projects"
          className=" w-[622.19px] m-auto"
        />

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 ">
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <PrjectList
              img={Proimg}
              text="Apps , UI/UX"
              title="Modern Finance Dashboard UI"
            />
          </div>
          <div
            data-aos-delay="100"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <PrjectList
              img={Proimg1}
              text="Bradning , Motion"
              title="Portfolio Website for Creatives"
            />
          </div>
          <div
            data-aos-delay="200"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <PrjectList
              img={Proimg3}
              text="Apps , UI/UX"
              title="Modern Finance Dashboard UI"
            />
          </div>
          <div
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <PrjectList
              img={Proimg2}
              text="Apps , UI/UX"
              title="Modern Finance Dashboard UI"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
