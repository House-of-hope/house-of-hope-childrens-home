"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const slides = [
    "/images/hero3.jpg",
    "/images/hero2.jpg",
    "/images/hero1.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 -z-10">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image src={src} alt={`slide-${i}`} fill className="object-cover" priority />
            {/* subtle overlay per slide (keeps text readable) */}
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Gradient overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 -z-10" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
              Giving Every Child <span className="text-pink-400">Hope</span> & a Better
              Tomorrow
            </h1>

            <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
              House of Hope CBO provides education, mentorship, emotional support,
              and a safe environment for orphans and vulnerable children in Likoni—
              empowering them to grow with dignity and confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full">
              <Link
                href="#donate"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg text-center font-semibold transition text-sm sm:text-base"
              >
                Donate Now
              </Link>

              <Link
                href="/kids"
                className="border-2 border-white/80 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-center font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>🤝</span>
                <span>Sponsor a Child</span>
              </Link>
            </div>
          </motion.div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
