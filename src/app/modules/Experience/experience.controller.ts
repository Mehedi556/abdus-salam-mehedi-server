import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";
import noDataFoundResponse from "../../utils/noDataFoundResponse";

const createExperience = catchAsync(async (req, res) => {
    const result = await ExperienceServices.createExperienceIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Experience added successfully',
        data: result,
    });
});

const getAllExperiences = catchAsync(async (req, res) => {
    const result = await ExperienceServices.getAllExperiencesFromDB();
  

    if(result?.length < 1){
      noDataFoundResponse(res, {
        success: false,
        statusCode: 404,
        message: "No Data Found",
        data: result
      })
    } else {
      sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Experiences retrieved successfully',
      data: result,
    });
    }
  
    
  });

  const updateExperience = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ExperienceServices.updateExperienceIntoDB(id, req.body);
  
    if(!result){
      noDataFoundResponse(res, {
        success: false,
        statusCode: 404,
        message: "No Data Found",
        data: result
      })
    } else{
      sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Experience updated successfully',
      data: result,
    });
  }
  });

  const deleteExperience = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ExperienceServices.deleteExperienceFromDB(id);
  
    if(!result){
      noDataFoundResponse(res, {
        success: false,
        statusCode: 404,
        message: "No Data Found",
        data: result
      })
    }else {
      sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Experience deleted successfully',
      data: result,
    });
    }
  });

export const ExperienceControllers = {
    createExperience,
    getAllExperiences,
    // getSingleExperience,
    updateExperience,
    deleteExperience,
  };