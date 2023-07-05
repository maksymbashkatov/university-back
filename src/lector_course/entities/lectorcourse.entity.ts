import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';
import { Lector } from '../../lectors/entities/lector.entity';
import { Course } from '../../courses/entities/course.entity';

@Entity({ name: 'lector_course' })
export class LectorCourse extends CoreEntity {
  @ManyToOne(() => Lector, (lector) => lector.lectorsCourses)
  @JoinColumn({ name: 'lector_id' })
  lector: Lector;

  @ManyToOne(() => Course, (course) => course.lectorsCourses)
  @JoinColumn({ name: 'course_id' })
  course: Course;
}
