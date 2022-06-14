/*
  Warnings:

  - The primary key for the `USUARIOS` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `CODIGO` column on the `USUARIOS` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "USUARIOS" DROP CONSTRAINT "USUARIOS_pkey",
DROP COLUMN "CODIGO",
ADD COLUMN     "CODIGO" SERIAL NOT NULL,
ALTER COLUMN "ID_USUARIO" DROP DEFAULT,
ALTER COLUMN "ID_USUARIO" SET DATA TYPE TEXT,
ADD CONSTRAINT "USUARIOS_pkey" PRIMARY KEY ("CODIGO");
DROP SEQUENCE "USUARIOS_ID_USUARIO_seq";
