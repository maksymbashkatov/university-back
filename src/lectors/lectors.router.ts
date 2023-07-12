import { Router } from 'express';
import controllerWrapper from '../application/utilities/controller-wrapper';
import * as lectorsController from './lectors.controller';
import validator from '../application/middlewares/validation.middleware';
import {
  addLectorToCourseCreateSchema,
  lectorCreateSchema,
} from './lector.schema';
import { idParamSchema } from '../application/schemas/id-param.schema';

const router = Router();

router.get('/', controllerWrapper(lectorsController.getAllLectors));
router.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(lectorsController.getLectorById),
);
router.post(
  '/',
  validator.body(lectorCreateSchema),
  controllerWrapper(lectorsController.createLector),
);
router.post(
  '/add-to-course',
  validator.body(addLectorToCourseCreateSchema),
  controllerWrapper(lectorsController.addLectorToCourse),
);

export default router;
