/*
  Warnings:

  - You are about to drop the column `officeId` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `officeId` on the `innetworkinsurance` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `firstConsultationFee` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `followupConsultationFee` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `hospitalAffiliationId` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `streetAddress` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `timeSlotPerClientInMin` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `zip` on the `office` table. All the data in the column will be lost.
  - You are about to drop the column `officeId` on the `officedoctoravailability` table. All the data in the column will be lost.
  - You are about to drop the column `officeId` on the `timeslot` table. All the data in the column will be lost.
  - You are about to drop the `hospitalaffiliation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `doctorHospitalId` to the `Appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorHospitalId` to the `InNetworkInsurance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Office` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorHospitalId` to the `OfficeDoctorAvailability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctorHospitalId` to the `TimeSlot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `appointment` DROP FOREIGN KEY `Appointment_officeId_fkey`;

-- DropForeignKey
ALTER TABLE `hospitalaffiliation` DROP FOREIGN KEY `HospitalAffiliation_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `innetworkinsurance` DROP FOREIGN KEY `InNetworkInsurance_officeId_fkey`;

-- DropForeignKey
ALTER TABLE `office` DROP FOREIGN KEY `Office_doctorId_fkey`;

-- DropForeignKey
ALTER TABLE `office` DROP FOREIGN KEY `Office_hospitalAffiliationId_fkey`;

-- DropForeignKey
ALTER TABLE `officedoctoravailability` DROP FOREIGN KEY `OfficeDoctorAvailability_officeId_fkey`;

-- DropForeignKey
ALTER TABLE `timeslot` DROP FOREIGN KEY `TimeSlot_officeId_fkey`;

-- DropIndex
DROP INDEX `Appointment_officeId_fkey` ON `appointment`;

-- DropIndex
DROP INDEX `InNetworkInsurance_officeId_fkey` ON `innetworkinsurance`;

-- DropIndex
DROP INDEX `Office_doctorId_fkey` ON `office`;

-- DropIndex
DROP INDEX `Office_hospitalAffiliationId_fkey` ON `office`;

-- DropIndex
DROP INDEX `OfficeDoctorAvailability_officeId_fkey` ON `officedoctoravailability`;

-- DropIndex
DROP INDEX `TimeSlot_officeId_fkey` ON `timeslot`;

-- AlterTable
ALTER TABLE `appointment` DROP COLUMN `officeId`,
    ADD COLUMN `doctorHospitalId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `innetworkinsurance` DROP COLUMN `officeId`,
    ADD COLUMN `doctorHospitalId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `office` DROP COLUMN `doctorId`,
    DROP COLUMN `firstConsultationFee`,
    DROP COLUMN `followupConsultationFee`,
    DROP COLUMN `hospitalAffiliationId`,
    DROP COLUMN `streetAddress`,
    DROP COLUMN `timeSlotPerClientInMin`,
    DROP COLUMN `zip`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `officedoctoravailability` DROP COLUMN `officeId`,
    ADD COLUMN `doctorHospitalId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `timeslot` DROP COLUMN `officeId`,
    ADD COLUMN `doctorHospitalId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` VARCHAR(191) NOT NULL DEFAULT 'patient';

-- DropTable
DROP TABLE `hospitalaffiliation`;

-- CreateTable
CREATE TABLE `Hospital` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `officeId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `streetAddress` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `zip` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorHospital` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctorId` INTEGER NOT NULL,
    `hospitalId` INTEGER NULL,
    `isPrivate` BOOLEAN NOT NULL DEFAULT false,
    `streetAddress` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `country` VARCHAR(191) NULL,
    `zip` VARCHAR(191) NULL,
    `firstConsultationFee` DOUBLE NOT NULL,
    `followupConsultationFee` DOUBLE NOT NULL,
    `timeSlotPerClientInMin` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hospital` ADD CONSTRAINT `Hospital_officeId_fkey` FOREIGN KEY (`officeId`) REFERENCES `Office`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorHospital` ADD CONSTRAINT `DoctorHospital_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorHospital` ADD CONSTRAINT `DoctorHospital_hospitalId_fkey` FOREIGN KEY (`hospitalId`) REFERENCES `Hospital`(`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OfficeDoctorAvailability` ADD CONSTRAINT `OfficeDoctorAvailability_doctorHospitalId_fkey` FOREIGN KEY (`doctorHospitalId`) REFERENCES `DoctorHospital`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InNetworkInsurance` ADD CONSTRAINT `InNetworkInsurance_doctorHospitalId_fkey` FOREIGN KEY (`doctorHospitalId`) REFERENCES `DoctorHospital`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TimeSlot` ADD CONSTRAINT `TimeSlot_doctorHospitalId_fkey` FOREIGN KEY (`doctorHospitalId`) REFERENCES `DoctorHospital`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `Appointment` ADD CONSTRAINT `Appointment_doctorHospitalId_fkey` FOREIGN KEY (`doctorHospitalId`) REFERENCES `DoctorHospital`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
