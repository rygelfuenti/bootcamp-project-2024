import Image from "next/image";
import blogs from '@/app/blogData';
import BlogPreview from '@/components/blogPreview';
export default function Home() {
  return (
    <div>
      <h1>Software Developer</h1>
      <p>Hi, I am Rygel Fuentiblanca and I am a sophmore studying Computer Science at Cal Poly - San Luis Obispo</p>

      {blogs.map(blog =>
        <BlogPreview key={blog.title} {...blog}/>
      )}
    </div>
  );
}
