import React from 'react';
import Image from 'next/image';

export default function WorkExperience() {
    return (
        <div className="top-20 right-8 w-80 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font--apple-system- mb-4">Work Experience</h3>
        <div className='space-y-4'>
        <Image
        src = "/images/hack4impact_logo.jpg"
        alt = "Logo of Hack4Impact"
        width={100}
        height={100}
        className="rounded-lg"
        ></Image>
        <h3 className="font--apple-system- text-gray-900">Hack4Impact</h3>
        <p className="text-gray-600 mb-2">October 2024 - Present</p>
        <p className="text-gray-700">Collaborated with a team of developers at Hack4Impact to build a web application for a nonprofit client. Utilized React, Next.js, and database management tools to develop scalable, user-centered solutions aimed at maximizing social impact through technology.</p>
        </div>
    </div>
    )
}
