import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMarksTableWithRelationsToCoursesToStudeentsToLectors1689257136967 implements MigrationInterface {
    name = 'CreateMarksTableWithRelationsToCoursesToStudeentsToLectors1689257136967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "marks" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "mark" character varying NOT NULL, "course_id" integer NOT NULL, "student_id" integer NOT NULL, "lector_id" integer NOT NULL, CONSTRAINT "PK_051deeb008f7449216d568872c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "marks" ADD CONSTRAINT "FK_3e39a10631f1c639777a2b99cb8" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "marks" ADD CONSTRAINT "FK_5226e1592e6291dbe7a07640346" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "marks" ADD CONSTRAINT "FK_69b5af3347a46bb74ccc3c6f65c" FOREIGN KEY ("lector_id") REFERENCES "lectors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "marks" DROP CONSTRAINT "FK_69b5af3347a46bb74ccc3c6f65c"`);
        await queryRunner.query(`ALTER TABLE "marks" DROP CONSTRAINT "FK_5226e1592e6291dbe7a07640346"`);
        await queryRunner.query(`ALTER TABLE "marks" DROP CONSTRAINT "FK_3e39a10631f1c639777a2b99cb8"`);
        await queryRunner.query(`DROP TABLE "marks"`);
    }

}
