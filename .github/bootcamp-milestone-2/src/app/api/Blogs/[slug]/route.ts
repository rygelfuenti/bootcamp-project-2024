import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import BlogModel from '@/database/blogSchema';


export async function GET(req: NextRequest) {
  await connectDB(); // function from db.ts before
  const  slug = req.nextUrl.pathname.split('/').pop();

  try {
    const blog = await BlogModel.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}

