import { TExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperienceIntoDB = async (payload: TExperience) => {
    const result = await Experience.create(payload);
    return result;
};

const getAllExperiencesFromDB = async () => {
    const result = await Experience.find({ isDeleted: false });
    return result;
};

const updateExperienceIntoDB = async (
    id: string,
    payload: Partial<TExperience>,
  ) => {
    const result = await Experience.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      },
    );
    return result;
  };

  const deleteExperienceFromDB = async (id: string) => {
    const result = await Experience.findByIdAndUpdate(
      id,
      { isDeleted: true },
      {
        new: true,
      },
    );
    return result;
  };

export const ExperienceServices = {
    createExperienceIntoDB,
    getAllExperiencesFromDB,
    // getSingleFacilityFromDB,
    updateExperienceIntoDB,
    deleteExperienceFromDB
  };