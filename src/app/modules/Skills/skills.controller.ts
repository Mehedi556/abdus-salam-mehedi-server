import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SkillsServices } from "./skills.service";
import noDataFoundResponse from "../../utils/noDataFoundResponse";

const createSkills = catchAsync(async (req, res) => {
    const result = await SkillsServices.createSkillsIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Skills added successfully',
        data: result,
    });
});

const getAllSkills = catchAsync(async (req, res) => {
    const result = await SkillsServices.getAllSkillsFromDB();
  

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
      message: 'Skills retrieved successfully',
      data: result,
    });
    }
  
    
  });

  const updateSkills = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SkillsServices.updateSkillsIntoDB(id, req.body);
  
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
      message: 'Skills updated successfully',
      data: result,
    });
  }
  });

  const deleteSkills = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SkillsServices.deleteSkillsFromDB(id);
  
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
      message: 'Skills deleted successfully',
      data: result,
    });
    }
  });

export const SkillsControllers = {
    createSkills,
    getAllSkills,
    // getSingleSkills,
    updateSkills,
    deleteSkills,
  };