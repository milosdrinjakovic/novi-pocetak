"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedTitleLine from "./ui/AnimatedTitleLine";
import { FaShieldAlt,FaClock,FaSmileBeam } from "react-icons/fa";
export default function BusinessGoalsSection() {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center">
          <AnimatedTitleLine title="Naši ciljevi u poslovanju?" />
        </div>
        <p className=" text-lg mb-10 w-2/3 mx-auto text-center">
          Brza, sigurna i profesionalna usluga. Uvek se trudimo da ostavimo
          dobar utisak, i mislimo da je najbolja reklama dobro odrađen posao.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
          {/* Pouzdanost */}
          <motion.div
            className="p-6  rounded-xl hover:cursor-pointer  hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2 }}
          >
            <FaShieldAlt className="text-5xl  mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">100% Pouzdanost</h3>
            <div className="flex justify-center">
              <Image
                src="/spakovano1.jpg"
                alt="Spakovano slika"
                width={250} // Širina slike
                height={100} // Visina slike
                className="rounded-lg"
              />
            </div>
            <p className="">
              Vaše stvari su u sigurnim rukama zahvaljujući našem iskusnom timu.
            </p>
          </motion.div>

          {/* Brzina */}
          <motion.div
            className="p-6  rounded-xl hover:cursor-pointer  hover:shadow-2xl  "
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2 }}
          >
            <FaClock className="text-5xl  mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Brza Usluga</h3>
            <div className="flex justify-center">
              <Image
                src="/spakovano2.jpg"
                alt="Spakovano slika"
                width={250} // Širina slike
                height={100} // Visina slike
                className="rounded-lg"
              />
            </div>
            <p className="">
              Efikasno planiranje i realizacija selidbi bez gubljenja vremena.
            </p>
          </motion.div>

          {/* Zadovoljstvo klijenata */}
          <motion.div
            className="p-6  rounded-xl hover:cursor-pointer  hover:shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2 }}
          >
            <FaSmileBeam className="text-5xl  mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Zadovoljstvo Klijenata
            </h3>
            <div className="flex justify-center">
              <Image
                src="/spakovano3.jpg"
                alt="Spakovano slika"
                width={250} // Širina slike
                height={100} // Visina slike
                className="rounded-lg"
              />
            </div>
            <p className="">
              Više od 1000 zadovoljnih klijenata koji se rado vraćaju.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
