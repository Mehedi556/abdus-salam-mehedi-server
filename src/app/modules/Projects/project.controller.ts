import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import noDataFoundResponse from "../../utils/noDataFoundResponse";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
    const result = await ProjectServices.createProjectIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project added successfully',
        data: result,
    });
});

const getAllProjects = catchAsync(async (req, res) => {
    const result = await ProjectServices.getAllProjectsFromDB();

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
      message: 'Projects retrieved successfully',
      data: result,
    });
    }
  
    
  });

  const getSingleProject = catchAsync(async (req, res) => {
    const id = req?.params?.id;
    const result = await ProjectServices.getSingleProjectFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Project details retrieved successfully',
        data: result,
    });
});

  const updateProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.updateProjectIntoDB(id, req.body);
  
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
      message: 'Project updated successfully',
      data: result,
    });
  }
  });

  const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProjectServices.deleteProjectFromDB(id);
  
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
      message: 'Project deleted successfully',
      data: result,
    });
    }
  });

export const ProjectControllers = {
    createProject,
    getAllProjects,
    getSingleProject,
    updateProject,
    deleteProject,
  };