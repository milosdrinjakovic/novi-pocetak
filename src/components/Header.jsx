import React from "react";
import {FaPhoneAlt} from "react-icons/fa";
import Image from "next/image";
import CustomButton from "./ui/Buttons/CustomButton";

export default function Header() {
  return (
    <header className="bg-[#202A3F] text-white flex justify-between items-center p-4">
  <div className="flex items-center space-x-3">
    <div>
      <Image src="/selidbelogo.png" alt="Logo" width={120} height={120} />
    </div>
    <div>
      <h1 className="text-xl font-bold">Selidbe Novi Početak</h1>
    </div>
  </div>
  
  {/* Navigation */}
  <nav className="hidden md:flex space-x-6">
    <a href="/" className="hover:text-gray-300">
      Početna
    </a>
    <div className="relative group">
      <button className="text-white rounded">Usluge</button>
      <div className="absolute hidden group-hover:block bg-[#202A3F] shadow-lg w-44 z-10">
        <ul className="text-white">
          <li className="px-4 py-2 hover:bg-[#1CAF8A]">
            <a href="#selidbe-lokalne">Lokalne selidbe</a>
          </li>
          <li className="px-4 py-2 hover:bg-[#1CAF8A]">
            <a href="#selidbe-medjunarodne">Međunarodne selidbe</a>
          </li>
          <li className="px-4 py-2 hover:bg-[#1CAF8A]">
            <a href="#pakovanje">Pakovanje i transport</a>
          </li>
        </ul>
      </div>
    </div>
    <a href="/kontakt" className="hover:text-gray-300">
      Kontakt
    </a>
  </nav>
  
  {/* Hamburger menu on smaller screens */}
  <button className="md:hidden text-2xl">☰</button>
  
  <CustomButton text={"064-444-222"} Icon={FaPhoneAlt} />
</header>

  );
}
