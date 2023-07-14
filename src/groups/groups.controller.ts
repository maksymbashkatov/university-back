import { Request, Response } from 'express';
import * as groupsService from './groups.service';
import { ValidatedRequest } from 'express-joi-validation';
import { IGroupCreateRequest } from './types/group-create-request.interface';
import { IGroupUpdateRequest } from './types/group-update-request.interface';
import { HttpStatuses } from '../application/enums/http-statuses.enum';

export const getAllGroups = async (request: Request, response: Response) => {
  response.json(await groupsService.getAllGroups());
};

export const getGroupById = async (request: Request, response: Response) => {
  response.json(await groupsService.getGroupById(Number(request.params.id)));
};

export const createGroup = async (
  request: ValidatedRequest<IGroupCreateRequest>,
  response: Response,
) => {
  const group = await groupsService.createGroup(request.body);

  response.status(HttpStatuses.CREATED).json(group);
};

export const updateGroupById = async (
  request: ValidatedRequest<IGroupUpdateRequest>,
  response: Response,
) => {
  await groupsService.updateGroupById(request.params.id, request.body);

  response.status(HttpStatuses.NO_CONTENT).json();
};

export const deleteGroupById = async (request: Request, response: Response) => {
  await groupsService.deleteGroupById(Number(request.params.id));

  response.status(HttpStatuses.NO_CONTENT).json();
};
