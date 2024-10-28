import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1730135088885 implements MigrationInterface {
    name = 'Default1730135088885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "editora" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cf0161c67e3c4104aee2b1a5bb8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "livro" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "totaldepaginas" integer NOT NULL, "data_lancamento" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5601163ea69da49108c4f7854cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genero" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_681c2c8d602304f33f9cc74e6ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE " genero_livro" ("genero_id" integer NOT NULL, "livro_id" integer NOT NULL, CONSTRAINT "PK_368c96c2736debc69d010c7d333" PRIMARY KEY ("genero_id", "livro_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df6466125b0e3e9d53a9366311" ON " genero_livro" ("genero_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_302b528d0f33f6a93770014b2e" ON " genero_livro" ("livro_id") `);
        await queryRunner.query(`CREATE TABLE "editora_livro" ("editora_id" integer NOT NULL, "livro_id" integer NOT NULL, CONSTRAINT "PK_c14b7fc2199c94cf793c2ca28f0" PRIMARY KEY ("editora_id", "livro_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4d476784f82ebeca8cff6b793d" ON "editora_livro" ("editora_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_27a940ba8d115c3a95c59308b2" ON "editora_livro" ("livro_id") `);
        await queryRunner.query(`ALTER TABLE " genero_livro" ADD CONSTRAINT "FK_df6466125b0e3e9d53a9366311b" FOREIGN KEY ("genero_id") REFERENCES "livro"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE " genero_livro" ADD CONSTRAINT "FK_302b528d0f33f6a93770014b2e2" FOREIGN KEY ("livro_id") REFERENCES "genero"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "editora_livro" ADD CONSTRAINT "FK_4d476784f82ebeca8cff6b793d3" FOREIGN KEY ("editora_id") REFERENCES "livro"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "editora_livro" ADD CONSTRAINT "FK_27a940ba8d115c3a95c59308b22" FOREIGN KEY ("livro_id") REFERENCES "editora"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "editora_livro" DROP CONSTRAINT "FK_27a940ba8d115c3a95c59308b22"`);
        await queryRunner.query(`ALTER TABLE "editora_livro" DROP CONSTRAINT "FK_4d476784f82ebeca8cff6b793d3"`);
        await queryRunner.query(`ALTER TABLE " genero_livro" DROP CONSTRAINT "FK_302b528d0f33f6a93770014b2e2"`);
        await queryRunner.query(`ALTER TABLE " genero_livro" DROP CONSTRAINT "FK_df6466125b0e3e9d53a9366311b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_27a940ba8d115c3a95c59308b2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4d476784f82ebeca8cff6b793d"`);
        await queryRunner.query(`DROP TABLE "editora_livro"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_302b528d0f33f6a93770014b2e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_df6466125b0e3e9d53a9366311"`);
        await queryRunner.query(`DROP TABLE " genero_livro"`);
        await queryRunner.query(`DROP TABLE "genero"`);
        await queryRunner.query(`DROP TABLE "livro"`);
        await queryRunner.query(`DROP TABLE "editora"`);
    }

}
