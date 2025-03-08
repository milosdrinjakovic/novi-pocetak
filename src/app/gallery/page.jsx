"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery6.jpg",
  "/gallery7.jpg",
  "/gallery8.jpg",
  "/gallery9.jpg",
  "/gallery10.jpg",
  "/gallery11.jpg",
  "/gallery12.jpg",
  "/gallery13.jpg",
  "/gallery8.jpg",
  "/gallery14.jpg",
  "/gallery15.jpg",
  "/gallery16.jpg",
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const openImage = (imgIndex) => {
    setIndex(imgIndex);
    setSelectedImage(images[imgIndex]);
  };

  const closeImage = () => {
    setSelectedImage(null); // Resetovanje slike
    setIndex(0); // Resetovanje indeksa
  };

  const nextImage = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragEnd = (_, { offset }) => {
    if (offset.x > 100) {
      prevImage();
    } else if (offset.x < -100) {
      nextImage();
    }
  };

  return (
    <div className="container mx-auto px-5 py-12">
      <div className="grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[300px]">
        {images.map((img, imgIndex) => (
          <div
            key={imgIndex}
            className="relative overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openImage(imgIndex)}
          >
            <Image
              src={img}
              alt="gallery"
              layout="fill"
              objectFit="cover"
              className="w-full h-full rounded-lg"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onAnimationComplete={() => {
        if (!selectedImage) {
          setSelectedImage(null); // Dodatna provera da se osigura izlazak
        }
      }}
    >
      <button
        onClick={closeImage}
        className="absolute top-5 right-5 text-white text-3xl"
      >
        <FaTimes />
      </button>

      <motion.div
        key={index}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "tween", duration: 0.5 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
          className="relative max-w-[90vw] max-h-[80vh] w-auto h-auto flex items-center justify-center"
      >
        <Image
          src={images[index]}
          alt="enlarged"
          width={1000}
          height={1000}
          className="w-full  max-h-[80vh] rounded-lg"
        />
      </motion.div>

      <button
        onClick={prevImage}
        className=" absolute left-5   text-white text-3xl"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextImage}
        className=" absolute right-5  text-white text-3xl"
      >
        <FaArrowRight />
      </button>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
