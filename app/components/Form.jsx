import React from "react";
import Button from '../components/Button'

export default function Form() {
  return (
   <>
     <form action="" method="get">
      <div className='md:p-10 p-5 bg-[#131332] rounded-lg' data-aos='zoom-in' data-aos-anchor-placement='top-center' >
                <input type="text" placeholder='Name' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input type="email" placeholder='Email Address' className='px-4 py-3.5 my-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input type="text" placeholder='Mobile Number' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <textarea name="msg" id="" cols="30" rows="10" placeholder='Your Message' className='px-4 py-3.5 mt-6 bg-[#363659] h-[10rem] text-white outline-none rounded-md w-full placeholder:text-white/70'></textarea>
                <Button btn='Send Message' className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all cursor-pointer text-white rounded-full duration-300'/>
      </div>
     </form>
   </>
  );
}
