import ObjectID from 'bson-objectid';
import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import * as studentsModel from './students.model';
import { IStudent } from './types/student.interface';
import path from 'path';
import fs from 'fs/promises';
import { getAllGroups } from '../application/groups/groups.model';

export const getAllStudents = () => {
  const students = studentsModel.getAllStudents().map((student) => {
    const groupName =
      getAllGroups().find((group) => group.id === student.groupId)?.name ??
      null;
    return { ...student, groupName };
  });
  return students;
};

export const getStudentById = (id: string) => {
  const student = studentsModel.getStudentById(id);

  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  const groupName =
    getAllGroups().find((group) => group.id === student.groupId)?.name ?? null;

  return { ...student, groupName };
};

export const createStudent = (createStudentSchema: Omit<IStudent, 'id'>) => {
  return studentsModel.createStudent(createStudentSchema);
};

export const updateStudentById = (
  id: string,
  updateStudentSchema: Partial<IStudent>,
) => {
  const student = studentsModel.getStudentById(id);

  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  return studentsModel.updateStudentById(id, updateStudentSchema);
};

export const addImage = async (id: string, filePath?: string) => {
  if (!filePath) {
    throw new HttpException(HttpStatuses.BAD_REQUEST, 'File is not provided');
  }

  try {
    const imageId = ObjectID().toHexString();
    const imageExtension = path.extname(filePath);
    const imageName = imageId + imageExtension;

    const studentsDirectoryName = 'students';
    const studentsDirectoryPath = path.join(
      __dirname,
      '../',
      'public',
      studentsDirectoryName,
    );
    const newImagePath = path.join(studentsDirectoryPath, imageName);
    const imagePath = `${studentsDirectoryName}/${imageName}`;

    await fs.rename(filePath, newImagePath);

    const updatedStudent = updateStudentById(id, { imagePath });

    return updatedStudent;
  } catch (error) {
    await fs.unlink(filePath);
    throw error;
  }
};

export const deleteStudentById = (id: string) => {
  return studentsModel.deleteStudentById(id);
};

export const updateStudentGroup = (
  id: string,
  updateStudentSchema: Partial<IStudent>,
) => {
  return studentsModel.updateStudentGroup(id, updateStudentSchema);
};
