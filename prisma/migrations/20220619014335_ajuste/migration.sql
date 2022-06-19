/*
  Warnings:

  - Made the column `ID_USUARIO` on table `USUARIOS` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "USUARIOS" ALTER COLUMN "ID_USUARIO" SET NOT NULL,
ALTER COLUMN "ID_USUARIO" SET DATA TYPE TEXT;
