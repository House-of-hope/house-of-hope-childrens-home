"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative bg-gradient-to-r from-blue-50 to-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
            {/* Left — large image with angled clip */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-6 relative h-56 md:h-auto"
            >
              <div className="absolute inset-0 md:rounded-l-3xl overflow-hidden">
                <Image
                  src="/images/about-children.JPG"
                  alt="Children at House of Hope children's home in Likoni receiving support and mentorship"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" />
              </div>
            </motion.div>

            {/* Right — content cards */}
            <div className="md:col-span-6 p-6 md:p-8 lg:p-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-800"
              >
                About <span className="text-pink-500">House of Hope</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-4 text-gray-700 text-sm md:text-base max-w-xl"
              >
                We provide care, education, mentorship and a safe environment for
                orphans and vulnerable children in Likoni. Our work is driven by
                compassion, practical support, and community partnership.
              </motion.p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/80 p-4 md:p-5 rounded-xl md:rounded-2xl shadow">
                  <h4 className="font-semibold text-blue-700 text-sm md:text-base">Our Mission</h4>
                  <p className="text-xs md:text-sm text-gray-700 mt-2">
                    To empower vulnerable children through education, care and mentorship.
                  </p>
                </div>

                <div className="bg-white/80 p-4 md:p-5 rounded-xl md:rounded-2xl shadow">
                  <h4 className="font-semibold text-blue-700 text-sm md:text-base">Our Vision</h4>
                  <p className="text-xs md:text-sm text-gray-700 mt-2">
                    A community where every child has a safe home and the chance to thrive.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="#donate"
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow text-sm md:text-base text-center transition"
                >
                  Donate
                </a>

                <Link
                  href="/kids"
                  className="inline-block border-2 border-blue-600 text-blue-700 px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-blue-50 text-sm md:text-base text-center transition"
                >
                  Sponsor a child
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-800">18+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Years of impact</div>
                </div>

                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-800">200+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Children supported</div>
                </div>

                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-blue-800">50+</div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1">Community events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
