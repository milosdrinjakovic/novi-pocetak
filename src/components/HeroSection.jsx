import React from "react";
import {
  FaBolt,
  FaStar,
  FaClock,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaArrowRight,
} from "react-icons/fa";
import { GrForwardTen } from "react-icons/gr";

import { TbTruckDelivery } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";

import { GiTakeMyMoney } from "react-icons/gi";
import CustomButton from "./ui/Buttons/CustomButton";
import { Icon } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative ">
      <img
        src="/selidbehero.jpg"
        alt="Hero Image"
        className="w-full h-[1200px] sm:h-[1000px] object-cover  object-center"
      />

      <div className="absolute inset-0 flex  justify-start bg-black bg-opacity-10 drop-shadow-lg">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="p-10 space-y-7">
            <div>
              <p className="sm:text-5xl text-4xl font-bold drop-shadow-lg self-start">
                TRANSPORT I SELIDBE ŠIROM SRBIJE
              </p>
              <p className="text-4xl font-bold drop-shadow-lg self-start">
                NOVI POČETAK
              </p>
              <p className="w-2/3 sm:w-full">
                Brze Selidbe i Transporti Bez Skrivenih Troškova
              </p>
            </div>
            <div className="text-2xl space-y-4">
              <div className="flex space-x-2">
                <GiTakeMyMoney className="text-4xl" />

                <p>Najpovoljnije Cene</p>
              </div>
              <div className="flex space-x-2">
                <FaBolt className="text-4xl" />

                <p>Brza Isporuka</p>
              </div>

              <div className="flex space-x-2">
                <TbTruckDelivery className="text-4xl" />

                <p>Više Vrsta Vozila</p>
              </div>
              <div className="flex space-x-2">
                <PiUsersFourLight className="text-4xl" />

                <p>10+ zaposlenih</p>
              </div>

              <div className="flex flex-col  text-5xl space-y-3">
                <div className="flex items-start sm:text-5xl text-4xl">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <div className="">
                  <p className="text-xl">Kvalitet Isporuke</p>
                </div>
              </div>
              <div className="text-7xl items-center space-x-2 flex">
                <div>
                  <GrForwardTen className="text-red-500 sm:text-5xl text-4xl" />
                </div>
                <div>
                  <p className="text-2xl">Godina Relevantnog Iskustva</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-purple-400 sm:text-5xl text-4xl flex items-center">
                  <FaClock />
                  24/7
                </div>
                <p>Dostupnost</p>
              </div>
              <div className="flex space-x-4 text-4xl py-2">
                <FaInstagram className="hover:text-[#E4405F] transition-colors duration-300" />
                <FaFacebook className="hover:text-[#1877F2] transition-colors duration-300" />
                <FaTiktok className="hover:text-[#69C9D0] transition-colors duration-300" />
              </div>
            </div>
            <div className="flex  space-y-4 flex-col items-start sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#pakovanje" // Ovde ide ID na koji linkuješ
                className="rounded-full font-bold bg-[#1CAF8A] p-4 sm:p-6 md:p-3 flex items-center space-x-2 justify-center hover:bg-white text-white hover:text-[#1CAF8A] transition-all duration-500 ease-in-out min-w-[170px] sm:min-w-[190px] md:min-w-[220px] max-w-[250px] hover:cursor-pointer"
              >
                <FaArrowRight className="sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm md:text-base">
                  Kako pakujemo ?
                </p>
              </a>

              <a
                href="#povoljnije" // Ovde ide drugi ID na koji linkuješ
                className="rounded-full font-bold bg-[#1CAF8A] p-4 sm:p-6 md:p-3 flex items-center space-x-2 justify-center hover:bg-white text-white hover:text-[#1CAF8A] transition-all duration-500 ease-in-out min-w-[170px] sm:min-w-[190px] md:min-w-[220px] max-w-[250px] hover:cursor-pointer"
              >
                <FaArrowRight className="sm:w-6 sm:h-6" />
                <p className="text-xs sm:text-sm md:text-base">
                  Najpovoljnije u gradu?
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
