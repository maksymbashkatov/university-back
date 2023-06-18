import { IStudent } from './types/student.interface';
import ObjectID from 'bson-objectid';

const students: IStudent[] = [
  {
    id: ObjectID().toHexString(),
    name: 'Bill',
    surname: 'Gates',
    email: 'billgates@email.com',
    age: 67,
    imagePath: null,
    groupId: null,
  },
  {
    id: ObjectID().toHexString(),
    name: 'Steve',
    surname: 'Jobs',
    email: 'stevejobs@email.com',
    age: 56,
    imagePath: null,
    groupId: null,
  },
];

export const getAllStudents = (): IStudent[] => {
  return students;
};

export const getStudentById = (studentId: string): IStudent | undefined => {
  return students.find(({ id }) => id === studentId);
};

export const createStudent = (
  createStudentSchema: Omit<IStudent, 'id'>,
): IStudent => {
  const newStudent = {
    ...createStudentSchema,
    id: ObjectID().toHexString(),
  };

  students.push(newStudent);

  return newStudent;
};

export const updateStudentById = (
  studentId: string,
  updateStudentSchema: Partial<IStudent>,
): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];

  if (!student) {
    return;
  }

  const updatedStudent = {
    ...student,
    ...updateStudentSchema,
  };

  students.splice(studentIndex, 1, updatedStudent);

  return updatedStudent;
};

export const deleteStudentById = (studentId: string): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];

  if (!student) {
    return;
  }

  students.splice(studentIndex, 1);

  return student;
};

export const updateStudentGroup = (
  studentId: string,
  updateStudentGroupSchema: Partial<IStudent>,
): IStudent | undefined => {
  const studentIndex = students.findIndex(({ id }) => id === studentId);
  const student = students[studentIndex];

  if (!student) {
    return;
  }

  const updatedStudent = {
    ...student,
    ...updateStudentGroupSchema,
  };

  students.splice(studentIndex, 1, updatedStudent);

  return updatedStudent;
};
