'use client';

import { useEffect, useState } from 'react';
import Comment from '@/components/comment';
import { useParams } from 'next/navigation';
import { IComment, Blog } from '@/database/blogSchema';

async function getBlog(slug: string) {
  const VercelUrl = `https://rygels-portfolio.vercel.app`;
  try {
    // This fetches the blog from an api endpoint that would GET the blog
    const res = await fetch(`${VercelUrl}/api/Blogs/${slug}`, {
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
      const res = await fetch(`/api/Blogs/${slug}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error('Failed to submit comment');
      }
      const newComment = await res.json();

      const formattedComment: IComment = {
        user: formData.user,
        comment: formData.comment,
        time: new Date(),
      };

    if (blog) {
      setBlog({
        ...blog, comments: [...(blog.comments || []), formattedComment],
      });
    }
    const form = document.querySelector('form') as HTMLFormElement;
    if (form) form.reset();
    
  } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  if (loading) {
    return <div className="text-6xl md:text-5xl font-bold text-center text-gray-800 
                       hover:text-blue-600 transform hover:scale-105 
                       transition-all duration-300 ease-in-out">Loading...</div>;
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
  {blog.comments && blog.comments.length > 0 ? (
    blog.comments.map((comment: IComment, index: number) => (
    <div key={index} className="p-4 border border-gray-300 rounded-md shadow-sm">
    <Comment comment={comment} />
    </div>
    ))
  ) : (
    <p>No comments yet.</p>
  )}
</div>

<form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target as HTMLFormElement);
              const user = formData.get('user') as string;
              const comment = formData.get('comment') as string;
              await SubmitComment({ user, comment });
            }}
            className="space-y-4"
          >
            <label className="block text-sm font--apple-system- text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="user"
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md'
            />
            <label className="block text-sm font--apple-system- text-gray-700">
              Comment
            </label>
            <textarea
              name="comment"
              required
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm'
            />
            <input
              type="submit"
              value="Submit Comment"
              className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-md hover:text-blue-600 transform hover:scale-105 transition-all duration-300 ease-in-out'
            />
          </form>
      </div>
    </div>
  );
}