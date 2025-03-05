import React from 'react'
import {FaLightbulb,FaFighterJet,FaShieldAlt,FaArrowsAlt } from "react-icons/fa";
import AnimatedTitleLine from './ui/AnimatedTitleLine';
import { motion } from "motion/react";


export default function WhyChooseUs() {
  return (
    <section className=" py-16 flex flex-col items-center  ">
        <div className="text-center w-3/4">
          <div className="flex flex-col items-center">
            <div>
              <AnimatedTitleLine title="Zašto Izabrati Nas ?" />
            </div>
          </div>
          <p className=" text-lg w-2/3 mx-auto">
            Mi pružamo brzu, sigurnu i pouzdanu uslugu koja odgovara vašim
            potrebama. Sa više od 10 godina iskustva u industriji, znamo šta je
            zaista važno za naše klijente. Naš tim je obučen da se nosi sa svim
            izazovima na terenu, a naša prioritet je brzina, sigurnost i
            poverenje. Nudimo brzu uslugu koja smanjuje stres tokom celog
            procesa, sigurno transportujemo vaše stvari i uvek se trudimo da
            budemo pouzdani. Naša dugogodišnja prisutnost na tržištu govori sama
            za sebe – naši klijenti nam se vraćaju jer znaju da mogu da računaju
            na nas. Svako novi posao za nas je prilika da pokažemo kako
            posvećenost i iskustvo mogu učiniti razliku.
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4 w-3/4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-8 shadow-lg rounded-lg w-full sm:w-1/3"
          >
            <div className="flex items-end space-x-4">
              <FaLightbulb className="text-[#1CAF8A] text-4xl" />

              <h3 className="text-xl font-semibold text-gray-800">KVALITET</h3>
            </div>

            <p className="mt-2 text-gray-600">
              Posvećeni smo pružanju usluga najvišeg kvaliteta, koristeći
              najnoviju tehnologiju i opremu kako bi vaša selidba bila sigurna i
              efikasna. Naš tim stručnjaka uvek osigurava da se svi predmeti
              tretiraju sa pažnjom koju zaslužuju, od početka do kraja procesa.
              Obezbeđujemo da svaka selidba prođe bez stresa i uz maksimalnu
              sigurnost za vaše stvari.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-8 shadow-lg rounded-lg w-full sm:w-1/3"
          >
            <div className="flex items-end space-x-4">
              <FaFighterJet className="text-[#1CAF8A] text-4xl" />

              <h3 className="text-xl font-semibold text-gray-800">BRZINA</h3>
            </div>
            <p className="mt-2 text-gray-600">
              Vaše selidbe obavljamo brzo i efikasno, minimizirajući vreme
              potrebno za premještanje, bez žrtvovanja kvaliteta usluge. Naša
              organizacija i iskustvo omogućavaju nam da sve selidbe završimo u
              najkraćem mogućem vremenu, štedeći vaše vreme i energiju. Brzina
              nam je ključna, i zato se trudimo da svaki proces bude što brži i
              lakši za vas.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-8 shadow-lg rounded-lg w-full sm:w-1/3"
          >
            <div className="flex items-end space-x-4">
              <FaShieldAlt className="text-[#1CAF8A] text-4xl" />

              <h3 className="text-xl font-semibold text-gray-800">
                POUZDANOST
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              Na nas možete računati za bezbrižnu uslugu, jer je naša
              posvećenost klijentima neupitna. Uz nas, možete biti sigurni da je
              svaki detalj pažljivo planiran i izvršen kako bi vaša selidba bila
              što lakša i bez stresa. Pouzdanost je temelj našeg poslovanja, pa
              ćete uvek imati kontrolu i jasnoću tokom celokupnog procesa
              selidbe.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-8 shadow-lg rounded-lg w-full sm:w-1/3"
          >
            <div className="flex items-end space-x-4">
              <FaArrowsAlt className="text-[#1CAF8A] text-4xl" />

              <h3 className="text-xl font-semibold text-gray-800">
                FLEKSIBILNOST
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              Prilagođavamo se vašim potrebama i zahtevima, nudeći različite
              opcije i pakete usluga koji odgovaraju vašem rasporedu i budžetu.
              Bilo da se radi o lokalnim ili međunarodnim selidbama, uvek ćemo
              naći najbolje rešenje za vas. Fleksibilnost u pristupu i uslovima
              čini nas idealnim partnerom za bilo koji tip selidbe.
            </p>
          </motion.div>
        </div>
      </section>
  )
}
