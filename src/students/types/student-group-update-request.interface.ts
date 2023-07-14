import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';

export interface IStudentGroupUpdateRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: { groupId: number };
}
