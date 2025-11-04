import React from "react";

export default function Form() {
  return (
    <div className="bg-[#162456] rounded-2xl w-[484px] h-auto flex flex-col items-center justify-center gap-10 p-10">
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
        <input type="number" name="" id="" placeholder="Mobile Number" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          className="w-full lg:text-md text-[15px] px-5 py-3 rounded-xl border border-gray-300 bg-light focus:outline-none focus:ring-2 focus:ring-indigo-400"
        ></textarea>
      </form>
    </div>
  );
}
