import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IGroup } from './group.interface';

export interface IGroupCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<IGroup, 'id'>;
}
