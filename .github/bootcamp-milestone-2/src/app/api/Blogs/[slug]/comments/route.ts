import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import BlogModel from '@/database/blogSchema';
import { IComment } from '@/database/blogSchema';

export async function OPTIONS(req: NextRequest) { const headers = new Headers(); 
  headers.set('Access-Control-Allow-Origin', '*'); 
  headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
  headers.set('Access-Control-Allow-Headers', 'Content-Type'); 
    return NextResponse.json(null, { headers });
  }

export async function POST(req: NextRequest) {
  await connectDB();
  
  try { 
    const slug = req.nextUrl.pathname.split('/')[3];
    const {user, comment } = await req.json();
    
    //Check for Valid Input
    if (!user || !comment) {
      return NextResponse.json({ error: "User and Comment are required" }, { status: 400 });
    }

    //Find Blog By the Slug
    const blog = await BlogModel.findOne({ slug });

    //Check For if Blog is Found
    if (!blog) {
      return NextResponse.json({ error: "Blog not Found" }, { status: 404 });
    }

    const newComment: IComment = {
      user,
      comment,
      time: new Date(),
    };
    
    blog.comments.push(newComment);

    await blog.save();
    
    const res = NextResponse.json({ comments: blog.comments }, { status: 200});

    res.headers.set('Access-Control-Allow-Origin', '*');
    return res;

  } catch (err) {
    console.error("Error saving comment:", err);
    return NextResponse.json({ error: "Comment unsaved" }, { status: 500 });
  }
}