import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IMark } from './mark.interface';

export interface IMarkCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<IMark, 'id'> & {
    courseId: number;
    studentId: number;
    lectorId: number;
  };
}
