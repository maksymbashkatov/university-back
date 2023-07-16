import { Router } from 'express';
import controllerWrapper from '../application/utilities/controller-wrapper';
import * as coursesController from './courses.controller';
import validator from '../application/middlewares/validation.middleware';
import { courseCreateSchema } from './course.schema';
import { idParamSchema } from '../application/schemas/id-param.schema';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: The courses managing API
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: The list of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetCourse'
 *       500:
 *         description: Some server error
 */
router.get('/', controllerWrapper(coursesController.getAllCourses));

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: The courses managing API
 * /courses/get-all-by-lector/{id}:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Course id
 *     responses:
 *       200:
 *         description: The list of courses by id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetCourse'
 *       404:
 *         description: Course not found
 *       500:
 *         description: Some server error
 */
router.get(
  '/get-all-by-lector/:id',
  validator.params(idParamSchema),
  controllerWrapper(coursesController.getAllCoursesByLectorId),
);

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: The courses managing API
 * /courses:
 *   post:
 *     summary: Create course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCourse'
 *     responses:
 *       201:
 *         description: Was created a course
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetCourse'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Some server error
 */
router.post(
  '/',
  validator.body(courseCreateSchema),
  controllerWrapper(coursesController.createCourse),
);

export default router;
