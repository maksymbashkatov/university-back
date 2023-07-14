import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';
import { Course } from '../../courses/entities/course.entity';
import { Student } from '../../students/entities/student.entity';
import { Lector } from '../../lectors/entities/lector.entity';

@Entity({ name: 'marks' })
export class Mark extends CoreEntity {
  @Column({
    type: 'varchar',
    nullable: false,
  })
  mark: string;

  @ManyToOne(() => Course, (course) => course.marks, {
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @Column({
    name: 'course_id',
  })
  courseId: number;

  @ManyToOne(() => Student, (student) => student.marks, {
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'student_id' })
  student: Student;

  @Column({
    name: 'student_id',
  })
  studentId: number;

  @ManyToOne(() => Lector, (lector) => lector.marks, {
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'lector_id' })
  lector: Lector;

  @Column({
    name: 'lector_id',
  })
  lectorId: number;
}
