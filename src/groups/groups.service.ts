import { DeleteResult, UpdateResult } from 'typeorm';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import { AppDataSource } from '../configs/database/data-source';
import { IStudent } from '../students/types/student.interface';
import { Group } from './entities/group.entity';
import { IGroup } from './types/group.interface';

const groupsRepository = AppDataSource.getRepository(Group);

export const getAllGroups = async (): Promise<IGroup[]> => {
  const group = await groupsRepository
    .createQueryBuilder('g')
    .leftJoinAndSelect('g.students', 's')
    .getMany();

  return group;
};

export const getGroupById = async (id: number): Promise<IGroup> => {
  const group = await groupsRepository
    .createQueryBuilder('g')
    .leftJoinAndSelect('g.students', 's')
    .where('g.id = :id', { id })
    .getOne();

  if (!group) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return group;
};

export const createGroup = async (
  createGroupSchema: Omit<IGroup, 'id'>,
): Promise<IGroup> => {
  return groupsRepository.save(createGroupSchema);
};

export const updateGroupById = async (
  id: number,
  updateGroupSchema: Partial<IGroup>,
): Promise<UpdateResult> => {
  const result = await groupsRepository.update(id, updateGroupSchema);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }

  return result;
};

export const deleteGroupById = async (id: number): Promise<DeleteResult> => {
  const result = await groupsRepository.delete(id);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Group not found');
  }

  return result;
};
