'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Search,
  ExternalLink,
  BookOpen,
  Terminal,
  FileText,
  Users,
  Cpu,
  Palette
} from 'lucide-react';

// --- DATA: iSentry Specific Resources ---
// I've populated this with resources matching iSentry's verified stack (MERN, Next.js, Python, AWS)
const resources = [
  // LEARNING (Courses & Tutorials)
  {
    id: 'l1',
    title: 'Next.js: The Official Interactive Course',
    description: 'The best way to learn the iSentry frontend stack. Master App Router, Server Components, and data fetching.',
    category: 'learning',
    link: 'https://nextjs.org/learn',
    tags: ['Frontend', 'Core']
  },
  {
    id: 'l2',
    title: 'Full Stack Open (MERN)',
    description: 'Deep dive into modern web development with React, Redux, Node.js, MongoDB, GraphQL and TypeScript.',
    category: 'learning',
    link: 'https://fullstackopen.com/en/',
    tags: ['Fullstack', 'MERN']
  },
  {
    id: 'l3',
    title: 'FastAPI for Python Developers',
    description: 'Learn to build high-performance APIs with Python 3.7+ types, a core skill for iSentry backend tracks.',
    category: 'learning',
    link: 'https://fastapi.tiangolo.com/tutorial/',
    tags: ['Backend', 'Python']
  },
  {
    id: 'l4',
    title: 'AWS Skill Builder',
    description: 'Official learning center for Cloud Computing. Essential for the Cloud/DevOps internship track.',
    category: 'learning',
    link: 'https://explore.skillbuilder.aws/',
    tags: ['Cloud', 'DevOps']
  },

  // TOOLS (Daily Drivers)
  {
    id: 't1',
    title: 'Figma',
    description: 'The industry standard for interface design. Used by our UI/UX interns for prototyping and wireframing.',
    category: 'tools',
    link: 'https://www.figma.com/',
    tags: ['Design', 'UI/UX']
  },
  {
    id: 't2',
    title: 'Postman API Platform',
    description: 'Essential tool for testing backend APIs (Node/Express/FastAPI) before integration.',
    category: 'tools',
    link: 'https://www.postman.com/',
    tags: ['Backend', 'Testing']
  },
  {
    id: 't3',
    title: 'Git & GitHub',
    description: 'Version control is mandatory. Master branching, pull requests, and collaboration workflows.',
    category: 'tools',
    link: 'https://github.com/',
    tags: ['General', 'Collaboration']
  },

  // DOCUMENTATION (Reference)
  {
    id: 'd1',
    title: 'Tailwind CSS Docs',
    description: 'A utility-first CSS framework. Learn to build rapid UIs without leaving your HTML.',
    category: 'documentation',
    link: 'https://tailwindcss.com/docs',
    tags: ['Frontend', 'CSS']
  },
  {
    id: 'd2',
    title: 'React Documentation (Latest)',
    description: 'The new "beta" docs focusing on Hooks and functional components. The bible for React devs.',
    category: 'documentation',
    link: 'https://react.dev/',
    tags: ['Frontend', 'React']
  },
  {
    id: 'd3',
    title: 'Shadcn/ui',
    description: 'Beautifully designed components that you can copy and paste into your apps. Accessible and customizable.',
    category: 'documentation',
    link: 'https://ui.shadcn.com/',
    tags: ['Frontend', 'UI Library']
  },

  // COMMUNITY
  {
    id: 'c1',
    title: 'Frontend Mentor',
    description: 'Improve your frontend coding skills by building real projects. Solve real-world HTML, CSS and JS challenges.',
    category: 'community',
    link: 'https://www.frontendmentor.io/',
    tags: ['Practice', 'Frontend']
  },
];

// --- COMPONENT ---

const categoryConfig: Record<string, { label: string; icon: any; color: string; bg: string }> = {
  learning: {
    label: 'Learning',
    icon: BookOpen,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800'
  },
  tools: {
    label: 'Tools',
    icon: Terminal,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20 border-purple-100 dark:border-purple-800'
  },
  documentation: {
    label: 'Docs',
    icon: FileText,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800'
  },
  community: {
    label: 'Community',
    icon: Users,
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-50 dark:bg-orange-900/20 border-orange-100 dark:border-orange-800'
  },
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Logic
  const filteredResources = useMemo(() => {
    return resources.filter((r) => {
      const matchesCategory = selectedCategory === 'all' || r.category === selectedCategory;
      const matchesSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50/50 dark:bg-gray-950">

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-[#0D3B66] py-20 text-center text-white md:py-24">
        {/* Abstract Background Shapes */}
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-purple-400/10 blur-3xl"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-white/10 px-4 py-1.5 text-sm font-medium text-white hover:bg-white/20 border-white/10 backdrop-blur-sm">
            ✨ Curated for iSentry Interns
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Knowledge Hub
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100/90 md:text-xl">
            Everything you need to master the <strong>iSentry Tech Stack</strong>.
            From Next.js and Python to Cloud Architecture.
          </p>

          {/* Floating Search Bar */}
          <div className="mx-auto mt-12 max-w-lg">
            <div className="relative group">
              <div className="absolute inset-0 -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
              <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-full shadow-xl">
                <Search className="ml-4 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search resources (e.g., 'React', 'Figma')..."
                  className="h-14 w-full border-0 bg-transparent px-4 text-base placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={`rounded-full px-6 transition-all ${selectedCategory === 'all'
                  ? 'bg-[#0D3B66] shadow-lg shadow-blue-900/20 hover:bg-[#0D3B66]/90'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300'
                }`}
            >
              All Resources
            </Button>

            {Object.entries(categoryConfig).map(([key, config]) => {
              const Icon = config.icon;
              const isSelected = selectedCategory === key;
              return (
                <Button
                  key={key}
                  variant={isSelected ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(key)}
                  className={`rounded-full px-6 capitalize transition-all ${isSelected
                      ? 'bg-[#0D3B66] shadow-md hover:bg-[#0D3B66]/90'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300'
                    }`}
                >
                  <Icon className={`mr-2 h-4 w-4 ${isSelected ? 'text-white' : config.color}`} />
                  {config.label}
                </Button>
              )
            })}
          </div>

          {/* Resources Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource, index) => {
                const config = categoryConfig[resource.category] || categoryConfig.learning;
                const Icon = config.icon;

                return (
                  <motion.div
                    key={resource.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={resource.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                      <Card className="h-full border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50">
                        <CardContent className="flex h-full flex-col p-6">

                          {/* Top: Icon & Tags */}
                          <div className="mb-4 flex items-start justify-between">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${config.bg}`}>
                              <Icon className={`h-6 w-6 ${config.color}`} />
                            </div>
                            <div className="flex gap-1">
                              {resource.tags.slice(0, 1).map(tag => (
                                <span key={tag} className="rounded-md bg-gray-100 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#0D3B66] dark:text-white dark:group-hover:text-blue-400">
                              {resource.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">
                              {resource.description}
                            </p>
                          </div>

                          {/* Footer */}
                          <div className="mt-6 flex items-center text-sm font-medium text-[#0D3B66] opacity-0 transition-opacity group-hover:opacity-100 dark:text-blue-400">
                            Open Resource <ExternalLink className="ml-2 h-3 w-3" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 rounded-full bg-gray-100 p-6 dark:bg-gray-800">
                <Search className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                No resources found
              </h3>
              <p className="mt-2 text-gray-500">
                We couldn't find anything matching "{searchQuery}" in {categoryConfig[selectedCategory]?.label || 'this category'}.
              </p>
              <Button
                variant="link"
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-2 text-[#0D3B66]"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
