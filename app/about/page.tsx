"use client";

import { motion } from "framer-motion";
// import { Target, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MentorCard } from "@/components/mentor-card";
import { mentors } from "@/lib/data";
// import { Image } from "next-image";

import { Target, Heart, TrendingUp } from "lucide-react";

// Helper to get dynamic current year content
const currentYear = new Date().getFullYear();

// --- DYNAMIC TIMELINE DATA ---
const getTimeline = () => {
  const baseTimeline = [
    {
      year: "2023",
      event: "Foundations",
      description: "iSentry Internship launched in Lagos, Nigeria. We started with a small, dedicated group of developers focused on bridging the gap between theory and practice.",
    },
    {
      year: "2024",
      event: "Pan-African Expansion",
      description: "We scaled our impact beyond Nigeria, reaching developers in other African countries and successfully graduating the cohorts into the workforce.",
    },
    {
      year: "2025",
      event: "Curriculum Evolution",
      description: "We introduced specialized tracks for Data Analytics, QA and Social Media Marketing, and also facilitated partnership.",
    },
  ];

  // Dynamic entry for the Current Year (2026)
  if (currentYear >= 2026) {
    baseTimeline.push({
      year: "2026",
      event: "The Next Frontier",
      description: "This year, we are launching our most ambitious cohort yet in Q2. We are doubling down on remote-first workflows and advanced system design architecture.",
    });
  }

  return baseTimeline;
};

// --- VALUES DATA (Static) ---
const values = [
  {
    icon: Target,
    title: "Mission",
    headline: "Bridging the Gap",
    description: "We exist to turn 'learners' into 'builders.' We provide the missing link in African tech education: high-intensity, hands-on experience with production-grade software.",
  },
  {
    icon: TrendingUp,
    title: "Vision",
    headline: "World-Class Talent",
    description: "To become the definitive pipeline for African engineering talent. We envision a future where 'Trained by iSentry' is a globally recognized badge of technical excellence.",
  },
  {
    icon: Heart,
    title: "Core Values",
    headline: "Excellence & Empathy",
    description: "We believe in rigorous standards delivered with deep mentorship. We prioritize collaboration over competition and are committed to lifting others as we climb.",
  },
];

const timeline = getTimeline();
// export const timeline = [
//   {
//     year: "2023",
//     title: "The Inception",
//     description: "iSentry Internship was founded in Benin City with a single goal: to bridge the gap between academic theory and industry reality for Nigerian developers.",
//   },
//   {
//     year: "2024",
//     title: "Pan-African Expansion",
//     description: "We scaled our impact, reaching developers across 4 African nations. We successfully graduated multiple cohorts, placing alumni in top startups and remote roles.",
//   },
//   {
//     year: "2025",
//     title: "The Next Evolution",
//     description: "We launched our specialized tracks (Cloud, AI & Blockchain) and partnered with international firms to provide direct hiring pipelines for our top 1% talent.",
//   },
// ];

// export const values = [
//   {
//     icon: Target,
//     title: "Mission",
//     headline: "Bridging the Gap",
//     description: "We exist to turn 'learners' into 'builders.' We provide the missing link in African tech education: high-intensity, hands-on experience with production-grade software.",
//   },
//   {
//     icon: TrendingUp, // Swapped Heart for TrendingUp to match 'Vision' better
//     title: "Vision",
//     headline: "World-Class Talent",
//     description: "To become the definitive pipeline for African engineering talent. We envision a future where 'Trained by iSentry' is a globally recognized badge of technical excellence.",
//   },
//   {
//     icon: Heart, // Used Heart for Values
//     title: "Core Values",
//     headline: "Excellence & Empathy",
//     description: "We believe in rigorous standards delivered with deep mentorship. We prioritize collaboration over competition and are committed to lifting others as we climb.",
//   },
// ];

export default function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-[#0D3B66] to-[#00A8E8] py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">
              About iSentry Internship
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Transforming Africa&apos;s tech landscape through practical,
              mentorship-driven learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-[#00A8E8]/10 p-3">
                      <value.icon className="h-8 w-8 text-[#00A8E8]" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Connection to iSentry Technologies
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 dark:text-gray-400">
              iSentry Internship is an initiative by iSentry Technologies, a
              leading software development company committed to building
              innovative solutions while nurturing the next generation of
              African tech talent. Through this program, we share our industry
              expertise, project experience, and commitment to excellence with
              aspiring developers across the continent.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Story
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              From a vision to reality building Africa&apos;s tech future
              together.
            </p>
          </motion.div>

          <div className="relative mx-auto max-w-4xl">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-8 flex gap-6 last:mb-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#00A8E8] text-white font-bold text-lg">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-2 h-2/5 w-0.5 bg-gray-300 dark:bg-gray-700" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {item.year} — {item.event}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Experienced professionals dedicated to your growth and success.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MentorCard mentor={mentor} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
