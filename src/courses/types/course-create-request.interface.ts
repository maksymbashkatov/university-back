import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { ICourse } from './course.interface';

export interface ICourseCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<ICourse, 'id'>;
}
