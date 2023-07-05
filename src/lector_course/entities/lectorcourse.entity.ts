import { Entity } from 'typeorm';
import { CoreEntity } from '../../application/entities/core.entity';

@Entity({ name: 'lector_course' })
export class LectorCourse extends CoreEntity {}
