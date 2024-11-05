import { model, Schema } from "mongoose"
import { TProject } from "./project.interface"

const projectSchema = new Schema<TProject>({
    title: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    projectImage: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    features: {
        type: [String],
        required: true,
    },
    frontendGithubLink: {
        type: String,
        required: true,
    },
    backendGithubLink: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
        required: true,
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

export const Project = model<TProject>('Project', projectSchema)