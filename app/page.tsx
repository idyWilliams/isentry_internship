'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Award, TrendingUp, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MetricCounter } from '@/components/metric-counter';
import { TestimonialCard } from '@/components/testimonial-card';
import { ProjectCard } from '@/components/project-card';
import { metrics, testimonials, projects } from '@/lib/data';

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
    <div className="flex flex-col bg-white dark:bg-gray-950">
      <section className="relative overflow-hidden bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >

              <div className="mb-4 inline-block">
                <Badge
                  onClick={() => window.open('https://www.isentrytechnologies.com', '_blank')}
                  className="bg-[#00A8E8]/10 text-[#0D3B66] cursor-pointer hover:bg-[#00A8E8]/20 transition-colors">
                  A Subsidiary of iSentry Technologies
                </Badge>
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                Empowering Africa's Next Generation of Tech Innovators
              </h1>
              <p className="mb-6 text-lg text-gray-600 md:text-xl">
                Join iSentry Internship, Africa's most practical tech internship program. Work on real projects that impact millions, gain hands-on experience, and launch your tech career with expert mentorship from industry leaders.
              </p>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/apply">
                  <Button
                    size="lg"
                    className="bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/internship">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                Next cohort applications opening soon. Join 200+ African developers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="African developers collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-16 dark:from-gray-900 dark:to-gray-950 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
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
              Why Choose iSentry Internship?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              We provide everything you need to transition from learning to building real products in the tech industry.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-lg bg-[#00A8E8]/10 p-3">
                      <feature.icon className="h-6 w-6 text-[#FFFFFF]" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
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
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Real projects built by our interns that have impacted thousands of users across Africa.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/internship">
              <Button
                size="lg"
                className="bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white"
              >
                Explore All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
              Success Stories From Our Interns
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              Meet the exceptional developers who transformed their careers through iSentry Internship.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial, index) => (
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
            <Link href="/showcase">
              <Button
                size="lg"
                variant="outline"
                className="border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5"
              >
                View Intern Showcase
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0D3B66] to-[#006B99] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Join the next cohort of Africa's most talented developers. Work on real projects, get mentored by industry experts, and launch your tech career.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row justify-center">
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-white text-[#0D3B66] hover:bg-white/90"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
