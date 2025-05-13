import { notFound } from 'next/navigation';

import { blogPosts } from '../components/blogData';

interface BlogPageProps {
  params: Promise<{ slug: string }>; // Now it's a promise
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params; 
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const ContentComponent = post.content;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 pt-24 text-sm text-white md:text-base">
      <ContentComponent />
    </div>
  );
}
