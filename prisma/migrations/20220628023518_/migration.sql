/*
  Warnings:

  - The primary key for the `CLIENTES` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_ENTIDADE` on the `CLIENTES` table. All the data in the column will be lost.
  - The primary key for the `FUNCIONARIOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MAQUINAS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PAGAR` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CODCLI` on the `PAGAR` table. All the data in the column will be lost.
  - You are about to drop the column `CODFUN` on the `PAGAR` table. All the data in the column will be lost.
  - The primary key for the `PAGARB` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CODCLI` on the `PAGARB` table. All the data in the column will be lost.
  - You are about to drop the column `CODFUN` on the `PAGARB` table. All the data in the column will be lost.
  - The primary key for the `PRODUTOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RECEBER` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CODCLI` on the `RECEBER` table. All the data in the column will be lost.
  - You are about to drop the column `CODFUN` on the `RECEBER` table. All the data in the column will be lost.
  - The primary key for the `RECEBERB` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CODCLI` on the `RECEBERB` table. All the data in the column will be lost.
  - You are about to drop the column `CODFUN` on the `RECEBERB` table. All the data in the column will be lost.
  - The primary key for the `SERVICOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CODCLI` on the `SERVICOS` table. All the data in the column will be lost.
  - You are about to drop the column `CODFUN` on the `SERVICOS` table. All the data in the column will be lost.
  - You are about to drop the column `COD_MAQUINA` on the `SERVICOS` table. All the data in the column will be lost.
  - You are about to drop the column `COD_PRODUTO` on the `SERVICOS` table. All the data in the column will be lost.
  - The primary key for the `USUARIOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The required column `ID_CLIENTE` was added to the `CLIENTES` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `ID_CLIENTE` to the `PAGAR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_FUNCIONARIO` to the `PAGAR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_CLIENTE` to the `PAGARB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_FUNCIONARIO` to the `PAGARB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_CLIENTE` to the `RECEBER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_FUNCIONARIO` to the `RECEBER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_CLIENTE` to the `RECEBERB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_FUNCIONARIO` to the `RECEBERB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_CLIENTE` to the `SERVICOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_FUNCIONARIO` to the `SERVICOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_MAQUINA` to the `SERVICOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ID_PRODUTO` to the `SERVICOS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PAGAR" DROP CONSTRAINT "PAGAR_CODCLI_fkey";

-- DropForeignKey
ALTER TABLE "PAGAR" DROP CONSTRAINT "PAGAR_CODFUN_fkey";

-- DropForeignKey
ALTER TABLE "PAGARB" DROP CONSTRAINT "PAGARB_CODCLI_fkey";

-- DropForeignKey
ALTER TABLE "PAGARB" DROP CONSTRAINT "PAGARB_CODFUN_fkey";

-- DropForeignKey
ALTER TABLE "RECEBER" DROP CONSTRAINT "RECEBER_CODCLI_fkey";

-- DropForeignKey
ALTER TABLE "RECEBER" DROP CONSTRAINT "RECEBER_CODFUN_fkey";

-- DropForeignKey
ALTER TABLE "RECEBERB" DROP CONSTRAINT "RECEBERB_CODCLI_fkey";

-- DropForeignKey
ALTER TABLE "RECEBERB" DROP CONSTRAINT "RECEBERB_CODFUN_fkey";

-- DropForeignKey
ALTER TABLE "SERVICOS" DROP CONSTRAINT "SERVICOS_CODCLI_fkey";

-- DropForeignKey
ALTER TABLE "SERVICOS" DROP CONSTRAINT "SERVICOS_CODFUN_fkey";

-- DropForeignKey
ALTER TABLE "SERVICOS" DROP CONSTRAINT "SERVICOS_COD_MAQUINA_fkey";

-- DropForeignKey
ALTER TABLE "SERVICOS" DROP CONSTRAINT "SERVICOS_COD_PRODUTO_fkey";

-- AlterTable
ALTER TABLE "CLIENTES" DROP CONSTRAINT "CLIENTES_pkey",
DROP COLUMN "ID_ENTIDADE",
ADD COLUMN     "ID_CLIENTE" TEXT NOT NULL,
ADD CONSTRAINT "CLIENTES_pkey" PRIMARY KEY ("ID_CLIENTE");

-- AlterTable
ALTER TABLE "FUNCIONARIOS" DROP CONSTRAINT "FUNCIONARIOS_pkey",
ADD CONSTRAINT "FUNCIONARIOS_pkey" PRIMARY KEY ("ID_FUNCIONARIO");

-- AlterTable
ALTER TABLE "MAQUINAS" DROP CONSTRAINT "MAQUINAS_pkey",
ADD CONSTRAINT "MAQUINAS_pkey" PRIMARY KEY ("ID_MAQUINA");

-- AlterTable
ALTER TABLE "PAGAR" DROP CONSTRAINT "PAGAR_pkey",
DROP COLUMN "CODCLI",
DROP COLUMN "CODFUN",
ADD COLUMN     "ID_CLIENTE" TEXT NOT NULL,
ADD COLUMN     "ID_FUNCIONARIO" TEXT NOT NULL,
ADD CONSTRAINT "PAGAR_pkey" PRIMARY KEY ("ID_PAGAR");

-- AlterTable
ALTER TABLE "PAGARB" DROP CONSTRAINT "PAGARB_pkey",
DROP COLUMN "CODCLI",
DROP COLUMN "CODFUN",
ADD COLUMN     "ID_CLIENTE" TEXT NOT NULL,
ADD COLUMN     "ID_FUNCIONARIO" TEXT NOT NULL,
ADD CONSTRAINT "PAGARB_pkey" PRIMARY KEY ("ID_PAGARB");

-- AlterTable
ALTER TABLE "PRODUTOS" DROP CONSTRAINT "PRODUTOS_pkey",
ADD CONSTRAINT "PRODUTOS_pkey" PRIMARY KEY ("ID_PRODUTO");

-- AlterTable
ALTER TABLE "RECEBER" DROP CONSTRAINT "RECEBER_pkey",
DROP COLUMN "CODCLI",
DROP COLUMN "CODFUN",
ADD COLUMN     "ID_CLIENTE" TEXT NOT NULL,
ADD COLUMN     "ID_FUNCIONARIO" TEXT NOT NULL,
ADD CONSTRAINT "RECEBER_pkey" PRIMARY KEY ("ID_RECEBER");

-- AlterTable
ALTER TABLE "RECEBERB" DROP CONSTRAINT "RECEBERB_pkey",
DROP COLUMN "CODCLI",
DROP COLUMN "CODFUN",
ADD COLUMN     "ID_CLIENTE" TEXT NOT NULL,
ADD COLUMN     "ID_FUNCIONARIO" TEXT NOT NULL,
ADD CONSTRAINT "RECEBERB_pkey" PRIMARY KEY ("ID_RECEBERB");

-- AlterTable
ALTER TABLE "SERVICOS" DROP CONSTRAINT "SERVICOS_pkey",
DROP COLUMN "CODCLI",
DROP COLUMN "CODFUN",
DROP COLUMN "COD_MAQUINA",
DROP COLUMN "COD_PRODUTO",
ADD COLUMN     "ID_CLIENTE" TEXT NOT NULL,
ADD COLUMN     "ID_FUNCIONARIO" TEXT NOT NULL,
ADD COLUMN     "ID_MAQUINA" TEXT NOT NULL,
ADD COLUMN     "ID_PRODUTO" TEXT NOT NULL,
ADD CONSTRAINT "SERVICOS_pkey" PRIMARY KEY ("ID_SERVICO");

-- AlterTable
ALTER TABLE "USUARIOS" DROP CONSTRAINT "USUARIOS_pkey",
ADD CONSTRAINT "USUARIOS_pkey" PRIMARY KEY ("ID_USUARIO");

-- AddForeignKey
ALTER TABLE "RECEBER" ADD CONSTRAINT "RECEBER_ID_CLIENTE_fkey" FOREIGN KEY ("ID_CLIENTE") REFERENCES "CLIENTES"("ID_CLIENTE") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RECEBER" ADD CONSTRAINT "RECEBER_ID_FUNCIONARIO_fkey" FOREIGN KEY ("ID_FUNCIONARIO") REFERENCES "FUNCIONARIOS"("ID_FUNCIONARIO") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RECEBERB" ADD CONSTRAINT "RECEBERB_ID_CLIENTE_fkey" FOREIGN KEY ("ID_CLIENTE") REFERENCES "CLIENTES"("ID_CLIENTE") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RECEBERB" ADD CONSTRAINT "RECEBERB_ID_FUNCIONARIO_fkey" FOREIGN KEY ("ID_FUNCIONARIO") REFERENCES "FUNCIONARIOS"("ID_FUNCIONARIO") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGAR" ADD CONSTRAINT "PAGAR_ID_CLIENTE_fkey" FOREIGN KEY ("ID_CLIENTE") REFERENCES "CLIENTES"("ID_CLIENTE") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGAR" ADD CONSTRAINT "PAGAR_ID_FUNCIONARIO_fkey" FOREIGN KEY ("ID_FUNCIONARIO") REFERENCES "FUNCIONARIOS"("ID_FUNCIONARIO") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGARB" ADD CONSTRAINT "PAGARB_ID_CLIENTE_fkey" FOREIGN KEY ("ID_CLIENTE") REFERENCES "CLIENTES"("ID_CLIENTE") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PAGARB" ADD CONSTRAINT "PAGARB_ID_FUNCIONARIO_fkey" FOREIGN KEY ("ID_FUNCIONARIO") REFERENCES "FUNCIONARIOS"("ID_FUNCIONARIO") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_ID_CLIENTE_fkey" FOREIGN KEY ("ID_CLIENTE") REFERENCES "CLIENTES"("ID_CLIENTE") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_ID_MAQUINA_fkey" FOREIGN KEY ("ID_MAQUINA") REFERENCES "MAQUINAS"("ID_MAQUINA") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_ID_FUNCIONARIO_fkey" FOREIGN KEY ("ID_FUNCIONARIO") REFERENCES "FUNCIONARIOS"("ID_FUNCIONARIO") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SERVICOS" ADD CONSTRAINT "SERVICOS_ID_PRODUTO_fkey" FOREIGN KEY ("ID_PRODUTO") REFERENCES "PRODUTOS"("ID_PRODUTO") ON DELETE RESTRICT ON UPDATE CASCADE;
