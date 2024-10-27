import { TSkills } from "./skills.interface";
import { Skills } from "./skills.model";

const createSkillsIntoDB = async (payload: TSkills) => {
    const result = await Skills.create(payload);
    return result;
};

const getAllSkillsFromDB = async () => {
    const result = await Skills.find({ isDeleted: false });
    return result;
};

const updateSkillsIntoDB = async (
    id: string,
    payload: Partial<TSkills>,
  ) => {
    const result = await Skills.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      },
    );
    return result;
  };

  const deleteSkillsFromDB = async (id: string) => {
    const result = await Skills.findByIdAndUpdate(
      id,
      { isDeleted: true },
      {
        new: true,
      },
    );
    return result;
  };

export const SkillsServices = {
    createSkillsIntoDB,
    getAllSkillsFromDB,
    // getSingleFacilityFromDB,
    updateSkillsIntoDB,
    deleteSkillsFromDB
  };