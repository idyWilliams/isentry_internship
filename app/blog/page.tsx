'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/data';

export default function Blog() {
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
              Blog & Updates
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Stay updated with the latest news, success stories, and insights from the iSentry Internship program.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
