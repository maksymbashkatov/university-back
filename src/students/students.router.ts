import { Router } from 'express';
import * as studentsController from './students.controller';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import {
  addStudentToGroupSchema,
  studentCreateSchema,
  studentUpdateSchema,
} from './student.schema';
import { idParamSchema } from '../application/schemas/id-param.schema';

const router = Router();

router.get('/', controllerWrapper(studentsController.getAllStudents));
router.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(studentsController.getStudentById),
);
router.post(
  '/',
  validator.body(studentCreateSchema),
  controllerWrapper(studentsController.createStudent),
);
router.patch(
  '/:id',
  validator.params(idParamSchema),
  validator.body(studentUpdateSchema),
  controllerWrapper(studentsController.updateStudentById),
);
router.delete(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(studentsController.deleteStudentById),
);
router.patch(
  '/:id/add-to-group',
  validator.params(idParamSchema),
  validator.body(addStudentToGroupSchema),
  controllerWrapper(studentsController.addStudentToGroup),
);

export default router;
