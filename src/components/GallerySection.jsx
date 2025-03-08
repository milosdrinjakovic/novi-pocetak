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
   <section className="bg-customBlue py-36 px-2 sm:px-0">
  <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-3xl md:max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
    
    {/* Tekstualni deo */}
    <div className="w-full md:w-1/2 text-left scroll-smooth" id="povoljnije" >
      <AnimatedTitleLine title="Najpovoljnije selidbe i transporti u gradu?" />
      <p className="mb-4 text-lg">
        Tražite selidbu koja se uklapa u vaš budžet? Naša ponuda omogućava vam da pređete dug put bez da preterano opteretite svoje finansije.
      </p>

      <div className="flex items-start space-x-4">
  <SiHomeassistantcommunitystore className="w-14 h-14 flex-shrink-0 text-white" />
  <p className="text-base leading-relaxed max-w-sm">
    Za kućne selidbe nudimo brzu i sigurnu uslugu, prilagođenu vašim potrebama. Bilo da se selite u nov dom ili želite da premestite nameštaj, naša ekipa će se pobrinuti da sve ide glatko.
  </p>
</div>

<div className="flex items-start space-x-4">
  <LiaIndustrySolid className="w-14 h-20 flex-shrink-0 text-white" />
  <p className="text-base leading-relaxed max-w-sm">
    Naša usluga komercijalne selidbe kao ili transporta je efikasna i brza, kako bi vaša firma što pre nastavila sa radom. Sprovodimo komercijalne selidbe po povoljnim cenama. 
  </p>
</div>


      <div className="mt-8 flex justify-center sm:justify-start">
        <CustomButton text={"+381 64 444 222"} Icon={FaPhoneAlt} phoneNumber={"+381 64 444 222"}/>
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
