import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/lib/types';
import { Trophy } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="relative h-full transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center space-x-4">
          <div className="relative">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            {testimonial.isBestInCohort && (
              <div className="absolute -bottom-1 -right-1 rounded-full bg-yellow-400 p-1 shadow-lg">
                <Trophy className="h-4 w-4 text-yellow-900" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.role}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {testimonial.countryFlag} {testimonial.country}
            </p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
          {testimonial.cohort} • Class of {testimonial.year}
        </p>
      </CardContent>
    </Card>
  );
}
