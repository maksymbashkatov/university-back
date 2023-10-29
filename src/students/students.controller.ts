import { Request, Response } from 'express';
import * as studentsService from './students.service';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import { ValidatedRequest } from 'express-joi-validation';
import { IStudentUpdateRequest } from './types/student-update-request.interface';
import { IStudentCreateRequest } from './types/student-create-request.interface';
import { IStudentGroupUpdateRequest } from './types/student-group-update-request.interface';

export const getAllStudents = async (request: Request, response: Response) => {
  const students = await studentsService.getAllStudents(
    String(request.query.name),
  );
  response.json({ result: students });
};

export const getStudentById = async (request: Request, response: Response) => {
  const student = await studentsService.getStudentById(
    Number(request.params.id),
  );
  response.json(student);
};

export const createStudent = async (
  request: ValidatedRequest<IStudentCreateRequest>,
  response: Response,
) => {
  const student = await studentsService.createStudent(request.body);
  response.status(HttpStatuses.CREATED).json(student);
};

export const updateStudentById = async (
  request: ValidatedRequest<IStudentUpdateRequest>,
  response: Response,
) => {
  await studentsService.updateStudentById(
    Number(request.params.id),
    request.body,
  );
  response.status(HttpStatuses.NO_CONTENT).json();
};

export const addStudentToGroup = async (
  request: ValidatedRequest<IStudentGroupUpdateRequest>,
  response: Response,
) => {
  await studentsService.addStudentToGroup(
    Number(request.params.id),
    request.body,
  );

  response.status(HttpStatuses.NO_CONTENT).json();
};

export const deleteStudentById = async (
  request: Request,
  response: Response,
) => {
  await studentsService.deleteStudentById(Number(request.params.id));
  response.status(HttpStatuses.NO_CONTENT).json();
};
