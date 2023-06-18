import Joi from 'joi';
import { IGroup } from './types/group.interface';

export const groupCreateSchema = Joi.object<Omit<IGroup, 'id'>>({
  name: Joi.string().required(),
});

export const groupUpdateSchema = Joi.object<Partial<IGroup>>({
  name: Joi.string().optional(),
});
