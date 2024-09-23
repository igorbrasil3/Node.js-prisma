-- DropForeignKey
ALTER TABLE `exercicio` DROP FOREIGN KEY `Exercicio_treino_id_fkey`;

-- AddForeignKey
ALTER TABLE `Exercicio` ADD CONSTRAINT `Exercicio_treino_id_fkey` FOREIGN KEY (`treino_id`) REFERENCES `Treino`(`treino_id`) ON DELETE CASCADE ON UPDATE CASCADE;
