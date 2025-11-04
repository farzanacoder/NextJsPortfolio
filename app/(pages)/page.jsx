"use client";
import React, { useEffect } from "react";
import Banner from "../layouts/Banner";
import About from "../layouts/About";
import Experience from "../layouts/Experience";
import Projects from "../layouts/Projects";
import Contact from "../layouts/Contact";
import Skills from "../layouts/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

export default function page() {
  useEffect(() => {
    const initAOS = async () => {
      await AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out",
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
