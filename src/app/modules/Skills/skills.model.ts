import { model, Schema } from "mongoose"
import { TSkills } from "./skills.interface"

const skillsSchema = new Schema<TSkills>({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    },
},
{
    timestamps: true
}
)

export const Skills = model<TSkills>('Skills', skillsSchema)