import { IMark } from './mark.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     GetMark:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *         - mark
 *         - courseId
 *         - studentId
 *         - lectorId
 *         - course
 *         - student
 *         - lector
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the mark
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the mark was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the mark was updated
 *         mark:
 *           type: string
 *           description: The mark
 *         courseId:
 *           type: number
 *           description: The id of the course
 *         studentId:
 *           type: number
 *           description: The id of the student
 *         lectorId:
 *           type: number
 *           description: The id of the lector
 *         course:
 *           type: object
 *           description: The course object
 *         student:
 *           type: object
 *           description: The student object
 *         lector:
 *           type: object
 *           description: The lector object
 *       example:
 *         id: 1
 *         createdAt: 2023-07-05T14:11:37.920Z
 *         updatedAt: 2023-07-05T14:11:37.920Z
 *         mark: A
 *         courseId: 1
 *         studentId: 1
 *         lectorId: 1
 *         course: {}
 *         student: {}
 *         lector: {}
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GetMarkByCourseId:
 *       type: object
 *       required:
 *         - id
 *         - mark
 *         - courseName
 *         - studentName
 *         - lectorName
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the mark
 *         mark:
 *           type: string
 *           description: The mark
 *         courseName:
 *           type: string
 *           description: The name of the course
 *         studentName:
 *           type: string
 *           description: The name of the student
 *         lectorName:
 *           type: string
 *           description: The name of the lector
 *       example:
 *         id: 1
 *         mark: A
 *         courseName: Course
 *         studentName: DinVin
 *         lectorName: Bobi
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GetMarkByStudentId:
 *       type: object
 *       required:
 *         - id
 *         - mark
 *         - courseName
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the mark
 *         mark:
 *           type: string
 *           description: The mark
 *         courseName:
 *           type: string
 *           description: The name of the course
 *       example:
 *         id: 1
 *         mark: A
 *         courseName: Course1
 */
export interface IMarkGetResponse extends IMark {
  courseId: number;
  studentId: number;
  lectorId: number;
}
