import { Router } from 'express';
import * as postsController from './posts.controller';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { idParamSchema } from '../application/schemas/id-param.schema';
import { postCreateSchema, postUpdateSchema } from './post.schema';

const router = Router();

router.get('/', controllerWrapper(postsController.getAllPosts));
router.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(postsController.getPostById),
);
router.post(
  '/',
  validator.body(postCreateSchema),
  controllerWrapper(postsController.createPost),
);
router.patch(
  '/:id',
  validator.params(idParamSchema),
  validator.body(postUpdateSchema),
  controllerWrapper(postsController.updatePostById),
);
router.delete(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(postsController.deletePostById),
);

export default router;
