import Joi from 'joi';
import { IStudent } from './types/student.interface';

export const studentCreateSchema = Joi.object<
  Omit<IStudent, 'id'> & { groupId: number }
>({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  age: Joi.number().required(),
  imagePath: Joi.string().required(),
  groupId: Joi.number().optional(),
});

export const studentUpdateSchema = Joi.object<Partial<IStudent>>({
  name: Joi.string().optional(),
  surname: Joi.string().optional(),
  email: Joi.string().optional(),
  age: Joi.number().optional(),
  imagePath: Joi.string().optional(),
});

export const addStudentToGroupSchema = Joi.object<{ groupId: number }>({
  groupId: Joi.number().required(),
});
