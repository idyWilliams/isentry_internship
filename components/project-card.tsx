import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { InternProject } from '@/lib/types';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: InternProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mb-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>{project.internCount} intern{project.internCount !== 1 ? 's' : ''}</span>
          <span>{project.cohort}</span>
        </div>
        <Link href={project.link || '#'}>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
          >
            View Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
