"use client";

import { motion } from "framer-motion";
import { Target, Heart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MentorCard } from "@/components/mentor-card";
import { mentors } from "@/lib/data";
// import { Image } from "next-image";

const timeline = [
  {
    year: "2023",
    event: "Program founded",
    description: "iSentry Internship launches to empower African tech talent",
  },
  {
    year: "2024",
    event: "Expanded across Africa",
    description:
      "Reached developers in 4 countries with multiple successful cohorts",
  },
  {
    year: "2025",
    event: "New cohort launch",
    description: "Opening applications for our most ambitious cohort yet",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: `At Isentry, our mission is to lead technological advancement,
      creating a world where businesses and individuals can thrive through innovation.`,
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Excellence, mentorship, collaboration, and a commitment to elevating African talent on the global stage.",
  },
  {
    icon: TrendingUp,
    title: "Our Vision",
    description: `At Isentry, our mission is to drive technological advancement
      through two key pillars: delivering innovative software solutions and nurturing tech talent.`,
  },
];

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
              From a vision to reality — building Africa&apos;s tech future
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
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00A8E8] text-white font-bold">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-2 h-full w-0.5 bg-gray-300 dark:bg-gray-700" />
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
