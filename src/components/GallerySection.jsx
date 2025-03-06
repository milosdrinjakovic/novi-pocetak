import React from "react";
import Image from "next/image";
import AnimatedTitleLine from "./ui/AnimatedTitleLine";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaCameraRetro, FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./ui/Buttons/CustomButton";


export default function GallerySection() {
  return (
    <>
   <section className="bg-customBlue py-36">
  <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-3xl md:max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
    
    {/* Tekstualni deo */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <AnimatedTitleLine title="Najpovoljnije selidbe i transporti u gradu?" />
      <p className="mb-4 text-lg">
        Tražite selidbu koja se uklapa u vaš budžet? Naša ponuda omogućava vam da pređete dug put bez da preterano opteretite svoje finansije.
      </p>

      <div className="flex flex-col space-y-4 ">
        <div className="flex items-center space-x-4 ">
          <SiHomeassistantcommunitystore className="text-5xl text-white" />
          <p className="text-sm">
          Za kućne selidbe nudimo brzu i sigurnu uslugu, prilagođenu vašim potrebama. Bilo da se selite u nov dom ili želite da premestite nameštaj, naša ekipa će se pobrinuti da sve ide glatko.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <LiaIndustrySolid className="text-6xl text-white" />
          <p className="text-sm">
          Naša usluga komercijalne selidbe kao ili transporta je efikasna i brza, kako bi vaša firma što pre nastavila sa radom. Sprovodimo komercijalne selidbe po povoljnim cenama. Bilo da se selite u novo poslovno sedište, ili premeštate opremu, naš tim garantuje brzu i pouzdanu uslugu koja ne ometa poslovne procese.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <CustomButton text={"064-222-444"} Icon={FaPhoneAlt} />
      </div>
    </div>

    {/* Galerija */}
    <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center">
      <div className="h-64 w-2/3">
        <Image
          src="/gallery2.jpg"
          alt="gallery2"
          width={2000}
          height={1000}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
      <div className="h-64 w-2/3">
        <Image
          src="/gallery3.jpg"
          alt="gallery3"
          width={500}
          height={100}
          className="w-full h-full rounded-2xl object-cover"
        />
      </div>
    </div>
    
  </div>
</section>


    </>
  );
}
