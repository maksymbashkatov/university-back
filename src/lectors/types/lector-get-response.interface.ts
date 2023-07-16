import { ICourse } from '../../courses/types/course.interface';
import { ILector } from './lector.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     GetLector:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the lector
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the lector was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the lector was updated
 *         name:
 *           type: string
 *           description: The name of the lector
 *         email:
 *           type: string
 *           description: The email of the lector
 *         password:
 *           type: string
 *           description: The password of the lector
 *       example:
 *         id: 1
 *         createdAt: 2023-07-05T14:11:37.920Z
 *         updatedAt: 2023-07-05T14:11:37.920Z
 *         name: Course1
 *         description: description1
 *         hours: 14
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GetLectorWithCourses:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the lector
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the lector was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the lector was updated
 *         name:
 *           type: string
 *           description: The name of the lector
 *         email:
 *           type: string
 *           description: The email of the lector
 *         password:
 *           type: string
 *           description: The password of the lector
 *         courses:
 *           type: array
 *           items:
 *             type: object
 *           description: The courses of the lector
 *       example:
 *         id: 1
 *         createdAt: 2023-07-05T14:11:37.920Z
 *         updatedAt: 2023-07-05T14:11:37.920Z
 *         name: Course1
 *         description: description1
 *         hours: []
 */
export interface IGroupGetResponse extends ILector {
  cteatedAt: Date;
  updatedAt: Date;
  courses: ICourse;
}
