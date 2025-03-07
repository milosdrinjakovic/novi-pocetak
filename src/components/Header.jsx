import React from "react";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import CustomButton from "./ui/Buttons/CustomButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#202A3F] text-white flex justify-between items-center px-10 z-50">
        <nav className="hidden md:flex items-center space-x-6 z-40 p-0 m-0">
        <Link href="/#" className="hover:text-gray-300">
          Početna
        </Link>
        <div className="relative group">
          <button className="text-white rounded">Usluge</button>
          <div className="absolute hidden group-hover:block bg-[#202A3F] shadow-lg w-44 z-10">
            <ul className="text-white">
              <li className="px-4 py-2 hover:bg-[#1CAF8A]">
                <Link href="/moves/selidbe-lokalne">Lokalne selidbe</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[#1CAF8A]">
                <Link href="/moves/selidbe-medjunarodne">Međunarodne selidbe</Link>
              </li>
              <li className="px-4 py-2 hover:bg-[#1CAF8A]">
                <Link href="/moves/transport">Transport Firmi</Link>
              </li>
            </ul>
          </div>
        </div>
        <a href="/gallery" className="hover:text-gray-300">
          Galerija
        </a>
      </nav>
      <div className="flex items-center space-x-3">
        <div>
          <Image src="/selidbelogo.png" alt="Logo" width={120} height={120} />
        </div>
        <div>
          <h1 className="text-xl font-bold">Selidbe Novi Početak</h1>
        </div>
      </div>

      {/* Navigation */}
    

      {/* Ikonice društvenih mreža u meniju (horizontalno) */}
      <nav className="hidden md:flex items-center space-x-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition duration-300 transform hover:scale-125"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition duration-300 transform hover:scale-125"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-125"
        >
          <FaTwitter size={30} />
        </a>
      <CustomButton text={"064-444-222"} Icon={FaPhoneAlt} />

      </nav>

      {/* Hamburger menu on smaller screens */}
      <button className="md:hidden text-2xl">☰</button>

      {/* Phone button */}
    </header>
  );
}
