"use client"
import Image from "next/image";
import { FaPercent } from "react-icons/fa";

import MovingTips from "@/components/MovingTips";
import ScrollToTop from "@/components/ui/ScrollToTop";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";
import CustomFooter from "@/components/CustomFooter";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import HowWeWork from "@/components/HowWeWork";
import BusinessGoalsSection from "@/components/BusinessGoalsSection";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <section>
        <ScrollToTop />
      </section>
      <WhyChooseUs/>
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
      <section>
        <div className="flex flex-col  items-center bg-customBlue">
          <div className="flex items-center space-x-4">
            <FaPercent className="text-[100px]" />
            <p className="text-4xl">Vršimo besplatne procene</p>
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
      <div className="shape path path-d4b06b4d6bb2">
  
</div>
      <HowWeWork />
    
      <MovingTips />

      <BusinessGoalsSection />
      <CustomFooter />
    </>
  );
}
