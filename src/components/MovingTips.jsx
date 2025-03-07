import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedTitleLine from "./ui/AnimatedTitleLine";

const MovingTips = () => {
  return (
    <section className="my-20 w-full sm:w-3/4 mx-auto">

  <div className="flex justify-center">
    <AnimatedTitleLine title={"Saveti za uspešnu selidbu ?"} />
  </div>
  <div className="flex flex-wrap justify-center ">
    {/* Savet 1 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center w-full sm:w-1/4"
    >
      <div className="w-full h-48 relative">
        <Image
          src="/kutije.png"
          alt="Pakovanje"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-center">
        Pravilno pakovanje
      </h3>
      <p className="text-sm text-center">
        Pakuje stvari unapred, pazeći na lomljive predmete, koristeći
        odgovarajuće kutije i materijale. Obeležite kutije prema
        prostorijama kako bi kasnije bilo lakše raspakovati stvari.
      </p>
    </motion.div>

    {/* Savet 2 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center w-full sm:w-1/4"
    >
      <div className="w-full h-48 relative">
        <Image
          src="/traka.png"
          alt="Pakovanje"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-center">
        Koristi jaku lepljivu traku
      </h3>
      <p className="text-sm text-center">
        Ojačaj dno kutija širokom trakom kako se ne bi raspale tokom
        selidbe. Omotaj lomljive predmete pucketavom folijom i dodatno ih
        osiguraj unutar kutije.
      </p>
    </motion.div>

    {/* Savet 3 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center w-full sm:w-1/4"
    >
      <div className="w-full h-48 relative">
        <Image
          src="/kombi.png"
          alt="Pakovanje"
          fill
          objectFit="contain"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-center">
        Unajmi odgovarajući prevoz
      </h3>
      <p className="text-sm text-center">
        Izaberi prevoznu uslugu koja odgovara količini stvari koje treba da
        transportuješ. Ako ti treba siguran i efikasan prevoz,{" "}
        <b>Novi Početak</b> je tu da ti pomogne sa sveobuhvatnim uslugama
        selidbe.
      </p>
    </motion.div>

    {/* Savet 4 */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center w-full sm:w-1/4"
    >
      <div className="w-full h-48 relative">
        <Image
          src="/kolica.png"
          alt="Pakovanje"
          fill
          objectFit="contain"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2 text-center">
        Priprema alata za pakovanje
      </h3>
      <p className="text-sm text-center">
        Za efikasno pakovanje i transport, važno je imati pravu opremu – od
        kutija i traka do kolica za prenos stvari. Pravilna upotreba alata
        za pakovanje može značajno olakšati proces selidbe i ubrzati ga.
      </p>
    </motion.div>
  </div>
</section>


  );
  
};

export default MovingTips;
