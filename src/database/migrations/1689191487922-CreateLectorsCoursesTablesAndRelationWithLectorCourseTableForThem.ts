import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLectorsCoursesTablesAndRelationWithLectorCourseTableForThem1689191487922 implements MigrationInterface {
    name = 'CreateLectorsCoursesTablesAndRelationWithLectorCourseTableForThem1689191487922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lector_course" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lector_id" integer NOT NULL, "course_id" integer NOT NULL, CONSTRAINT "PK_a258ae675f3378b94898c00a148" PRIMARY KEY ("id", "lector_id", "course_id"))`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "FK_fa21194644d188132582b0d1a3f" FOREIGN KEY ("lector_id") REFERENCES "lectors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "FK_67ca379415454fe438719515529" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "FK_67ca379415454fe438719515529"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "FK_fa21194644d188132582b0d1a3f"`);
        await queryRunner.query(`DROP TABLE "lector_course"`);
    }

}
