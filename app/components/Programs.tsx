"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getPrograms } from "@/lib/contentful";

// Static fallback programs
const staticPrograms = [
  {
    id: "education",
    title: "Educational Support",
    image: "/images/programs/education.JPG",
    description:
      "Providing scholarships, school supplies, and learning assistance to help orphans and vulnerable children access and excel in education.",
  },
  {
    title: "Mentorship",
    image: "/images/programs/mentorship.JPG",
    description:
      "Equipping children with character, confidence, and life skills through one-on-one and group mentorship sessions.",
  },
  {
    title: "Counseling",
    image: "/images/programs/counseling.JPG",
    description:
      "Offering emotional and psychological support to help children heal from trauma, loss, and difficult life experiences.",
  },
  {
    title: "Talent Nurturing",
    image: "/images/programs/talent.JPG",
    description:
      "Developing children’s talents in sports, dance, arts, and music — promoting self-expression and confidence.",
  },
  {
    title: "Technology & Skills Training",
    image: "/images/programs/tech.JPG",
    description:
      "Empowering children with digital literacy and practical life skills to prepare them for the future.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="w-full py-16 md:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800"
        >
          Our <span className="text-pink-500">Programs</span>
        </motion.h2>

        <p className="mt-3 md:mt-4 text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
          We provide holistic support focusing on education, emotional well-being,
          talent discovery, and modern digital skills — shaping confident,
          empowered children.
        </p>

        {/* Program Cards */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {staticPrograms.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-56 sm:h-64 rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${program.image})` }}
                role="img"
                aria-label={program.title}
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />

              {/* Content */}
              <div className="relative z-10 p-4 md:p-6 text-left text-white flex flex-col justify-end h-full">
                <h3 className="text-lg md:text-xl font-semibold mb-2 drop-shadow-lg">
                  {program.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed drop-shadow-md line-clamp-3">
                  {program.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
