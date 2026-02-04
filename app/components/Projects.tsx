"use client";

import { motion } from "framer-motion";
import { Heart, Award, School, Users, Handshake } from "lucide-react";

const achievements = [
  {
    icon: Heart,
    title: "A Journey Rooted in Compassion",
    description:
      "House of Hope began in 2007 after a single encounter between our founder, Miss Susan William, and a vulnerable street child. That moment sparked a mission that continues to transform lives today.",
  },
  {
    icon: School,
    title: "Education That Changes Futures",
    description:
      "More than 60 children have received scholarships, school support, and learning resources — empowering them to pursue secondary school, vocational training, and college opportunities.",
  },
  {
    icon: Users,
    title: "Strengthening Families & Communities",
    description:
      "Our mentorship, counseling, and family-focused programs provide emotional support and guidance, helping children grow in safe and nurturing environments.",
  },
  {
    icon: Award,
    title: "Recognized for Community Impact",
    description:
      "Local leaders and community stakeholders have acknowledged our role in child protection, welfare, and development within Likoni and the wider Mombasa region.",
  },
  {
    icon: Handshake,
    title: "Growing Through Partnerships",
    description:
      "We continue building collaborations with local and international well-wishers, organizations, and CCIs to strengthen care reform and improve service delivery.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-16 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800"
        >
          Our <span className="text-pink-500">Journey & Impact</span>
        </motion.h2>

        <p className="mt-3 md:mt-4 text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
          Over the years, House of Hope has grown from a single act of kindness to a
          community-driven mission supporting orphans and vulnerable children through
          education, mentorship, counseling, and holistic care.
        </p>

        {/* Achievement Cards */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-blue-50 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition"
              >
                <div className="w-12 md:w-14 h-12 md:h-14 mx-auto flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
                  <Icon size={28} className="md:w-8 md:h-8" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-blue-800">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
