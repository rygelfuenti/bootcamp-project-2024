import mongoose, { Schema } from 'mongoose';

type Project = {
    name: string;
    description: string;
    image: string;
    imageAlt: string;
    date: Date;
};

const projectSchema = new Schema<Project>({
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: false},
    imageAlt: {type: String, required: false},
    date: {type: Date, required: true, default: new Date()}

})

const Project = mongoose.models['projects']  || mongoose.model('projects', projectSchema);

export default Project;