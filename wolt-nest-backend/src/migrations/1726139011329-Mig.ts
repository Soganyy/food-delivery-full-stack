import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1726139011329 implements MigrationInterface {
    name = 'Mig1726139011329'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "merchants" ADD "role" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchants" ADD "firstName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchants" ADD "lastName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T11:03:33.815Z'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 10:07:26.215'`);
        await queryRunner.query(`ALTER TABLE "merchants" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "merchants" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "merchants" DROP COLUMN "role"`);
    }

}
