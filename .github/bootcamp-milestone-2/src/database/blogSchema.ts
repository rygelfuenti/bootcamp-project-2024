import mongoose, { Schema } from 'mongoose';

//typescript type (can also be an interface)
export type Blog = {
    title: string;
    date: Date;
    description: string; //for preview
    image: string;
    imageAlt: string;
    slug: string;
    content: string;  // for individual blog page
    comments: IComment[];
    };

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

//comment Schema
const commentSchema = new Schema<IComment>({
    user: {type: String, required: true },
    comment: { type: String, required: true },
    time: { type: Date, required: false, default: Date.now },
})
//mongoose schema
const blogSchema = new Schema<Blog>({
    title: { type: String, required: true},
    slug: { type: String, required: true},
    date: { type: Date, requred: false, default: new Date()},
    description: {type: String, required: true },
    content: { type: String, required: true},
    image: {type: String, required: false},
    imageAlt: {type: String, required: false},
    comments: { type: [commentSchema], default: [] },
})

//defining the collection and model
const BlogModel = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default BlogModel;