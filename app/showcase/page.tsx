"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/testimonial-card";
import { cohorts, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function ShowcasePage() {
  // const [selectedCohort, setSelectedCohort] = useState<string | null>(null);
  // const [selectedYear, setSelectedYear] = useState<string | null>(null);

const [selectedFilter, setSelectedFilter] = useState<string>("all");

  // Get unique years from testimonials
  const years = Array.from(new Set(testimonials.map((t) => t.year)))
    .sort()
    .reverse();

  // Filter testimonials based on selected filter (either 'all', a year, or a cohort)
  const filteredTestimonials = testimonials.filter((t) => {
    if (selectedFilter === "all") return true;
    // Check if it's a year filter
    if (years.includes(selectedFilter)) {
      return t.year === selectedFilter;
    }
    // Otherwise it's a cohort filter
    return t.cohort === selectedFilter;
  });

  return (
    <div className="flex flex-col bg-white dark:bg-gray-950">
      <section className="bg-gradient-to-r from-[#0D3B66] to-[#006B99] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Intern Showcase
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Meet the talented developers who have transformed their careers
            through iSentry Internship. Hiring managers, connect with our
            exceptional interns.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              variant={selectedFilter === "all" ? "default" : "outline"}
              onClick={() => setSelectedFilter("all")}
              className={selectedFilter === "all" ? "bg-[#0D3B66]" : ""}
            >
              All Interns ({testimonials.length})
            </Button>
            {/* {years.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => handleYearChange(year)}
                className={selectedYear === year ? "bg-[#0D3B66]" : ""}
              >
                {year}
              </Button>
            ))} */}

            {years.map((year) => {
              const yearTestimonials = testimonials.filter(
                (t) => t.year === year
              );
              const yearCohorts = cohorts.filter((c) => c.id.startsWith(year));
              const isYearSelected =
                selectedFilter === year ||
                yearCohorts.some((c) => c.id === selectedFilter);

              return (
                <div key={year} className="flex flex-wrap gap-3">
                  {/* Year Button */}
                  <Button
                    variant={selectedFilter === year ? "default" : "outline"}
                    onClick={() => setSelectedFilter(year)}
                    className={selectedFilter === year ? "bg-[#0D3B66]" : ""}
                  >
                    {year} ({yearTestimonials.length})
                  </Button>

                  {/* Cohort Buttons for this year (shown when year is selected) */}
                  {isYearSelected &&
                    yearCohorts.map((cohort) => {
                      const count = testimonials.filter(
                        (t) => t.cohort === cohort.id
                      ).length;
                      return (
                        <Button
                          key={cohort.id}
                          variant={
                            selectedFilter === cohort.id ? "default" : "outline"
                          }
                          onClick={() => setSelectedFilter(cohort.id)}
                          className={
                            selectedFilter === cohort.id ? "bg-[#0D3B66]" : ""
                          }
                        >
                          {cohort.name} ({count})
                        </Button>
                      );
                    })}
                </div>
              );
            })}
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
