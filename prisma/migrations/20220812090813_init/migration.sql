/*
  Warnings:

  - You are about to drop the `durationstatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `durationstatus`;

-- CreateTable
CREATE TABLE `duration_status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
