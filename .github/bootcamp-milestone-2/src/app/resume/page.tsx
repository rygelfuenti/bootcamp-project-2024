import React from 'react';

export default function Resume() {
    return (
        <>
<div className="resume">
                <h1 className="page-title">Resume</h1>
                <a href="Resume.pdf" download>Download Resume</a>
                
                <div className = "section">
                    <section>
                        <h2 className="section-title">Education</h2>
                        <div className="entry">
                        <h3 className="entry-title">Bachelor of Engineering in Computer Engineering</h3>
                        <p className="entry-info">California Polytechnic State University, San Luis Obispo | Expected Graduation May 2027</p>
                        </div>
                    </section>
                </div>
                
                <div className = "section">
                    <section>
                        <h2 className="section-title">Experience</h2>
                        <div className="entry">
                            <h3 className="entry-title">Mustang Mentor 2023 - Present</h3>
                            <p className="entry-info">•	Dedicated 4-5 hours a month of my time to mentor a high-school student guiding them on their college-application journey.</p>
                            <h3 className="entry-title">Target Tech Sales Associate</h3>
                            <p className="entry-info">• Assisted customers in selecting electronics, providing expert knowledge on a range of products including smartphones, tablets, and accessories. Delivered excellent customer service, met sales goals, and helped troubleshoot technical issues. Ensured store displays were up-to-date and organized, contributing to a positive shopping experience</p>
                        </div>
                    </section>
                </div>

                <div className= "section">
                    <section>
                        <h2 className="section-title">Coursework</h2>
                        <div className ="entry">
                            <ul className="course-list">
                                <li>Hack4Impact HTML, CSS & Git Starter Pack</li>
                                <li>Intro to Computer Science</li>
                                <li>Fundamentals of Computer Science</li>
                                <li>Data Structures & Algorithms</li>
                            </ul>
                        </div>
                    </section>
                </div>

                <div className = "section">
                    <section>
                        <h2 className="section-title">Projects</h2>
                        <div className="entry">
                        <h3 className="entry-title">Personal Website</h3>
                        <p className="entry-info">Designed and built a personal website using HTML and CSS</p>
                        <p>-Implemented multiple pages using HTML and CSS - Focused on semantic HTML design - 
                            Used best practices for Git and Github</p>
                        </div>
                    </section>
                </div>

                <div className = "section">
                    <section>
                        <h2 className="section-title">Skills</h2>
                        <div className="entry">
                                <ul className="course-list">
                                    <li>Semantic HTML</li>
                                    <li>CSS</li>
                                    <li>Git Version Control</li>
                                    <li>TypeScript</li>
                                    <li>Python</li>
                                </ul>
                        </div>
                    </section>
                </div>           
            </div>
        </>
       )
}