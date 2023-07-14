import { Router } from 'express';
import * as marksController from './marks.controller';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { idParamSchema } from '../application/schemas/id-param.schema';
import { markCreateSchema } from './mark.schema';

const router = Router();

router.get(
  '/get-all-by-student/:id',
  validator.params(idParamSchema),
  controllerWrapper(marksController.getAllMarksByStudentId),
);
router.get(
  '/get-all-by-course/:id',
  validator.params(idParamSchema),
  controllerWrapper(marksController.getAllMarksByCourseId),
);
router.post(
  '/',
  validator.body(markCreateSchema),
  controllerWrapper(marksController.createMark),
);

export default router;
