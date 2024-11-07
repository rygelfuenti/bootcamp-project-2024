import React from 'react';


export default function Resume() {
    return (
        <>
<div className="max-w-4l mx-auto px-4 py-8 bg-white space y-4">
                <h1 className="flex justify-center p-6 text-4xl font--apple-system- font-medium rounded-full shadow-md">Resume</h1>
                <div className="flex flex-col items-center justify-center spacey-4">
                <a href="/images/Resume.pdf" className="inline-block px-4 py-2 text-sm font--apple-system- text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors" download>Download Resume</a>
                </div>
                <div className='flex text-xl items-center justify-center font-medium border-b border-gray-200 pb-2 font--apple-system-'>
                    Santa Maria, CA / fuentiblancarygel@gmail.com / linkedin: www.linkedin.com/in/rygel-fuentiblanca-98a225298  
                    </div>
                
                <div className = "space y-4">
                    <section>
                        <h2 className="flex text-2xl text-gray-800 border-b border-gray-w00 pb-2 font--apple-system-">Education</h2>
                        <div className="entry">
                        <h3 className="text-lg font--apple-system- text-gray-800">Bachelor of Engineering in Computer Engineering</h3>
                        <p className="text-gray-600">California Polytechnic State University, San Luis Obispo | Expected Graduation May 2027</p>
                        </div>
                    </section>
                </div>
                


                <div className = "space y-4">
                    <section>
                        <h2 className="flex text-2xl text-gray-800 border-b border-gray-w00 pb-2 font--apple-system-">Experience</h2>
                        <div className="entry">
                            <h3 className="text-lg font--apple-system- text-gray-800">Mustang Mentor 2023 - Present</h3>
                            <p className="text-gray-600">•	Dedicated 4-5 hours a month of my time to mentor a high-school student guiding them on their college-application journey.</p>
                            <h3 className="text-lg font--apple-system- text-gray-800">Target Tech Sales Associate</h3>
                            <p className="text-gray-600">• Assisted customers in selecting electronics, providing expert knowledge on a range of products including smartphones, tablets, and accessories. Delivered excellent customer service, met sales goals, and helped troubleshoot technical issues. Ensured store displays were up-to-date and organized, contributing to a positive shopping experience</p>
                        </div>
                    </section>
                </div>



                <div className= "space y-4">
                    <section>
                        <h2 className="flex text-2xl text-gray-800 border-b border-gray-w00 pb-2 font--apple-system-">Coursework</h2>
                        <div className ="entry">
                            <ul className="grid grid-cols-2 gap-2 text-gray-600">
                                <li>Hack4Impact HTML, CSS & Git Starter Pack</li>
                                <li>Intro to Computer Science</li>
                                <li>Fundamentals of Computer Science</li>
                                <li>Data Structures & Algorithms</li>
                            </ul>
                        </div>
                    </section>
                </div>



                <div className = "space y-4">
                    <section>
                        <h2 className="flex text-2xl text-gray-800 border-b border-gray-w00 pb-2 font--apple-system-">Projects</h2>
                        <div className="entry">
                        <h3 className="text-lg font--apple-system- text-gray-800">Personal Website</h3>
                        <p className="text-gray-600">Designed and built a personal website using HTML and CSS</p>
                        <p className="text-gray-600">-Implemented multiple pages using React, and Tailwind CSS, Used best practices for Git and Github</p>
                        </div>
                    </section>
                </div>



                <div className = "space y-4">
                    <section>
                        <h2 className="flex text-2xl text-gray-800 border-b border-gray-w00 pb-2 font--apple-system-">Skills</h2>
                        <div className="entry">
                                <ul className="grid grid-cols-3 gap-2 text-gray-600">
                                    <li>Semantic HTML</li>
                                    <li>CSS</li>
                                    <li>Git Version Control</li>
                                    <li>TypeScript</li>
                                    <li>Python</li>
                                    <li>React</li>
                                    <li>Tailwind CSS</li>
                                    <li>NextJS</li>
                                </ul>
                        </div>
                    </section>
                </div>           
            </div>
        </>
       )
}