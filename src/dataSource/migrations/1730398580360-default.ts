import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1730398580360 implements MigrationInterface {
    name = 'Default1730398580360'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cliente" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cpf" character varying NOT NULL, "celular" character varying NOT NULL, "cep" integer NOT NULL, "address" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18990e8df6cf7fe71b9dc0f5f39" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genero" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_681c2c8d602304f33f9cc74e6ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "editora" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cf0161c67e3c4104aee2b1a5bb8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "autor" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "idade" integer NOT NULL, "cidade" character varying NOT NULL, CONSTRAINT "PK_51d3959df48c82010ae1c4907fb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "livro" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "totaldepaginas" integer NOT NULL, "data_lancamento" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5601163ea69da49108c4f7854cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido" ("id" SERIAL NOT NULL, "valor" integer NOT NULL, "datadoPedido" TIMESTAMP NOT NULL, "datadeDevolucao" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_af8d8b3d07fae559c37f56b3f43" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "autor_livro" ("autor_id" integer NOT NULL, "livro_id" integer NOT NULL, CONSTRAINT "PK_072c9425906fc63eec3f2121e50" PRIMARY KEY ("autor_id", "livro_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ea70b19a06aed70abb7585eb05" ON "autor_livro" ("autor_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_28ce08939b82f537d282f9dbf9" ON "autor_livro" ("livro_id") `);
        await queryRunner.query(`CREATE TABLE " genero_livro" ("genero_id" integer NOT NULL, "livro_id" integer NOT NULL, CONSTRAINT "PK_368c96c2736debc69d010c7d333" PRIMARY KEY ("genero_id", "livro_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df6466125b0e3e9d53a9366311" ON " genero_livro" ("genero_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_302b528d0f33f6a93770014b2e" ON " genero_livro" ("livro_id") `);
        await queryRunner.query(`CREATE TABLE "editora_livro" ("editora_id" integer NOT NULL, "livro_id" integer NOT NULL, CONSTRAINT "PK_c14b7fc2199c94cf793c2ca28f0" PRIMARY KEY ("editora_id", "livro_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4d476784f82ebeca8cff6b793d" ON "editora_livro" ("editora_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_27a940ba8d115c3a95c59308b2" ON "editora_livro" ("livro_id") `);
        await queryRunner.query(`CREATE TABLE "cliente_pedido" ("cliente_id" integer NOT NULL, "pedido_id" integer NOT NULL, CONSTRAINT "PK_993b40c3d51f1117e0732fa94e5" PRIMARY KEY ("cliente_id", "pedido_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d9e1edb2b8b093a8f44e773633" ON "cliente_pedido" ("cliente_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c9c2018ef617eebf4bb0552103" ON "cliente_pedido" ("pedido_id") `);
        await queryRunner.query(`CREATE TABLE "livro_pedido" ("livro_id" integer NOT NULL, "pedido_id" integer NOT NULL, CONSTRAINT "PK_d26965dc32925cea5b755f016b9" PRIMARY KEY ("livro_id", "pedido_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7891334ad45da1e6070578b4e6" ON "livro_pedido" ("livro_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_eddcaad492ddce58ce4cc94cfe" ON "livro_pedido" ("pedido_id") `);
        await queryRunner.query(`ALTER TABLE "autor_livro" ADD CONSTRAINT "FK_ea70b19a06aed70abb7585eb054" FOREIGN KEY ("autor_id") REFERENCES "livro"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "autor_livro" ADD CONSTRAINT "FK_28ce08939b82f537d282f9dbf95" FOREIGN KEY ("livro_id") REFERENCES "autor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE " genero_livro" ADD CONSTRAINT "FK_df6466125b0e3e9d53a9366311b" FOREIGN KEY ("genero_id") REFERENCES "livro"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE " genero_livro" ADD CONSTRAINT "FK_302b528d0f33f6a93770014b2e2" FOREIGN KEY ("livro_id") REFERENCES "genero"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "editora_livro" ADD CONSTRAINT "FK_4d476784f82ebeca8cff6b793d3" FOREIGN KEY ("editora_id") REFERENCES "livro"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "editora_livro" ADD CONSTRAINT "FK_27a940ba8d115c3a95c59308b22" FOREIGN KEY ("livro_id") REFERENCES "editora"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cliente_pedido" ADD CONSTRAINT "FK_d9e1edb2b8b093a8f44e7736332" FOREIGN KEY ("cliente_id") REFERENCES "pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cliente_pedido" ADD CONSTRAINT "FK_c9c2018ef617eebf4bb0552103a" FOREIGN KEY ("pedido_id") REFERENCES "cliente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "livro_pedido" ADD CONSTRAINT "FK_7891334ad45da1e6070578b4e6a" FOREIGN KEY ("livro_id") REFERENCES "pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "livro_pedido" ADD CONSTRAINT "FK_eddcaad492ddce58ce4cc94cfe6" FOREIGN KEY ("pedido_id") REFERENCES "livro"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "livro_pedido" DROP CONSTRAINT "FK_eddcaad492ddce58ce4cc94cfe6"`);
        await queryRunner.query(`ALTER TABLE "livro_pedido" DROP CONSTRAINT "FK_7891334ad45da1e6070578b4e6a"`);
        await queryRunner.query(`ALTER TABLE "cliente_pedido" DROP CONSTRAINT "FK_c9c2018ef617eebf4bb0552103a"`);
        await queryRunner.query(`ALTER TABLE "cliente_pedido" DROP CONSTRAINT "FK_d9e1edb2b8b093a8f44e7736332"`);
        await queryRunner.query(`ALTER TABLE "editora_livro" DROP CONSTRAINT "FK_27a940ba8d115c3a95c59308b22"`);
        await queryRunner.query(`ALTER TABLE "editora_livro" DROP CONSTRAINT "FK_4d476784f82ebeca8cff6b793d3"`);
        await queryRunner.query(`ALTER TABLE " genero_livro" DROP CONSTRAINT "FK_302b528d0f33f6a93770014b2e2"`);
        await queryRunner.query(`ALTER TABLE " genero_livro" DROP CONSTRAINT "FK_df6466125b0e3e9d53a9366311b"`);
        await queryRunner.query(`ALTER TABLE "autor_livro" DROP CONSTRAINT "FK_28ce08939b82f537d282f9dbf95"`);
        await queryRunner.query(`ALTER TABLE "autor_livro" DROP CONSTRAINT "FK_ea70b19a06aed70abb7585eb054"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_eddcaad492ddce58ce4cc94cfe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7891334ad45da1e6070578b4e6"`);
        await queryRunner.query(`DROP TABLE "livro_pedido"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c9c2018ef617eebf4bb0552103"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d9e1edb2b8b093a8f44e773633"`);
        await queryRunner.query(`DROP TABLE "cliente_pedido"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_27a940ba8d115c3a95c59308b2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4d476784f82ebeca8cff6b793d"`);
        await queryRunner.query(`DROP TABLE "editora_livro"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_302b528d0f33f6a93770014b2e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_df6466125b0e3e9d53a9366311"`);
        await queryRunner.query(`DROP TABLE " genero_livro"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_28ce08939b82f537d282f9dbf9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ea70b19a06aed70abb7585eb05"`);
        await queryRunner.query(`DROP TABLE "autor_livro"`);
        await queryRunner.query(`DROP TABLE "pedido"`);
        await queryRunner.query(`DROP TABLE "livro"`);
        await queryRunner.query(`DROP TABLE "autor"`);
        await queryRunner.query(`DROP TABLE "editora"`);
        await queryRunner.query(`DROP TABLE "genero"`);
        await queryRunner.query(`DROP TABLE "cliente"`);
    }

}
