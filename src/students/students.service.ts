import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import { IStudent } from './types/student.interface';
import { AppDataSource } from '../configs/database/data-source';
import { Student } from './entities/student.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

const studentsRepository = AppDataSource.getRepository(Student);

export const getAllStudents = async (): Promise<IStudent[]> => {
  return studentsRepository.find({});
};

export const getStudentById = async (id: number): Promise<IStudent> => {
  const student = await studentsRepository.findOne({
    where: {
      id,
    },
  });

  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return student;
};

export const createStudent = async (
  createStudentSchema: Omit<IStudent, 'id'>,
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

export const deleteStudentById = async (id: number): Promise<DeleteResult> => {
  const result = await studentsRepository.delete(id);

  if (!result.affected) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return result;
};
