import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IGroup } from './group.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateGroup:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the group
 *       example:
 *         name: Group3
 */
export interface IGroupCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<IGroup, 'id'>;
}
