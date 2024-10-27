import { model, Schema } from "mongoose"
import { TExperience } from "./experience.interface"

const experienceSchema = new Schema<TExperience>({
    companyName: {
        type: String,
        required: true
    },
    employmentPeriod: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    responsibilities: {
        type: [String],
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

export const Experience = model<TExperience>('Experience', experienceSchema)