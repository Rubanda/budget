/*
  Warnings:

  - You are about to drop the column `amountPaid` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the column `inCharge` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the column `remaining` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the column `unitPrice` on the `BudgetItem` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Section` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `actualCost` to the `BudgetItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `budgetId` to the `BudgetItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BudgetItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plannedCost` to the `BudgetItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `BudgetItem_categoryId_idx` ON `BudgetItem`;

-- AlterTable
ALTER TABLE `BudgetItem` DROP COLUMN `amountPaid`,
    DROP COLUMN `categoryId`,
    DROP COLUMN `description`,
    DROP COLUMN `inCharge`,
    DROP COLUMN `quantity`,
    DROP COLUMN `remaining`,
    DROP COLUMN `total`,
    DROP COLUMN `unitPrice`,
    ADD COLUMN `actualCost` DOUBLE NOT NULL,
    ADD COLUMN `budgetId` INTEGER NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `plannedCost` DOUBLE NOT NULL;

-- DropTable
DROP TABLE `Category`;

-- DropTable
DROP TABLE `Section`;

-- CreateTable
CREATE TABLE `Event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Event_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Budget` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` DOUBLE NOT NULL,
    `actual` DOUBLE NOT NULL,
    `eventId` INTEGER NOT NULL,

    UNIQUE INDEX `Budget_eventId_key`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,
    `dueDate` DATETIME(3) NULL,
    `eventId` INTEGER NOT NULL,

    INDEX `Task_eventId_idx`(`eventId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Assignment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `taskId` INTEGER NOT NULL,

    UNIQUE INDEX `Assignment_userId_taskId_key`(`userId`, `taskId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_UserTasks` (
    `A` INTEGER NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_UserTasks_AB_unique`(`A`, `B`),
    INDEX `_UserTasks_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `BudgetItem_budgetId_idx` ON `BudgetItem`(`budgetId`);
