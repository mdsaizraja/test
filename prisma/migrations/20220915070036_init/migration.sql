-- CreateEnum
CREATE TYPE "State" AS ENUM ('Propose', 'Open', 'Closed');

-- CreateEnum
CREATE TYPE "Permit" AS ENUM ('Read', 'Create', 'Update', 'Delete');

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state" "State" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Access" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "permit" "Permit" NOT NULL,

    CONSTRAINT "Access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Access_project_id_key" ON "Access"("project_id");

-- CreateIndex
CREATE UNIQUE INDEX "Access_user_id_key" ON "Access"("user_id");
