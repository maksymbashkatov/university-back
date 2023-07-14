import { AppDataSource } from '../configs/database/data-source';
import { Course } from './entities/course.entity';
import { ICourse } from './types/course.interface';

const coursesRepository = AppDataSource.getRepository(Course);

export const getAllCourses = async (): Promise<ICourse[]> => {
  const courses = await coursesRepository.find();
  return courses;
};

export const getAllCoursesByLectorId = async (
  id: number,
): Promise<ICourse[]> => {
  const courses = await coursesRepository
    .createQueryBuilder('c')
    .select([
      'c.id as id',
      'c.createdAt as "createdAt"',
      'c.updatedAt as "updatedAt"',
      'c.name as name',
      'c.description as description',
      'c.hours as hours',
    ])
    .leftJoin('c.lectorsCourses', 'lc')
    .where('lc.lectorId = :id', { id })
    .getRawMany();

  return courses;
};

export const createCourse = async (
  createCourseSchema: Omit<ICourse, 'id'>,
): Promise<ICourse> => {
  return coursesRepository.save(createCourseSchema);
};
