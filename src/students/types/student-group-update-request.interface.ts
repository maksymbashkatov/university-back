import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

/**
 * @swagger
 * components:
 *   schemas:
 *     StudentGroupUpdate:
 *       type: object
 *       required:
 *         - groupId
 *       properties:
 *         groupId:
 *           type: number
 *           description: The id of group
 *       example:
 *         groupId: 1
 */
export interface IStudentGroupUpdateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: { groupId: number };
}
