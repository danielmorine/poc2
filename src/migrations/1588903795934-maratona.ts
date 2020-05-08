import {MigrationInterface, QueryRunner} from "typeorm";

export class maratona1588903795934 implements MigrationInterface {
    name = 'maratona1588903795934'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "maratona" ("id" varchar PRIMARY KEY NOT NULL, "aula" varchar NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "maratona"`, undefined);
    }

}
