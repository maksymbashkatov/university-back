import { Request, Response } from 'express';
import * as lectorsService from './lectors.service';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import { ValidatedRequest } from 'express-joi-validation';
import { ILectorCreateRequest } from './types/lector-create-request.interface';
import { ILectorCourseCreateRequest } from '../lector_course/types/lectorcourse-create-request.interface';

export const getAllLectors = async (request: Request, response: Response) => {
  response.json(await lectorsService.getAllLectors());
};

export const getLectorById = async (request: Request, response: Response) => {
  const lector = await lectorsService.getLectorById(Number(request.params.id));
  response.json(lector);
};

export const createLector = async (
  request: ValidatedRequest<ILectorCreateRequest>,
  response: Response,
) => {
  const lector = await lectorsService.createLector(request.body);
  response.status(HttpStatuses.CREATED).json(lector);
};

export const addLectorToCourse = async (
  request: ValidatedRequest<ILectorCourseCreateRequest>,
  response: Response,
) => {
  const lectorCourse = await lectorsService.addLectorToCourse(
    request.body.lectorId,
    request.body.courseId,
  );
  response.status(HttpStatuses.CREATED).json(lectorCourse);
};
