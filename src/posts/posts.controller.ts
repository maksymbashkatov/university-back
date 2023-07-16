import { Request, Response } from 'express';
import * as postsService from './posts.service';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import { ValidatedRequest } from 'express-joi-validation';
import { IPostCreateRequest } from './types/post-create-request.interface';
import { IPostUpdateRequest } from './types/post-update-request.interface';

export const getAllPosts = async (request: Request, response: Response) => {
  response.json(await postsService.getAllPosts());
};

export const getPostById = async (request: Request, response: Response) => {
  response.json(await postsService.getPostById(Number(request.params.id)));
};

export const createPost = async (
  request: ValidatedRequest<IPostCreateRequest>,
  response: Response,
) => {
  const post = await postsService.createPost(request.body);
  response.status(HttpStatuses.CREATED).json(post);
};

export const updatePostById = async (
  request: ValidatedRequest<IPostUpdateRequest>,
  response: Response,
) => {
  await postsService.updatePostById(Number(request.params.id), request.body);
  response.status(HttpStatuses.NO_CONTENT).json();
};

export const deletePostById = async (request: Request, response: Response) => {
  await postsService.deletePostById(Number(request.params.id));
  response.status(HttpStatuses.NO_CONTENT).json();
};
