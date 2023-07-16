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

/**
 * @swagger
 * tags:
 *   name: Lectors
 *   description: The lectors managing API
 * /lectors:
 *   get:
 *     summary: Get all lectors
 *     tags: [Lectors]
 *     responses:
 *       200:
 *         description: The list of lectors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetLectors'
 *       500:
 *         description: Some server error
 */
router.get('/', controllerWrapper(lectorsController.getAllLectors));

/**
 * @swagger
 * tags:
 *   name: Lectors
 *   description: The lectors managing API
 * /lectors/{id}:
 *   get:
 *     summary: Get lector by id
 *     tags: [Lectors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Lector id
 *     responses:
 *       200:
 *         description: The lector was got
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetLectorWithCourses'
 *       404:
 *         description: Lector not found
 *       500:
 *         description: Some server error
 */
router.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(lectorsController.getLectorById),
);

/**
 * @swagger
 * tags:
 *   name: Lectors
 *   description: The lectors managing API
 * /lectors:
 *   post:
 *     summary: Create lector
 *     tags: [Lectors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateLector'
 *     responses:
 *       201:
 *         description: Was created a lector
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetLector'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Some server error
 */
router.post(
  '/',
  validator.body(lectorCreateSchema),
  controllerWrapper(lectorsController.createLector),
);

/**
 * @swagger
 * tags:
 *   name: Lectors
 *   description: The lectors managing API
 * /lectors/add-to-course:
 *   post:
 *     summary: Add lector to course
 *     tags: [Lectors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateLectorCourse'
 *     responses:
 *       201:
 *         description: The lector was added to course
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LectorCourse'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Some server error
 */
router.post(
  '/add-to-course',
  validator.body(addLectorToCourseCreateSchema),
  controllerWrapper(lectorsController.addLectorToCourse),
);

export default router;
