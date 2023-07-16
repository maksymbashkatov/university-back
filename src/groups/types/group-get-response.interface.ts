import { IStudent } from '../../students/types/student.interface';
import { IGroup } from './group.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     GetGroup:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the group
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the group was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the group was updated
 *         name:
 *           type: string
 *           description: The name of the group
 *       example:
 *         id: 1
 *         createdAt: 2023-07-05T14:11:37.920Z
 *         updatedAt: 2023-07-05T14:11:37.920Z
 *         name: Group1
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     GetGroupWithStudents:
 *       type: object
 *       required:
 *         - id
 *         - createdAt
 *         - updatedAt
 *         - name
 *       properties:
 *         id:
 *           type: number
 *           description: The auto-generated id of the group
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the group was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the group was updated
 *         name:
 *           type: string
 *           description: The name of the group
 *         students:
 *           type: array
 *           items:
 *             type: object
 *           description: The students of the group
 *       example:
 *         id: 1
 *         createdAt: 2023-07-05T14:11:37.920Z
 *         updatedAt: 2023-07-05T14:11:37.920Z
 *         name: Group1
 *         students: []
 */
export interface IGroupGetResponse extends IGroup {
  cteatedAt: Date;
  updatedAt: Date;
  students: IStudent;
}
