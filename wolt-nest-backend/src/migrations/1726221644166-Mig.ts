import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1726221644166 implements MigrationInterface {
    name = 'Mig1726221644166'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-13T10:00:46.611Z'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 16:13:43.744'`);
    }

}
