'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { partners } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const categoryLabels = {
  sponsor: 'Sponsor',
  technology: 'Technology Partner',
  hiring: 'Hiring Partner',
  community: 'Community Partner',
};

const categoryColors = {
  sponsor: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  technology: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  hiring: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  community: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
};

export default function PartnershipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'sponsor', 'technology', 'hiring', 'community'] as const;

  const filteredPartners = selectedCategory === 'all'
    ? partners
    : partners.filter(p => p.category === selectedCategory);

  return (
    <div className="flex flex-col bg-white dark:bg-gray-950">
      <section className="bg-gradient-to-r from-[#0D3B66] to-[#006B99] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Partners
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            We're proud to partner with leading organizations that support African tech talent development and internship success.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 dark:bg-gray-900 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              iSentry Internship is a Subsidiary of iSentry Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
              iSentry Technologies is committed to building Africa's most powerful ecosystem for tech talent development.
            </p>
          </div>
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
                {category === 'all'
                  ? 'All Partners'
                  : categoryLabels[category as keyof typeof categoryLabels]}
              </Button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 h-24 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={200}
                        height={100}
                        className="h-full w-full object-contain p-2"
                      />
                    </div>
                    <div className="mb-3">
                      <Badge
                        className={categoryColors[partner.category as keyof typeof categoryColors]}
                        variant="secondary"
                      >
                        {categoryLabels[partner.category as keyof typeof categoryLabels]}
                      </Badge>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                      {partner.name}
                    </h3>
                    <div className="mt-auto">
                      {partner.website && partner.website !== '#' ? (
                        <Link href={partner.website} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          disabled
                        >
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No partners found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0D3B66] to-[#006B99] py-16 text-white md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Interested in Partnership?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            We're always looking for organizations that share our mission to empower African tech talent.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0D3B66] hover:bg-white/90"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
