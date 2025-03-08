import React from "react";

export default function CustomButton({ text, Icon, phoneNumber }) {
  return (
    <div className="rounded-full font-bold bg-[#1CAF8A] p-4 sm:p-6 md:p-3 flex items-center space-x-2 justify-center hover:bg-white text-white hover:text-[#1CAF8A] transition-all duration-500 ease-in-out min-w-[170px] sm:min-w-[190px] md:min-w-[220px] max-w-[250px] hover:cursor-pointer">
      {phoneNumber ? (
        <a href={`tel:${phoneNumber}`} className="flex items-center space-x-2">
          <Icon className=" sm:w-6 sm:h-6" />
          <p className="text-xs sm:text-sm md:text-base">{text}</p>
        </a>
      ) : (
        <>
          <Icon className=" sm:w-6 sm:h-6" />
          <p className="text-xs sm:text-sm md:text-base">{text}</p>
        </>
      )}
    </div>
  );
}
