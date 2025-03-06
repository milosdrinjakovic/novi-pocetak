"use client";
import React from "react";

export default function CustomButton({ text, Icon }) {
  return (
    <div className="rounded-full font-bold bg-[#1CAF8A] p-4 sm:p-6 md:p-3 flex items-center space-x-2 justify-center hover:bg-white text-white hover:text-[#1CAF8A] transition-all duration-500 ease-in-out min-w-[170px] sm:min-w-[190px] md:min-w-[220px] max-w-[250px]">
      <Icon className="text-lg sm:w-10 sm:h-10" />
      <p className="text-xs sm:text-sm md:text-base">{text}</p>
    </div>
  );
}
