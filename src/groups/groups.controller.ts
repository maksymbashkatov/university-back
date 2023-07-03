import { Request, Response } from 'express';
import * as groupsService from './groups.service';
import { ValidatedRequest } from 'express-joi-validation';
import { IGroupCreateRequest } from './types/group-create-request.interface';
import { IGroupUpdateRequest } from './types/group-update-request.interface';
import { HttpStatuses } from '../application/enums/http-statuses.enum';

// export const getAllGroups = (request: Request, response: Response) => {
//   response.json(groupsService.getAllGroups());
// };

// export const getGroupById = (request: Request, response: Response) => {
//   response.json(groupsService.getGroupById(request.params.id));
// };

export const createGroup = (
  request: ValidatedRequest<IGroupCreateRequest>,
  response: Response,
) => {
  const student = groupsService.createGroup(request.body);
  response.status(HttpStatuses.CREATED).json(student);
};

export const updateGroupById = (
  request: ValidatedRequest<IGroupUpdateRequest>,
  response: Response,
) => {
  const group = groupsService.updateGroupById(request.params.id, request.body);
  response.json(group);
};

export const deleteGroupById = (request: Request, response: Response) => {
  response.json(groupsService.deleteGroupById(request.params.id));
};
