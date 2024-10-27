import express from 'express';
import { SkillsControllers } from './skills.controller';

const router = express.Router();

router.post(
  '/',
  SkillsControllers.createSkills,
);


router.put(
  '/:id',
  SkillsControllers.updateSkills,
);

router.get('/', 
  SkillsControllers.getAllSkills);

// router.get('/:id', 
  // auth("admin", "user"), 
//   SkillsControllers.getSingleSkills);

router.delete('/:id', SkillsControllers.deleteSkills);

export const SkillsRoutes = router;