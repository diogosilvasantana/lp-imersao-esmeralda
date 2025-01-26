/*
  Warnings:

  - You are about to drop the column `socialMedia` on the `Signup` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[registerNumber]` on the table `Signup` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDIT_CARD', 'BARCODE');

-- AlterTable
ALTER TABLE "Signup" DROP COLUMN "socialMedia",
ADD COLUMN     "paymentMethod" "PaymentMethod",
ADD COLUMN     "registerNumber" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Signup_registerNumber_key" ON "Signup"("registerNumber");
