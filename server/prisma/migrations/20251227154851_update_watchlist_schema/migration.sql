/*
  Warnings:

  - You are about to drop the column `markup` on the `WatchlistItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "WatchlistItem" DROP COLUMN "markup",
ADD COLUMN     "url" TEXT,
ALTER COLUMN "previous" DROP NOT NULL,
ALTER COLUMN "current" DROP NOT NULL;
