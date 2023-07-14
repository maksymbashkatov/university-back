import Joi from 'joi';
import { ICourse } from './types/course.interface';

export const courseCreateSchema = Joi.object<Omit<ICourse, 'id'>>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  hours: Joi.number().required(),
});
