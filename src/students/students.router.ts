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

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The students managing API
 * /students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Student name
 *     responses:
 *       200:
 *         description: The list of students.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GetStudent'
 *       500:
 *         description: Some server error
 */
router.get('/', controllerWrapper(studentsController.getAllStudents));

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The students managing API
 * /students/{id}:
 *   get:
 *     summary: Get student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Student id
 *     responses:
 *       200:
 *         description: The list of students.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetStudent'
 *       404:
 *         description: Student not found
 *       500:
 *         description: Some server error
 */
router.get(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(studentsController.getStudentById),
);

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The students managing API
 * /students:
 *   post:
 *     summary: Create student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateStudent'
 *     responses:
 *       201:
 *         description: Was created a student
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GetStudent'
 *       400:
 *         description: Validation error
 *       500:
 *         description: Some server error
 */
router.post(
  '/',
  validator.body(studentCreateSchema),
  controllerWrapper(studentsController.createStudent),
);

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The students managing API
 * /students/{id}:
 *   patch:
 *     summary: Update student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Student id
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateStudent'
 *     responses:
 *       204:
 *         description: No content
 *       400:
 *         description: Validation error
 *       404:
 *         description: Student not found
 *       500:
 *         description: Some server error
 */
router.patch(
  '/:id',
  validator.params(idParamSchema),
  validator.body(studentUpdateSchema),
  controllerWrapper(studentsController.updateStudentById),
);

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The students managing API
 * /students/{id}:
 *   delete:
 *     summary: Delete student
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Student id
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Student not found
 *       500:
 *         description: Some server error
 */
router.delete(
  '/:id',
  validator.params(idParamSchema),
  controllerWrapper(studentsController.deleteStudentById),
);

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The students managing API
 * /students/{id}/add-to-group:
 *   patch:
 *     summary: Add student to group
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: Student id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StudentGroupUpdate'
 *     responses:
 *       204:
 *         description: No content
 *       400:
 *         description: Validation error
 *       404:
 *         description: Student not found
 *       500:
 *         description: Some server error
 */
router.patch(
  '/:id/add-to-group',
  validator.params(idParamSchema),
  validator.body(addStudentToGroupSchema),
  controllerWrapper(studentsController.addStudentToGroup),
);

export default router;
