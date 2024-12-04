import connectDB from '@/database/db';
import Comment from '@/components/comment';
import { IComment } from '@/database/blogSchema';

type Props = {
    params: {slug: string}
}

async function getBlog(slug: string) {
	try {
		// This fetches the blog from an api endpoint that would GET the blog
		const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
			cache: "no-store",	
		})
		// This checks that the GET request was successful
		if (!res.ok) {
			throw new Error("Failed to fetch blog");
		}

		return res.json();
	} catch (err: unknown) {
		console.log(`error: ${err}`);
		return null;
		// `` are a special way of allowing JS inside a string
		// Instead of "error: " + err, we can just do the above
		// it is simular to formated strings in python --> f"{err}"
	}
}

export default async function Blog({ params }: Props) {
	const { slug } = params;
	const blog = await getBlog(slug);
	
    if (!blog) {
        return (
            <div className='flex items-center justify-center'>
                <p className='text-center text-gray-700 font--apple-system-'> Blog Post Not Found.</p>
            </div>
        )
    }
	return (
		<div className='space-y-12'>
        <h1 className="text-6xl md:text-7xl font-bold text-center text-gray-800 
                       hover:text-blue-600 transform hover:scale-105 
                       transition-all duration-300 ease-in-out">{blog.title}</h1>

		<p className="flex justify-center text-2xl text-gray-800 font--apple-system-">{blog.content}</p>
		<h3 className='text-6xl md:text-7xl font-bold text-center text-gray-800 
                       hover:text-blue-600 transform hover:scale-105 
                       transition-all duration-300 ease-in-out'>Comments</h3>
		{blog.comments.map((comment: IComment, index: number) => (
			<Comment key={index} comment={comment} />
		))}
        </div>
    );
}
