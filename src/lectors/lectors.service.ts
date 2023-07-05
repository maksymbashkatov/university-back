import { HttpStatuses } from '../application/enums/http-statuses.enum';
import HttpException from '../application/exceptions/http-exception';
import { AppDataSource } from '../configs/database/data-source';
import { Course } from '../courses/entities/course.entity';
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

export const getLectorById = async (id: number): Promise<ILector> => {
  const lector = await lectorsRepository
    .createQueryBuilder('l')
    .leftJoinAndSelect('l.lectorsCourses', 'lc')
    .leftJoinAndSelect('lc.course', 'c')
    .where('l.id = :id', { id })
    .getOne();

  if (!lector) {
    throw new HttpException(HttpStatuses.NOT_FOUND, 'Lector not found');
  }

  return lector;
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
