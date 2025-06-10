-- CreateTable
CREATE TABLE "Portaria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "portaria" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "simbolo" TEXT NOT NULL,
    "secretaria" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Portaria_pkey" PRIMARY KEY ("id")
);
