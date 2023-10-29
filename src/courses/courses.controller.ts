import { Request, Response } from 'express';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import { ValidatedRequest } from 'express-joi-validation';
import * as coursesService from './courses.service';
import { ICourseCreateRequest } from './types/course-create-request.interface';

export const getAllCourses = async (request: Request, response: Response) => {
  const courses = await coursesService.getAllCourses();
  response.json({ result: courses });
};

export const getAllCoursesByLectorId = async (
  request: Request,
  response: Response,
) => {
  const courses = await coursesService.getAllCoursesByLectorId(
    Number(request.params.id),
  );
  response.json(courses);
};

export const createCourse = async (
  request: ValidatedRequest<ICourseCreateRequest>,
  response: Response,
) => {
  const lector = await coursesService.createCourse(request.body);
  response.status(HttpStatuses.CREATED).json(lector);
};
