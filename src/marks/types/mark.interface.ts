import { Course } from '../../courses/entities/course.entity';
import { Lector } from '../../lectors/entities/lector.entity';
import { Student } from '../../students/entities/student.entity';

export interface IMark {
  id: number;
  mark: string;
  course: Course;
  student: Student;
  lector: Lector;
}
