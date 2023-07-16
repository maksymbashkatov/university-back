import { Router } from 'express';
import * as marksController from './marks.controller';
import controllerWrapper from '../application/utilities/controller-wrapper';
import validator from '../application/middlewares/validation.middleware';
import { idParamSchema } from '../application/schemas/id-param.schema';
import { markCreateSchema } from './mark.schema';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Marks
 *   description: The marks managing API
 * /marks/get-all-by-student/{id}:
 *   get:
 *     summary: Get all marks by student id
 *     tags: [Marks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Student id
 *     responses:
 *       200:
 *         description: The list of marks by student id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetMarkByStudentId'
 *       404:
 *         description: Student not found
 *       500:
 *         description: Some server error
 */
router.get(
  '/get-all-by-student/:id',
  validator.params(idParamSchema),
  controllerWrapper(marksController.getAllMarksByStudentId),
);

/**
 * @swagger
 * tags:
 *   name: Marks
 *   description: The marks managing API
 * /marks/get-all-by-course/{id}:
 *   get:
 *     summary: Get all marks
 *     tags: [Marks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Course id
 *     responses:
 *       200:
 *         description: The list of marks by course id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetMarkByCourseId'
 *       404:
 *         description: Course not found
 *       500:
 *         description: Some server error
 */
router.get(
  '/get-all-by-course/:id',
  validator.params(idParamSchema),
  controllerWrapper(marksController.getAllMarksByCourseId),
);

/**
 * @swagger
 * tags:
 *   name: Marks
 *   description: The marks managing API
 * /marks:
 *   post:
 *     summary: Create mark
 *     tags: [Marks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateMark'
 *     responses:
 *       201:
 *         description: Was created a mark
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetMark'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Some server error
 */
router.post(
  '/',
  validator.body(markCreateSchema),
  controllerWrapper(marksController.createMark),
);

export default router;
