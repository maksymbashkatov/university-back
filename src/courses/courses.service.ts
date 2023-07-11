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
    .createQueryBuilder('l')
    .leftJoinAndSelect('l.lectorsCourses', 'lc')
    .leftJoinAndSelect('lc.course', 'c')
    .where('l.id = :id', { id })
    .getMany();

  return courses;
};

export const createCourse = async (
  createCourseSchema: Omit<ICourse, 'id'>,
): Promise<ICourse> => {
  return coursesRepository.save(createCourseSchema);
};
