import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1726157620246 implements MigrationInterface {
    name = 'Mig1726157620246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_788929ed61ab78bb914f0d1931b"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP CONSTRAINT "FK_f016c925058c1407057f7cc49cc"`);
        await queryRunner.query(`ALTER TABLE "specifications" DROP CONSTRAINT "FK_2461d1c159f3262582a18330295"`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP COLUMN "itemId"`);
        await queryRunner.query(`ALTER TABLE "specifications" DROP COLUMN "itemId"`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "items" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12T16:13:43.744Z'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "categories" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "specifications" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "couriers" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "orderItems" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "merchants" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "items" ADD "price" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "updated_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "items" ALTER COLUMN "created_at" SET DEFAULT '2024-09-12 12:40:17.168'`);
        await queryRunner.query(`ALTER TABLE "specifications" ADD "itemId" integer`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD "itemId" integer`);
        await queryRunner.query(`ALTER TABLE "items" ADD "categoryId" integer`);
        await queryRunner.query(`ALTER TABLE "specifications" ADD CONSTRAINT "FK_2461d1c159f3262582a18330295" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD CONSTRAINT "FK_f016c925058c1407057f7cc49cc" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_788929ed61ab78bb914f0d1931b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
