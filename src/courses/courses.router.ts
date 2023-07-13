import { Router } from 'express';
import controllerWrapper from '../application/utilities/controller-wrapper';
import * as coursesController from './courses.controller';
import validator from '../application/middlewares/validation.middleware';
import { courseCreateSchema } from './course.schema';
import { idParamSchema } from '../application/schemas/id-param.schema';

const router = Router();

router.get('/', controllerWrapper(coursesController.getAllCourses));
router.get(
  '/get-all-by-lector/:id',
  validator.params(idParamSchema),
  controllerWrapper(coursesController.getAllCoursesByLectorId),
);
router.post(
  '/',
  validator.body(courseCreateSchema),
  controllerWrapper(coursesController.createCourse),
);

export default router;
