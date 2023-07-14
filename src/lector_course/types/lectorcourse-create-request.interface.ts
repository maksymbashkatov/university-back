import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface ILectorCourseCreateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: { lectorId: number; courseId: number };
}
