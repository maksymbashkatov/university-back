import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateIndexForNameInStudent1688591224288 implements MigrationInterface {
    name = 'CreateIndexForNameInStudent1688591224288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE INDEX "student_name-idx" ON "students" ("name") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."student_name-idx"`);
    }

}
