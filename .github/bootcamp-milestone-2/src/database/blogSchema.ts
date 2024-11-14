import mongoose, { Schema } from 'mongoose';

//typescript type (can also be an interface)
type Blog = {
    title: string;
    date: Date;
    description: string; //for preview
    image: string;
    imageAlt: string;
    slug: string;
    content: string;  // for individual blog page
    comments: Comment[];
    };

//mongoose schema
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true},
    slug: { type: String, required: true},
    date: { type: Date, required: false, default: new Date()},
    description: {type: String, required: true },
    content: { type: String, required: true},
    image: {type: String, required: false},
    imageAlt: {type: String, required: false},
})

//defining the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;