import express from 'express';
import { ProjectControllers } from './project.controller';

const router = express.Router();

router.post(
  '/',
  ProjectControllers.createProject,
);


router.put(
  '/:id',
  ProjectControllers.updateProject,
);

router.get('/', 
  ProjectControllers.getAllProjects);

router.get('/:id',
  ProjectControllers.getSingleProject);

router.delete('/:id', ProjectControllers.deleteProject);

export const ProjectRoutes = router;