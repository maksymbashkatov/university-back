import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import { IStudent } from './types/student.interface';
import { AppDataSource } from '../configs/database/data-source';
import { Student } from './entities/student.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

const studentsRepository = AppDataSource.getRepository(Student);

export const getAllStudents = async (name: string): Promise<IStudent[]> => {
  const students = await studentsRepository
    .createQueryBuilder('s')
    .select([
      's.id as id',
      's.createdAt as "createdAt"',
      's.updatedAt as "updatedAt"',
      's.name as name',
      's.surname as surname',
      's.email as email',
      's.age as age',
      's.imagePath as "imagePath"',
    ])
    .leftJoin('s.group', 'group')
    .addSelect('group.name as "groupName"')
    .useIndex('student_name-idx');
  if (name && name !== 'undefined') {
    students.where('s.name = :name', { name });
  }
  const studentsByName = await students.getRawMany();
  return studentsByName;
};

export const getStudentById = async (
  id: number,
): Promise<Omit<IStudent, 'groupId'>> => {
  const student = await studentsRepository
    .createQueryBuilder('s')
    .select([
      's.id as id',
      's.createdAt as "createdAt"',
      's.updatedAt as "updatedAt"',
      's.name as name',
      's.surname as surname',
      's.email as email',
      's.age as age',
      's.imagePath as "imagePath"',
    ])
    .leftJoin('s.group', 'group')
    .addSelect('group.name as "groupName"')
    .where('s.id = :id', { id })
    .getRawOne();

  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return student;
};

export const createStudent = async (
  createStudentSchema: Omit<IStudent, 'id'> & { groupId: number },
): Promise<IStudent> => {
  return studentsRepository.save(createStudentSchema);
};

export const updateStudentById = async (
  id: number,
  updateStudentSchema: Partial<IStudent>,
): Promise<UpdateResult> => {
  const result = await studentsRepository.update(id, updateStudentSchema);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return result;
};

export const addStudentToGroup = async (
  id: number,
  addStudentToGroupSchema: { groupId: number },
): Promise<UpdateResult> => {
  const result = await studentsRepository.update(id, addStudentToGroupSchema);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return result;
};

export const deleteStudentById = async (id: number): Promise<DeleteResult> => {
  const result = await studentsRepository.delete(id);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return result;
};
