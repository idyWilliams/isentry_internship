'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FileCheck,
  Users,
  Code,
  MessageSquare,
  Award,
  Clock,
  Target,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    icon: FileCheck,
    title: 'Apply',
    description: 'Submit your application with your background, interests, and motivation to join.',
  },
  {
    icon: Users,
    title: 'Get Matched',
    description: 'We review applications and match you with teams based on your skills and interests.',
  },
  {
    icon: Code,
    title: 'Work on Live Projects',
    description: 'Collaborate on real products used by actual users, building production-ready features.',
  },
  {
    icon: MessageSquare,
    title: 'Receive Mentorship',
    description: 'Get regular feedback, code reviews, and guidance from experienced developers.',
  },
  {
    icon: Award,
    title: 'Showcase Your Work',
    description: 'Build a portfolio of real projects to demonstrate your skills to future employers.',
  },
];

const details = [
  {
    icon: Clock,
    title: 'Duration',
    description: '3–6 months (flexible based on project needs)',
  },
  {
    icon: Target,
    title: 'Structure',
    description: 'Teams of 3-5 interns working on live projects with weekly sprints and evaluations',
  },
  {
    icon: Zap,
    title: 'Requirements',
    description: 'Basic React knowledge, eagerness to learn, and commitment to excellence',
  },
];

const highlights = [
  'Work on products used by real customers',
  'Weekly mentorship sessions with industry experts',
  'Learn modern tech stackrelated to your skill area',
  'Practice Agile methodologies and professional workflows',
  'Build your professional network across Africa',
  'Certificate of completion and LinkedIn recommendations',
];

// const onboardingVideo = "https://www.youtube.com/embed/fxcH2GCjWgc";

export default function Internship() {
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
              The Internship Program
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              A comprehensive, hands-on experience designed to transform
              learners into professional developers.
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
              Program Overview
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {details.map((detail, index) => (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex rounded-full bg-[#00A8E8]/10 p-4">
                      <detail.icon className="h-8 w-8 text-[#00A8E8]" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                      {detail.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {detail.description}
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
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Your journey from application to becoming a professional
              developer.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="flex items-start gap-6 p-6">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#00A8E8] text-xl font-bold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="mb-3 flex items-center gap-3">
                        <step.icon className="h-6 w-6 text-[#00A8E8]" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              What You Get
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Everything you need to launch your tech career.
            </p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <Card>
              <CardContent className="p-8">
                <ul className="grid gap-4 md:grid-cols-2">
                  {highlights.map((highlight, index) => (
                    <motion.li
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00A8E8]">
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
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
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Watch Our Last Cohort Onboarding
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              See what it&apos;s like to be part of the iSentry Internship
              family.
            </p>
            <div className="aspect-video overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/fxcH2GCjWgc"
                title="Cohort Onboarding"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0D3B66] to-[#00A8E8] py-16 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Begin?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Applications are open for the next cohort. Don&apos;t miss this
              opportunity.
            </p>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-white text-[#0D3B66] hover:bg-white/90"
              >
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
