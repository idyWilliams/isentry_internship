// 'use client';

// import { motion } from 'framer-motion';
// import { BlogCard } from '@/components/blog-card';
// import { blogPosts } from '@/lib/data';

// export default function Blog() {
//   return (
//     <div className="flex flex-col">
//       <section className="bg-gradient-to-br from-[#0D3B66] to-[#00A8E8] py-20 text-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mx-auto max-w-4xl text-center"
//           >
//             <h1 className="mb-6 text-4xl font-bold md:text-5xl">
//               Blog & Updates
//             </h1>
//             <p className="text-lg text-white/90 md:text-xl">
//               Stay updated with the latest news, success stories, and insights from the iSentry Internship program.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {blogPosts.map((post, index) => (
//               <motion.div
//                 key={post.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               >
//                 <BlogCard post={post} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, ThumbsUp, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { shoutouts } from "../../lib/shoutouts"; // Import your data

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Community Shoutouts
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See what our interns are saying about their journey on LinkedIn.
          </p>
        </div>

        {/* Grid of Posts */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {shoutouts.map((post) => (
            <Card
              key={post.id}
              className="flex h-full flex-col justify-between border-gray-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
            >
              <div>
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-100">
                      <Image
                        src={post.image}
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                        {post.author}
                      </h4>
                      <p className="text-[10px] text-gray-500 line-clamp-1">{post.role}</p>
                      <p className="text-[10px] text-gray-400">{post.date}</p>
                    </div>
                  </div>
                  <Linkedin className="h-5 w-5 text-[#0077b5]" />
                </div>

                {/* Content */}
                <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {post.content}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-auto border-t border-gray-100 pt-3 dark:border-gray-800">
                <div className="mb-3 flex items-center gap-1 text-xs text-gray-500">
                  <div className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500">
                    <ThumbsUp className="h-2 w-2 text-white" fill="currentColor" />
                  </div>
                  <span>{post.likes} likes</span>
                </div>

                <Link
                  href={post.linkedinUrl}
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-50 py-2 text-xs font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-[#0077b5] dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800"
                >
                  View Post <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* 'View All' Button */}
        <div className="mt-10 text-center">
          <Link
            href="https://www.linkedin.com/search/results/content/?heroEntityKey=urn%3Ali%3Aorganization%3A104579217&keywords=isentry%20technologies&origin=CLUSTER_EXPANSION"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[#0077b5] px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-[#006097]"
          >
            <Linkedin className="h-4 w-4" fill="currentColor" />
            See All Posts on LinkedIn
          </Link>
        </div>

      </div>
    </section>
  );
}
