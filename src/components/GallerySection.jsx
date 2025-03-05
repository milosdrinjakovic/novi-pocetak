import React from "react";
import Image from "next/image";
import Gallery from "./Gallery";
import AnimatedTitleLine from "./ui/AnimatedTitleLine";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaPhoneAlt } from "react-icons/fa";


export default function GallerySection() {
  return (
    <>
      <section className="bg-customBlue">
        <div className="flex justify-center">
          <AnimatedTitleLine title={"Kroz Naš Objektiv"} />
        </div>
        <div className="flex w-2/4 text-center justify-center mx-auto">
          <p>
            Svaka selidba je priča za sebe. Pogledajte trenutke iz naših
            saradnji i uverite se u našu profesionalnost.
          </p>
        </div>

        <Gallery />
      </section>
      <section className="bg-customBlue py-36">
        <div className="flex justify-center space-x-5 w-2/3 mx-auto items-center">
          <div className="w-3/4">
            <AnimatedTitleLine title="Najpovoljnije selidbe i transporti u gradu?" />
            <p>
              Tražite selidbu koja se uklapa u vaš budžet? Naša ponuda omogućava
              vam da pređete dug put bez da preterano opteretite svoje
              finansije. Sa transparentnim cenama, bez skrivenih troškova,
              pružamo efikasnu i sigurnu uslugu, i to po cenama koje odgovaraju
              vašim potrebama. Bez kompromisa na kvalitetu – brzo, bezbedno i po
              povoljnim cenama.
            </p>
            <div className="flex items-center space-x-4 space-y-4">
              <div>
                <SiHomeassistantcommunitystore className="text-5xl text-white" />
              </div>
              <div className="w-full">
                <p className="text-xs">
                  Za kućne selidbe nudimo brzu i sigurnu uslugu, prilagođenu
                  vašim potrebama. Bilo da se selite u nov dom ili želite da
                  premestite nameštaj, naša ekipa će se pobrinuti da sve ide
                  glatko.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 space-y-4">
              <div>
                <LiaIndustrySolid className="text-5xl text-white" />
              </div>
              <div className="w-full">
                <p className="text-xs">
                  {" "}
                  Naša usluga komercijalne selidbe kao ili transporta je
                  efikasna i brza, kako bi vaša firma što pre nastavila sa
                  radom. Sprovodimo komercijalne selidbe po povoljnim cenama.
                  Bilo da se selite u novo poslovno sedište, ili premeštate
                  opremu, naš tim garantuje brzu i pouzdanu uslugu koja ne ometa
                  poslovne procese.
                </p>
              </div>
            </div>
            <div className="pt-4">
              <div className="w-1/2  my-auto rounded-full font-bold bg-[#1CAF8A] p-4 px-10 flex items-center space-x-2 hover:bg-white text-white hover:text-[#1CAF8A] transition-all duration-500  ease-in-out">
                <FaPhoneAlt className="w-10 h-10 " />
                <p>064 - 444 - 333</p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex w-full space-x-4 ">
            <div className="w-1/2 h-[400px] ">
              <Image
                src="/gallery2.jpg"
                alt="gallery2"
                width={2000}
                height={1000}
                className="w-full h-full  rounded-2xl object-center"
              />
            </div>
            <div className="w-1/2 h-[400px] ">
              <Image
                src="/gallery3.jpg"
                alt="gallery3"
                width={500}
                height={100}
                className="w-full h-full object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
