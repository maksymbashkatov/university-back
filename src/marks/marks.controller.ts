import { Request, Response } from 'express';
import * as marksService from './marks.service';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import { ValidatedRequest } from 'express-joi-validation';
import { IMarkCreateRequest } from './types/mark-create-request.interface';

export const getAllMarksByStudentId = async (
  request: Request,
  response: Response,
) => {
  response.json(
    await marksService.getAllMarksByStudentId(Number(request.params.id)),
  );
};

export const getAllMarksByCourseId = async (
  request: Request,
  response: Response,
) => {
  response.json(
    await marksService.getAllMarksByCourseId(Number(request.params.id)),
  );
};

export const createMark = async (
  request: ValidatedRequest<IMarkCreateRequest>,
  response: Response,
) => {
  const mark = await marksService.createMark(
    request.body.courseId,
    request.body.studentId,
    request.body.lectorId,
    request.body.mark,
  );
  response.status(HttpStatuses.CREATED).json(mark);
};
