import { Course } from '../../courses/entities/course.entity';
import { Lector } from '../../lectors/entities/lector.entity';

export interface ILectorCourse {
  id: number;
  // lectorId: number;
  // courseId: number;
  lector: Lector;
  course: Course;
}
