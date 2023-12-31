import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { ICourse } from './course.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateCourse:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - hours
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the course
 *         description:
 *           type: string
 *           description: The description of the course
 *         hours:
 *           type:
 *             - number
 *             - 'null'
 *           nullable: true
 *           description: The hours of the course
 *       example:
 *         name: Course1
 *         description: description1
 *         hours: 12
 */
export interface ICourseCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<ICourse, 'id'>;
}
