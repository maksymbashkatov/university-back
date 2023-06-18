import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IGroup } from './group.interface';

export interface IGroupUpdateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Partial<IGroup>;
}
