import React from "react";

export default function Gallery() {
  return (
    <>
      <section className=" overflow-hidden space-y-5 h-full" >

        <div className="flex flex-col text-center justify-center">
        </div>

        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-16 md:px-12 mx-auto pb-16 pt-20 lg:pt-44 h-5/6  flex flex-col justify-center">
          <div className="flex flex-col items-center h-60 sm:flex-row mx-auto my-14">
            {/* Starts component */}
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/gallery1.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/gallery2.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/gallery3.jpg"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            <a href="#_" className="inline-block w-full sm:w-auto">
              <img
                src="/gallery4.jpg"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />
            </a>
            
          </div>{" "}
          
        </div>
      </section>
    </>
  );
}
