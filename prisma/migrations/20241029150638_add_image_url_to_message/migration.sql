/*
  Warnings:

  - Made the column `imageUrl` on table `Message` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "imageUrl" SET NOT NULL;