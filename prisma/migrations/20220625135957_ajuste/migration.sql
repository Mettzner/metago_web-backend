/*
  Warnings:

  - You are about to drop the column `CODREP` on the `PAGAR` table. All the data in the column will be lost.
  - You are about to drop the column `CODREP` on the `PAGARB` table. All the data in the column will be lost.
  - You are about to drop the column `CODREP` on the `RECEBER` table. All the data in the column will be lost.
  - You are about to drop the column `CODREP` on the `RECEBERB` table. All the data in the column will be lost.
  - You are about to drop the column `CODCLI` on the `USUARIOS` table. All the data in the column will be lost.
  - You are about to drop the `ENTIDADE` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MAQUINA` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `REPRESEN` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `CODFUN` to the `PAGAR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODCLI` to the `PAGAR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODFUN` to the `PAGARB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODCLI` to the `PAGARB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODFUN` to the `RECEBER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODCLI` to the `RECEBER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODFUN` to the `RECEBERB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CODCLI` to the `RECEBERB` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PAGAR" DROP COLUMN "CODREP",
ADD COLUMN     "CODFUN" INTEGER NOT NULL,
DROP COLUMN "CODCLI",
ADD COLUMN     "CODCLI" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PAGARB" DROP COLUMN "CODREP",
ADD COLUMN     "CODFUN" INTEGER NOT NULL,
DROP COLUMN "CODCLI",
ADD COLUMN     "CODCLI" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RECEBER" DROP COLUMN "CODREP",
ADD COLUMN     "CODFUN" INTEGER NOT NULL,
DROP COLUMN "CODCLI",
ADD COLUMN     "CODCLI" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "RECEBERB" DROP COLUMN "CODREP",
ADD COLUMN     "CODFUN" INTEGER NOT NULL,
DROP COLUMN "CODCLI",
ADD COLUMN     "CODCLI" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "USUARIOS" DROP COLUMN "CODCLI";

-- DropTable
DROP TABLE "ENTIDADE";

-- DropTable
DROP TABLE "MAQUINA";

-- DropTable
DROP TABLE "REPRESEN";

-- CreateTable
CREATE TABLE "CLIENTES" (
    "CODCLI" SERIAL NOT NULL,
    "NOME" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL,
    "EMAIL" TEXT,
    "TELEFONE" TEXT,
    "ENDERECO" TEXT,
    "CIDADE" TEXT,
    "BAIRRO" TEXT,
    "NUMERO" TEXT,
    "UF" TEXT,
    "PAIS" TEXT,
    "COMPLEMENTO" TEXT,
    "CEP" TEXT,
    "DT_CADASTRO" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "DT_ALTERACAO" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "ID_ENTIDADE" TEXT NOT NULL,

    CONSTRAINT "CLIENTES_pkey" PRIMARY KEY ("CODCLI")
);

-- CreateTable
CREATE TABLE "MAQUINAS" (
    "CODIGO" SERIAL NOT NULL,
    "DESCRICAO" TEXT NOT NULL,
    "DT_CADASTRO" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "DT_ALTERACAO" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "ID_MAQUINA" TEXT NOT NULL,

    CONSTRAINT "MAQUINAS_pkey" PRIMARY KEY ("CODIGO")
);

-- CreateTable
CREATE TABLE "FUNCIONARIOS" (
    "CODFUN" SERIAL NOT NULL,
    "NOME" TEXT NOT NULL,
    "DT_CADASTRO" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "DT_ALTERACAO" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "ID_FUNCIONARIO" TEXT NOT NULL,

    CONSTRAINT "FUNCIONARIOS_pkey" PRIMARY KEY ("CODFUN")
);

-- CreateTable
CREATE TABLE "SERVICOS" (
    "CODIGO" SERIAL NOT NULL,
    "CODCLI" INTEGER NOT NULL,
    "NOME_CLI" TEXT NOT NULL,
    "CODFUN" INTEGER NOT NULL,
    "NOME_FUN" TEXT NOT NULL,
    "VALOR" DOUBLE PRECISION NOT NULL,
    "QTDE_HORAS" TEXT NOT NULL,
    "COD_PRODUTO" INTEGER NOT NULL,
    "COD_MAQUINA" INTEGER NOT NULL,
    "DT_CADASTRO" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "DT_ALTERACAO" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ID_SERVICO" TEXT NOT NULL,

    CONSTRAINT "SERVICOS_pkey" PRIMARY KEY ("CODIGO")
);

-- AddForeignKey
ALTER TABLE "RECEBER" ADD CONSTRAINT "RECEBER_CODCLI_fkey" FOREIGN KEY ("CODCLI") REFERENCES "CLIENTES"("CODCLI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RECEBER" ADD CONSTRAINT "RECEBER_CODFUN_fkey" FOREIGN KEY ("CODFUN") REFERENCES "FUNCIONARIOS"("CODFUN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RECEBERB" ADD CONSTRAINT "RECEBERB_CODCLI_fkey" FOREIGN KEY ("CODCLI") REFERENCES "CLIENTES"("CODCLI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RECEBERB" ADD CONSTRAINT "RECEBERB_CODFUN_fkey" FOREIGN KEY ("CODFUN") REFERENCES "FUNCIONARIOS"("CODFUN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGAR" ADD CONSTRAINT "PAGAR_CODCLI_fkey" FOREIGN KEY ("CODCLI") REFERENCES "CLIENTES"("CODCLI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGAR" ADD CONSTRAINT "PAGAR_CODFUN_fkey" FOREIGN KEY ("CODFUN") REFERENCES "FUNCIONARIOS"("CODFUN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGARB" ADD CONSTRAINT "PAGARB_CODCLI_fkey" FOREIGN KEY ("CODCLI") REFERENCES "CLIENTES"("CODCLI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGARB" ADD CONSTRAINT "PAGARB_CODFUN_fkey" FOREIGN KEY ("CODFUN") REFERENCES "FUNCIONARIOS"("CODFUN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_CODCLI_fkey" FOREIGN KEY ("CODCLI") REFERENCES "CLIENTES"("CODCLI") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_COD_MAQUINA_fkey" FOREIGN KEY ("COD_MAQUINA") REFERENCES "MAQUINAS"("CODIGO") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_CODFUN_fkey" FOREIGN KEY ("CODFUN") REFERENCES "FUNCIONARIOS"("CODFUN") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_COD_PRODUTO_fkey" FOREIGN KEY ("COD_PRODUTO") REFERENCES "PRODUTOS"("CODIGO") ON DELETE RESTRICT ON UPDATE CASCADE;
