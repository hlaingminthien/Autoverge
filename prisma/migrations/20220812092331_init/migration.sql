/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `booking_id_key` ON `booking`(`id`);
