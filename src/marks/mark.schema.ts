import Joi from 'joi';

export const markCreateSchema = Joi.object<{
  courseId: number;
  studentId: number;
  lectorId: number;
  mark: string;
}>({
  courseId: Joi.number().required(),
  studentId: Joi.number().required(),
  lectorId: Joi.number().required(),
  mark: Joi.string().required(),
});
