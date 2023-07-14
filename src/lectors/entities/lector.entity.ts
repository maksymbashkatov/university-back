import { Column, Entity, ManyToMany, OneToMany, Unique } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';
import { Course } from '../../courses/entities/course.entity';
import { LectorCourse } from '../../lector_course/entities/lectorcourse.entity';
import { Mark } from '../../marks/entities/mark.entity';

@Entity({ name: 'lectors' })
@Unique(['email'])
export class Lector extends CoreEntity {
  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @ManyToMany(() => Course, (course) => course.lectors)
  courses: Course[];

  @OneToMany(() => LectorCourse, (lectorsCourses) => lectorsCourses.lector)
  lectorsCourses: LectorCourse[];

  @OneToMany(() => Mark, (mark) => mark.course)
  marks: Mark[];
}
