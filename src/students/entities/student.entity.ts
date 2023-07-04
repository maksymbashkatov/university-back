import { Column, Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';
import { Group } from '../../groups/entities/group.entity';

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

  @ManyToOne(() => Group, (group) => group.students, {
    nullable: false,
    eager: false,
  })
  @JoinColumn({ name: 'group_id' })
  group: Group;

  @Column({
    type: 'integer',
    nullable: true,
    name: 'group_id',
  })
  groupId: number;
}
