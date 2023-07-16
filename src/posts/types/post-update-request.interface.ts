import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IPost } from './post.interface';

export interface IPostUpdateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Partial<IPost>;
}
