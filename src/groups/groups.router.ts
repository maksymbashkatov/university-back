import { Router } from 'express';
import * as groupsController from './groups.controller';
import { groupCreateSchema, groupUpdateSchema } from './group.schema';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { idParamSchema } from '../application/schemas/id-param.schema';

const router = Router();

router.get('/', controllerWrapper(groupsController.getAllGroups));
router.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(groupsController.getGroupById),
);
router.post(
  '/',
  validator.body(groupCreateSchema),
  controllerWrapper(groupsController.createGroup),
);
router.patch(
  '/:id',
  validator.params(idParamSchema),
  validator.body(groupUpdateSchema),
  controllerWrapper(groupsController.updateGroupById),
);
router.delete(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(groupsController.deleteGroupById),
);

export default router;
