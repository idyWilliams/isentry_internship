import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/data';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | iSentry Internship`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="relative h-96 w-full">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="container absolute bottom-0 left-0 right-0 mx-auto px-4 pb-8 sm:px-6 lg:px-8">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-4 text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
          <h1 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </div>

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
            <p className="lead text-xl text-gray-600 dark:text-gray-400">
              {post.excerpt}
            </p>

            <div className="mt-8">
              <h2>Full Article Content</h2>
              <p>
                This is a placeholder for the full blog post content. In a real implementation, this would contain the complete article with proper formatting, images, and embedded content.
              </p>
              <p>
                The iSentry Internship program continues to evolve and grow, providing more opportunities for aspiring developers across Africa. Our commitment to practical, hands-on learning remains at the core of everything we do.
              </p>
              <h3>Key Takeaways</h3>
              <ul>
                <li>Real-world experience is invaluable for career growth</li>
                <li>Mentorship accelerates learning and professional development</li>
                <li>Building a strong portfolio opens doors to opportunities</li>
                <li>Community and collaboration drive innovation</li>
              </ul>
              <h3>Looking Ahead</h3>
              <p>
                As we continue to expand our program, we remain focused on our mission: empowering Africa's next generation of tech innovators through hands-on experience and expert mentorship.
              </p>
              <p>
                Whether you're considering applying or are simply interested in our approach, we invite you to explore our program and see how we're making a difference in the African tech ecosystem.
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t bg-gray-50 py-12 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Interested in Joining?
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Applications are open for the next cohort. Start your journey with iSentry Internship today.
            </p>
            <Link href="/apply">
              <Button size="lg" className="bg-[#00A8E8] text-white hover:bg-[#00A8E8]/90">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
