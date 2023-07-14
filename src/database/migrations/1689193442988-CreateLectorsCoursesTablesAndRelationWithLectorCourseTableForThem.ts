import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLectorsCoursesTablesAndRelationWithLectorCourseTableForThem1689193442988 implements MigrationInterface {
    name = 'CreateLectorsCoursesTablesAndRelationWithLectorCourseTableForThem1689193442988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_79cf0f064235769277ce94c75f7"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_a258ae675f3378b94898c00a148" PRIMARY KEY ("lector_id", "course_id", "id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_a258ae675f3378b94898c00a148"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_79cf0f064235769277ce94c75f7" PRIMARY KEY ("lector_id", "course_id")`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "id"`);
    }

}
