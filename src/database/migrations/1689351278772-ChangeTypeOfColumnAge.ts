import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeTypeOfColumnAge1689351278772 implements MigrationInterface {
    name = 'ChangeTypeOfColumnAge1689351278772'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "age" smallint`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "age"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "age" numeric`);
    }

}
