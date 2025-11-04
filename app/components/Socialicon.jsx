import React from "react";
import { GrFacebookOption } from "react-icons/gr";

export default function Socialicon({ icon: Icon }) {
  return (
    <div className="h-14 w-14 bg-blue-950/60 rounded-full items-center flex justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300 flex-col">
      <Icon className="text-white h-6 w-6" />
    </div>
  );
}
