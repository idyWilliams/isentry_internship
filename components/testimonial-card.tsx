import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full transition-shadow hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center space-x-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div>
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
          Class of {testimonial.year}
        </p>
      </CardContent>
    </Card>
  );
}
