import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1726144814753 implements MigrationInterface {
    name = 'Mig1726144814753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "couriers" ADD "password" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "role" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "firstName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "lastName" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "phoneNumber" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "email" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "vehicle"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "vehicle" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T12:40:17.168Z'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "vehicle"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "vehicle" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "phoneNumber"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "phoneNumber" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "couriers" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 11:03:33.815'`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "couriers" DROP COLUMN "password"`);
    }

}
