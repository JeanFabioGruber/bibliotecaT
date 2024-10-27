import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1729990605027 implements MigrationInterface {
    name = 'Default1729990605027'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "livro" ("id" SERIAL NOT NULL, "titulo" character varying NOT NULL, "descricao" character varying NOT NULL, "totaldepaginas" integer NOT NULL, "data_lancamento" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5601163ea69da49108c4f7854cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "genero" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_681c2c8d602304f33f9cc74e6ad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE " genero_livro" ("genero_id" integer NOT NULL, "livro_id" integer NOT NULL, CONSTRAINT "PK_368c96c2736debc69d010c7d333" PRIMARY KEY ("genero_id", "livro_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_df6466125b0e3e9d53a9366311" ON " genero_livro" ("genero_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_302b528d0f33f6a93770014b2e" ON " genero_livro" ("livro_id") `);
        await queryRunner.query(`ALTER TABLE " genero_livro" ADD CONSTRAINT "FK_df6466125b0e3e9d53a9366311b" FOREIGN KEY ("genero_id") REFERENCES "livro"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE " genero_livro" ADD CONSTRAINT "FK_302b528d0f33f6a93770014b2e2" FOREIGN KEY ("livro_id") REFERENCES "genero"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE " genero_livro" DROP CONSTRAINT "FK_302b528d0f33f6a93770014b2e2"`);
        await queryRunner.query(`ALTER TABLE " genero_livro" DROP CONSTRAINT "FK_df6466125b0e3e9d53a9366311b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_302b528d0f33f6a93770014b2e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_df6466125b0e3e9d53a9366311"`);
        await queryRunner.query(`DROP TABLE " genero_livro"`);
        await queryRunner.query(`DROP TABLE "genero"`);
        await queryRunner.query(`DROP TABLE "livro"`);
    }

}
