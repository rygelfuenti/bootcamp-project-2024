import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import BlogModel, { Blog } from "@/database/blogSchema";

import React from 'react';

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs: Blog[] = await BlogModel.find()
      .sort({ date: -1 })
      .orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export default async function BlogListPage() {
  const blogs: Blog[] = await getBlogs();

  return (
    <main>
      <h1 className='text-6xl md:text-7xl font-bold text-center text-gray-800 
                       hover:text-blue-600 transform hover:scale-105 
                       transition-all duration-300 ease-in-out'>Blog</h1>
      <div className="flex flex-col items-center gap-8">
        {blogs.map((blog, index) => (
          <BlogPreview
          key={index}
          title={blog.title}
          date={blog.date.toISOString()}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
          />
        ))}
      </div>
    </main>
  );
}
