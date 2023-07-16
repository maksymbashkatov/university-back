import { ICourse } from './course.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     GetCourse:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *         - name
 *         - description
 *         - hours
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the course
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the course was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the course was updated
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
 *         id: 1
 *         createdAt: 2023-07-05T14:11:55.143Z
 *         updatedAt: 2023-07-05T14:11:55.143Z
 *         name: Course1
 *         description: description1
 *         hours: 12
 */
export interface ICourseGetResponse extends ICourse {
  cteatedAt: Date;
  updatedAt: Date;
}
