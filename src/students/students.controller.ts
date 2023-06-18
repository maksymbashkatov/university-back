import { NextFunction, Request, Response } from 'express';
import * as studentsService from './students.service';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import { ValidatedRequest } from 'express-joi-validation';
import { IStudentUpdateRequest } from './types/student-update-request.interface';
import { IStudentCreateRequest } from './types/student-create-request.interface';

export const getAllStudents = (request: Request, response: Response) => {
  response.json(studentsService.getAllStudents());
};

export const getStudentById = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const student = studentsService.getStudentById(request.params.id);
  response.json(student);
};

export const createStudent = (
  request: ValidatedRequest<IStudentCreateRequest>,
  response: Response,
) => {
  const student = studentsService.createStudent(request.body);
  student.imagePath = null;
  student.groupId = student.groupId ?? null;
  response.status(HttpStatuses.CREATED).json(student);
};

export const updateStudentById = (
  request: ValidatedRequest<IStudentUpdateRequest>,
  response: Response,
) => {
  const student = studentsService.updateStudentById(
    request.params.id,
    request.body,
  );
  response.json(student);
};

export const addImage = (
  request: Request<{ id: string; file: Express.Multer.File }>,
  response: Response,
) => {
  const { id } = request.params;
  const { path } = request.file ?? {};
  const student = studentsService.addImage(id, path);
  response.json(student);
};

export const deleteStudentById = (request: Request, response: Response) => {
  const student = studentsService.deleteStudentById(request.params.id);
  response.json(student);
};

export const updateStudentGroup = (
  request: ValidatedRequest<IStudentUpdateRequest>,
  response: Response,
) => {
  const student = studentsService.updateStudentGroup(
    request.params.id,
    request.body,
  );
  response.json(student);
};
