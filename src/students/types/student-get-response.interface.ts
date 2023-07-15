import { IStudent } from './student.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     GetStudent:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *         - name
 *         - surname
 *         - email
 *         - age
 *         - imagePath
 *         - groupName
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the student
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the student was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the student was updated
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
 *         groupName:
 *           type:
 *             - string
 *             - 'null'
 *           nullable: true
 *           description: The name of student group
 *       example:
 *         id: 1
 *         createdAt: 2023-07-05T14:11:55.143Z
 *         updatedAt: 2023-07-05T14:11:55.143Z
 *         name: Maksym
 *         surname: Abramovich
 *         email: maab@gmail.com
 *         age: 21
 *         imagePath: imagePath1
 *         groupName: Group1
 */
export interface IStudentGetResponse extends IStudent {
  cteatedAt: Date;
  updatedAt: Date;
  groupName: string;
}
