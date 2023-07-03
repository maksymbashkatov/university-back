import { Column, Entity, Unique } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';

@Entity({ name: 'students' })
@Unique(['email'])
export class Student extends CoreEntity {
  @Column({
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  surname: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    type: 'numeric',
    nullable: true,
  })
  age: number;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'image_path',
  })
  imagePath: string;
}
