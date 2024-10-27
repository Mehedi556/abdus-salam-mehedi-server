import express from 'express';
import { ExperienceControllers } from './experience.controller';

const router = express.Router();

router.post(
  '/',
  ExperienceControllers.createExperience,
);


router.put(
  '/:id',
  ExperienceControllers.updateExperience,
);

router.get('/', 
  ExperienceControllers.getAllExperiences);

// router.get('/:id', 
  // auth("admin", "user"), 
//   ExperienceControllers.getSingleExperience);

router.delete('/:id', ExperienceControllers.deleteExperience);

export const ExperienceRoutes = router;