import React from "react";

export default function Gallery() {
  return (
    <>
     <section className="overflow-hidden space-y-2 h-full">



<div className="max-w-screen-xl 2xl:max-w-screen-3xl px-16 md:px-12 mx-auto pb-16 pt-20 lg:pt-44 h-auto flex flex-col justify-center">
  <div className="flex flex-col items-center sm:flex-row mx-auto  space-y-5 sm:space-y-0 sm:space-x-5">
    
    {/* Gallery Items */}
    <a href="#_" className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img
        src="/gallery1.jpg"
        className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 w-full object-cover hover:scale-150 transform origin-bottom"
        alt="Gallery Image 1"
      />
    </a>

    <a href="#_" className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img
        src="/gallery2.jpg"
        className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full object-cover hover:scale-150 transform origin-bottom"
        alt="Gallery Image 2"
      />
    </a>

    <a href="#_" className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img
        src="/gallery3.jpg"
        className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 w-full object-cover hover:scale-150 transform origin-bottom"
        alt="Gallery Image 3"
      />
    </a>

    <a href="#_" className="inline-block w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <img
        src="/gallery4.jpg"
        className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 w-full object-cover hover:scale-150 transform origin-bottom"
        alt="Gallery Image 4"
      />
    </a>

  </div>
</div>
</section>

    </>
  );
}
