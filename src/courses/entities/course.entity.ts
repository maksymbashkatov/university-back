import { Column, Entity, JoinTable, ManyToMany, Unique } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';
import { Lector } from '../../lectors/entities/lector.entity';

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
  @JoinTable({
    name: 'lector_course',
    joinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'lector_id',
      referencedColumnName: 'id',
    },
  })
  lectors: Lector[];
}
