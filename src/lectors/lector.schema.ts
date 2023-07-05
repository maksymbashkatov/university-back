import Joi from 'joi';
import { ILector } from './types/lector.interface';

export const lectorCreateSchema = Joi.object<Omit<ILector, 'id'>>({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const addLectorToCourseCreateSchema = Joi.object<{
  lectorId: number;
  courseId: number;
}>({
  lectorId: Joi.number().required(),
  courseId: Joi.number().required(),
});
