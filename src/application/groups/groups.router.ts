import { Router } from 'express';
import controllerWrapper from '../utilities/controller-wrapper';
import * as groupsController from './groups.controller';
import validator from '../middlewares/validation.middleware';
import { idParamSchema } from '../schemas/id-param.schema';
import { groupCreateSchema, groupUpdateSchema } from './group.schema';

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
