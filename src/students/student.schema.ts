import Joi from 'joi';
import { IStudent } from './types/student.interface';

export const studentCreateSchema = Joi.object<Omit<IStudent, 'id'>>({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  email: Joi.string().required(),
  age: Joi.number().required(),
  imagePath: Joi.string().optional(),
  groupId: Joi.string().optional(),
});

export const studentUpdateSchema = Joi.object<Partial<IStudent>>({
  name: Joi.string().optional(),
  surname: Joi.string().optional(),
  email: Joi.string().optional(),
  age: Joi.number().optional(),
  imagePath: Joi.string().optional(),
  groupId: Joi.string().optional(),
});

export const studentGroupUpdateSchema = Joi.object<Partial<IStudent>>({
  groupId: Joi.string().required(),
});
