"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "@/components/testimonial-card";
import { cohorts, testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Filter, Calendar } from "lucide-react";

// Number of cards to show per page
const ITEMS_PER_PAGE = 8;

export default function ShowcasePage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all"); // 'all', year '2024', or cohort '2024-A'
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  // 1. EXTRACT DATA: Get unique years and unique roles
  const years = useMemo(() =>
    Array.from(new Set(testimonials.map((t) => t.year))).sort().reverse(),
    []);

  const uniqueRoles = useMemo(() =>
    Array.from(new Set(testimonials.map((t) => t.role))).sort(),
    []);

  // 2. FILTERING & SORTING PIPELINE
  const filteredTestimonials = useMemo(() => {
    // A. Filter Step
    const filtered = testimonials.filter((t) => {
      // Filter by Cohort/Year
      const matchesGroup =
        selectedFilter === "all" ||
        (years.includes(selectedFilter) ? t.year === selectedFilter : t.cohort === selectedFilter);

      // Filter by Role
      const matchesRole =
        selectedRole === "all" ||
        t.role === selectedRole;

      return matchesGroup && matchesRole;
    });

    // B. Sort Step: Order by Name (A-Z)
    return filtered.sort((a, b) => a.name.localeCompare(b.name));

  }, [selectedFilter, selectedRole, years]);

  // 3. PAGINATION LOGIC
  const totalPages = Math.ceil(filteredTestimonials.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTestimonials.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTestimonials, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, selectedRole]);

  // Helper to scroll to top of grid when paging
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    document.getElementById("intern-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">

      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-r from-[#0D3B66] to-[#006B99] py-16 text-white md:py-20">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Intern Showcase
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Meet the talented developers who have transformed their careers
            through iSentry Internship.
          </p>
        </div>
      </section>

      {/* --- CONTROLS SECTION --- */}
      <section className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 py-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
        <div className="container mx-auto flex flex-col gap-6 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">

          {/* Left: Cohort/Year Filters */}
          <div className="flex flex-col gap-2">
            {/* Label for Year Filter */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              <Calendar className="h-3 w-3" />
              <span>Filter by Cohort Year</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("all")}
                className={selectedFilter === "all" ? "bg-[#0D3B66] hover:bg-[#0D3B66]/90" : ""}
              >
                All
              </Button>

              {years.map((year) => {
                const isYearActive = selectedFilter === year || selectedFilter.startsWith(year);

                return (
                  <div key={year} className="flex items-center">
                    <Button
                      variant={selectedFilter === year ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFilter(year)}
                      className={selectedFilter === year ? "bg-[#0D3B66] hover:bg-[#0D3B66]/90" : ""}
                    >
                      {year}
                    </Button>

                    {/* Show specific cohorts if this year is active */}
                    {isYearActive && (
                      <div className="ml-2 flex gap-2 border-l border-gray-300 pl-2 dark:border-gray-700">
                        {cohorts
                          .filter((c) => c.id.startsWith(year))
                          .map((cohort) => (
                            <button
                              key={cohort.id}
                              onClick={() => setSelectedFilter(cohort.id)}
                              className={`text-sm font-medium transition-colors ${selectedFilter === cohort.id
                                  ? "text-[#0D3B66] underline decoration-2 underline-offset-4 dark:text-blue-400"
                                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400"
                                }`}
                            >
                              {cohort.name}
                            </button>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Role Filter */}
          <div className="w-full sm:w-auto">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Filter by Role
            </div>
            <div className="relative flex items-center min-w-[200px]">
              <Filter className="absolute left-3 h-4 w-4 text-gray-500" />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="h-9 w-full rounded-md border border-gray-200 bg-transparent pl-9 pr-3 text-sm font-medium focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-800 dark:text-gray-200"
              >
                <option value="all">All Roles</option>
                {uniqueRoles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* --- GRID SECTION --- */}
      <section id="intern-grid" className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-semibold text-gray-900 dark:text-white">{paginatedItems.length}</span> of <span className="font-semibold text-gray-900 dark:text-white">{filteredTestimonials.length}</span> interns
            </div>
            {/* Optional: Sort indicator */}
            <div className="text-xs text-gray-400 italic">
              Sorted alphabetically A-Z
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="wait">
              {paginatedItems.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredTestimonials.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="rounded-full bg-gray-100 p-4 dark:bg-gray-800">
                <Filter className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">No interns found</h3>
              <p className="text-gray-500">Try adjusting your filters to find who you're looking for.</p>
              <Button
                variant="link"
                onClick={() => { setSelectedFilter('all'); setSelectedRole('all'); }}
                className="mt-2 text-[#0D3B66]"
              >
                Clear all filters
              </Button>
            </div>
          )}

          {/* --- PAGINATION CONTROLS --- */}
          {totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="h-10 w-10 rounded-full border-gray-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`h-2 w-2 rounded-full transition-all ${currentPage === page
                        ? "w-8 bg-[#0D3B66]"
                        : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700"
                      }`}
                    aria-label={`Go to page ${page}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="h-10 w-10 rounded-full border-gray-200"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
