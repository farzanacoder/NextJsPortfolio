import React from "react";

export default function ContactIcon({txt , icon:Icon}) {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <Icon className="h-9 w-9 text-cyan-300" />
      <p className="text-xl font-bold text-gray-400">{txt}</p>
    </div>
  );
}
