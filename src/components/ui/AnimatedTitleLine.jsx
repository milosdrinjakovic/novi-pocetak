"use client"
import { useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';

const AnimatedTitleLine = ({ title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const lineRef = useRef(null); // Ref za svaki pojedinačni element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting); // Postavi vidljivost na osnovu trenutnog statusa
        });
      },
      { threshold: 0.5 } // Aktivira se kad je 50% elementa vidljivo
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div className="my-10">
      <p className="text-4xl font-semibold drop-shadow-2xl ">{title}</p>
      <motion.div
        ref={lineRef} // Koristi ref umesto id
        className="flex  w-2/6 h-1 bg-white mt-1 origin-left"
        initial={{ scaleX: 0 }} // Početna širina linije (0%)
        animate={{ scaleX: isVisible ? 1 : 0 }}  // Animacija kad linija postane vidljiva
        transition={{ duration: 0.5 }} // Trajanje animacije
      />
    </div>
  );
};

export default AnimatedTitleLine;
