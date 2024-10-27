import { model, Schema } from "mongoose"
import { TBlog } from "./blog.interface"

const blogSchema = new Schema<TBlog>({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true,
    },
},
{
    timestamps: true
}
)

export const Blog = model<TBlog>('Blog', blogSchema)