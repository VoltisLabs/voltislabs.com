'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchData } from '../../../../lib/apiClient';
import ArticleHeader from '../components/articleHeader';

const GET_POST_BY_SLUG = `
  query Post($where: PostWhereUniqueInput!) {
    post(where: $where) {
      title
      slug
      category {
        name
      }
      content {
        html
      }
      datePublished
      publishedBy {
        name
        picture
      }
      featuredImage {
        url
      }
    }
  }
`;

export default function BlogPostPage() {
  const { slug } = useParams() as { slug: string };
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const data = await fetchData({
          query: GET_POST_BY_SLUG,
          variables: {
            where: { slug },
          },
        });

        setPost(data.data.post);
      } catch (err) {
        console.error('Failed to fetch post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-t-transparent" />
          <p className="text-sm text-gray-300">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) return <div className="p-4 text-red-500">Post not found</div>;

  const formattedDate = new Date(post.datePublished).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mx-auto min-h-screen max-w-4xl bg-black px-4 py-20 text-white">
      <ArticleHeader
        title={post.title}
        author={post.publishedBy?.name || 'Unknown Author'}
        date={`Published on ${formattedDate}`}
        showWelcome={false}
      />

<div
  className="prose prose-invert prose-p:text-justify prose-img:rounded-lg prose-img:w-full prose-img:max-h-[40vh] prose-img:object-cover prose-headings:text-white prose-p:text-gray-200 mt-10 max-w-none"
  dangerouslySetInnerHTML={{ __html: post.content?.html || '' }}
/>
    </div>
  );
}
