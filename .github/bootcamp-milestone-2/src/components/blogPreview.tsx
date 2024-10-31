import React from 'react';
import style from './blogPreview.module.css'
import Image from 'next/image';
import { Blog } from '@/app/blogData';
export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogpreview}>
      <h3>{props.title}</h3>
      <div>
				<Image src={props.image} alt={props.imageAlt} width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>{props.date}</p>
      </div>
    </div>
  );
}
  
