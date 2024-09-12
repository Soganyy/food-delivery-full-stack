import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1726135643783 implements MigrationInterface {
    name = 'Mig1726135643783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146"`);
        await queryRunner.query(`CREATE TABLE "couriers" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-12T10:07:26.215Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-12T10:07:26.215Z', "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying NOT NULL, "vehicle" integer NOT NULL, CONSTRAINT "PK_141c3ed6f70beb9ddf4ab4a0e86" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "role" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "users_id_seq" OWNED BY "users"."id"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('"users_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T10:07:26.215Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146" FOREIGN KEY ("courierId") REFERENCES "couriers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-11 12:22:56.68'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-11 12:22:56.679'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT nextval('users_id_seq1')`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "users_id_seq"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-11 12:22:56.68'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-11 12:22:56.679'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-11 12:22:56.68'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-11 12:22:56.679'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-11 12:22:56.68'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-11 12:22:56.679'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-11 12:22:56.68'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-11 12:22:56.679'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-11 12:22:56.68'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-11 12:22:56.679'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-11 12:22:56.68'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-11 12:22:56.679'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TABLE "couriers"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146" FOREIGN KEY ("courierId") REFERENCES "courier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
