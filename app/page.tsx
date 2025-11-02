'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MetricCounter } from '@/components/metric-counter';
import { TestimonialCard } from '@/components/testimonial-card';
import { metrics, testimonials } from '@/lib/data';

const features = [
  {
    icon: Code,
    title: 'Real-World Projects',
    description: 'Work on live products used by actual customers, not toy projects or tutorials.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from experienced developers through weekly code reviews and guidance.',
  },
  {
    icon: Award,
    title: 'Portfolio Building',
    description: 'Build a professional portfolio that showcases your skills to potential employers.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Gain the practical experience and connections needed to launch your tech career.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0D3B66] via-[#0D3B66] to-[#00A8E8] py-20 text-white md:py-32">
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Empowering Africa's Next Generation of Tech Innovators
            </h1>
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Join Africa's most practical internship experience. Work on real projects, gain hands-on experience, and launch your tech career with expert mentorship.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-white text-[#0D3B66] hover:bg-white/90"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/internship">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAwdjJIMjRWMGgxMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MetricCounter
                  value={metric.value}
                  label={metric.label}
                  suffix={metric.suffix}
                />
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
              Why Choose iSentry Internship?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              We provide everything you need to transition from learning to doing in the tech industry.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full transition-shadow hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-[#00A8E8]/10 p-3">
                      <feature.icon className="h-8 w-8 text-[#00A8E8]" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
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
              What Our Interns Say
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Hear from developers who transformed their careers through iSentry Internship.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
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

          <div className="mt-12 text-center">
            <Link href="/testimonials">
              <Button variant="outline" size="lg">
                View All Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0D3B66] to-[#00A8E8] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Transform Your Tech Career?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Applications for the next cohort are now open. Join Africa's most practical internship program and work on real projects from day one.
            </p>
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-white text-[#0D3B66] hover:bg-white/90"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
