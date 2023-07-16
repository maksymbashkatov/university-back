import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeHoursInCourses1689515402940 implements MigrationInterface {
    name = 'ChangeTypeHoursInCourses1689515402940'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "hours"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "hours" smallint`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "hours"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "hours" numeric`);
    }

}
