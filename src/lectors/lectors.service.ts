import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import { AppDataSource } from '../configs/database/data-source';
import { Course } from '../courses/entities/course.entity';
import { ICourse } from '../courses/types/course.interface';
import { LectorCourse } from '../lector_course/entities/lectorcourse.entity';
import { ILectorCourse } from '../lector_course/types/lectorcourse.interface';
import { Lector } from './entities/lector.entity';
import { ILector } from './types/lector.interface';

const lectorsRepository = AppDataSource.getRepository(Lector);
const coursesRepository = AppDataSource.getRepository(Course);
const lectorCourseRepository = AppDataSource.getRepository(LectorCourse);

export const getAllLectors = async (): Promise<ILector[]> => {
  const lectors = await lectorsRepository.find();
  return lectors;
};

export const getLectorById = async (
  id: number,
): Promise<ILector & { courses: ICourse[] }> => {
  const lector = await lectorsRepository.findOneBy({ id: id });

  if (!lector) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Lector not found');
  }

  const courses = await coursesRepository
    .createQueryBuilder('c')
    .select([
      'c.id as id',
      'c.createdAt as createdAt',
      'c.updatedAt as updatedAt',
      'c.name as name',
      'c.description as description',
      'c.hours as hours',
    ])
    .leftJoin('c.lectorsCourses', 'lc')
    .where('lc.lector.id = :id', { id })
    .getRawMany();

  return { ...lector, courses };
};

export const createLector = async (
  createLectorSchema: Omit<ILector, 'id'>,
): Promise<ILector> => {
  return lectorsRepository.save(createLectorSchema);
};

export const addLectorToCourse = async (
  lectorId: number,
  courseId: number,
): Promise<ILectorCourse> => {
  const lector = await lectorsRepository.findOneBy({ id: lectorId });
  const course = await coursesRepository.findOneBy({ id: courseId });
  const lectorCourse = new LectorCourse();

  if (!lector) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Lector not found');
  }
  lectorCourse.lector = lector;

  if (!course) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Course not found');
  }
  lectorCourse.course = course;

  return lectorCourseRepository.save(lectorCourse);
};
