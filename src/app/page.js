"use client";
import Image from "next/image";
import {
  FaCheck,
  FaCheckDouble,
  FaCheckSquare,
  FaPercent,
} from "react-icons/fa";

import MovingTips from "@/components/MovingTips";
import ScrollToTop from "@/components/ui/ScrollToTop";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import HowWeWork from "@/components/HowWeWork";
import BusinessGoalsSection from "@/components/BusinessGoalsSection";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import Gallery from "@/components/Gallery";
export default function Home() {
  return (
    <>
      <HeroSection />

      <section>
        <ScrollToTop />
      </section>
      <WhyChooseUs />
      <section>
        <Image
          src="/top-wave.svg"
          alt="Wave"
          width={1000}
          height={10}
          className="w-full h-auto"
        />
      </section>
      <GallerySection />

      <section className="grid grid-cols-1 md:grid-cols-2 items-center w-full justify-center py-10 bg-customBlue">
  <div className="h-[400px] overflow-hidden relative">
    <div
      className="bg-cover w-full h-full"
      style={{
        backgroundImage: "url('/gallery3.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "60%",
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  </div>

  <div className="p-8 text-white flex flex-col justify-center items-start md:items-center">
    <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Naše Usluge</h2>
    <ul className="space-y-4 text-lg">
      <li className="flex items-center gap-2 text-2xl">
        <FaCheckSquare className="text-customGreen" /> Selidbe stanova, kuća ili vikendica
      </li>
      <li className="flex items-center gap-2 text-2xl">
        <FaCheckSquare className="text-customGreen" /> Komercijalne selidbe i transport
      </li>
      <li className="flex items-center gap-2 text-2xl">
        <FaCheckSquare className="text-customGreen" /> Montaža i demontaža nameštaja
      </li>
      <li className="flex items-center gap-2 text-2xl">
        <FaCheckSquare className="text-customGreen" /> Pakovanje i zaštita stvari
      </li>
      <li className="flex items-center gap-2 text-2xl">
        <FaCheckSquare className="text-customGreen" /> Transport na teritoriji cele Srbije
      </li>
    </ul>
  </div>
</section>

      <section className="bg-customBlue flex">
      <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Prva kolona */}
    <div className="flex flex-col items-start space-y-4">
      <div className="flex items-center justify-start space-x-2">
        <div>
          <Image src={"/percentage.svg"} width={62} height={62} alt="" />
        </div>
        <p className="text-3xl">Vršimo besplatnu procenu</p>
      </div>
      <div className="flex justify-start w-full">
        <p className="max-w-md text-left">
          - Sve što je potrebno je da nas pozovete! Naša usluga je brza,
          jednostavna i potpuno bez obaveza. Obezbeđujemo profesionalan
          pristup i brzu procenu, bez skrivenih troškova. Kontaktirajte
          nas danas i uverite se sami kako vam možemo pomoći u svakom
          koraku!
        </p>
      </div>
    </div>

    {/* Druga kolona */}
    <div className="flex flex-col items-start space-y-4">
      <div className="flex items-center justify-start space-x-2">
        <div>
          <Image src={"/box.svg"} width={62} height={62} alt="" />
        </div>
        <p className="text-3xl">Skladištimo vaše stvari</p>
      </div>
      <div className="flex justify-start w-full">
        <p className="max-w-md text-left">
          - Pružamo sigurno i zaštićeno skladištenje za sve vaše predmete,
          bilo da su to nameštaj, lične stvari ili poslovna oprema. Naš
          prostor je idealan za kratkoročno i dugoročno skladištenje, sa
          pristupom koji je jednostavan i bezbedan.
        </p>
      </div>
    </div>

    {/* Treća kolona */}
    <div className="flex flex-col items-start space-y-4">
      <div className="flex items-center justify-start space-x-2">
        <div>
          <Image
            src={"/muscle.svg"}
            width={62}
            height={62}
            alt="Prevoz teških stvari"
          />
        </div>
        <p className="text-3xl">Prevoz teških stvari</p>
      </div>
      <div className="flex justify-start w-full">
        <p className="max-w-md text-left">
          - Brzo i sigurno prevozimo teške i glomazne predmete. Bilo da su
          u pitanju TEA peći, klaviri, nameštaj ili druge velike stvari,
          garantujemo siguran transport do vašeg odredišta, bez obzira na
          veličinu ili težinu predmeta.
        </p>
      </div>
    </div>
  </div>
</div>



      </section>

      <section>
        <Image
          src="/bottom-wave.svg"
          alt="Wave"
          width={1000}
          height={50}
          className="w-full h-auto object-cover"
        />
      </section>
      <div className="shape path path-d4b06b4d6bb2"></div>
      <Gallery/>
      
      <HowWeWork />


      <MovingTips />

      <BusinessGoalsSection />
    </>
  );
}
