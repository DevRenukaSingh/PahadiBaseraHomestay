"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -1000 : 1000, opacity: 0 }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative h-[500px] overflow-hidden rounded-lg bg-gray-900">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) navigate(1);
              else if (swipe > 10000) navigate(-1);
            }}
            className="absolute inset-0"
          >
            <Image src={images[index]} alt={`Slide ${index + 1}`} fill className="object-cover" priority />
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.button
        onClick={() => navigate(-1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </motion.button>

      <motion.button
        onClick={() => navigate(1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </motion.button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            className="h-3 rounded-full bg-white/50"
            animate={{ width: i === index ? 32 : 12, backgroundColor: i === index ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)" }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      <motion.div
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm"
      >
        {index + 1} / {images.length}
      </motion.div>
    </div>
  );
}