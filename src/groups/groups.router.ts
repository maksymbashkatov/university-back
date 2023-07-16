import { Router } from 'express';
import * as groupsController from './groups.controller';
import { groupCreateSchema, groupUpdateSchema } from './group.schema';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { idParamSchema } from '../application/schemas/id-param.schema';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Groups
 *   description: The groups managing API
 * /groups:
 *   get:
 *     summary: Get all groups
 *     tags: [Groups]
 *     responses:
 *       200:
 *         description: The list of groups.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetGroupWithStudents'
 *       500:
 *         description: Some server error
 */
router.get('/', controllerWrapper(groupsController.getAllGroups));

/**
 * @swagger
 * tags:
 *   name: Groups
 *   description: The groups managing API
 * /groups/{id}:
 *   get:
 *     summary: Get group by id
 *     tags: [Groups]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Group id
 *     responses:
 *       200:
 *         description: The group was got
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetGroupWithStudents'
 *       404:
 *         description: Group not found
 *       500:
 *         description: Some server error
 */
router.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(groupsController.getGroupById),
);

/**
 * @swagger
 * tags:
 *   name: Groups
 *   description: The groups managing API
 * /groups:
 *   post:
 *     summary: Create group
 *     tags: [Groups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateGroup'
 *     responses:
 *       201:
 *         description: Was created a group
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetGroup'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Some server error
 */
router.post(
  '/',
  validator.body(groupCreateSchema),
  controllerWrapper(groupsController.createGroup),
);

/**
 * @swagger
 * tags:
 *   name: Groups
 *   description: The groups managing API
 * /groups/{id}:
 *   patch:
 *     summary: Update group
 *     tags: [Groups]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Group id
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateGroup'
 *     responses:
 *       204:
 *         description: No content
 *       400:
 *         description: Validation error
 *       404:
 *         description: Group not found
 *       500:
 *         description: Some server error
 */
router.patch(
  '/:id',
  validator.params(idParamSchema),
  validator.body(groupUpdateSchema),
  controllerWrapper(groupsController.updateGroupById),
);

/**
 * @swagger
 * tags:
 *   name: Groups
 *   description: The groups managing API
 * /groups/{id}:
 *   delete:
 *     summary: Delete group
 *     tags: [Groups]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Group id
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Group not found
 *       500:
 *         description: Some server error
 */
router.delete(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(groupsController.deleteGroupById),
);

export default router;
