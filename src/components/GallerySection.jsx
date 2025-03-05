import React from "react";
import Image from "next/image";
import Gallery from "./Gallery";
import AnimatedTitleLine from "./ui/AnimatedTitleLine";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { LiaIndustrySolid } from "react-icons/lia";
import { FaCameraRetro, FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./ui/Buttons/CustomButton";


export default function GallerySection() {
  return (
    <>
      <section className="bg-customBlue">
        <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-4">
          <div>
          <AnimatedTitleLine title={"Kroz naš objektiv"} />
          </div>
          <div className="">
          <FaCameraRetro className="text-5xl"/>

          </div>
        </div>
        <div className="flex w-full sm:w-2/4 text-center justify-center mx-auto">
          <p>
            Svaka selidba je priča za sebe. Pogledajte trenutke iz naših
            saradnji i uverite se u našu profesionalnost.
          </p>
        </div>

        <Gallery />
      </section>
      <section className="bg-customBlue py-36">
  <div className="flex flex-col md:flex-row justify-center  w-11/12 md:w-2/3 mx-auto items-center">
    <div className="w-full md:w-3/4">
      <AnimatedTitleLine title="Najpovoljnije selidbe i transporti u gradu?" />
      <p>
        Tražite selidbu koja se uklapa u vaš budžet? Naša ponuda omogućava
        vam da pređete dug put bez da preterano opteretite svoje
        finansije. Sa transparentnim cenama, bez skrivenih troškova,
        pružamo efikasnu i sigurnu uslugu, i to po cenama koje odgovaraju
        vašim potrebama. Bez kompromisa na kvalitetu – brzo, bezbedno i po
        povoljnim cenama.
      </p>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
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
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div>
          <LiaIndustrySolid className="text-5xl text-white" />
        </div>
        <div className="w-full">
          <p className="text-xs">
            Naša usluga komercijalne selidbe kao ili transporta je
            efikasna i brza, kako bi vaša firma što pre nastavila sa
            radom. Sprovodimo komercijalne selidbe po povoljnim cenama.
            Bilo da se selite u novo poslovno sedište, ili premeštate
            opremu, naš tim garantuje brzu i pouzdanu uslugu koja ne ometa
            poslovne procese.
          </p>
        </div>
      </div>
      <div className="my-4">
        <CustomButton text={"064-222-444"} Icon={FaPhoneAlt}/>
      </div>
    </div>
    <div className="flex w-full space-x-0 sm:space-x-4 flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-[400px]">
        <Image
          src="/gallery2.jpg"
          alt="gallery2"
          width={2000}
          height={1000}
          className="w-full h-full rounded-2xl object-cover object-center"
        />
      </div>
      <div className="w-full md:w-1/2 h-[400px] mt-4 md:mt-0">
        <Image
          src="/gallery3.jpg"
          alt="gallery3"
          width={500}
          height={100}
          className="w-full h-full object-cover object-center rounded-2xl"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
}
