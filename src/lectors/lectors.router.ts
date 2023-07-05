import { Router } from 'express';
import controllerWrapper from '../application/utilities/controller-wrapper';
import * as lectorsController from './lectors.controller';
import validator from '../application/middlewares/validation.middleware';
import { lectorCreateSchema } from './lector.schema';

const router = Router();

router.get('/', controllerWrapper(lectorsController.getAllLectors));
router.post(
  '/',
  validator.body(lectorCreateSchema),
  controllerWrapper(lectorsController.createLector),
);

export default router;
