import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import { AppDataSource } from '../configs/database/data-source';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Post } from './entities/post.entity';
import { IPost } from './types/post.interface';

const postsRepository = AppDataSource.getRepository(Post);

export const getAllPosts = async (): Promise<IPost[]> => {
  const posts = await postsRepository
    .createQueryBuilder('p')
    .orderBy('p.createdAt')
    .getMany();
  return posts;
};

export const getPostById = async (id: number): Promise<IPost> => {
  const post = await postsRepository
    .createQueryBuilder('p')
    .where('p.id = :id', { id })
    .getOne();

  if (!post) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Post not found');
  }

  return post;
};

export const createPost = async (
  createPostSchema: Omit<IPost, 'id'>,
): Promise<IPost> => {
  return postsRepository.save(createPostSchema);
};

export const updatePostById = async (
  id: number,
  updatePostSchema: Partial<IPost>,
): Promise<UpdateResult> => {
  const result = await postsRepository.update(id, updatePostSchema);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Post not found');
  }

  return result;
};

export const deletePostById = async (id: number): Promise<DeleteResult> => {
  const result = await postsRepository.delete(id);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Post not found');
  }

  return result;
};

export const deletePostByIdForUnitTest = async (
  id: number,
): Promise<DeleteResult> => {
  const result = await postsRepository.delete(id);

  return result;
};
