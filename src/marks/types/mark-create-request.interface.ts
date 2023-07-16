import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IMark } from './mark.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateMark:
 *       type: object
 *       required:
 *         - mark
 *         - courseId
 *         - studentId
 *         - lectorId
 *       properties:
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
 *       example:
 *         mark: A
 *         courseId: 1
 *         studentId: 1
 *         lectorId: 1
 */
export interface IMarkCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<IMark, 'id'> & {
    courseId: number;
    studentId: number;
    lectorId: number;
  };
}
