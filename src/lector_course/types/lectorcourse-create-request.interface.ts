import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

/**
 * @swagger
 * components:
 *   schemas:
 *     LectorCourse:
 *       type: object
 *       required:
 *         - lector
 *         - course
 *         - lectorId
 *         - courseId
 *         - id
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         lector:
 *           type: object
 *           description: The lector
 *         course:
 *           type: object
 *           description: The course
 *         lectorId:
 *           type: number
 *           description: The id of lector
 *         courseId:
 *           type: number
 *           description: The id of course
 *         id:
 *           type: number
 *           description: The auto-generated id of the LectorCourse
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the LectorCourse was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the LectorCourse was updated
 *       example:
 *         lector: {}
 *         course: {}
 *         lectorId: 1
 *         courseId: 3
 *         id: 6
 *         createdAt: 2023-07-16T12:56:49.823Z
 *         updatedAt: 2023-07-16T12:56:49.823Z
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateLectorCourse:
 *       type: object
 *       required:
 *         - lectorId
 *         - courseId
 *       properties:
 *         lectorId:
 *           type: number
 *           description: The id of lector
 *         courseId:
 *           type: number
 *           description: The id of course
 *       example:
 *         lectorId: 1
 *         courseId: 3
 */
export interface ILectorCourseCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: { lectorId: number; courseId: number };
}
