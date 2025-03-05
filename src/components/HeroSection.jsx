import React from 'react'
import {FaBolt,FaStar,FaClock,FaInstagram,FaFacebook,FaTiktok,FaArrowRight  } from "react-icons/fa";
import { GrForwardTen } from "react-icons/gr";

import { TbTruckDelivery } from "react-icons/tb";
import { PiUsersFourLight } from "react-icons/pi";

import { GiTakeMyMoney } from "react-icons/gi";
import CustomButton from './ui/Buttons/CustomButton';
import { Icon } from 'lucide-react';

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
                <p className='w-2/3 sm:w-full'>Brze Selidbe i Transporti Bez Skrivenih Troškova</p>
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
              <CustomButton text={"Kako pakujemo ?"} Icon={FaArrowRight}/>

              <CustomButton text={"Zašto Izabrati nas?"} Icon={FaArrowRight}/>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}
