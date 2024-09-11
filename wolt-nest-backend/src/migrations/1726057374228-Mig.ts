import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig1726057374228 implements MigrationInterface {
    name = 'Mig1726057374228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orderItems" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "quantity" bigint NOT NULL, "price" bigint NOT NULL, "orderId" integer, "itemId" integer, CONSTRAINT "PK_b1b864ba2b7d5762d34265cc8b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "specifications" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "type" text NOT NULL, "option" bigint NOT NULL, "itemId" integer, CONSTRAINT "PK_621aabf71e640ab86f0e8b62a37" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "title" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "title" text NOT NULL, "description" text, "price" bigint NOT NULL, "merchantId" integer, "categoryId" integer, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "merchants" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "email" text NOT NULL, "phoneNumber" text NOT NULL, "password" text NOT NULL, "businessName" text NOT NULL, "address" text, CONSTRAINT "PK_4fd312ef25f8e05ad47bfe7ed25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courier" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phoneNumber" character varying NOT NULL, "email" character varying NOT NULL, "vehicle" integer NOT NULL, CONSTRAINT "PK_94613ec7dc72f7dfa2d072a31cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "title" text NOT NULL, "totalPrice" bigint NOT NULL, "deliveryPrice" bigint NOT NULL, "deliveryTime" TIME NOT NULL, "status" text NOT NULL, "userId" integer, "merchantId" integer, "courierId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.679Z', "updated_at" TIMESTAMP NOT NULL DEFAULT '2024-09-11T12:22:56.680Z', "email" text NOT NULL, "phoneNumber" text NOT NULL, "password" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "address" text, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD CONSTRAINT "FK_391c9e5d5af8d7d7ce4b96db80e" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orderItems" ADD CONSTRAINT "FK_f016c925058c1407057f7cc49cc" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "specifications" ADD CONSTRAINT "FK_2461d1c159f3262582a18330295" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_80ab6c335623412bb33e95ddff8" FOREIGN KEY ("merchantId") REFERENCES "merchants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_788929ed61ab78bb914f0d1931b" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_c9e4efcabb250e585daa4c19624" FOREIGN KEY ("merchantId") REFERENCES "merchants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146" FOREIGN KEY ("courierId") REFERENCES "courier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_76eaffec5e36a04bbf3bf549146"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_c9e4efcabb250e585daa4c19624"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_788929ed61ab78bb914f0d1931b"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_80ab6c335623412bb33e95ddff8"`);
        await queryRunner.query(`ALTER TABLE "specifications" DROP CONSTRAINT "FK_2461d1c159f3262582a18330295"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP CONSTRAINT "FK_f016c925058c1407057f7cc49cc"`);
        await queryRunner.query(`ALTER TABLE "orderItems" DROP CONSTRAINT "FK_391c9e5d5af8d7d7ce4b96db80e"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "orders"`);
        await queryRunner.query(`DROP TABLE "courier"`);
        await queryRunner.query(`DROP TABLE "merchants"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "specifications"`);
        await queryRunner.query(`DROP TABLE "orderItems"`);
    }

}
