"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./ui/Buttons/CustomButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#202A3F] text-white flex justify-between items-center px-7 py-0  sm:py-2 relative z-50">
      {/* Desktop navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link href="/" className="hover:text-gray-300">Početna</Link>
        <div className="relative group">
          <button className="text-white rounded">Usluge</button>
          <div className="absolute hidden group-hover:block bg-[#202A3F] shadow-lg w-44 z-10">
            <ul className="text-white">
              <li className="px-4 py-2 hover:bg-[#1CAF8A]"><Link href="/moves/selidbe-lokalne">Lokalne selidbe</Link></li>
              <li className="px-4 py-2 hover:bg-[#1CAF8A]"><Link href="/moves/selidbe-medjunarodne">Međunarodne selidbe</Link></li>
              <li className="px-4 py-2 hover:bg-[#1CAF8A]"><Link href="/moves/transport">Transport Firmi</Link></li>
            </ul>
          </div>
        </div>
        <Link href="/gallery" className="hover:text-gray-300">Galerija</Link>
      </nav>

      {/* Logo */}
      <div className="flex items-center justify-center flex-1">
        <Link href="/">
          <Image src="/selidbelogo.png" alt="Logo" width={230} height={230} priority />
        </Link>
      </div>

      {/* Social icons and phone number */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebook size={30} /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram size={30} /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter size={30} /></a>
        <CustomButton text={"+381 64 444 222"} Icon={FaPhoneAlt} phoneNumber={"+381 64 444 222"}/>
      </nav>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(true)} className="text-white text-3xl">
          <FaBars />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 w-4/5 h-full bg-[#202A3F] shadow-lg z-50 p-8 flex flex-col space-y-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <button onClick={() => setIsOpen(false)} className="text-white text-3xl self-end">
          <FaTimes />
        </button>
        <Link href="/#" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Početna</Link>
        <Link href="/moves/selidbe-lokalne" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Lokalne selidbe</Link>
        <Link href="/moves/selidbe-medjunarodne" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Međunarodne selidbe</Link>
        <Link href="/moves/transport" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Transport Firmi</Link>
        <Link href="/gallery" className="text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>Galerija</Link>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500"><FaFacebook size={30} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500"><FaInstagram size={30} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400"><FaTwitter size={30} /></a>
        </div>
        <CustomButton text={"+381 64 444 222"} Icon={FaPhoneAlt} phoneNumber={"+381 64 444 222"}/>
      </div>
    </header>
  );
}
