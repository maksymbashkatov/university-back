import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { ILector } from './lector.interface';

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateLector:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
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
 *         name: DinVin3
 *         email: divi3@gmail.com
 *         password: pass3
 */
export interface ILectorCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<ILector, 'id'>;
}
