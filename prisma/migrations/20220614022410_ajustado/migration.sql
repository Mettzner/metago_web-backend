/*
  Warnings:

  - The primary key for the `USUARIOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ID_USUARIO` column on the `USUARIOS` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "USUARIOS" DROP CONSTRAINT "USUARIOS_pkey",
DROP COLUMN "ID_USUARIO",
ADD COLUMN     "ID_USUARIO" SERIAL NOT NULL,
ALTER COLUMN "CODIGO" DROP DEFAULT,
ALTER COLUMN "CODIGO" SET DATA TYPE TEXT,
ADD CONSTRAINT "USUARIOS_pkey" PRIMARY KEY ("ID_USUARIO");
DROP SEQUENCE "USUARIOS_CODIGO_seq";
