"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ImageSlider({images}) {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-lg">
      <div className="relative h-[450px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt={`Slide ${index}`}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={prevImage}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        >
          ▶
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
