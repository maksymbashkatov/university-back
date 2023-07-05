import { Router } from 'express';
import controllerWrapper from '../application/utilities/controller-wrapper';
import * as coursesController from './courses.controller';
import validator from '../application/middlewares/validation.middleware';
import { courseCreateSchema } from './course.schema';

const router = Router();

router.get('/', controllerWrapper(coursesController.getAllCourses));
router.post(
  '/',
  validator.body(courseCreateSchema),
  controllerWrapper(coursesController.createCourse),
);

export default router;
