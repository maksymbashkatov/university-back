import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLectorsCoursesTablesAndRelationWithLectorCourseTableForThem1688565485589 implements MigrationInterface {
    name = 'CreateLectorsCoursesTablesAndRelationWithLectorCourseTableForThem1688565485589'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lectors" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_467688486799baaa43b6afd38bf" UNIQUE ("email"), CONSTRAINT "PK_87eda9bf8c85d84a6b18dfc4991" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "hours" numeric, CONSTRAINT "UQ_6ba1a54849ae17832337a39d5e5" UNIQUE ("name"), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lector_course" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_06fddf84d2c08e616f20aa4c658" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_06fddf84d2c08e616f20aa4c658"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_06fddf84d2c08e616f20aa4c658" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "course_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_06fddf84d2c08e616f20aa4c658"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_cd6374862d8ce7c891ca3ae6ed8" PRIMARY KEY ("id", "course_id")`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "lector_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_cd6374862d8ce7c891ca3ae6ed8"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_a258ae675f3378b94898c00a148" PRIMARY KEY ("id", "course_id", "lector_id")`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_a258ae675f3378b94898c00a148"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_79cf0f064235769277ce94c75f7" PRIMARY KEY ("course_id", "lector_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_67ca379415454fe43871951552" ON "lector_course" ("course_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_fa21194644d188132582b0d1a3" ON "lector_course" ("lector_id") `);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "FK_67ca379415454fe438719515529" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "FK_fa21194644d188132582b0d1a3f" FOREIGN KEY ("lector_id") REFERENCES "lectors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "FK_fa21194644d188132582b0d1a3f"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "FK_67ca379415454fe438719515529"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fa21194644d188132582b0d1a3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_67ca379415454fe43871951552"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_79cf0f064235769277ce94c75f7"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_a258ae675f3378b94898c00a148" PRIMARY KEY ("id", "course_id", "lector_id")`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_a258ae675f3378b94898c00a148"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_cd6374862d8ce7c891ca3ae6ed8" PRIMARY KEY ("id", "course_id")`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "lector_id"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_cd6374862d8ce7c891ca3ae6ed8"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_06fddf84d2c08e616f20aa4c658" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "course_id"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP CONSTRAINT "PK_06fddf84d2c08e616f20aa4c658"`);
        await queryRunner.query(`ALTER TABLE "lector_course" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lector_course" ADD CONSTRAINT "PK_06fddf84d2c08e616f20aa4c658" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP TABLE "lector_course"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "lectors"`);
    }

}
