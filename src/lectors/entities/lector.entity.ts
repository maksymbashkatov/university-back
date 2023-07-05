import { Column, Entity, ManyToMany, Unique } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';
import { Course } from '../../courses/entities/course.entity';

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
}
