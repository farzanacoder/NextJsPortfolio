import React from "react";
import Button from '../components/Button'

export default function Form() {
  return (
    <div className="bg-[#162456] rounded-2xl w-[484px] h-auto flex flex-col items-center justify-center p-10">
      <form action="">
        <div>
          <input type="text" placeholder="Name"  className="mb-6 h-[52] w-[404] rounded-xl bg-[#363659] p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <div>
          <input type="email" placeholder="Email Address"  className="mb-6 h-[52] w-[404] rounded-xl bg-[#363659] p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <div>
          <input type="number" name="" id="" placeholder="Mobile Number"  className="mb-6 h-[52] w-[404] rounded-xl bg-[#363659] p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
        </div>

        <textarea
        placeholder="Your Message"
          name=""
          id=""
          cols="30"
          rows="5"
          className=" lg:text-md text-[15px]  rounded-xl w-full h-[160px]  bg-[#363659] p-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>
        <Button btn='Send Message' className='bg-[#363659] mt-5 border hover:border-[#969798] text-[#969798]'/>
      </form>
    </div>
  );
}
