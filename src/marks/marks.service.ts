import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import { AppDataSource } from '../configs/database/data-source';
import { Mark } from './entities/mark.entity';
import { IMark } from './types/mark.interface';
import { Course } from '../courses/entities/course.entity';
import { Student } from '../students/entities/student.entity';
import { Lector } from '../lectors/entities/lector.entity';
import { IMarkGetResponse } from './types/mark-get-response.interface';

const marksRepository = AppDataSource.getRepository(Mark);
const courseRepository = AppDataSource.getRepository(Course);
const studentsRepository = AppDataSource.getRepository(Student);
const lectorsRepository = AppDataSource.getRepository(Lector);

export const getAllMarksByStudentId = async (id: number): Promise<IMark[]> => {
  const student = await studentsRepository.findOneBy({ id: id });

  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  const marks = await marksRepository
    .createQueryBuilder('m')
    .select(['m.id as id, c.name as "courseName", m.mark as mark'])
    .leftJoin('m.student', 's')
    .leftJoin('m.course', 'c')
    .where('s.id = :id', { id })
    .getRawMany();

  return marks;
};

export const getAllMarksByCourseId = async (id: number): Promise<IMark[]> => {
  const course = await courseRepository.findOneBy({ id: id });

  if (!course) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Course not found');
  }

  const marks = await marksRepository
    .createQueryBuilder('m')
    .select([
      'm.id as id, c.name as "courseName", l.name as "lectorName", s.name as "studentName", m.mark as mark',
    ])
    .leftJoin('m.course', 'c')
    .leftJoin('m.lector', 'l')
    .leftJoin('m.student', 's')
    .where('c.id = :id', { id })
    .getRawMany();

  return marks;
};

export const createMark = async (
  courseId: number,
  studentId: number,
  lectorId: number,
  markValue: string,
): Promise<IMarkGetResponse> => {
  const course = await courseRepository.findOneBy({ id: courseId });
  if (!course) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Course not found');
  }

  const student = await studentsRepository.findOneBy({ id: studentId });
  if (!student) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Student not found');
  }

  const lector = await lectorsRepository.findOneBy({ id: lectorId });
  if (!lector) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Lector not found');
  }

  const mark = new Mark();
  mark.course = course;
  mark.student = student;
  mark.lector = lector;
  mark.mark = markValue;

  return marksRepository.save(mark);
};
