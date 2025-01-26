-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'CANCELLED', 'FAILED');

-- CreateTable
CREATE TABLE "Signup" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "socialMedia" TEXT,
    "singing" BOOLEAN NOT NULL DEFAULT false,
    "dancing" BOOLEAN NOT NULL DEFAULT false,
    "acting" BOOLEAN NOT NULL DEFAULT false,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "paymentId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Signup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Signup_email_key" ON "Signup"("email");
