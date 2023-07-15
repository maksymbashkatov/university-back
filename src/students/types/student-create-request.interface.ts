import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IStudent } from './student.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateStudent:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *         - email
 *         - age
 *         - imagePath
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the student
 *         surname:
 *           type: string
 *           description: The surname of the student
 *         email:
 *           type: string
 *           description: The email of the student
 *         age:
 *           type:
 *             - number
 *             - 'null'
 *           nullable: true
 *           description: The age of the student
 *         imagePath:
 *           type: string
 *           description: The imagePath of the student photo
 *       example:
 *         name: Maksym
 *         surname: Abramovich
 *         email: maab@gmail.com
 *         age: 21
 *         imagePath: imagePath1
 */
export interface IStudentCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<IStudent, 'id'> & { groupId: number };
}
