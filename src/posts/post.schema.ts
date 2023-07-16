import Joi from 'joi';
import { IPost } from './types/post.interface';

export const postCreateSchema = Joi.object<Omit<IPost, 'id'>>({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export const postUpdateSchema = Joi.object<Partial<IPost>>({
  title: Joi.string().optional(),
  description: Joi.string().optional(),
});
