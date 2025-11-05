import React from "react";

export default function ExpList({icon: Icon , text , date , role }) {
  return (
    <div className='mb-6'>
      <div className="flex items-start space-x-6 bg-blue-950/20 transition-all duration-300 p-4 sm:p-8 rounded-md">
      <div className="flex items-center justify-center flex-col rounded-full bg-blue-950 h-10 w-10 sm:w-14 sm:h-14">
        <Icon className='text-white h-6 w-6 sm:w-8 sm:h-8'/>
      </div>
      <div className='flex-1'>
        {date && (
            <h1 className='mb-2 sm:px-6 px-4 py-1 sm:py-1.5 rounded-full bg-gray-200 text-gray-600 w-fit sm:text-lg text-sm font-bold'>
                {date}
            </h1>
        )}
        <h1 className='text-gray-200 text-xl sm:text-2xl font-semibold'>{role}</h1>
        <p className='text-gray-300 text-sm sm:text-base pt-3 '>
          {text}
        </p>
      </div>

      </div>
    </div>


  );
}





