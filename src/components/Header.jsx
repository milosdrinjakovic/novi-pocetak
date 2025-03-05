import React from "react";
import {FaPhoneAlt} from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#202A3F] text-white flex justify-center space-x-20 items-center">
      <div className="flex items-center space-x-3">
        <div>
        <Image src="/selidbelogo.png" alt="Logo" width={120} height={120} />

        </div>
        <div>
        <h1 className="text-xl font-bold">Selidbe Novi Početak</h1>

        </div>
      </div>
      <nav className="hidden md:flex space-x-2">
        <a href="/" className="hover:text-gray-300">
          Početna
        </a>
        <div className="relative group">
          <button className=" text-white rounded">Usluge</button>

          <div className="absolute hidden group-hover:block bg-[#202A3F] shadow-lg w-44 z-10">
            <ul className="text-white">
              <li className="px-4 py-2 hover:bg-[#1CAF8A] z-20 hover:cursor-pointer">
                <a href="#selidbe-lokalne">Lokalne selidbe</a>
              </li>
              <li className="px-4 py-2 hover:hover:bg-[#1CAF8A] hover:cursor-pointer">
                <a href="#selidbe-medjunarodne">Međunarodne selidbe</a>
              </li>
              <li className="px-4 py-2 hover:hover:bg-[#1CAF8A] hover:cursor-pointer">
                <a href="#pakovanje">Pakovanje i transport</a>
              </li>
            </ul>
          </div>
        </div>
        <a href="/kontakt" className="hover:text-gray-300">
          Kontakt
        </a>
      </nav>
      <button className="md:hidden text-2xl">☰</button>
      <div className="rounded-full font-bold bg-[#1CAF8A] p-4 px-10 flex items-center space-x-2 hover:bg-white text-white hover:text-[#1CAF8A] transition-all duration-500  ease-in-out">
        <FaPhoneAlt className="w-10 h-10 " />
        <p>064 - 444 - 333</p>
      </div>
    </header>
  );
}
