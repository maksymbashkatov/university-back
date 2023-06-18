import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IStudent } from './student.interface';

export interface IStudentCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: Omit<IStudent, 'id'>;
}
