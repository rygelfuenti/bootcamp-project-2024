"use client"
import React, { useEffect, useState } from 'react';
import Comment from '@/components/comment';
import { IComment, Blog } from '@/database/blogSchema';

type Props = {
  params: { slug: string }
};

export default function BlogPage({ params }: Props) {
  const { slug } = params;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${slug}`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('No Blogs Found');
          } else {
            throw new Error('Not Working');
          }
        }

        const data = await response.json();
        setBlog(data);
        setLoading(false);
      } catch (err) {
        const errorMessage = (err as Error).message;
        setError(errorMessage);
        console.error('Error with Fetching:', errorMessage);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const SubmitComment = async (formData: { user: string; comment: string }) => {
    const newComment = { user: formData.user, comment: formData.comment };
    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment),
      });

      if (!res.ok) {
        throw new Error('Failed to submit comment');
      }

      const updatedBlog = await res.json();
      setBlog(updatedBlog);
    } catch (err: unknown) {
      console.error('Error submitting comment:', err);
      setError((err as Error).message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
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
        <p className="flex justify-center text-2xl text-gray-800 font--apple-system-">
          {blog.description}
        </p>
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