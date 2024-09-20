import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1726754915410 implements MigrationInterface {
    name = 'Mig1726754915410'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "courierId" TO "couriersId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_7034ef8f8359e2831e61252c9cd" FOREIGN KEY ("couriersId") REFERENCES "couriers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_7034ef8f8359e2831e61252c9cd"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "couriersId" TO "courierId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146" FOREIGN KEY ("courierId") REFERENCES "couriers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
