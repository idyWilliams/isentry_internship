import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Mentor } from '@/lib/types'; 

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <Card className="group h-full overflow-hidden border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">

      {/* Image Section with Overlay */}
      <div className="relative h-80 w-full overflow-hidden sm:h-96">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle gradient overlay at the bottom for better text contrast/transition */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>

      <CardContent className="relative p-6">
        {/* Header Row: Name & LinkedIn */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold leading-tight text-gray-900 dark:text-white group-hover:text-[#0D3B66] dark:group-hover:text-blue-400 transition-colors">
              {mentor.name}
            </h3>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#00A8E8]">
              {mentor.role}
            </p>
          </div>

          {/* LinkedIn Button - Glows Blue on Hover */}
          {mentor.linkedin && (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${mentor.name}'s LinkedIn`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-all duration-300 hover:bg-[#0077b5] hover:text-white hover:shadow-lg hover:shadow-blue-500/30 dark:bg-gray-800 dark:hover:bg-[#0077b5]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>

        {/* Bio Text */}
        <p className="line-clamp-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {mentor.bio}
        </p>
      </CardContent>
    </Card>
  );
}
