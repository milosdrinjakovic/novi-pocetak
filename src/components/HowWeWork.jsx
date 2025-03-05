import React from 'react'
import { motion } from 'framer-motion'
import { FaBoxOpen,FaTape,FaTruckMoving } from 'react-icons/fa'
import AnimatedTitleLine from './ui/AnimatedTitleLine'

export default function HowWeWork() {
  return (
    <section className="py-10 ">
        <div className="flex justify-center">
          <AnimatedTitleLine title="Kako Pakujemo Vaše Stvari?" />
        </div>

        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className=" text-lg mb-8">
            Naš proces pakovanja je osmišljen da obezbedi maksimalnu sigurnost i
            zaštitu vaših stvari tokom selidbe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Korak 1: Priprema */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.7 }}
            >
              <FaBoxOpen className="text-5xl text-[#1CAF8A] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-600">
                1. Priprema Materijala
              </h3>
              <p className="text-gray-600">
                Koristimo visokokvalitetne kutije, zaštitne folije i trake.
              </p>
            </motion.div>

            {/* Korak 2: Pakovanje */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
            >
              <FaTape className="text-5xl text-[#1CAF8A] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-600">
                2. Sigurno Pakovanje
              </h3>
              <p className="text-gray-600">
                Pažljivo pakujemo lomljive i vredne predmete sa dodatnom
                zaštitom.
              </p>
            </motion.div>

            {/* Korak 3: Transport */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.9 }}
            >
              <FaTruckMoving className="text-5xl text-[#1CAF8A] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-gray-600">
                3. Bezbedan Transport
              </h3>
              <p className="text-gray-600">
                Vaše stvari pažljivo utovaramo i transportujemo na željenu
                lokaciju.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
