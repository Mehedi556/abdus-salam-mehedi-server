import express from 'express';
import { BlogControllers } from './blog.controller';


const router = express.Router();

router.post(
  '/',
  BlogControllers.createBlog,
);


router.put(
  '/:id',
  BlogControllers.updateBlog,
);

router.get('/', 
  BlogControllers.getAllBlogs);

router.get('/:id', 
  BlogControllers.getSingleBlog);

router.delete('/:id', BlogControllers.deleteBlog);

export const BlogRoutes = router;