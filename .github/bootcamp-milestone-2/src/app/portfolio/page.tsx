import React from 'react';
import Image from 'next/image';
import connectDB from '@/database/db';
import Project from '@/database/projectSchema';
import ProjectPreview from '@/components/projectPreview';

async function getProjects(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
		const projects = await Project.find().sort({ date: -1 }).lean();
			// send a response as the blogs as the message
	    return projects
	} catch (err) {
	    return null
	}
}

export default async function Portfolio() {
	const projects = await getProjects();

	let projectContent;
	if (projects && projects.length > 0) {
		projectContent = projects.map((project: any) => (
			<div key={project._id}>
				<ProjectPreview {...project}/>
			</div>
		));
	} else {
		projectContent = <p className='text-center text-gray-700'> No Projects Found.</p>
	}
	return (
    <div className="max-w-4l mx-auto px-4 py-8 bg-white space y-4">
		<h1 className='flex justify-center p-6 text-4xl font--apple-system- font-medium rounded-full shadow-md'>Portfolio</h1>
		<div className='justify-center'>
		{projectContent}
		</div>
    </div>
	)
}