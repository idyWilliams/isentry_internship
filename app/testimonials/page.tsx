'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/testimonial-card';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [filter, setFilter] = useState<string>('all');

  const years = ['all', ...Array.from(new Set(testimonials.map((t) => t.year)))];

  const filteredTestimonials =
    filter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.year === filter);

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
              Intern Success Stories
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Hear from developers who transformed their careers through iSentry Internship.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {years.map((year) => (
              <Button
                key={year}
                variant={filter === year ? 'default' : 'outline'}
                onClick={() => setFilter(year)}
                className={
                  filter === year
                    ? 'bg-[#00A8E8] text-white hover:bg-[#00A8E8]/90'
                    : ''
                }
              >
                {year === 'all' ? 'All Years' : year}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                No testimonials found for this filter.
              </p>
            </div>
          )}
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
              Video Testimonials
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Watch our interns share their experiences in their own words.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-video overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800"
              >
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ`}
                  title={`Video Testimonial ${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
