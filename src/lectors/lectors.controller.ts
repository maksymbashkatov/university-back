import { Request, Response } from 'express';
import * as lectorsService from './lectors.service';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import { ValidatedRequest } from 'express-joi-validation';
import { ILectorCreateRequest } from './types/lector-create-request.interface';

export const getAllLectors = async (request: Request, response: Response) => {
  response.json(await lectorsService.getAllLectors());
};

export const createLector = async (
  request: ValidatedRequest<ILectorCreateRequest>,
  response: Response,
) => {
  const lector = await lectorsService.createLector(request.body);
  response.status(HttpStatuses.CREATED).json(lector);
};
