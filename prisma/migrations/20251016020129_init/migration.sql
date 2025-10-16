-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jokes" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "punchline" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Jokes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jokes_question_key" ON "Jokes"("question");
