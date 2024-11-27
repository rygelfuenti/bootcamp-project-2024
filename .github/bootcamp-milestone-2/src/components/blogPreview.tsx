import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import { Blog } from '@/app/blogData';
import Link from 'next/link'

export default function BlogPreview(props: Blog) {
  const imageURL = props.image  || '/images/default.jpg';
  const formattedDate = new Date(props.date).toLocaleDateString();
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogpreview} >
      <h3>{props.title}</h3>
      <div className={style.content}>
        <div className={style.imageWrapper}> 
          <Link href={`/blogs/${props.slug}`}>
				<Image 
        src={imageURL} 
        alt={props.imageAlt  || 'Default Text'} 
        layout='fill'
        objectFit='cover'
        ></Image>
        </Link>
        </div>
        <Link href={`/blogs/${props.slug}`}>
        <p><strong>{props.description}</strong></p>
				<p><strong>{formattedDate}</strong></p>
        </Link>
      </div>
    </div>
  );
}
  
