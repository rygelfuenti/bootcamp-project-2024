import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { Project } from '@/app/projectData';
import style from './projectPreview.module.css'


export default function ProjectPreview(props: Project) {
  const imageURL = props.image  || '/images/default.jpg';
  const formattedDate = new Date(props.date).toLocaleDateString();
    return (
        <div className={style.projectpreview}> {/* Whole Content Wrapper */}
        <h3>{props.name}</h3>
        <div className={style.content}>
            <div className={style.imageWrapper}> { /* Image Wrapper */}
            <Image
            src={imageURL}
            alt={props.imageAlt  || 'Default Text'}
            layout="fill"
            ></Image>
        </div>
        <div> {/* Text Wrapper */}
        <p><strong>{props.description}</strong></p>
        <p><strong>{formattedDate}</strong></p>
        </div>
    </div>
    </div>
    );
}