import Image from "next/image";
import React from "react";
import Hero from "@/public/images/hero.png";
import Button from "../components/Button";

export default function Banner() {
  return (
    <section>
      <div className="container flex flex-col items-center justify-center">
        <Image className="mt-[115px]" src={Hero} alt="hero" />
        <p className="text-6xl w-[779.56px] text-center py-10">
          Creating web products, brands, <span className="text-[#A2F4FD]">and experiences.</span>
        </p>
        <p className="text-lg my-4">Hi! I'm Farzana Islam - A Passionate</p>
        <Button className='mb-[235px] px-14 py-4' btn="See my work" />
      </div>
    </section>
  );
}
