import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/lib/types';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="mb-3 flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
          {post.title}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`}>
          <Button variant="outline" size="sm">
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
