'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { resources } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const categoryColors = {
  learning: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  tools: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  documentation: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  community: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'learning', 'tools', 'documentation', 'community'] as const;

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="flex flex-col bg-white dark:bg-gray-950">
      <section className="bg-gradient-to-r from-[#0D3B66] to-[#006B99] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Learning Resources
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Curated resources to help you master modern web development. From documentation to tools and community support.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-[#0D3B66]' : ''}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <Badge
                        className={categoryColors[resource.category as keyof typeof categoryColors]}
                        variant="secondary"
                      >
                        {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
                      </Badge>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                      {resource.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm text-gray-600 dark:text-gray-400">
                      {resource.description}
                    </p>
                    <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        Access Resource
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No resources found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
