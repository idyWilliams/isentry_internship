import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Mentor } from '@/lib/types';

interface MentorCardProps {
  mentor: Mentor;
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-96 w-full">
        <Image
          src={mentor.image}
          alt={mentor.name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {mentor.name}
            </h3>
            <p className="text-sm font-medium text-[#00A8E8]">{mentor.role}</p>
          </div>
          {mentor.linkedin && (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-[#00A8E8] dark:text-gray-400"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{mentor.bio}</p>
      </CardContent>
    </Card>
  );
}
