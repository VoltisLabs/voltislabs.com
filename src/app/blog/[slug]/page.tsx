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

        const raw = data?.data?.post;
        setPost(raw ?? null);
      } catch (err) {
        console.error("Failed to fetch post:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-vl-cream px-4 py-24 text-vl-ink">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-vl-brown border-t-transparent" />
          <p className="text-sm text-vl-ink-muted">Loading article…</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center text-vl-ink">
        <p className="text-lg font-medium text-vl-brown-dark">Post not found</p>
        <p className="mt-2 text-sm text-vl-ink-muted">This article may have been removed or the link is incorrect.</p>
      </div>
    );
  }

  const formattedDate = new Date(post.datePublished).toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="mx-auto min-h-screen max-w-4xl bg-vl-cream px-4 py-16 text-vl-ink md:py-20">
      <ArticleHeader
        title={post.title}
        author={post.publishedBy?.name || "Unknown Author"}
        date={`Published on ${formattedDate}`}
        showWelcome={false}
      />

      <div
        className="prose prose-neutral prose-p:text-justify prose-headings:text-vl-brown-dark prose-p:text-vl-ink prose-a:text-vl-brown prose-img:mt-4 prose-img:max-h-[40vh] prose-img:w-full prose-img:rounded-lg prose-img:object-cover mt-10 max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content?.html || "" }}
      />
    </div>
  );
}
