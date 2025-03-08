"use client"
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import CustomButton from "@/components/ui/Buttons/CustomButton";
import movesData from "@/data/movesData.json";
import { useEffect, useState } from "react";

export default function MovePage() {
  const params = useParams();
  const moveType = String(params.moveType);
  console.log(moveType)
  const moveData = movesData[moveType];
  console.log(moveData)
  
  const phone = "+381 64 123 4567";
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!moveData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-customBlue py-5 sm:py-20 px-2 sm:px-0">
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-3xl md:max-w-5xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
        
        <div
          className="fixed top-1/3 left-0 p-10 space-y-4 transform"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="hidden sm:flex flex-col space-y-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebook size={30} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left space-y-4">
          <h2 className="text-4xl font-semibold drop-shadow-2xl text-left text-white">
            {moveData.title}
          </h2>
          <p className="mb-6 text-lg text-white">{moveData.description}</p>
          <p className="mb-6 text-lg text-white">{moveData.additionalDescription}</p>
          <p className="mb-6 text-lg text-white">
            Kontaktirajte nas već danas, zakažimo besplatnu procenu i obavimo posao što pre.
          </p>
          <div className="flex justify-center sm:justify-start">
            <CustomButton text={phone} Icon={FaPhoneAlt}/>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col space-y-4 items-center">
          <div className="h-64 w-2/3">
            <Image
              src={moveData.imageUrl1}
              alt="gallery1"
              width={2000}
              height={1000}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
          <div className="h-64 w-2/3">
            <Image
              src={moveData.imageUrl2}
              alt="gallery2"
              width={2000}
              height={1000}
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
