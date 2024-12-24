import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/database/db';
import BlogModel from '@/database/blogSchema';

interface IParams {
  params: {
    slug: string;
  };
}

export async function POST(req: NextRequest, { params }: IParams) {
  try {
    await connectDB();
    const { slug } = params;
    const body = await req.json();

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    if (!body || !body.user || !body.comment) {
      return NextResponse.json(
        { error: 'User and comment fields are required' },
        { status: 400 }
      );
    }

    const result = await BlogModel.collection.updateOne(
      { slug },
      {
        $addToSet: {
          comments: {
            user: body.user,
            comment: body.comment,
            date: new Date(),
          },
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'Blog Post Not Found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Comment Added!' }, { status: 200 });
  } catch (error) {
    console.error('Error adding comment:', error);
    return NextResponse.json(
      { error: 'Failed to add comment' },
      { status: 500 }
    );
  }
}