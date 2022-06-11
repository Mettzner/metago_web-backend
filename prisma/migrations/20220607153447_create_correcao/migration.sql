/*
  Warnings:

  - Added the required column `VALOR_TOTAL` to the `PAGAR` table without a default value. This is not possible if the table is not empty.
  - Made the column `PARCELA` on table `PAGAR` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DT_VENCIMENTO` on table `PAGAR` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DT_CADASTRO` on table `PAGAR` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DT_ALTERACAO` on table `PAGAR` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `VALOR_TOTAL` to the `PAGARB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `VALOR_PAGO` to the `PAGARB` table without a default value. This is not possible if the table is not empty.
  - Made the column `PARCELA` on table `PAGARB` required. This step will fail if there are existing NULL values in that column.
  - Made the column `DT_PAGAMENTO` on table `PAGARB` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `PRECO` on the `PRODUTOS` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `VALOR_TOTAL` to the `RECEBER` table without a default value. This is not possible if the table is not empty.
  - Made the column `PARCELA` on table `RECEBER` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `VALOR_PARCELA` to the `RECEBER` table without a default value. This is not possible if the table is not empty.
  - Added the required column `VALOR_PAGO` to the `RECEBERB` table without a default value. This is not possible if the table is not empty.
  - Made the column `PARCELA` on table `RECEBERB` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `VALOR_PARCELA` to the `RECEBERB` table without a default value. This is not possible if the table is not empty.
  - Made the column `DT_PAGAMENTO` on table `RECEBERB` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ENTIDADE" ALTER COLUMN "EMAIL" DROP NOT NULL,
ALTER COLUMN "COMPLEMENTO" DROP NOT NULL,
ALTER COLUMN "TIPO" DROP NOT NULL,
ALTER COLUMN "STATUS" DROP NOT NULL;

-- AlterTable
ALTER TABLE "MAQUINA" ALTER COLUMN "DESCRICAO" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "PAGAR" ALTER COLUMN "CODCLI" SET DATA TYPE TEXT,
ALTER COLUMN "CODREP" DROP DEFAULT,
ALTER COLUMN "CODREP" SET DATA TYPE TEXT,
DROP COLUMN "VALOR_TOTAL",
ADD COLUMN     "VALOR_TOTAL" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "PARCELA" SET NOT NULL,
ALTER COLUMN "DT_VENCIMENTO" SET NOT NULL,
ALTER COLUMN "DT_CADASTRO" SET NOT NULL,
ALTER COLUMN "DT_ALTERACAO" SET NOT NULL;

-- AlterTable
ALTER TABLE "PAGARB" DROP COLUMN "VALOR_TOTAL",
ADD COLUMN     "VALOR_TOTAL" DOUBLE PRECISION NOT NULL,
DROP COLUMN "VALOR_PAGO",
ADD COLUMN     "VALOR_PAGO" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "PARCELA" SET NOT NULL,
ALTER COLUMN "DT_PAGAMENTO" SET NOT NULL;

-- AlterTable
ALTER TABLE "PRODUTOS" DROP COLUMN "PRECO",
ADD COLUMN     "PRECO" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "RECEBER" ALTER COLUMN "CODCLI" SET DATA TYPE TEXT,
ALTER COLUMN "CODREP" DROP DEFAULT,
ALTER COLUMN "CODREP" SET DATA TYPE TEXT,
DROP COLUMN "VALOR_TOTAL",
ADD COLUMN     "VALOR_TOTAL" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "PARCELA" SET NOT NULL,
DROP COLUMN "VALOR_PARCELA",
ADD COLUMN     "VALOR_PARCELA" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "RECEBERB" ALTER COLUMN "CODCLI" SET DATA TYPE TEXT,
ALTER COLUMN "CODREP" DROP DEFAULT,
ALTER COLUMN "CODREP" SET DATA TYPE TEXT,
DROP COLUMN "VALOR_PAGO",
ADD COLUMN     "VALOR_PAGO" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "PARCELA" SET NOT NULL,
DROP COLUMN "VALOR_PARCELA",
ADD COLUMN     "VALOR_PARCELA" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "DT_PAGAMENTO" SET NOT NULL;

-- AlterTable
ALTER TABLE "REPRESEN" ALTER COLUMN "NOME" SET DATA TYPE TEXT,
ALTER COLUMN "CODCLI" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "USUARIOS" ALTER COLUMN "CODCLI" DROP NOT NULL;
