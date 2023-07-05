import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  Unique,
} from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';
import { Lector } from '../../lectors/entities/lector.entity';
import { LectorCourse } from '../../lector_course/entities/lectorcourse.entity';

@Entity({ name: 'courses' })
@Unique(['name'])
export class Course extends CoreEntity {
  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  description: string;

  @Column({
    type: 'numeric',
    nullable: true,
  })
  hours: number;

  @ManyToMany(() => Lector, (lector) => lector.courses)
  lectors: Lector[];

  @OneToMany(() => LectorCourse, (lectorsCourses) => lectorsCourses.course)
  lectorsCourses: LectorCourse[];
}
