import React from "react";
import { FaReact } from "react-icons/fa";

export default function ExpList() {
  return (
    <div className="flex gap-6 mt-[40px] p-[32px] bg-[#000E3F] rounded-2xl w-[484px]">
      <div className="icon">
        <FaReact size={45} className="" />
      </div>

      <div className="pb-10">
        <h1 className="text-[24px] font-semibold">Full-Stack Developer</h1>
        <p className="text-base mt-10 w[302.25px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum
          laudantium sapiente cumque distinctio.
        </p>
      </div>
    </div>
  );
}
