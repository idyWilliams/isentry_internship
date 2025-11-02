'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/testimonial-card';
import { cohorts, testimonials } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function ShowcasePage() {
  const [selectedCohort, setSelectedCohort] = useState<string>('all');

  const filteredTestimonials = selectedCohort === 'all'
    ? testimonials
    : testimonials.filter(t => t.cohort === selectedCohort);

  return (
    <div className="flex flex-col bg-white dark:bg-gray-950">
      <section className="bg-gradient-to-r from-[#0D3B66] to-[#006B99] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Intern Showcase
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Meet the talented developers who have transformed their careers through iSentry Internship. Hiring managers, connect with our exceptional interns.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              variant={selectedCohort === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCohort('all')}
              className={selectedCohort === 'all' ? 'bg-[#0D3B66]' : ''}
            >
              All Interns ({testimonials.length})
            </Button>
            {cohorts.map(cohort => (
              <Button
                key={cohort.id}
                variant={selectedCohort === cohort.id ? 'default' : 'outline'}
                onClick={() => setSelectedCohort(cohort.id)}
                className={selectedCohort === cohort.id ? 'bg-[#0D3B66]' : ''}
              >
                {cohort.name} ({testimonials.filter(t => t.cohort === cohort.id).length})
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No interns found for this cohort.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
