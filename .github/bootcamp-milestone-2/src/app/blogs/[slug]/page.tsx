'use client';

import { useEffect, useState } from 'react';
import Comment from '@/components/comment';
import { useParams } from 'next/navigation';
import { IComment, Blog } from '@/database/blogSchema';

async function getBlog(slug: string) {
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/Blogs/${slug}`, {
      cache: 'no-store',
    });

    // This checks that the GET request was successful
    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default function BlogPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      const data = await getBlog(slug);
      if (data) {
        setBlog(data);
        setLoading(false);
      } else {
        setError('Failed to fetch blog');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const SubmitComment = async (formData: { user: string; comment: string }) => {
    try {
      const res = await fetch(`/api/blogs/${slug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error('Failed to submit comment');
      }
      const updatedBlog = await res.json();
      setBlog(updatedBlog);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <h1 className="text-6xl md:text-7xl font-bold text-center text-gray-800 
                       hover:text-blue-600 transform hover:scale-105 
                       transition-all duration-300 ease-in-out">
          {blog.title}
        </h1>
        <div className="prose mx-auto">
          <p>{blog.content}</p>
        </div>
        <h3 className="text-4xl font-bold text-center text-gray-800 mt-8">Comments</h3>
        <div className="space-y-4">
          {blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const user = formData.get('user') as string;
            const comment = formData.get('comment') as string;
            await SubmitComment({ user, comment });
          }}
        >
          <input type="text" name="user" placeholder="Your name" required />
          <textarea name="comment" placeholder="Your comment" required></textarea>
          <button type="submit">Submit Comment</button>
        </form>
      </div>
    </div>
  );
}