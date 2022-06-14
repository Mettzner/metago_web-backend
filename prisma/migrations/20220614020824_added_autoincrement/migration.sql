/*
  Warnings:

  - The primary key for the `ENTIDADE` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `CODCLI` column on the `ENTIDADE` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `MAQUINA` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `CODIGO` column on the `MAQUINA` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PAGAR` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `NUMERO` column on the `PAGAR` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PAGARB` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `NUMERO` column on the `PAGARB` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `PRODUTOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `CODIGO` column on the `PRODUTOS` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `RECEBER` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `NUMERO` column on the `RECEBER` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `RECEBERB` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `NUMERO` column on the `RECEBERB` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `REPRESEN` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `CODREP` column on the `REPRESEN` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `USUARIOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `CODIGO` column on the `USUARIOS` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "ENTIDADE" DROP CONSTRAINT "ENTIDADE_pkey",
DROP COLUMN "CODCLI",
ADD COLUMN     "CODCLI" SERIAL NOT NULL,
ALTER COLUMN "TELEFONE" DROP NOT NULL,
ALTER COLUMN "ENDERECO" DROP NOT NULL,
ALTER COLUMN "CIDADE" DROP NOT NULL,
ALTER COLUMN "BAIRRO" DROP NOT NULL,
ALTER COLUMN "NUMERO" DROP NOT NULL,
ALTER COLUMN "UF" DROP NOT NULL,
ALTER COLUMN "FUNCAO" DROP NOT NULL,
ALTER COLUMN "PAIS" DROP NOT NULL,
ALTER COLUMN "CEP" DROP NOT NULL,
ADD CONSTRAINT "ENTIDADE_pkey" PRIMARY KEY ("CODCLI");

-- AlterTable
ALTER TABLE "MAQUINA" DROP CONSTRAINT "MAQUINA_pkey",
DROP COLUMN "CODIGO",
ADD COLUMN     "CODIGO" SERIAL NOT NULL,
ADD CONSTRAINT "MAQUINA_pkey" PRIMARY KEY ("CODIGO");

-- AlterTable
ALTER TABLE "PAGAR" DROP CONSTRAINT "PAGAR_pkey",
DROP COLUMN "NUMERO",
ADD COLUMN     "NUMERO" SERIAL NOT NULL,
ALTER COLUMN "CODCLI" DROP NOT NULL,
ALTER COLUMN "CODREP" DROP NOT NULL,
ALTER COLUMN "PARCELA" DROP NOT NULL,
ALTER COLUMN "VALOR_TOTAL" DROP NOT NULL,
ADD CONSTRAINT "PAGAR_pkey" PRIMARY KEY ("NUMERO");

-- AlterTable
ALTER TABLE "PAGARB" DROP CONSTRAINT "PAGARB_pkey",
DROP COLUMN "NUMERO",
ADD COLUMN     "NUMERO" SERIAL NOT NULL,
ALTER COLUMN "CODCLI" DROP NOT NULL,
ALTER COLUMN "CODREP" DROP NOT NULL,
ALTER COLUMN "PARCELA" DROP NOT NULL,
ALTER COLUMN "VALOR_TOTAL" DROP NOT NULL,
ALTER COLUMN "VALOR_PAGO" DROP NOT NULL,
ADD CONSTRAINT "PAGARB_pkey" PRIMARY KEY ("NUMERO");

-- AlterTable
ALTER TABLE "PRODUTOS" DROP CONSTRAINT "PRODUTOS_pkey",
DROP COLUMN "CODIGO",
ADD COLUMN     "CODIGO" SERIAL NOT NULL,
ADD CONSTRAINT "PRODUTOS_pkey" PRIMARY KEY ("CODIGO");

-- AlterTable
ALTER TABLE "RECEBER" DROP CONSTRAINT "RECEBER_pkey",
DROP COLUMN "NUMERO",
ADD COLUMN     "NUMERO" SERIAL NOT NULL,
ALTER COLUMN "CODCLI" DROP NOT NULL,
ALTER COLUMN "CODREP" DROP NOT NULL,
ALTER COLUMN "PARCELA" DROP NOT NULL,
ALTER COLUMN "VALOR_TOTAL" DROP NOT NULL,
ALTER COLUMN "VALOR_PARCELA" DROP NOT NULL,
ADD CONSTRAINT "RECEBER_pkey" PRIMARY KEY ("NUMERO");

-- AlterTable
ALTER TABLE "RECEBERB" DROP CONSTRAINT "RECEBERB_pkey",
DROP COLUMN "NUMERO",
ADD COLUMN     "NUMERO" SERIAL NOT NULL,
ALTER COLUMN "CODCLI" DROP NOT NULL,
ALTER COLUMN "CODREP" DROP NOT NULL,
ALTER COLUMN "PARCELA" DROP NOT NULL,
ALTER COLUMN "VALOR_PAGO" DROP NOT NULL,
ALTER COLUMN "VALOR_PARCELA" DROP NOT NULL,
ADD CONSTRAINT "RECEBERB_pkey" PRIMARY KEY ("NUMERO");

-- AlterTable
ALTER TABLE "REPRESEN" DROP CONSTRAINT "REPRESEN_pkey",
DROP COLUMN "CODREP",
ADD COLUMN     "CODREP" SERIAL NOT NULL,
ADD CONSTRAINT "REPRESEN_pkey" PRIMARY KEY ("CODREP");

-- AlterTable
ALTER TABLE "USUARIOS" DROP CONSTRAINT "USUARIOS_pkey",
DROP COLUMN "CODIGO",
ADD COLUMN     "CODIGO" SERIAL NOT NULL,
ADD CONSTRAINT "USUARIOS_pkey" PRIMARY KEY ("CODIGO");
