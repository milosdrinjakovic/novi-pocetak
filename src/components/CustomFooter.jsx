import React from 'react'
import Image from 'next/image'
import { FaInstagram,FaFacebook,FaTiktok,FaSearchLocation,FaPhoneAlt,FaMailBulk,FaClock } from 'react-icons/fa'

export default function CustomFooter() {
  return (
    <footer>
      <Image
        src={"/footer.svg"}
        width={2600}
        height={100}
        alt="footer svg"
        className="w-full h-auto object-cover"
      />
      <div className="bg-customBlue">
        <div className="container mx-auto flex items-center justify-between py-10">
          
          {/* Leva strana (Socijalne mreže) */}
          <div className="w-14 h-40 rounded-full flex flex-col justify-center items-center space-y-4 flex-1">
            <div className="text-4xl">
              <FaInstagram />
            </div>
            <div className="text-4xl">
              <FaFacebook />
            </div>
            <div className="text-4xl">
              <FaTiktok />
            </div>
          </div>

          {/* Sredina (Tekst) */}
          <div className="text-xl flex flex-col items-center text-center flex-1">
            <div className="py-6">
              <p className="text-3xl">Novi Početak</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaSearchLocation className="text-customGreen" />
              <p>Sedište: Beograd, Srbija.</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-customGreen" />
              <p>Pozivite: 064-444-444</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMailBulk className="text-customGreen" />
              <p>Email: novipočetak@gmail.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-customGreen" />
              <p>Radno vreme: 24/7</p>
            </div>
          </div>

          {/* Desna strana (Logo) */}
          <div className="rounded-full w-48 flex justify-end flex-1">
            <Image
              src={"/selidbelogo.png"}
              width={300}
              height={300}
              alt="logo"
            />
          </div>

        </div>
      </div>
    </footer>
  );
}

