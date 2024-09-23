-- CreateTable
CREATE TABLE `Treino` (
    `treino_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` TEXT NULL,
    `duracao` INTEGER NULL,
    `intensidade` INTEGER NULL,
    `usuario` INTEGER NULL,
    `status` VARCHAR(191) NULL,

    PRIMARY KEY (`treino_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Exercicio` (
    `id_exercicio` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `descricao` TEXT NULL,
    `serie` INTEGER NULL,
    `repeticoes` INTEGER NULL,
    `treino_id` INTEGER NOT NULL,

    PRIMARY KEY (`id_exercicio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_treino_id_fkey` FOREIGN KEY (`treino_id`) REFERENCES `Treino`(`treino_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
