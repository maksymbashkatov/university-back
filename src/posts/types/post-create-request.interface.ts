import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IPost } from './post.interface';

export interface IPostCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<IPost, 'id'>;
}
