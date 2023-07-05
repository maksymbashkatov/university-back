import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { ILector } from './lector.interface';

export interface ILectorCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<ILector, 'id'>;
}
