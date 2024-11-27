import Image from "next/image";
import BlogPreview from '@/components/blogPreview';
import WorkExperience from'@/components/workexperience';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';
import style from '@/components/blogPreview.module.css'
async function getBlogs(){
  await connectDB() // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).lean();
    return blogs; // Serialize the data
  } catch (err) {
    console.error("Failed to fetch blogs:", err);
    return [];
  }
}

export default async function Home() {
  const blogs = await getBlogs();

  let blogContent;
  if (blogs && blogs.length > 0) {
    blogContent = blogs.map((blog: any) => (
      <div key={blog._id}>
        <BlogPreview {...blog}/>
      </div>
    ));
  } else {
    blogContent = <p className='text-center text-gray-700'> No Blogs Found.</p>
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto space-y-12">
        <h1 className="text-6xl md:text-7xl font-bold text-center text-gray-800 
                       hover:text-blue-600 transform hover:scale-105 
                       transition-all duration-300 ease-in-out">
          Software Developer
        </h1>
        
        <p className="text-2xl text-center text-gray-700 leading-relaxed">
          Hi, I am 
          <span className="font-semibold text-blue-600 hover:text-blue-800 
                         transition-colors duration-300 mx-2 hover:underline">
            Rygel Fuentiblanca
          </span> 
          and I am a sophomore studying Computer Science at
          <span className="block mt-2 font-semibold text-green-600 
                         hover:text-green-800 transition-colors duration-300">
            Cal Poly - San Luis Obispo⌨️🖱️
          </span>
        </p>
      </div>
      {/* Main}
      {/* Blog Section */}
      <div>
      {blogContent}
      </div>
      {/* Work Experience Section */}
      <div>
        <WorkExperience />
      </div>
    </div>
  );
}

